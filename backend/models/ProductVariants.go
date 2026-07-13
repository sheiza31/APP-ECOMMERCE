package models

import (
	"gorm.io/gorm"
)

type ProductVariant struct {
	gorm.Model
	ProductID uint `gorm:"not null" json:"product_id"`
	Name string `gorm:"type:varchar(255)" json:"name"`
	Sku string `gorm:"type:varchar(100);unique" json:"sku"`
	Price float64 `gorm:"not null" json:"price"`
	Stock int `gorm:"not null;default:0" json:"stock"`
	Image string `json:"image"`
	Color string `gorm:"type:varchar(255)" json:"color"`
	Size string `gorm:"type:varchar(255)" json:"size"`
	Product Product `gorm:"foreignKey:ProductID"`
} 