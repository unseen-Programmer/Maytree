import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../DataContext';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiShield, FiTruck, FiGlobe } from 'react-icons/fi';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useData();

  const product = products.find(p => p.id === id);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-serif mb-4">Product not found</h2>
        <Link to="/shop" className="text-gold-500 hover:underline">Return to Gallery</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation */}
        <Link 
          to="/shop" 
          className="inline-flex items-center text-neutral-400 hover:text-gold-400 transition mb-12 group"
        >
          <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* 🔥 STICKY IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-600/20 to-transparent rounded-3xl blur-xl opacity-50"></div>
              <img
                src={product.image}
                alt={product.name}
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/5]"
              />
            </div>
          </motion.div>

          {/* 🔥 CONTENT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Premium Selection
            </span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight text-white">
              {product.name}
            </h1>

            <p className="text-neutral-400 mb-10 text-xl leading-relaxed max-w-xl">
              {product.description || "Indulge in the finest quality sourced globally. Our commitment to excellence ensures a flavor profile and texture that is second to none."}
            </p>

            {/* PRODUCT METRICS GRID */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-neutral-500 text-sm uppercase mb-1">Price</p>
                <p className="text-2xl font-bold text-gold-400">${product.price}<span className="text-sm font-normal text-neutral-400"> /kg</span></p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-neutral-500 text-sm uppercase mb-1">Availability</p>
                <p className="text-2xl font-bold text-emerald-400">In Stock</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-neutral-500 text-sm uppercase mb-1">Minimum Order</p>
                <p className="text-lg text-white font-medium">{product.moq || '10kg'}</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-neutral-500 text-sm uppercase mb-1">Shipping</p>
                <p className="text-lg text-white font-medium">Worldwide</p>
              </div>
            </div>

            {/* ACTION AREA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="flex-1 px-10 py-5 bg-gold-600 text-black font-bold rounded-xl hover:bg-gold-500 transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Enquire Now
              </button>
              <button className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                Download Catalog
              </button>
            </div>

            {/* TRUST FEATURES */}
            <div className="border-t border-white/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <FiShield className="text-gold-500 text-xl" />
                <span className="text-sm text-neutral-300">Certified Quality</span>
              </div>
              <div className="flex items-center gap-3">
                <FiTruck className="text-gold-500 text-xl" />
                <span className="text-sm text-neutral-300">Fast Logistics</span>
              </div>
              <div className="flex items-center gap-3">
                <FiGlobe className="text-gold-500 text-xl" />
                <span className="text-sm text-neutral-300">Ethical Sourcing</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;