import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

import {
  FaWhatsapp,
  FaBoxOpen,
  FaTruck,
  FaShieldAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-red-400">
        Product not found
      </div>
    );
  }

  const safeImage =
    product.image?.trim() || "/images/img_1.png";

  const phone = "916002777840";

  const message = `Hello, I'm interested in ${product.name}. Please share more details.`;

  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-neutral-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* PRODUCT IMAGE */}
        <div className="relative group">
          <img
            src={safeImage}
            alt={product.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/images/img_1.png";
            }}
            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-105 transition duration-500"
          />

          {/* PREMIUM BADGE */}
          <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-gold-500 text-black text-sm font-semibold shadow-lg">
            Premium Quality
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div>
          <h1 className="text-5xl font-serif mb-6 text-gold-200">
            {product.name}
          </h1>

          <p className="text-neutral-400 mb-8 leading-relaxed text-lg">
            {product.description}
          </p>

          {/* INFO CARDS */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            
            {/* ORIGIN */}
            <div className="bg-neutral-900/70 backdrop-blur border border-white/10 p-6 rounded-xl flex items-center gap-3">
              <FaMapMarkerAlt className="text-gold-400" />
              <div>
                <p className="text-sm text-neutral-400">
                  Origin
                </p>
                <h3 className="text-xl font-bold text-gold-400">
                  Assam, India
                </h3>
              </div>
            </div>

            {/* MOQ */}
            <div className="bg-neutral-900/70 backdrop-blur border border-white/10 p-6 rounded-xl flex items-center gap-3">
              <FaBoxOpen className="text-gold-400" />
              <div>
                <p className="text-sm text-neutral-400">
                  MOQ
                </p>
                <h3 className="text-xl font-bold">
                  {product.moq}
                </h3>
              </div>
            </div>

            {/* SHELF LIFE */}
            <div className="bg-neutral-900/70 backdrop-blur border border-white/10 p-6 rounded-xl flex items-center gap-3">
              <FaShieldAlt className="text-gold-400" />
              <div>
                <p className="text-sm text-neutral-400">
                  Shelf Life
                </p>
                <h3 className="text-xl font-bold">
                  12 Months
                </h3>
              </div>
            </div>

            {/* SUPPLY TYPE */}
            <div className="bg-neutral-900/70 backdrop-blur border border-white/10 p-6 rounded-xl flex items-center gap-3">
              <FaTruck className="text-gold-400" />
              <div>
                <p className="text-sm text-neutral-400">
                  Supply Type
                </p>
                <h3 className="text-xl font-bold">
                  Bulk & Wholesale
                </h3>
              </div>
            </div>

          </div>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-6 mb-10 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <FaShieldAlt />
              Certified Quality
            </div>

            <div className="flex items-center gap-2">
              <FaTruck />
              Fast Shipping
            </div>

            <div className="flex items-center gap-2">
              <FaBoxOpen />
              Bulk Orders Accepted
            </div>
          </div>

          {/* WHATSAPP BUTTON */}
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105">
              <FaWhatsapp
                className="group-hover:rotate-12 transition"
                size={22}
              />

              <span className="tracking-wide">
                Enquire on WhatsApp
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;