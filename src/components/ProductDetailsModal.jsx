import React from 'react';
import { X, MessageSquare, Phone, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const ProductDetailsModal = ({ product, onClose, darkMode = true }) => {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello ${siteConfig.businessName},\nI am interested in:\n📦 Product: ${product.name}\n📂 Category: ${product.category}\n${product.showPrice ? `💰 Rate: ₹${product.price}/${product.priceUnit}\n` : ''}📐 MOQ: ${product.moq}\n\nPlease share availability, color options, and wholesale details.`
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Centered Modal Card Box */}
      <div className={`relative z-10 w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 my-auto max-h-[85vh] ${
        darkMode ? 'bg-brand-card border-brand-gold/40 text-gray-200' : 'bg-white border-brand-gold/40 text-gray-900'
      }`}>
        
        {/* Prominent High Z-Index Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-30 p-2.5 rounded-full shadow-xl transition-transform hover:scale-110 ${
            darkMode ? 'bg-brand-dark/90 text-brand-gold border border-brand-gold/40 hover:bg-brand-surface' : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
          }`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Left: Product Image */}
        <div className="md:col-span-6 bg-black flex items-center justify-center relative min-h-[240px] md:min-h-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full bg-brand-dark/90 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              {product.badge || product.category}
            </span>
          </div>
        </div>

        {/* Right: Details & Order Form */}
        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[60vh] md:max-h-[80vh]">
          <div>
            {/* Category & Status */}
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-brand-gold">
              <span>{product.category}</span>
              <span className="flex items-center gap-1 text-green-500 font-bold">
                <CheckCircle className="w-3.5 h-3.5" />
                In Stock
              </span>
            </div>

            {/* Title */}
            <h3 className={`font-heading text-2xl sm:text-3xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {product.name}
            </h3>

            {/* Pricing Tag */}
            <div className="mt-4">
              {product.showPrice ? (
                <div className="inline-flex items-baseline gap-1 px-4 py-2 rounded-xl bg-gold-gradient text-brand-dark font-heading font-extrabold text-2xl shadow-md">
                  <span>₹{product.price}</span>
                  <span className="text-xs font-semibold font-body lowercase">/ {product.priceUnit || 'meter'}</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-bold text-sm">
                  <span>Contact for Wholesale Pricing</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className={`text-sm leading-relaxed mt-4 font-light ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {product.description}
            </p>

            {/* Specs Grid */}
            <div className={`mt-6 grid grid-cols-2 gap-3 p-4 rounded-xl border text-xs ${
              darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30'
            }`}>
              <div>
                <span className="block text-[10px] uppercase font-semibold text-brand-gold">Fabric Composition</span>
                <span className="font-bold">{product.fabricType}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-semibold text-brand-gold">Minimum Order</span>
                <span className="font-bold">{product.moq}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-semibold text-brand-gold">Standard Width</span>
                <span className="font-bold">{product.width}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-semibold text-brand-gold">Fabric Weight</span>
                <span className="font-bold">{product.gsm}</span>
              </div>
            </div>

            {/* In-House Guarantee Line */}
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Direct Manufacturing & Color Fastness Assured</span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-4 border-t border-brand-gold/20">
            <a
              href={`https://wa.me/${siteConfig.whatsappPhone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire Product on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, '')}`}
              className={`w-full py-2.5 px-4 rounded-xl border font-semibold text-xs text-center flex items-center justify-center gap-2 transition-all ${
                darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-brand-gold' : 'bg-gray-100 border-gray-300 text-gray-800'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Call Owner (+91 {siteConfig.primaryPhone})</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailsModal;
