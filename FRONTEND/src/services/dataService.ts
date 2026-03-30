import { useEffect, useState } from "react";
import { fetchProducts, Product } from "./api";

export const useDataService = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(console.error);
  }, []);

  return { products };
};