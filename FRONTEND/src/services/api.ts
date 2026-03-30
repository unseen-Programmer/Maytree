const BASE_URL =
  import.meta.env.VITE_API_URL || "https://maytree.onrender.com";

// 🔹 Types
export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
}

// 🔹 Helper (better error handling)
const handleResponse = async (res: Response) => {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "API request failed");
  }
  return res.json();
};

// 🔹 Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`);
  return handleResponse(res);
};

// 🔹 Fetch single product
export const fetchProductById = async (
  id: string
): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return handleResponse(res);
};

// 🔹 Send enquiry
export const sendEnquiry = async (data: any): Promise<any> => {
  const res = await fetch(`${BASE_URL}/enquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleResponse(res);
};