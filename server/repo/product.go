package repo

import (
	"context"
	"fmt"
	"sort"
	"time"

	"github.com/Tonmoy404/Smart-Inventory/logger"
	"github.com/Tonmoy404/Smart-Inventory/service"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/awserr"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

type ProductRepo interface {
	service.ProductRepo
}

type productRepo struct {
	svc       *dynamodb.DynamoDB
	tableName string
}

func NewProductRepo(svc *dynamodb.DynamoDB, tableName string) ProductRepo {
	return &productRepo{
		svc:       svc,
		tableName: tableName,
	}
}

func (r *productRepo) CreateProduct(ctx context.Context, product *service.Product) (*service.Product, error) {
	prod, err := dynamodbattribute.MarshalMap(product)
	if err != nil {
		return nil, fmt.Errorf("cannot marshal product: %v", err)
	}

	input := &dynamodb.PutItemInput{
		TableName: aws.String(r.tableName),
		Item:      prod,
	}

	logger.Info(ctx, "the req of prod", input)
	_, err = r.svc.PutItemWithContext(ctx, input)

	if err != nil {
		if aerr, ok := err.(awserr.Error); ok {
			return nil, fmt.Errorf("failed to write item: %v - %v", aerr.Code(), aerr.Message())
		}
		return nil, fmt.Errorf("failed to write item: %v", err)
	}

	return product, nil
}

func (r *productRepo) GetProduct(ctx context.Context, id string) (*service.Product, error) {
	input := &dynamodb.GetItemInput{
		TableName: aws.String(r.tableName),
		Key: map[string]*dynamodb.AttributeValue{
			"Id": {
				S: aws.String(id),
			},
		},
	}

	result, err := r.svc.GetItemWithContext(ctx, input)
	if err != nil {
		if aerr, ok := err.(awserr.Error); ok {
			return nil, fmt.Errorf("failed to get item: %v - %v", aerr.Code(), aerr.Message())
		}
		return nil, fmt.Errorf("failed to get item: %v", err)
	}

	if result.Item == nil {
		return nil, nil
	}

	var category *service.Product
	err = dynamodbattribute.UnmarshalMap(result.Item, &category)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal DynamoDB item: %v", err)
	}

	return category, nil
}

func (r *productRepo) UpdateProduct(ctx context.Context, product *service.Product) error {
	// Marshal the product into a DynamoDB attribute map
	input := &dynamodb.UpdateItemInput{
		TableName: aws.String(r.tableName),
		Key: map[string]*dynamodb.AttributeValue{
			"Id": {
				S: aws.String(product.ID),
			},
		},
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
			":n": {
				S: aws.String(product.Name),
			},
			":c": {
				S: aws.String(product.Category),
			},
			":bp": {
				N: aws.String(fmt.Sprintf("%f", product.BuyingPrice)),
			},
			":q": {
				N: aws.String(fmt.Sprintf("%d", product.Quantity)),
			},
			":th": {
				N: aws.String(fmt.Sprintf("%d", product.ThreSholdValue)),
			},
			":ex": {
				N: aws.String(fmt.Sprintf("%d", product.ExpiryDate)),
			},
		},
		UpdateExpression: aws.String("SET #n = :n, #c = :c, #bp = :bp, #q = :q, #th = :th, #ex = :ex"),
		ExpressionAttributeNames: map[string]*string{
			"#n":  aws.String("Name"),
			"#c":  aws.String("Category"),
			"#bp": aws.String("BuyingPrice"),
			"#q":  aws.String("Quantity"),
			"#th": aws.String("ThresholdValue"),
			"#ex": aws.String("ExpiryDate"),
		},
	}

	_, err := r.svc.UpdateItemWithContext(ctx, input)
	if err != nil {
		if aerr, ok := err.(awserr.Error); ok {
			return fmt.Errorf("failed to update item: %v - %v", aerr.Code(), aerr.Message())
		}
		return fmt.Errorf("failed to update item: %v", err)
	}

	return nil
}

func (r *productRepo) DeleteProductById(ctx context.Context, id string) error {
	input := &dynamodb.DeleteItemInput{
		TableName: aws.String(r.tableName),
		Key: map[string]*dynamodb.AttributeValue{
			"Id": {
				S: aws.String(id),
			},
		},
	}

	_, err := r.svc.DeleteItemWithContext(ctx, input)
	if err != nil {
		if aerr, ok := err.(awserr.Error); ok {
			return fmt.Errorf("failed to delete item: %v - %v", aerr.Code(), aerr.Message())
		}
		return fmt.Errorf("failed to delete item: %v", err)
	}

	return nil
}

func (r *productRepo) GetAllProducts(ctx context.Context) (*service.ProductsResult, error) {

	input := &dynamodb.ScanInput{
		TableName: aws.String(r.tableName),
	}

	result, err := r.svc.ScanWithContext(ctx, input)
	if err != nil {
		return nil, fmt.Errorf("error scanning table: %v", err)
	}

	var products []*service.Product
	err = dynamodbattribute.UnmarshalListOfMaps(result.Items, &products)
	if err != nil {
		return nil, fmt.Errorf("cannot unmarshal DynamoDB result: %v", err)
	}

	sort.Slice(products, func(i, j int) bool {
		timeI := time.Unix(products[i].CreatedAt, 0)
		timeJ := time.Unix(products[j].CreatedAt, 0)
		return timeI.After(timeJ)
	})

	productResult := &service.ProductsResult{
		Products: products,
	}

	return productResult, nil
}
