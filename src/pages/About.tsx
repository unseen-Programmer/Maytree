import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-neutral-950">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 STORY */}
        <section className="grid lg:grid-cols-2 gap-20 items-center mb-32">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-gold-500 uppercase tracking-widest text-sm mb-4 block">
              Our Story
            </span>

            <h1 className="text-6xl font-serif mb-8 text-white">
              Crafting Excellence. Delivering Nature.
            </h1>

            <p className="text-neutral-400 text-lg mb-6">
              Maytree Tea & Agro was born in the fertile landscapes of Assam, where tradition meets excellence. 
              Our mission is to deliver the finest tea and spice harvests to the global market.
            </p>

            <p className="text-neutral-400 text-lg mb-8">
              Today, Maytree serves clients across 40+ countries, offering premium blends and export-quality products with unmatched consistency.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl text-gold-400">30+</h4>
                <p className="text-neutral-500 text-xs">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl text-gold-400">40+</h4>
                <p className="text-neutral-500 text-xs">Countries</p>
              </div>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12"
              className="rounded-2xl"
            />
          </motion.div>
        </section>

        {/* 🔥 FEATURES */}
        <section className="text-center">

          <h2 className="text-5xl font-serif mb-10">
            Why Choose Maytree
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Direct Estate Sourcing",
              "Global Export Standards",
              "Premium Packaging",
              "Custom Blending",
              "Strict Quality Control",
              "Trusted Worldwide",
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gold-500/20 rounded-xl">
                <h3 className="text-gold-200">{item}</h3>
              </div>
            ))}

          </div>
        </section>

      </div>
    </div>
  );
};

export default About;