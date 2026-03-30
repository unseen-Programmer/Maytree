import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';

import {
  FaWhatsapp,
  FaBoxOpen,
  FaDollarSign,
  FaTruck,
  FaShieldAlt
} from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        console.error("Failed to load product", err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  // 🔥 LOADING
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white">
        Loading product...
      </div>
    );
  }

  // 🔥 ERROR
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-red-400">
        Product not found
      </div>
    );
  }

  // ✅ WhatsApp setup
  const phone = "916002777840";
  const message = `Hello, I'm interested in ${product.name}`;
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-neutral-950 text-white">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="relative group">
          <img
            src={product.image || "/images/img_1.png"}
            alt={product.name}
            className="rounded-2xl shadow-xl w-full h-[500px] object-cover group-hover:scale-105 transition duration-500"
          />

          {/* STOCK BADGE */}
          <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold 
            ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`}>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </div>
        </div>

        {/* DETAILS */}
        <div>

          <h1 className="text-5xl font-serif mb-6 text-gold-200">
            {product.name}
          </h1>

          <p className="text-neutral-400 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* INFO CARDS */}
          <div className="grid grid-cols-2 gap-4 mb-8">

            <div className="bg-neutral-900 border border-white/10 p-6 rounded-xl flex items-center gap-3">
              <FaDollarSign className="text-gold-400" />
              <div>
                <p className="text-sm text-neutral-400">Price</p>
                <h3 className="text-xl font-bold text-gold-400">
                  ${product.price}/kg
                </h3>
              </div>
            </div>

            <div className="bg-neutral-900 border border-white/10 p-6 rounded-xl flex items-center gap-3">
              <FaBoxOpen className="text-gold-400" />
              <div>
                <p className="text-sm text-neutral-400">MOQ</p>
                <h3 className="text-xl font-bold">
                  {product.moq}
                </h3>
              </div>
            </div>

          </div>

          {/* EXTRA FEATURES */}
          <div className="flex gap-6 mb-10 text-sm text-neutral-400">

            <div className="flex items-center gap-2">
              <FaShieldAlt /> Certified Quality
            </div>

            <div className="flex items-center gap-2">
              <FaTruck /> Fast Shipping
            </div>

          </div>

          {/* WHATSAPP BUTTON */}
          <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <button className="group flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105">

              <FaWhatsapp className="group-hover:rotate-12 transition" size={22} />

              <span className="tracking-wide">Enquire on WhatsApp</span>

            </button>
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;