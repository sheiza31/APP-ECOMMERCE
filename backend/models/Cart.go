package models

import "gorm.io/gorm"

type Cart struct {
	gorm.Model
	UserID     uint        `gorm:"not null" json:"user_id"`
	TotalPrice float64     `gorm:"type:decimal(12,2);default:0" json:"total_price"`
	Status     string      `gorm:"type:enum('active','checked_out');default:'active'" json:"status"`
	User        User        `gorm:"foreignKey:UserID"`
	CartItems   []CartItems  `gorm:"foreignKey:CartID"`
}