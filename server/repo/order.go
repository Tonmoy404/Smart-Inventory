package repo

import (
	"context"
	"fmt"

	"github.com/Tonmoy404/Smart-Inventory/logger"
	"github.com/Tonmoy404/Smart-Inventory/service"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/awserr"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

type OrderRepo interface {
	service.OrderRepo
}

type orderRepo struct {
	svc       *dynamodb.DynamoDB
	tableName string
}

func NewOrderRepo(svc *dynamodb.DynamoDB, tableName string) OrderRepo {
	return &orderRepo{
		svc:       svc,
		tableName: tableName,
	}
}

func (r *orderRepo) CreateOrder(ctx context.Context, order *service.Order) error {
	newOrder, err := dynamodbattribute.MarshalMap(order)
	if err != nil {
		return fmt.Errorf("cannot marshal product: %v", err)
	}

	input := &dynamodb.PutItemInput{
		TableName: aws.String(r.tableName),
		Item:      newOrder,
	}

	_, err = r.svc.PutItemWithContext(ctx, input)
	if err != nil {
		if aerr, ok := err.(awserr.Error); ok {
			return fmt.Errorf("failed to write item: %v - %v", aerr.Code(), aerr.Message())
		}
		return fmt.Errorf("failed to write item: %v", err)
	}

	return nil

}

func (r *orderRepo) CancelOrderByID(ctx context.Context, id string) error {
	input := &dynamodb.DeleteItemInput{
		TableName: aws.String(r.tableName),
		Key: map[string]*dynamodb.AttributeValue{
			"Id": {
				S: aws.String(id),
			},
		},
	}

	logger.Info(ctx, "input from order", input)
	_, err := r.svc.DeleteItemWithContext(ctx, input)
	if err != nil {
		if aerr, ok := err.(awserr.Error); ok {
			return fmt.Errorf("failed to delete item: %v - %v", aerr.Code(), aerr.Message())
		}
		return fmt.Errorf("failed to delete item: %v", err)
	}

	return nil
}

func (r *orderRepo) GetOrder(ctx context.Context, id string) (*service.Order, error) {
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

	var order *service.Order
	err = dynamodbattribute.UnmarshalMap(result.Item, &order)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal DynamoDB item: %v", err)
	}

	return order, nil
}

func (r *orderRepo) UpdateOrder(ctx context.Context, order *service.Order) error {
	// Marshal the product into a DynamoDB attribute map
	input := &dynamodb.UpdateItemInput{
		TableName: aws.String(r.tableName),
		Key: map[string]*dynamodb.AttributeValue{
			"OrderId": {
				S: aws.String(order.ID),
			},
		},
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
			":c": {
				S: aws.String(order.VendorEmail),
			},
			":p": {
				S: aws.String(order.ProductName),
			},
			":q": {
				N: aws.String(fmt.Sprintf("%d", order.Quantity)),
			},
			":t": {
				N: aws.String(fmt.Sprintf("%f", order.BuyingPrice)),
			},
			":ct": {
				S: aws.String(order.Category),
			},
			":d": {
				N: aws.String(fmt.Sprintf("%d", order.DeliveryDate)),
			},
		},
		UpdateExpression: aws.String("SET #c = :c, #p = :p, #q = :q, #t = :t, #ct = :ct, #d = :d"),
		ExpressionAttributeNames: map[string]*string{
			"#c":  aws.String("CustomerId"),
			"#p":  aws.String("ProductId"),
			"#q":  aws.String("Quantity"),
			"#t":  aws.String("TotalAmount"),
			"#ct": aws.String("Category"),
			"#d":  aws.String("DeliveryDate"),
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

func (r *orderRepo) GetAllItems(ctx context.Context) (*service.OrdersResult, error) {

	input := &dynamodb.ScanInput{
		TableName: aws.String(r.tableName),
	}

	result, err := r.svc.ScanWithContext(ctx, input)
	if err != nil {
		return nil, fmt.Errorf("error scanning table: %v", err)
	}

	var orders []*service.Order
	err = dynamodbattribute.UnmarshalListOfMaps(result.Items, &orders)
	if err != nil {
		return nil, fmt.Errorf("cannot unmarshal DynamoDB result: %v", err)
	}

	orderResult := &service.OrdersResult{
		Orders: orders,
	}

	return orderResult, nil
}
