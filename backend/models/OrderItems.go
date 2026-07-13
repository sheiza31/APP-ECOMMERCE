package models
import (
	"gorm.io/gorm"
)
type OrderItems struct {
	gorm.Model
	OrderID   uint      `gorm:"not null"`
	ProductID uint      `gorm:"not null"`

	Quantity int
	Price    float64 `gorm:"type:decimal(12,2)"`
	Subtotal float64 `gorm:"type:decimal(12,2)"`

	Order   Order `gorm:"foreignKey:OrderID;references:ID"`
	Product Product `gorm:"foreignKey:ProductID;references:ID"`
}