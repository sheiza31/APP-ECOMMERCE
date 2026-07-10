package models
import (
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Name string `json:"name"`
	Slug string `json:"slug"`
	Description string `json:"description"`
	Price float64 `json:"price"`
	CategoryID uint `json:"category_id"`
	ProductsVariants []ProductVariant `gorm:"foreignKey:ProductID;references:ID"`
}