from sqlalchemy.orm import Session
import models
import schemas

# 🔹 Get all products
def get_products(db: Session):
    return db.query(models.Product).all()

# 🔹 Get single product
def get_product(db: Session, product_id: int):
    return db.query(models.Product).filter(models.Product.id == product_id).first()

# 🔹 Create product
def create_product(db: Session, product: schemas.ProductCreate):
    db_product = models.Product(**product.model_dump())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

# 🔹 Update stock
def update_stock(db: Session, product_id: int, stock: int):
    product = get_product(db, product_id)
    if product:
        product.stock = stock
        db.commit()
        db.refresh(product)
    return product

# 🔹 Delete product
def delete_product(db: Session, product_id: int):
    product = get_product(db, product_id)
    if product:
        db.delete(product)
        db.commit()
    return product