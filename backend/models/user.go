package models
import (
	"gorm.io/gorm"
)
type User struct {
	gorm.Model
	Name string `gorm:"type:varchar(255);not null"`
	Email string `gorm:"type:varchar(255);unique;not null"`
	Password string `gorm:"type:varchar(255);not null"`
	ConfirmPassword string `gorm:"type:varchar(255)"`
	Phone string `gorm:"type:char(15)"`
	Address string `gorm:"type:varchar(255)"`
	Role string `gorm:"type:enum('admin','user');default:'user';not null"`
	Avatar string `gorm:"type:varchar(255)"`
	Orders []Order `gorm:"foreignKey:UserID"`
	Carts []Cart `gorm:"foreignKey:UserID"`
}