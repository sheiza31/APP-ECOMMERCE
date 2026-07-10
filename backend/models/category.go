package models
import (
	"gorm.io/gorm"
)
type Category struct {
	gorm.Model
	Name string `json:"name"`
	Slug string `json:"slug"`
	Description string `json:"description"`
	Products []Product `gorm:"foreignKey:CategoryID;references:ID"`
}
