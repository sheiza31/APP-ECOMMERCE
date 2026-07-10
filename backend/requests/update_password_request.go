package requests

type UpdatePasswordRequest struct {
	NewPassword string `json:"new_password" form:"new_password" binding:"required"`
	ConfirmPassword string `json:"confirm_password" form:"confirm_password" binding:"required"`
}