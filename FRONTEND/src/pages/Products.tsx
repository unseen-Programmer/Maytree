import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../DataContext';

const Products = () => {
  const data = useData();

  // 🔥 SAFE CHECK (prevents crash)
  if (!data || !data.products) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white">
        Loading products...
      </div>
    );
  }

  const { products } = data;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-neutral-950">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {products.length === 0 ? (
          <p className="text-center text-neutral-500 col-span-full">
            No products available
          </p>
        ) : (
          products.map((product: any) => (
            <Link to={`/product/${product.id}`} key={product.id}>

              <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition duration-300">

                {/* IMAGE */}
                <img
                  src={product.image || "/images/img_1.png"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl text-gold-200 font-serif">
                    {product.name}
                  </h3>

                  <p className="text-neutral-400 text-sm mt-2">
                    {product.description}
                  </p>

                  <div className="flex justify-between mt-4 text-sm">
                    <span>{product.moq}</span>
                    <span className="text-gold-400 font-bold">
                      ${product.price}/kg
                    </span>
                  </div>
                </div>

              </div>

            </Link>
          ))
        )}

      </div>
    </div>
  );
};

export default Products;