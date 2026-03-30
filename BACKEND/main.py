from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

import models, schemas, crud
from database import SessionLocal, engine

# ================= CREATE TABLES =================
models.Base.metadata.create_all(bind=engine)

# ================= APP INIT =================
app = FastAPI()

# ================= CORS =================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================= DB DEPENDENCY =================
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ================= ROOT =================
@app.get("/")
def root():
    return {"message": "Backend running 🚀"}

# ================= GET ALL PRODUCTS =================
@app.get("/products", response_model=list[schemas.Product])
def get_products(db: Session = Depends(get_db)):
    return crud.get_products(db)

# ================= GET SINGLE PRODUCT =================
@app.get("/products/{product_id}", response_model=schemas.Product)
def get_product(product_id: int, db: Session = Depends(get_db)):
    products = crud.get_products(db)
    for product in products:
        if product.id == product_id:
            return product
    raise HTTPException(status_code=404, detail="Product not found")

# ================= CREATE PRODUCT =================
@app.post("/products", response_model=schemas.Product)
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    return crud.create_product(db, product)

# ================= UPDATE STOCK =================
@app.put("/products/{product_id}/stock", response_model=schemas.Product)
def update_stock(product_id: int, stock: int, db: Session = Depends(get_db)):
    products = crud.get_products(db)
    for product in products:
        if product.id == product_id:
            product.stock = stock
            db.commit()
            db.refresh(product)
            return product
    raise HTTPException(status_code=404, detail="Product not found")

# ================= DELETE PRODUCT =================
@app.delete("/products/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db)):
    products = crud.get_products(db)
    for product in products:
        if product.id == product_id:
            db.delete(product)
            db.commit()
            return {"message": "Deleted successfully"}
    raise HTTPException(status_code=404, detail="Product not found")