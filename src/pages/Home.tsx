import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../DataContext';
import { ArrowRight, ShieldCheck, Globe, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { homeContent, products } = useData();
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=1920"
            alt="Tea Plantation"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-gold-500 uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
              Est. 1994 | Premium Exports
            </span>
            <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight text-white">
              {homeContent.heroTitle}
            </h1>
            <p className="text-xl text-neutral-400 mb-10 font-light leading-relaxed">
              {homeContent.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="px-8 py-4 bg-gold-600 text-neutral-950 font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-gold-500 transition-all flex items-center gap-2"
              >
                View Collections <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-gold-500/50 text-gold-200 font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-gold-500/10 transition-all"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-2 block">Our Selection</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">Featured Exports</h2>
            </div>
            <Link to="/products" className="text-gold-400 hover:text-gold-200 transition-colors flex items-center gap-2 uppercase tracking-widest text-sm font-bold">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group glass-card rounded-xl overflow-hidden"
              >
                <div className="h-80 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-gold-600 text-neutral-950 px-3 py-1 text-[10px] font-bold uppercase tracking-tighter rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-3 text-gold-100">{product.name}</h3>
                  <p className="text-neutral-400 text-sm mb-6 line-clamp-2 font-light leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-xs text-neutral-500 uppercase tracking-widest">MOQ: {product.moq}</span>
                    <span className="text-gold-400 font-serif text-lg">${product.price}/kg</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Seamless Global Supply</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">From the estate to your warehouse, we manage every step with precision and care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gold-900/50 z-0" />
            
            {[
              { icon: <ArrowRight />, title: 'Enquiry', desc: 'Submit your requirements for custom blends or bulk orders.' },
              { icon: <ShieldCheck />, title: 'Quality Check', desc: 'Rigorous testing in our certified labs to ensure export grade.' },
              { icon: <Globe />, title: 'Processing', desc: 'State-of-the-art cleaning, grading, and premium packaging.' },
              { icon: <Truck />, title: 'Delivery', desc: 'Global logistics handling with real-time tracking to your port.' }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-24 h-24 rounded-full bg-neutral-950 border border-gold-900/50 flex items-center justify-center mx-auto mb-6 text-gold-500 group hover:border-gold-500 transition-colors">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-serif mb-3 text-gold-200">{step.title}</h3>
                <p className="text-neutral-500 text-sm font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-950/20" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-8 text-white">Ready to elevate your inventory?</h2>
          <p className="text-xl text-neutral-400 mb-12 font-light">Join over 200 global partners who trust Tea & Spice Co. for their premium sourcing needs.</p>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-gold-600 text-neutral-950 font-bold uppercase tracking-[0.2em] text-sm rounded-sm hover:bg-gold-500 transition-all shadow-2xl shadow-gold-900/20"
          >
            Request a Wholesale Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
