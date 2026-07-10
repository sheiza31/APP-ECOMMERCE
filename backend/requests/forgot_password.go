package requests

type ForgotPasswordRequest struct {
	Email string `json:"email" form:"email" binding:"required,email"`
}