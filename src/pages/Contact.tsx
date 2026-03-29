import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../DataContext';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { addEnquiry } = useData();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnquiry(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', company: '', email: '', requirements: '' });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-neutral-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-serif text-gold mb-4">
            Contact Our Export Team
          </h1>
          <p className="text-neutral-400">
            Let’s build long-term business partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* ================= INFO ================= */}
          <div className="space-y-10">

            {/* EMAIL */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-full bg-gold-900/30 flex items-center justify-center text-gold-400">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="text-xl text-gold-200 mb-1 font-serif">Email</h3>
                <p className="text-neutral-400">teamaitrayee@gmail.com</p>
              </div>
            </motion.div>

            {/* PHONE */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-full bg-gold-900/30 flex items-center justify-center text-gold-400">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="text-xl text-gold-200 mb-1 font-serif">Phone</h3>
                <p className="text-neutral-400">+91 6002777840</p>
                <p className="text-neutral-400">+91 6000528276</p>
              </div>
            </motion.div>

            {/* LOCATION */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-full bg-gold-900/30 flex items-center justify-center text-gold-400">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="text-xl text-gold-200 mb-1 font-serif">Location</h3>
                <p className="text-neutral-400">
                  Rajabari Vill, P.O-Michajan,<br />
                  Sivasagar, Assam - 785684
                </p>
              </div>
            </motion.div>

            {/* MAP */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-10 rounded-2xl overflow-hidden border border-white/10"
            >
              <iframe
                src="https://maps.google.com/maps?q=Sivasagar%20Assam&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              />
            </motion.div>

          </div>

          {/* ================= FORM ================= */}
          <div className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center text-black mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>

                  <h2 className="text-3xl font-serif mb-4">
                    Enquiry Sent Successfully
                  </h2>

                  <p className="text-neutral-400">
                    Our team will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
                  />

                  <input
                    required
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
                  />

                  <input
                    required
                    type="email"
                    placeholder="Business Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
                  />

                  <textarea
                    required
                    rows={5}
                    placeholder="Your Requirements"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
                  />

                  <button
                    type="submit"
                    className="w-full py-5 bg-gold-600 text-black font-bold uppercase tracking-widest rounded-xl hover:bg-gold-500 transition flex items-center justify-center gap-2"
                  >
                    Send Enquiry <Send size={16} />
                  </button>

                </motion.form>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;