import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../DataContext';
import { Filter, Search } from 'lucide-react';

const Products = () => {
  const { products, categories } = useData();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-white">Our Collections</h1>
          <p className="text-neutral-400 max-w-2xl font-light text-lg">
            Explore our curated selection of export-quality teas, premium chillies, and signature aromatic blends.
          </p>
        </header>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 items-center justify-between">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                activeCategory === 'All' 
                ? 'bg-gold-600 text-neutral-950' 
                : 'bg-white/5 text-neutral-400 hover:bg-white/10'
              }`}
            >
              All Products
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat.name 
                  ? 'bg-gold-600 text-neutral-950' 
                  : 'bg-white/5 text-neutral-400 hover:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group glass-card rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <button className="w-full py-3 bg-gold-600 text-neutral-950 font-bold uppercase tracking-widest text-xs rounded-lg">
                      Enquire Details
                    </button>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif text-gold-100">{product.name}</h3>
                    <span className="text-gold-500 font-serif text-xl">${product.price}</span>
                  </div>
                  <p className="text-neutral-400 text-sm mb-6 font-light leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Category</span>
                      <span className="text-xs text-gold-300 font-medium">{product.category}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Min. Order</span>
                      <span className="text-xs text-gold-300 font-medium">{product.moq}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32">
            <p className="text-neutral-500 text-xl font-serif">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
