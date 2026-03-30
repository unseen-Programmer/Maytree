import { useEffect, useState } from "react";

export const useDataService = () => {
  const [products, setProducts] = useState<any[]>([]);

  const fetchData = () => {
    fetch("http://127.0.0.1:8000/products")
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  return { products };
};