package requests

type ProductRequest struct {
	Name        string  `json:"name"        form:"name"        binding:"required"`
	Slug        string  `json:"slug"        form:"slug"`
	Description string  `json:"description" form:"description"`
	Price       float64 `json:"price"       form:"price"       binding:"required"`
	CategoryID  uint    `json:"category_id" form:"category_id" binding:"required"`
}
