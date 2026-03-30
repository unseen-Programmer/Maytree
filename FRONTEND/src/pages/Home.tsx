import React from "react";
import { motion } from "framer-motion";
import { useData } from "../DataContext";
import { ArrowRight, ShieldCheck, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 }
};

const Home = () => {
  const data = useData();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-neutral-950">
        Loading...
      </div>
    );
  }

  const { products } = data;

  const homeContent = {
    heroTitle: "Premium Tea & Spices",
    heroSubtitle: "Export quality crafted with precision & care."
  };

  const featuredProducts = products || [];

  return (
    <div className="pt-20 bg-neutral-950 text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] flex items-center">

        <motion.img
          src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=1920"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <span className="text-gold-400 uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
              Premium Manufacturer
            </span>

            <h1 className="text-6xl md:text-8xl font-serif leading-tight text-gold">
              {homeContent.heroTitle}
            </h1>

            <p className="text-lg text-neutral-400 mt-6 mb-10">
              {homeContent.heroSubtitle}
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/products"
                className="px-8 py-4 bg-gold-600 text-black font-bold uppercase tracking-widest text-sm hover:bg-gold-500 transition flex items-center gap-2"
              >
                Explore Products <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 border border-gold-500 text-gold-300 hover:bg-gold-500/10 transition uppercase text-sm"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-serif text-gold mb-4">
              Our Products
            </h2>
            <p className="text-neutral-400">
              Premium quality crafted with precision & care.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            {featuredProducts.length === 0 ? (
              <p className="text-center text-neutral-500 col-span-full">
                No products available
              </p>
            ) : (
              featuredProducts.map((product: any, idx: number) => {
                
                // ✅ SAFE IMAGE
                const safeImage = product.image?.trim()
                  ? product.image
                  : "/images/img_1.png";

                return (
                  <motion.div
                    key={product.id}
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUp}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:scale-[1.03] hover:shadow-2xl hover:shadow-gold-900/20 transition duration-500"
                  >

                    {/* IMAGE */}
                    <div className="h-72 overflow-hidden">
                      <img
                        src={safeImage}
                        alt={product.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/img_1.png";
                        }}
                        className="w-full h-full object-cover transition duration-700 hover:scale-110"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <h3 className="text-2xl font-serif text-gold mb-2">
                        {product.name}
                      </h3>

                      <p className="text-neutral-400 text-sm mb-4">
                        {product.description}
                      </p>

                      <div className="flex justify-between border-t border-white/10 pt-4 text-sm">
                        <span>MOQ: {product.moq}</span>
                        <span className="text-gold-400 font-bold">
                          ${product.price}/kg
                        </span>
                      </div>

                      <Link
                        to={`/product/${product.id}`}
                        className="block mt-4 text-center text-sm text-gold-400 hover:underline"
                      >
                        View Details →
                      </Link>
                    </div>

                  </motion.div>
                );
              })
            )}

          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-28 bg-neutral-900/40">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.h2
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="text-5xl font-serif text-gold mb-16"
          >
            Manufacturing Process
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">

            {[
              {
                icon: <ArrowRight />,
                title: "Enquiry",
                desc: "Submit requirements for bulk production."
              },
              {
                icon: <ShieldCheck />,
                title: "Quality Check",
                desc: "Strict inspection ensures export-grade quality."
              },
              {
                icon: <Globe />,
                title: "Processing & Packaging",
                desc: "Advanced processing and premium packaging."
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-xl p-8 hover:scale-105 transition"
              >
                <div className="text-gold-400 mb-4 flex justify-center">
                  {React.cloneElement(step.icon, { size: 36 })}
                </div>

                <h3 className="text-xl font-serif text-gold mb-2">
                  {step.title}
                </h3>

                <p className="text-neutral-400 text-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-5xl md:text-6xl font-serif text-gold mb-6">
            Let’s Build Something Premium
          </h2>

          <p className="text-neutral-400 mb-10">
            Partner with a trusted manufacturer today.
          </p>

          <Link
            to="/contact"
            className="px-12 py-5 bg-gold-600 text-black font-bold uppercase tracking-widest hover:bg-gold-500 transition"
          >
            Request Quote
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;