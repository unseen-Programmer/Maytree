import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="relative pt-24 pb-16 min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-900/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold-900/10 blur-[120px] rounded-full" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div {...fadeInUp} className="mb-12 md:mb-20 text-center md:text-left">
          <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs">Reach Out</span>
          <h1 className="text-4xl md:text-7xl font-serif mt-4 mb-6">
            Let’s start a <br className="hidden md:block" /> 
            <span className="text-neutral-500 italic">Conversation.</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: INFO BENTO BOXES */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* UPDATED: Leadership Card with Image & Pseudo-Writing */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 p-8 rounded-3xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm flex flex-col md:flex-row items-center gap-8"
            >
              <div className="relative">
                {/* Image Frame */}
                <div className="w-32 h-32 rounded-full border-2 border-gold-500/30 p-1">
                  <img 
                    src="/images/bora.png" 
                    alt="Satyajit Bora" 
                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-600 rounded-full border-4 border-[#0a0a0a] flex items-center justify-center">
                   <div className="w-1 h-1 bg-white rounded-full animate-ping" />
                </div>
              </div>

              <div className="text-center md:text-left">
                <p className="text-neutral-500 text-sm mb-1 uppercase tracking-widest font-bold">Leadership</p>
                {/* Satyajit Bora with "Handwritten" style Pseudo-Writing */}
                <h2 className="text-4xl md:text-5xl font-serif text-gold-200 mb-1">Satyajit Bora</h2>
                <p className="text-neutral-400 font-serif italic text-lg opacity-80">Director of Operations</p>
                
                {/* Pseudo-writing / Signature effect */}
                <p className="mt-4 text-sm text-neutral-500 max-w-sm leading-relaxed border-l-2 border-red-500 pl-4 italic">
                  "Crafting excellence through tradition and innovation. We don't just export products; we share our heritage with the world."
                </p>
              </div>
            </motion.div>

            {/* Contact Method: Phone */}
            <div className="p-6 rounded-3xl bg-neutral-900/40 border border-white/5 space-y-4">
              <FaPhoneAlt className="text-red-500 text-xl" />
              <div>
                <p className="text-xs text-neutral-500 uppercase mb-2 font-bold tracking-tighter">Call Us</p>
                <a href="tel:+916002777840" className="block text-lg hover:text-red-400 transition-colors">+91 60027 77840</a>
                <a href="tel:+916000528276" className="block text-lg hover:text-red-400 transition-colors">+91 60005 28276</a>
              </div>
            </div>

            {/* Contact Method: Email */}
            <div className="p-6 rounded-3xl bg-neutral-900/40 border border-white/5 space-y-4">
              <FaEnvelope className="text-red-500 text-xl" />
              <div>
                <p className="text-xs text-neutral-500 uppercase mb-2 font-bold tracking-tighter">Write to Us</p>
                <a href="mailto:teamaitrayee@gmail.com" className="block text-lg break-all hover:text-red-400 transition-colors">
                  teamaitrayee@gmail.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <motion.div 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="md:col-span-2 p-8 rounded-3xl bg-neutral-900/40 border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="flex gap-5">
                <div className="mt-1">
                    <FaMapMarkerAlt className="text-red-500 text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase mb-2 font-bold tracking-tighter">Headquarters</p>
                  <p className="text-neutral-300 leading-relaxed italic font-serif">
                    Rajabari Village, P.O. Michajan, <br />
                    Sivasagar, Assam, 785684
                  </p>
                </div>
              </div>
              
              <a 
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all group shrink-0"
              >
                <SiGooglemaps className="text-[#4285F4] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold">Open in Maps</span>
                <FaExternalLinkAlt className="text-[10px] opacity-50" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT: ACTION CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 sticky top-32"
          >
            <div className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-b from-neutral-800 to-neutral-900 border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-gold-600" />
              
              <h3 className="text-2xl font-serif mb-4">Direct Inquiry</h3>
              <p className="text-neutral-400 mb-8 text-sm leading-relaxed">
                For wholesale inquiries, export documentation, or brand collaborations, please use our priority channels below.
              </p>

              <div className="space-y-4">
                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/916002777840"
                  className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-500/20"
                >
                  <FaWhatsapp size={20} />
                  WhatsApp Business
                </motion.a>

                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href="mailto:teamaitrayee@gmail.com"
                  className="flex items-center justify-center gap-3 bg-white text-black py-4 rounded-2xl font-bold transition-all hover:bg-neutral-200 shadow-lg shadow-white/5"
                >
                  Schedule an Appointment
                </motion.a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
                <div className="text-center border-r border-white/5">
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Global</p>
                  <p className="text-xs font-bold uppercase">Export Ready</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Support</p>
                  <p className="text-xs font-bold uppercase">24/7 Priority</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;