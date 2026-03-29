import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { DataProvider } from './DataContext';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import ProductDetails from './pages/ProductDetails'; // ✅ IMPORTANT

export default function App() {
  return (
    <DataProvider>
      <Router>
        <div className="min-h-screen bg-neutral-950 text-white selection:bg-gold-500/30 selection:text-gold-200">

          {/* NAVBAR */}
          <Navbar />

          {/* ROUTES */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} /> {/* 🔥 NEW */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>

          {/* ================= FOOTER ================= */}
          <footer className="py-20 border-t border-white/5 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

              {/* BRAND */}
              <div className="col-span-1 md:col-span-2">
                <span className="font-serif text-2xl font-bold tracking-widest uppercase text-gold-200 mb-6 block">
                  Tea & Spice <span className="text-gold-500">Co.</span>
                </span>

                <p className="text-neutral-500 max-w-sm font-light leading-relaxed">
                  Bridging the gap between heritage estates and global markets with premium,
                  export-quality tea and spices.
                </p>
              </div>

              {/* LINKS */}
              <div>
                <h4 className="text-gold-100 font-serif text-lg mb-6">
                  Quick Links
                </h4>

                <ul className="space-y-4 text-sm text-neutral-500">
                  <li><Link to="/" className="hover:text-gold-400 transition">Home</Link></li>
                  <li><Link to="/products" className="hover:text-gold-400 transition">Products</Link></li>
                  <li><Link to="/about" className="hover:text-gold-400 transition">About</Link></li>
                  <li><Link to="/contact" className="hover:text-gold-400 transition">Contact</Link></li>
                </ul>
              </div>

              {/* ADMIN */}
              <div>
                <h4 className="text-gold-100 font-serif text-lg mb-6">
                  Admin
                </h4>

                <ul className="space-y-4 text-sm text-neutral-500">
                  <li>
                    <Link to="/admin" className="hover:text-gold-400 transition">
                      Dashboard Login
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

            {/* BOTTOM */}
            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center">
              <p className="text-xs text-neutral-600 uppercase tracking-widest">
                © 2026 Tea & Spice Co. All Rights Reserved | Export Quality Certified
              </p>
            </div>
          </footer>

        </div>
      </Router>
    </DataProvider>
  );
}