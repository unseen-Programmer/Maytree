import React, { useEffect, useState } from "react";

const API = "https://maytree.onrender.com";
const ADMIN_KEY = "12345";

const Admin = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [keyInput, setKeyInput] = useState("");

  const [products, setProducts] = useState<any[]>([]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    moq: "",
    stock: "",
    image: "/images/img_1.png" // ✅ DEFAULT IMAGE
  });

  // ================= LOGIN =================
  const handleLogin = () => {
    if (keyInput === ADMIN_KEY) {
      setIsAuth(true);
    } else {
      alert("Invalid key ❌");
    }
  };

  // ================= FETCH PRODUCTS =================
  const loadProducts = async () => {
    try {
      const res = await fetch(`${API}/products`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error loading products", err);
    }
  };

  useEffect(() => {
    if (isAuth) loadProducts();
  }, [isAuth]);

  // ================= ADD PRODUCT =================
  const handleSubmit = async () => {
    await fetch(`${API}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      }),
    });

    alert("Product added 🚀");

    setForm({
      name: "",
      description: "",
      price: "",
      moq: "",
      stock: "",
      image: "/images/img_1.png", // reset default
    });

    loadProducts();
  };

  // ================= DELETE =================
  const deleteProduct = async (id: number) => {
    await fetch(`${API}/products/${id}`, { method: "DELETE" });
    loadProducts();
  };

  // ================= UPDATE STOCK =================
  const updateStock = async (id: number, stock: number) => {
    await fetch(`${API}/products/${id}/stock?stock=${stock}`, {
      method: "PUT",
    });
    loadProducts();
  };

  // ================= LOGIN SCREEN =================
  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-4">
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 w-full max-w-md">
          <h2 className="text-2xl mb-6 text-center font-serif">
            Admin Access
          </h2>

          <input
            type="password"
            placeholder="Enter Secret Key"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            className="w-full p-3 rounded bg-black/40 border border-white/10 mb-4"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-gold-600 text-black py-3 rounded font-bold hover:bg-gold-500"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // ================= DASHBOARD =================
  return (
    <div className="pt-32 pb-24 min-h-screen bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-serif mb-10">
          Admin Dashboard
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ADD PRODUCT */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">

            <h2 className="text-lg">Add Product</h2>

            <input
              placeholder="Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 bg-black/40 rounded"
            />

            <textarea
              placeholder="Description"
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              className="w-full p-3 bg-black/40 rounded"
            />

            <input
              placeholder="Price"
              value={form.price}
              onChange={e => setForm({ ...form, price: e.target.value })}
              className="w-full p-3 bg-black/40 rounded"
            />

            <input
              placeholder="MOQ"
              value={form.moq}
              onChange={e => setForm({ ...form, moq: e.target.value })}
              className="w-full p-3 bg-black/40 rounded"
            />

            <input
              placeholder="Stock"
              value={form.stock}
              onChange={e => setForm({ ...form, stock: e.target.value })}
              className="w-full p-3 bg-black/40 rounded"
            />

            {/* ✅ IMAGE SELECT DROPDOWN */}
            <select
              value={form.image}
              onChange={(e) =>
                setForm({ ...form, image: e.target.value })
              }
              className="w-full p-3 bg-black/40 rounded"
            >
              <option value="/images/img_1.png">img_1.png</option>
              <option value="/images/img_2.png">img_2.png</option>
              <option value="/images/img_3.png">img_3.png</option>
              <option value="/images/img_4.png">img_4.png</option>
              <option value="/images/img_5.png">img_5.png</option>
              <option value="/images/bora.png">bora.png</option>
              <option value="/images/logo.png">logo.png</option>
            </select>

            {/* ✅ IMAGE PREVIEW */}
            <img
              src={form.image}
              className="w-full h-40 object-cover rounded"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-gold-600 text-black py-3 rounded font-bold hover:bg-gold-500"
            >
              Add Product
            </button>

          </div>

          {/* PRODUCT LIST */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">

            <h2 className="mb-4">Manage Products</h2>

            <div className="space-y-4 max-h-[500px] overflow-y-auto">

              {products.map((p) => (
                <div key={p.id} className="flex gap-4 items-center border-b border-white/10 pb-4">

                  <img
                    src={p.image}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h3>{p.name}</h3>
                    <p className="text-sm text-neutral-400">${p.price}</p>

                    <div className="flex gap-2 mt-2">

                      <input
                        type="number"
                        defaultValue={p.stock}
                        className="w-20 p-1 bg-black rounded"
                        onBlur={(e) =>
                          updateStock(p.id, Number(e.target.value))
                        }
                      />

                      <button
                        onClick={() => deleteProduct(p.id)}
                        className="bg-red-500 px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>

                    </div>
                  </div>

                </div>
              ))}

              {products.length === 0 && (
                <p className="text-neutral-500 text-center">
                  No products yet
                </p>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Admin;