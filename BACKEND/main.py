from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import shutil
import os
import uuid

app = FastAPI()

# ================= CORS =================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================= UPLOAD FOLDER =================
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# ================= MEMORY DATABASE =================
products = []

# ================= ROOT =================
@app.get("/")
def root():
    return {"message": "Backend running 🚀"}

# ================= GET PRODUCTS =================
@app.get("/products")
def get_products():
    return products

# ================= GET SINGLE =================
@app.get("/products/{product_id}")
def get_product(product_id: int):
    for p in products:
        if p["id"] == product_id:
            return p
    return {"error": "Not found"}

# ================= ADD PRODUCT (INSTAGRAM STYLE) =================
@app.post("/products")
async def create_product(
    name: str = Form(...),
    description: str = Form(...),
    price: float = Form(...),
    moq: str = Form(...),
    stock: int = Form(...),
    file: UploadFile = File(...)
):
    filename = f"{uuid.uuid4()}_{file.filename}"
    file_path = os.path.join(UPLOAD_DIR, filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    image_url = f"http://127.0.0.1:8000/uploads/{filename}"

    product = {
        "id": len(products) + 1,
        "name": name,
        "description": description,
        "price": price,
        "moq": moq,
        "stock": stock,
        "image": image_url
    }

    products.append(product)
    return product

# ================= UPDATE STOCK =================
@app.put("/products/{product_id}/stock")
def update_stock(product_id: int, stock: int):
    for p in products:
        if p["id"] == product_id:
            p["stock"] = stock
            return p
    return {"error": "Not found"}

# ================= DELETE =================
@app.delete("/products/{product_id}")
def delete_product(product_id: int):
    global products
    products = [p for p in products if p["id"] != product_id]
    return {"message": "Deleted"}