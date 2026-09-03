import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { salesProducts, businessInfo } from '../data/businessData';
import { ShoppingBag, MessageSquare, Tag, ShieldCheck, ArrowRight, Layers } from 'lucide-react';

const Sales = ({ darkMode = true }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Dyeable Base', 'Traditional Prints', 'Wholesale Rolls'];

  const filteredProducts = activeCategory === 'All'
    ? salesProducts
    : salesProducts.filter(p => p.category === activeCategory);

  return (
    <section id="sales" className={`py-20 relative transition-colors duration-500 border-t ${
      darkMode ? 'bg-brand-dark border-brand-surface' : 'bg-brand-cream border-brand-cream-dark'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Direct Factory Store"
          title="Fabric Sales & Wholesale Catalog"
          subtitle="Order premium dyeable fabric bases and traditional printed yardage directly from our Hyderabad manufacturing unit."
          darkMode={darkMode}
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-brand-dark shadow-md scale-105'
                  : darkMode
                    ? 'bg-brand-surface text-gray-300 border border-brand-gold/20 hover:border-brand-gold hover:text-brand-gold'
                    : 'bg-white text-gray-700 border border-brand-gold/30 hover:border-brand-gold-dark hover:text-brand-gold-dark shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const whatsappMessage = encodeURIComponent(
              `Hello Munna Dyeing Printing,\nI am interested in ordering:\n📦 Product: ${product.title}\n💰 Rate: ₹${product.pricePerMeter}/meter\n📐 MOQ: ${product.moq}\n\nPlease let me know the availability and bulk payment details.`
            );

            return (
              <div
                key={product.id}
                className={`group relative rounded-2xl border overflow-hidden transition-all duration-500 flex flex-col justify-between hover:border-brand-gold hover:shadow-2xl ${
                  darkMode
                    ? 'bg-brand-card border-brand-gold/20 hover:shadow-brand-gold/10'
                    : 'bg-white border-brand-gold/30 shadow-sm hover:shadow-brand-gold/20'
                }`}
              >
                <div>
                  {/* Product Image Frame */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-surface">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>

                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                      <span className="px-3 py-1 rounded-full bg-brand-dark/90 border border-brand-gold/40 text-brand-gold text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                        {product.badge}
                      </span>
                    </div>

                    {/* Category Pill */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2.5 py-1 rounded-md bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-[10px] font-semibold tracking-wide backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <div className="px-3.5 py-1.5 rounded-xl bg-gold-gradient text-brand-dark font-heading font-extrabold text-lg shadow-lg flex items-center gap-1">
                        <span>₹{product.pricePerMeter}</span>
                        <span className="text-xs font-semibold lowercase font-body">/ meter</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    
                    <h3 className={`font-heading text-xl font-bold transition-colors group-hover:text-brand-gold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {product.title}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed font-light ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {product.description}
                    </p>

                    {/* Fabric Specs Grid */}
                    <div className={`grid grid-cols-3 gap-2 p-3 rounded-xl border text-center text-xs ${
                      darkMode ? 'bg-brand-surface/60 border-brand-gold/20 text-gray-300' : 'bg-brand-cream border-brand-gold/30 text-gray-800'
                    }`}>
                      <div>
                        <span className="block text-[10px] uppercase font-semibold text-brand-gold">MOQ</span>
                        <span className="font-bold">{product.moq}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase font-semibold text-brand-gold">Width</span>
                        <span className="font-bold">{product.width}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase font-semibold text-brand-gold">GSM</span>
                        <span className="font-bold">{product.gsm}</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Order Button */}
                <div className="p-6 sm:p-7 pt-0">
                  <a
                    href={`https://wa.me/${businessInfo.whatsappPhone}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Order on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Wholesale Bulk Order Highlight Banner */}
        <div className={`mt-14 p-6 sm:p-8 rounded-2xl border text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 ${
          darkMode
            ? 'bg-gradient-to-r from-brand-card via-brand-surface to-brand-card border-brand-gold/40'
            : 'bg-white border-brand-gold/40 shadow-xl'
        }`}>
          <div className="text-left space-y-1">
            <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest">
              <Tag className="w-4 h-4" />
              <span>Wholesale & Custom Orders</span>
            </div>
            <h4 className={`font-heading text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Need Bulk Quantities (&gt;50 Meters)?
            </h4>
            <p className={`text-xs sm:text-sm font-light ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Contact owner MD. Mansoor directly for factory wholesale pricing and custom dye vats.
            </p>
          </div>

          <a
            href={`https://wa.me/${businessInfo.whatsappPhone}?text=Hello%20Munna%20Dyeing%20Printing,%20I%20want%20to%20inquire%20about%20bulk%20wholesale%20fabric%20rates.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gold-gradient text-brand-dark font-bold text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Inquire Bulk Rates</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Sales;
