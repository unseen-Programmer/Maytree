import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const Products = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-neutral-950 to-black text-white">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-gold-300 mb-4">
          Our Products
        </h1>
        <p className="text-neutral-400 text-sm">
          Premium quality tea & agro products crafted for excellence
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-10">

        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>

            <div className="group bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.04] transition duration-500 hover:shadow-2xl hover:shadow-gold-900/20">

              {/* IMAGE */}
              <div className="h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/img_1.png";
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-2xl font-serif text-gold-200 mb-2">
                  {product.name}
                </h3>

                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="border-t border-white/10 pt-4 text-center">

                  <span className="text-xs text-neutral-400">
                    MOQ: {product.moq}
                  </span>

                </div>

                {/* BUTTON */}
                <div className="mt-6">
                  <button className="w-full py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold hover:opacity-90 transition">
                    View Details
                  </button>
                </div>

              </div>

            </div>

          </Link>
        ))}

      </div>

    </div>
  );
};

export default Products;
