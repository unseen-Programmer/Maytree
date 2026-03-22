import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// ✅ Import your logo
import logo from '../assets/logo.png';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isAdmin = location.pathname.startsWith('/admin');
  if (isAdmin) return null;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        scrolled
          ? 'bg-neutral-950/70 backdrop-blur-xl shadow-lg border-b border-gold-500/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* 🔥 LOGO + BRAND */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Maytree Tea & Agro"
            className="w-12 h-12 object-contain rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"
          />

          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg md:text-xl font-bold tracking-wider uppercase text-gold-200">
              Maytree
            </span>
            <span className="text-xs tracking-[0.3em] text-gold-500 uppercase">
              Tea & Agro
            </span>
          </div>
        </Link>

        {/* 💻 Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm uppercase tracking-widest font-medium transition-all duration-300 relative',
                location.pathname === link.path
                  ? 'text-gold-500'
                  : 'text-neutral-400 hover:text-gold-400'
              )}
            >
              {link.name}

              {/* 🔥 underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* 💎 Premium Button */}
          <Link
            to="/contact"
            className="px-6 py-2 bg-gradient-to-r from-gold-500 to-gold-700 text-neutral-950 text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Enquire Now
          </Link>
        </div>

        {/* 📱 Mobile Toggle */}
        <button
          className="md:hidden text-neutral-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-neutral-900 border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-serif tracking-wide',
                  location.pathname === link.path
                    ? 'text-gold-500'
                    : 'text-neutral-400'
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;