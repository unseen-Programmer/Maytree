from pydantic import BaseModel

# 🔹 For creating product (input)
class ProductCreate(BaseModel):
    name: str
    description: str
    category: str
    price: float
    moq: str
    stock: int
    image: str   # static path like /images/img_1.png

# 🔹 For response (output)
class Product(ProductCreate):
    id: int

    class Config:
        from_attributes = True