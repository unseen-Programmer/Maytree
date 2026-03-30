const BASE_URL = "http://127.0.0.1:8000";

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
};

export const fetchProductById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};

export const sendEnquiry = async (data: any) => {
  const res = await fetch(`${BASE_URL}/enquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};