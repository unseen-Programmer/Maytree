from pydantic import BaseModel

class ProductCreate(BaseModel):
    name: str
    description: str
    category: str
    price: float
    moq: str
    image: str

class Product(ProductCreate):
    id: int

    class Config:
        from_attributes = True