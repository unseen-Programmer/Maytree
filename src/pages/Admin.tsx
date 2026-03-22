import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useData } from '../DataContext';
import { LayoutDashboard, Package, MessageSquare, Settings, LogOut, Plus, Trash2, Edit2, Check, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'products' | 'enquiries' | 'settings'>('products');
  const { products, enquiries, addProduct, deleteProduct, updateEnquiryStatus } = useData();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Mock admin password
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-10 rounded-3xl w-full max-w-md text-center"
        >
          <h1 className="text-3xl font-serif mb-8 text-gold-200">Admin Portal</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="text-left">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Access Key</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-gold-500/50 transition-colors mt-2"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gold-600 text-neutral-950 font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-gold-500 transition-all"
            >
              Login to Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 flex flex-col p-6">
        <div className="mb-12">
          <span className="font-serif text-xl font-bold tracking-widest uppercase text-gold-200">
            Admin <span className="text-gold-500">Panel</span>
          </span>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { id: 'products', icon: <Package size={18} />, label: 'Products' },
            { id: 'enquiries', icon: <MessageSquare size={18} />, label: 'Enquiries' },
            { id: 'settings', icon: <Settings size={18} />, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all',
                activeTab === item.id ? 'bg-gold-600 text-neutral-950' : 'text-neutral-400 hover:bg-white/5'
              )}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setIsLoggedIn(false)}
          className="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:text-red-400 transition-colors text-sm"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-serif text-white">Manage Products</h2>
              <button 
                onClick={() => {
                  const name = prompt('Product Name:');
                  if (!name) return;
                  addProduct({
                    name,
                    description: 'New premium product description...',
                    category: 'Tea',
                    price: 100,
                    moq: '10kg',
                    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800'
                  });
                }}
                className="flex items-center gap-2 px-6 py-3 bg-gold-600 text-neutral-950 font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-gold-500 transition-all"
              >
                <Plus size={16} /> Add Product
              </button>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 bg-white/5">
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Product</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Category</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Price</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-neutral-500 font-bold">MOQ</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-neutral-500 font-bold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img src={product.image} className="w-10 h-10 rounded-lg object-cover" alt="" />
                          <span className="text-sm font-medium text-gold-100">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-400">{product.category}</td>
                      <td className="px-6 py-4 text-sm text-gold-400">${product.price}/kg</td>
                      <td className="px-6 py-4 text-sm text-neutral-400">{product.moq}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-neutral-500 hover:text-gold-400 transition-colors"><Edit2 size={16} /></button>
                          <button 
                            onClick={() => deleteProduct(product.id)}
                            className="p-2 text-neutral-500 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'enquiries' && (
          <div>
            <h2 className="text-3xl font-serif text-white mb-10">Wholesale Enquiries</h2>
            <div className="space-y-4">
              {enquiries.length === 0 ? (
                <div className="glass-card p-20 rounded-3xl text-center">
                  <p className="text-neutral-500 font-serif text-xl">No enquiries yet.</p>
                </div>
              ) : (
                enquiries.map((enquiry) => (
                  <div key={enquiry.id} className="glass-card p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-serif text-gold-100">{enquiry.name}</h3>
                        <span className={cn(
                          "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest",
                          enquiry.status === 'New' ? "bg-gold-500/20 text-gold-500" : "bg-green-500/20 text-green-500"
                        )}>
                          {enquiry.status}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-400 mb-1">{enquiry.company} • {enquiry.email}</p>
                      <p className="text-sm text-neutral-500 italic">"{enquiry.requirements}"</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {enquiry.status === 'New' && (
                        <button 
                          onClick={() => updateEnquiryStatus(enquiry.id, 'Closed')}
                          className="flex items-center gap-2 px-4 py-2 bg-white/5 text-neutral-400 hover:text-green-400 transition-colors text-xs font-bold uppercase tracking-widest rounded-lg"
                        >
                          <Check size={14} /> Mark Handled
                        </button>
                      )}
                      <button className="p-2 text-neutral-500 hover:text-red-400 transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif text-white mb-10">Homepage Content</h2>
            <div className="glass-card p-10 rounded-3xl space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Hero Title</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                  defaultValue="Exquisite Sourcing. Global Excellence."
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Hero Subtitle</label>
                <textarea
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                  defaultValue="Premium wholesale tea and spices for the world's most discerning brands."
                />
              </div>
              <button className="px-8 py-4 bg-gold-600 text-neutral-950 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-gold-500 transition-all">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
