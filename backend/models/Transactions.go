package models

import "gorm.io/gorm"

type Transactions struct {
	gorm.Model
	OrderID			uint `gorm:not null`
	PaymentMethod	string `gorm:not null`
	Status			string `gorm:not null`
	Amount			float64 `gorm:not null`
	Order Order `gorm:foreignKey:OrderID`
	
}