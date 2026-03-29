import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Flame, ShieldCheck, Globe, Package, Zap } from 'lucide-react'; // Assuming lucide-react for icons

const About = () => {
  return (
    <div className="relative pt-32 pb-24 min-h-screen bg-neutral-950 text-white overflow-hidden">
      
      {/* ELEGANT BACKGROUND ORBS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= HERO / STORY SECTION ================= */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold-500/50" />
              <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold">
                Our Heritage
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] text-neutral-50">
              From Assam’s Soil <br /> 
              <span className="italic text-gold-400 font-light">to Global Tables</span>
            </h1>

            <div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed max-w-xl">
              <p>
                Maitrayee Tea & Agro is rooted in the misty highlands of Assam—a landscape world-renowned for its emerald tea gardens and potent spices. 
              </p>
              <p>
                We don't just process agricultural goods; we preserve an <span className="text-white font-medium italic">identity</span>. Our expertise bridges traditional farming with modern export precision, specializing in the delicate art of <span className="text-gold-200">Orthodox & Green Teas</span>.
              </p>
              <p>
                Beyond the leaf, we are the guardians of the <span className="text-gold-200">King Chilli (Bhut Jolokia)</span>. From oven-dried consistency to the deep, primal notes of smoke-dried pods, we ensure the heat of Assam reaches the world in its most vibrant form.
              </p>
            </div>
          </motion.div>

          {/* IMAGE WITH FLOATING ELEMENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="absolute inset-0 border border-gold-500/20 translate-x-6 translate-y-6 rounded-2xl -z-10" />
            <img
              src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12"
              alt="Assam Tea Garden"
              className="rounded-2xl shadow-2xl object-cover w-full aspect-[4/5] grayscale-[20%] hover:grayscale-0 transition duration-700"
            />
            <div className="absolute -bottom-10 -left-10 bg-neutral-900/90 backdrop-blur-md p-8 rounded-xl border border-white/10 hidden md:block">
              <p className="text-gold-400 text-4xl font-serif">100%</p>
              <p className="text-xs uppercase tracking-widest text-neutral-400">Authentic Sourcing</p>
            </div>
          </motion.div>
        </section>

        {/* ================= PRODUCTS GRID ================= */}
        <section className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Signature Collections</h2>
            <div className="w-24 h-1 bg-gold-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Orthodox Tea", desc: "Small-batch processing to preserve the soul of the leaf.", icon: <Leaf size={24}/> },
              { title: "Green Tea", desc: "Emerald infusions packed with antioxidants and clarity.", icon: <Leaf size={24} className="text-green-500/50"/> },
              { title: "King Chilli", desc: "The legendary Bhut Jolokia. Fierce, bold, and unforgettable.", icon: <Flame size={24} className="text-orange-500"/> },
              { title: "Oven-Dried", desc: "Precision-controlled drying for consistent culinary heat.", icon: <Zap size={24}/> },
              { title: "Smoke-Dried", desc: "Traditional wood-fired techniques for deep, earthy notes.", icon: <Package size={24}/> },
              { title: "Chilli Powder", desc: "Micro-ground for seamless integration into global cuisines.", icon: <ShieldCheck size={24}/> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 bg-neutral-900/40 border border-white/5 rounded-2xl hover:border-gold-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-gold-500 transition-all duration-500">
                   {item.icon}
                </div>
                <h3 className="text-2xl text-gold-100 mb-4 font-serif">{item.title}</h3>
                <p className="text-neutral-500 group-hover:text-neutral-300 transition-colors leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= WHY CHOOSE (THE EDGE) ================= */}
        <section className="py-24 px-8 rounded-[3rem] bg-neutral-900/30 border border-white/5 relative overflow-hidden">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-serif">The Maitrayee Edge</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-y-12 gap-x-8">
            {[
              { label: "Direct Estate Sourcing", icon: <Leaf /> },
              { label: "Export-Grade Quality", icon: <Globe /> },
              { label: "Premium Packaging", icon: <Package /> },
              { label: "Custom Bulk Orders", icon: <Zap /> },
              { label: "Strict Quality Control", icon: <ShieldCheck /> },
              { label: "Reliable Global Supply", icon: <Globe /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 text-center group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold-500/10 text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>
                <span className="text-neutral-300 font-medium tracking-wide group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;