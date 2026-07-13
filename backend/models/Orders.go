package models

import (
	"gorm.io/gorm"
)

type Order struct {
	gorm.Model
	UserID          uint    `gorm:"not null"`
	OrderNumber     string  `gorm:"size:50;unique"`
	TotalPrice      float64 `gorm:"type:decimal(12,2)"`
	PaymentMethod   string  `gorm:"size:50"`
	PaymentStatus   string  `gorm:"default:pending"`
	
	OrderStatus     string  `gorm:"default:pending"`
	ShippingAddress string  `gorm:"type:text"`
	User User `gorm:"foreignKey:UserID"`

	OrderItems []OrderItems `gorm:"foreignKey:OrderID"`
	Transactions []Transactions `gorm:"foreignKey:OrderID"`
}
