import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Flame, ShieldCheck, Globe, Package, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="relative pt-32 pb-24 min-h-screen bg-neutral-950 text-white overflow-hidden">

      {/* ELEGANT BACKGROUND ORBS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-700/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= HERO / STORY SECTION ================= */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-40">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >

            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-yellow-500/50" />
              <span className="text-yellow-500 uppercase tracking-[0.3em] text-xs font-bold">
                About Us
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] text-neutral-50">
              Authentic Assam <br />
              <span className="italic text-yellow-400 font-light">
                Tea & King Chilli
              </span>
            </h1>

            <div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed max-w-xl">

              <p>
                Maitrayee Tea and Agro, established in 2016, is a trusted
                manufacturer and wholesale supplier of premium agricultural
                products from Assam.
              </p>

              <p>
                We specialize in the production and supply of
                <span className="text-yellow-200">
                  {" "}oven-dried King Chilli (Bhut Jolokia)
                </span>,
                along with high-quality
                <span className="text-yellow-200"> Green Tea</span> and
                <span className="text-yellow-200"> Orthodox Tea</span>.
              </p>

              <p>
                With a strong commitment to quality and authenticity, we
                carefully process and package our products to preserve their
                natural flavor, aroma, and strength.
              </p>

              <p>
                Our oven-dried King Chilli is known for its intense heat and
                rich taste, while our teas reflect the bold character and
                freshness of Assam’s renowned tea gardens.
              </p>

              <p>
                As a manufacturer, we are capable of supplying products in bulk
                and meeting the needs of wholesalers, traders, and businesses.
              </p>

              <p>
                We work closely with local farmers and producers to ensure
                consistent quality while supporting the agricultural community
                of Assam.
              </p>

              <p className="text-white font-medium italic">
                Maitrayee Tea and Agro — Manufacturer & Wholesale Supplier of
                Authentic Assam Tea and King Chilli.
              </p>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >

            <div className="absolute inset-0 border border-yellow-500/20 translate-x-6 translate-y-6 rounded-2xl -z-10" />

            <img
              src="/images/about-hero.png"
              alt="Vintage black-and-white Assam tea processing scene with tea leaves, wooden press, and worker"
              className="w-full h-auto max-h-[650px] lg:h-[650px] object-contain rounded-[24px] shadow-2xl border border-[#b68d40]/20 bg-neutral-950"
            />

            <div className="absolute -bottom-10 -left-10 bg-neutral-900/90 backdrop-blur-md p-8 rounded-xl border border-white/10 hidden md:block">
              <p className="text-yellow-400 text-4xl font-serif">Since 2016</p>
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                Trusted Manufacturer
              </p>
            </div>

          </motion.div>
        </section>

        {/* ================= PRODUCTS GRID ================= */}
        <section className="mb-40">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Orthodox Tea",
                desc: "Premium Assam orthodox tea with rich aroma and bold flavor.",
                icon: <Leaf size={24} />
              },
              {
                title: "Green Tea",
                desc: "Fresh and healthy green tea sourced from Assam gardens.",
                icon: <Leaf size={24} className="text-green-500/50" />
              },
              {
                title: "King Chilli",
                desc: "Authentic Bhut Jolokia famous for extreme heat and flavor.",
                icon: <Flame size={24} className="text-orange-500" />
              },
              {
                title: "Oven-Dried Chilli",
                desc: "Carefully dried using modern techniques to preserve quality.",
                icon: <Zap size={24} />
              },
              {
                title: "Bulk Supply",
                desc: "Reliable wholesale supply for businesses and traders.",
                icon: <Package size={24} />
              },
              {
                title: "Quality Assurance",
                desc: "Strict quality control with premium packaging standards.",
                icon: <ShieldCheck size={24} />
              }
            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 bg-neutral-900/40 border border-white/5 rounded-2xl hover:border-yellow-500/30 transition-all duration-500 overflow-hidden"
              >

                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-yellow-500 transition-all duration-500">
                  {item.icon}
                </div>

                <h3 className="text-2xl text-yellow-100 mb-4 font-serif">
                  {item.title}
                </h3>

                <p className="text-neutral-500 group-hover:text-neutral-300 transition-colors leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-24 px-8 rounded-[3rem] bg-neutral-900/30 border border-white/5 relative overflow-hidden">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif">
              Why Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-y-12 gap-x-8">

            {[
              { label: "Authentic Assam Products", icon: <Leaf /> },
              { label: "Wholesale & Bulk Supply", icon: <Package /> },
              { label: "Premium Quality Control", icon: <ShieldCheck /> },
              { label: "Trusted Since 2016", icon: <Zap /> },
              { label: "Direct Farmer Network", icon: <Globe /> },
              { label: "Reliable Delivery", icon: <Globe /> },
            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 text-center group"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
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
