import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { DataProvider } from './DataContext';

// Components & Pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

export default function App() {
  return (
    <DataProvider>
      <Router>
        <div className="min-h-screen bg-neutral-950 selection:bg-gold-500/30 selection:text-gold-200 text-neutral-300 antialiased">
          
          {/* NAVIGATION */}
          <Navbar />

          {/* MAIN CONTENT AREA */}
          <main className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>

          {/* FOOTER */}
          <footer className="pt-24 pb-12 border-t border-white/5 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">

              {/* BRAND IDENTITY */}
              <div className="space-y-6">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] uppercase text-gold-200 block">
                  Maitrayee <br />
                  <span className="text-lg tracking-[0.3em] font-light text-gold-100/80">Tea & Agro</span>
                </span>
                <p className="text-neutral-500 max-w-sm font-light leading-relaxed text-sm">
                  Bridging the heritage of Assam's finest plantations with the global market. 
                  Specializing in premium export-grade tea and agricultural excellence.
                </p>
              </div>

              {/* SOCIAL ENGAGEMENT */}
              <div className="flex flex-col space-y-8">
                <h4 className="text-gold-100 font-serif text-lg tracking-widest uppercase">Social</h4>
                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://www.instagram.com/__mriganga__27?igsh=MXNjajQ3NmQ3c3J5OA==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-neutral-400 hover:text-gold-400 transition-all duration-500"
                  >
                    <span className="text-xs font-medium tracking-[0.2em] uppercase">Instagram</span>
                    <div className="h-[1px] w-12 bg-neutral-800 group-hover:w-20 group-hover:bg-gold-500 transition-all duration-500"></div>
                  </a>
                </div>
              </div>

              {/* ENQUIRY & CALL TO ACTION */}
              <div className="flex flex-col space-y-8">
                <h4 className="text-gold-100 font-serif text-lg tracking-widest uppercase">Inquiries</h4>
                <div className="space-y-6">
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    For wholesale partnerships, distribution, or export documentation requests.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-10 py-4 border border-gold-500/20 text-gold-200 text-[10px] uppercase tracking-[0.3em] hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-700 bg-neutral-900/50"
                  >
                    Start Enquiry
                  </Link>
                </div>
              </div>

            </div>

            {/* SECONDARY FOOTER / LEGAL */}
            <div className="max-w-7xl mx-auto px-6 mt-24 pt-12 border-t border-white/5">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[10px] text-neutral-600 uppercase tracking-[0.4em] text-center md:text-left">
                  © 2026 Maitrayee Tea & Agro | Premium Export Quality
                </p>
                
                <div className="flex items-center gap-8">
                  <Link 
                    to="/admin" 
                    className="text-[9px] text-neutral-700 hover:text-gold-600 uppercase tracking-[0.3em] transition-colors"
                  >
                    Admin Portal
                  </Link>
                  <span className="text-neutral-800 font-thin">|</span>
                  <span className="text-[9px] text-neutral-700 uppercase tracking-[0.3em]">
                    Assam, India
                  </span>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </Router>
    </DataProvider>
  );
}