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
    <div className="pt-32 pb-24 min-h-screen bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <span className="text-gold-500 uppercase tracking-widest text-sm font-bold mb-4 block">Global Partnerships</span>
            <h1 className="text-6xl font-serif mb-8 text-white">Let's discuss your wholesale needs.</h1>
            <p className="text-neutral-400 text-lg font-light mb-12 leading-relaxed">
              Whether you're looking for custom blending, private labeling, or bulk raw exports, our team is ready to assist you with competitive pricing and logistical support.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gold-950/30 flex items-center justify-center text-gold-500 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-gold-200 font-serif text-xl mb-1">Email Us</h3>
                  <p className="text-neutral-500">exports@teaspiceco.com</p>
                  <p className="text-neutral-500">wholesale@teaspiceco.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gold-950/30 flex items-center justify-center text-gold-500 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-gold-200 font-serif text-xl mb-1">Call Us</h3>
                  <p className="text-neutral-500">+1 (888) TEA-SPICE</p>
                  <p className="text-neutral-500">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gold-950/30 flex items-center justify-center text-gold-500 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-gold-200 font-serif text-xl mb-1">Global HQ</h3>
                  <p className="text-neutral-500">12 Luxury Estate Way, Tea Gardens</p>
                  <p className="text-neutral-500">Assam, India - 781001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card p-10 rounded-3xl relative overflow-hidden">
            <AnimatePresence mode='wait'>
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center text-neutral-950 mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-serif mb-4 text-white">Enquiry Received</h2>
                  <p className="text-neutral-400 max-w-xs mx-auto">
                    Thank you for reaching out. Our export manager will contact you within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-gold-500 uppercase tracking-widest text-xs font-bold hover:text-gold-300 transition-colors"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Company Name</label>
                      <input
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                        placeholder="Global Tea Ltd."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Business Email</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Requirements & Volume</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                      placeholder="Tell us about the products and volumes you are interested in..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-gold-600 text-neutral-950 font-bold uppercase tracking-[0.2em] text-sm rounded-xl hover:bg-gold-500 transition-all flex items-center justify-center gap-3 shadow-xl shadow-gold-900/20"
                  >
                    Submit Wholesale Enquiry <Send size={16} />
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
