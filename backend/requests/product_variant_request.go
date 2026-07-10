package requests

type ProductVariantRequest struct {
	ProductID uint    `json:"product_id" form:"product_id" binding:"required"`
	Name      string  `json:"name"       form:"name"       binding:"required"`
	Sku       string  `json:"sku"        form:"sku"        binding:"required"`
	Price     float64 `json:"price"      form:"price"      binding:"required"`
	Stock     int     `json:"stock"      form:"stock"      binding:"required"`
	Image     string  `json:"image"      form:"image"`
	Color     string  `json:"color"      form:"color"`
	Size      string  `json:"size"       form:"size"`
}
