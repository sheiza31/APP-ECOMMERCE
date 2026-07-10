package requests


type RegisterRequest struct {
	Name string `json:"name" form:"name" binding:"required"`
	Email string `json:"email" form:"email" binding:"required"`
	Password string `json:"password" form:"password" binding:"required"`
	ConfirmPassword string `json:"confirm_password" form:"confirm_password"`
	Address string `json:"address" form:"address" `
	Phone string `json:"phone" form:"phone"`
	Role string `json:"role" form:"role"`
}
