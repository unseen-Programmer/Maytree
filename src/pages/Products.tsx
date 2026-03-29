import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../DataContext';
import { Link } from 'react-router-dom';

const Products = () => {
  const { products } = useData();

  return (
    <div className="relative min-h-screen text-white">

      {/* 🔥 BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?q=80&w=1920"
          className="w-full h-full object-cover opacity-20"
          alt="background"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-serif text-gold text-center mb-20"
        >
          Our Products
        </motion.h1>

        {/* 🔥 GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">

          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >

              {/* 🔥 CLICKABLE CARD */}
              <Link to={`/product/${product.id}`}>

                <div className="group relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 hover:scale-[1.04] transition duration-500 shadow-xl">

                  {/* IMAGE */}
                  <div className="h-72 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 relative z-10">
                    <h2 className="text-2xl font-serif text-gold mb-2">
                      {product.name}
                    </h2>

                    <p className="text-neutral-400 text-sm mb-4">
                      {product.description}
                    </p>

                    <div className="flex justify-between text-sm border-t border-white/10 pt-4">
                      <span>MOQ: {product.moq}</span>
                      <span className="text-gold-400 font-bold">
                        ${product.price}/kg
                      </span>
                    </div>
                  </div>

                  {/* 🔥 HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-gold-500/10 to-transparent" />

                </div>

              </Link>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Products;