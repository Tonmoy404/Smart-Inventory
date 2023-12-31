package service

import (
	"context"
)

func (s *service) CreateProduct(ctx context.Context, product *Product) (*Product, error) {
	product, err := s.productRepo.CreateProduct(ctx, product)
	if err != nil {
		return nil, err
	}
	return product, err
}

func (s *service) GetProductById(ctx context.Context, id string) (*Product, error) {
	product, err := s.productRepo.GetProduct(ctx, id)
	if err != nil {
		return nil, err
	}
	return product, nil
}

func (s *service) UpdateProduct(ctx context.Context, updatedProduct *Product) error {
	err := s.productRepo.UpdateProduct(ctx, updatedProduct)
	if err != nil {
		return err
	}
	return nil
}

func (s *service) DeleteProduct(ctx context.Context, id string) error {
	err := s.productRepo.DeleteProductById(ctx, id)
	if err != nil {
		return err
	}
	return nil
}

func (s *service) GetProducts(ctx context.Context) (*ProductsResult, error) {
	res, err := s.productRepo.GetAllProducts(ctx)
	if err != nil {
		return nil, err
	}
	return res, nil
}
