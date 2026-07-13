package seeders

import (
	"log"
	"github.com/sheiza31/app-ecommerce/backend/config"
	"github.com/sheiza31/app-ecommerce/backend/models"
)

func CategorySeeder() {
	categories := []models.Category{
		{
			Name:        "Electronics",
			Slug:        "electronics",
			Description: "Electronic devices and accessories",
		},
		{
			Name:        "Fashion",
			Slug:        "fashion",
			Description: "Clothing, shoes, and accessories",
		},
		{
			Name:        "Books",
			Slug:        "books",
			Description: "Books and educational materials",
		},
		{
			Name:        "Sports",
			Slug:        "sports",
			Description: "Sports equipment and accessories",
		},
		{
			Name:        "Home & Kitchen",
			Slug:        "home-kitchen",
			Description: "Furniture and kitchen appliances",
		},
		{
			Name:        "Beauty",
			Slug:        "beauty",
			Description: "Beauty and personal care products",
		},
		{
			Name:        "Toys",
			Slug:        "toys",
			Description: "Toys and games for children",
		},
	}

	for _, category := range categories {
		config.DB.FirstOrCreate(
			&category,
			models.Category{
				Slug: category.Slug,
			},
		)
	}
	log.Println("Category successfully seeded")
}