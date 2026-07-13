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
	Stock int `json:"stock" gorm:"default:0"`
	CategoryID uint `json:"category_id"`
	ProductsVariants []ProductVariant `gorm:"foreignKey:ProductID;references:ID"`
}