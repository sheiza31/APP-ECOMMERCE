package requests
type CategoryRequest struct {
    Name        string `json:"name" form:"name" binding:"required"`
    Description string `json:"description" form:"description"`
}