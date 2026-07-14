package models

import "gorm.io/gorm"

type CartItems struct {
	gorm.Model
	CartID    uint    `gorm:"not null" json:"cart_id"`
	ProductID uint    `gorm:"not null" json:"product_id"`
	Quantity  int     `gorm:"default:1" json:"quantity"`
	Price     float64 `gorm:"type:decimal(12,2)" json:"price"`
	Subtotal  float64 `gorm:"type:decimal(12,2)" json:"subtotal"`
	Cart      Cart    `gorm:"foreignKey:CartID"`
	Product   Product `gorm:"foreignKey:ProductID"`
}
