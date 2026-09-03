import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { products, productCategories } from '../data/products';
import { siteConfig } from '../config/siteConfig';
import { Search, ShoppingBag, MessageSquare, Tag, Eye, ArrowRight, X, Layers, Sparkles, Package } from 'lucide-react';

const categoryMeta = {
  'Dyeable Base': {
    title: 'Dyeable Fabric Bases',
    subtitle: 'Pure Cotton, Mulberry Silk & Chiffon Base Materials for Custom Dye Vats',
    icon: Layers,
    description: 'High-absorbency raw fabric bases engineered for uniform color fastness, shade precision, and custom dyeing.'
  },
  'Traditional Prints': {
    title: 'Traditional Hand Prints',
    subtitle: 'Authentic Shibori, Teak Block Print, Kalamkari & Wax Batik Yardage',
    icon: Sparkles,
    description: 'Artisanal hand-crafted surface prints stamped and dyed using organic dyes and heritage techniques.'
  },
  'Wholesale Rolls': {
    title: 'Factory Wholesale Rolls',
    subtitle: 'Bulk Fabric Rolls & Factory Direct Yardage',
    icon: Package,
    description: 'Bulk fabric rolls available at direct manufacturer prices for apparel brands and boutique designers.'
  }
};

const Sales = ({ darkMode = true, onOpenProductDetails }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Group products by category for categorized layout
  const categoriesList = ['Dyeable Base', 'Traditional Prints', 'Wholesale Rolls'];

  // Global search filtering across all categories
  const matchesSearch = (product) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q) ||
      product.fabricType.toLowerCase().includes(q) ||
      (product.description && product.description.toLowerCase().includes(q))
    );
  };

  const isFiltering = activeCategory !== 'All' || searchQuery.trim() !== '';

  const filteredProducts = products.filter((product) => {
    const matchesCat = activeCategory === 'All' || product.category === activeCategory;
    return matchesCat && matchesSearch(product);
  });

  return (
    <section id="sales" className={`py-20 relative transition-colors duration-500 border-t ${
      darkMode ? 'bg-brand-dark border-brand-surface' : 'bg-brand-cream border-brand-cream-dark'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Direct Factory Store"
          title="Fabric Sales & Wholesale Catalog"
          subtitle="Explore our categorized fabric collections. Order dyeable bases and traditional printed yardage directly from our Hyderabad manufacturing unit."
          darkMode={darkMode}
        />

        {/* Search Bar & Category Navigation Bar */}
        <div className="max-w-4xl mx-auto mb-14 space-y-6">
          
          {/* Search Input Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-gold">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fabrics by name, craft, or category..."
              className={`w-full pl-11 pr-10 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                darkMode
                  ? 'bg-brand-card/90 border-brand-gold/30 text-white placeholder-gray-400'
                  : 'bg-white border-brand-gold/40 text-gray-900 placeholder-gray-500 shadow-sm'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-brand-gold"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Horizontally Scrollable Category Switcher Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto whitespace-nowrap pb-2 px-2 scrollbar-none">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 ${
                  activeCategory === cat
                    ? 'bg-gold-gradient text-brand-dark shadow-md scale-105 font-bold'
                    : darkMode
                      ? 'bg-brand-surface text-gray-300 border border-brand-gold/20 hover:border-brand-gold hover:text-brand-gold'
                      : 'bg-white text-gray-700 border border-brand-gold/30 hover:border-brand-gold-dark hover:text-brand-gold-dark shadow-sm'
                }`}
              >
                {cat === 'All' ? 'All Collections' : cat}
              </button>
            ))}
          </div>

        </div>

        {/* Empty Search State */}
        {filteredProducts.length === 0 && (
          <div className={`text-center py-16 px-4 rounded-2xl border max-w-md mx-auto ${
            darkMode ? 'bg-brand-card border-brand-gold/20' : 'bg-white border-brand-gold/30 shadow-sm'
          }`}>
            <Search className="w-10 h-10 text-brand-gold mx-auto mb-3 opacity-60" />
            <h4 className={`font-heading text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              No fabrics found
            </h4>
            <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No results found matching "{searchQuery}". Try searching for cotton, silk, or shibori.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-4 px-4 py-2 rounded-lg bg-gold-gradient text-brand-dark font-bold text-xs"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW 1: CATEGORIZED CATALOG LAYOUT (When "All Collections" is active) */}
        {/* ========================================================= */}
        {!isFiltering && (
          <div className="space-y-16">
            {categoriesList.map((catKey) => {
              const categoryProducts = products.filter(p => p.category === catKey);
              const meta = categoryMeta[catKey] || { title: catKey, subtitle: '', icon: Layers, description: '' };
              const IconComp = meta.icon;

              if (categoryProducts.length === 0) return null;

              return (
                <div key={catKey} className={`rounded-3xl border p-6 sm:p-10 ${
                  darkMode ? 'bg-brand-card/40 border-brand-gold/20' : 'bg-white/60 border-brand-gold/30 shadow-sm'
                }`}>
                  
                  {/* Category Header Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-brand-gold/20">
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className={`font-heading text-2xl sm:text-3xl font-bold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {meta.title}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-[10px] font-bold">
                            {categoryProducts.length} Products
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-brand-gold font-medium mt-0.5">
                          {meta.subtitle}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveCategory(catKey)}
                      className={`shrink-0 px-4 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                        darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-brand-gold' : 'bg-white border-brand-gold/40 text-gray-800 hover:text-brand-gold-dark shadow-sm'
                      }`}
                    >
                      <span>View All {meta.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Category Product Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryProducts.map((product) => {
                      const productImage = (product.images && product.images[0]) || product.image || '/images/gallery_dyeing.jpg';
                      const whatsappMessage = encodeURIComponent(
                        `Hello ${siteConfig.businessName},\nI am interested in ordering:\n📦 Product: ${product.name}\n📂 Category: ${product.category}\n${product.showPrice ? `💰 Rate: ₹${product.price}/meter\n` : ''}📐 MOQ: ${product.moq}\n\nPlease share availability and wholesale details.`
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
                            {/* Product Image */}
                            <div
                              onClick={() => onOpenProductDetails && onOpenProductDetails(product)}
                              className="relative aspect-[4/3] overflow-hidden bg-brand-surface cursor-pointer"
                            >
                              <img
                                src={productImage}
                                alt={product.name}
                                loading="lazy"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
                              
                              <div className="absolute top-3 left-3 z-10">
                                <span className="px-3 py-1 rounded-full bg-brand-dark/90 border border-brand-gold/40 text-brand-gold text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                                  {product.badge || product.category}
                                </span>
                              </div>

                              <div className="absolute bottom-3 left-3 z-10">
                                {product.showPrice ? (
                                  <div className="px-3.5 py-1.5 rounded-xl bg-gold-gradient text-brand-dark font-heading font-extrabold text-base shadow-lg flex items-center gap-1">
                                    <span>₹{product.price}</span>
                                    <span className="text-xs font-semibold lowercase font-body">/ {product.priceUnit || 'meter'}</span>
                                  </div>
                                ) : (
                                  <div className="px-3 py-1.5 rounded-xl bg-brand-dark/90 border border-brand-gold/50 text-brand-gold font-bold text-xs shadow-lg backdrop-blur-sm">
                                    Contact for Price
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Info */}
                            <div className="p-5 space-y-3">
                              <h4
                                onClick={() => onOpenProductDetails && onOpenProductDetails(product)}
                                className={`font-heading text-lg font-bold transition-colors cursor-pointer group-hover:text-brand-gold line-clamp-1 ${
                                  darkMode ? 'text-white' : 'text-gray-900'
                                }`}
                              >
                                {product.name}
                              </h4>

                              <p className={`text-xs leading-relaxed font-light line-clamp-2 ${
                                darkMode ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                                {product.description}
                              </p>

                              {/* Specs */}
                              <div className={`grid grid-cols-3 gap-2 p-2.5 rounded-xl border text-center text-xs ${
                                darkMode ? 'bg-brand-surface/60 border-brand-gold/20 text-gray-300' : 'bg-brand-cream border-brand-gold/30 text-gray-800'
                              }`}>
                                <div>
                                  <span className="block text-[9px] uppercase font-semibold text-brand-gold">MOQ</span>
                                  <span className="font-bold text-[11px]">{product.moq}</span>
                                </div>
                                <div>
                                  <span className="block text-[9px] uppercase font-semibold text-brand-gold">Width</span>
                                  <span className="font-bold text-[11px]">{product.width}</span>
                                </div>
                                <div>
                                  <span className="block text-[9px] uppercase font-semibold text-brand-gold">GSM</span>
                                  <span className="font-bold text-[11px]">{product.gsm}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* CTAs */}
                          <div className="p-5 pt-0 space-y-2">
                            <button
                              onClick={() => onOpenProductDetails && onOpenProductDetails(product)}
                              className={`w-full py-2.5 px-3 rounded-xl border font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 ${
                                darkMode ? 'bg-brand-surface/80 border-brand-gold/30 text-gray-200 hover:text-brand-gold' : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200'
                              }`}
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>View Fabric Details</span>
                            </button>

                            <a
                              href={`https://wa.me/${siteConfig.whatsappPhone}?text=${whatsappMessage}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-3 px-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                            >
                              <MessageSquare className="w-4 h-4" />
                              <span>Order on WhatsApp</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                          </div>

                        </div>
                      );
                    })}
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW 2: FILTERED / SEARCH COLLECTION VIEW */}
        {/* ========================================================= */}
        {isFiltering && (
          <div className="space-y-6">
            
            {/* Filter Sub-header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-brand-gold/20">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">Category Collection</span>
                <h3 className={`font-heading text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {activeCategory === 'All' ? `Search Results for "${searchQuery}"` : `${activeCategory} Collection`}
                </h3>
              </div>
              <span className="text-xs text-brand-gold font-semibold">
                Showing {filteredProducts.length} fabrics
              </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => {
                const productImage = (product.images && product.images[0]) || product.image || '/images/gallery_dyeing.jpg';
                const whatsappMessage = encodeURIComponent(
                  `Hello ${siteConfig.businessName},\nI am interested in ordering:\n📦 Product: ${product.name}\n📂 Category: ${product.category}\n${product.showPrice ? `💰 Rate: ₹${product.price}/meter\n` : ''}📐 MOQ: ${product.moq}\n\nPlease share availability and wholesale details.`
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
                      <div
                        onClick={() => onOpenProductDetails && onOpenProductDetails(product)}
                        className="relative aspect-[4/3] overflow-hidden bg-brand-surface cursor-pointer"
                      >
                        <img
                          src={productImage}
                          alt={product.name}
                          loading="lazy"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
                        
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-3 py-1 rounded-full bg-brand-dark/90 border border-brand-gold/40 text-brand-gold text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                            {product.badge || product.category}
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-3 z-10">
                          {product.showPrice ? (
                            <div className="px-3.5 py-1.5 rounded-xl bg-gold-gradient text-brand-dark font-heading font-extrabold text-base shadow-lg flex items-center gap-1">
                              <span>₹{product.price}</span>
                              <span className="text-xs font-semibold lowercase font-body">/ {product.priceUnit || 'meter'}</span>
                            </div>
                          ) : (
                            <div className="px-3 py-1.5 rounded-xl bg-brand-dark/90 border border-brand-gold/50 text-brand-gold font-bold text-xs shadow-lg backdrop-blur-sm">
                              Contact for Price
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-5 space-y-3">
                        <h4
                          onClick={() => onOpenProductDetails && onOpenProductDetails(product)}
                          className={`font-heading text-lg font-bold transition-colors cursor-pointer group-hover:text-brand-gold line-clamp-1 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {product.name}
                        </h4>

                        <p className={`text-xs leading-relaxed font-light line-clamp-2 ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {product.description}
                        </p>

                        {/* Specs */}
                        <div className={`grid grid-cols-3 gap-2 p-2.5 rounded-xl border text-center text-xs ${
                          darkMode ? 'bg-brand-surface/60 border-brand-gold/20 text-gray-300' : 'bg-brand-cream border-brand-gold/30 text-gray-800'
                        }`}>
                          <div>
                            <span className="block text-[9px] uppercase font-semibold text-brand-gold">MOQ</span>
                            <span className="font-bold text-[11px]">{product.moq}</span>
                          </div>
                          <div>
                            <span className="block text-[9px] uppercase font-semibold text-brand-gold">Width</span>
                            <span className="font-bold text-[11px]">{product.width}</span>
                          </div>
                          <div>
                            <span className="block text-[9px] uppercase font-semibold text-brand-gold">GSM</span>
                            <span className="font-bold text-[11px]">{product.gsm}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="p-5 pt-0 space-y-2">
                      <button
                        onClick={() => onOpenProductDetails && onOpenProductDetails(product)}
                        className={`w-full py-2.5 px-3 rounded-xl border font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 ${
                          darkMode ? 'bg-brand-surface/80 border-brand-gold/30 text-gray-200 hover:text-brand-gold' : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Fabric Details</span>
                      </button>

                      <a
                        href={`https://wa.me/${siteConfig.whatsappPhone}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Order on WhatsApp</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* Wholesale Bulk Order Highlight Banner */}
        <div className={`mt-16 p-6 sm:p-8 rounded-2xl border text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 ${
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
              Need Bulk Quantities or Custom Dye Vats?
            </h4>
            <p className={`text-xs sm:text-sm font-light ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Contact owner MD. Mansoor directly for factory wholesale pricing and custom textile specifications.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappPhone}?text=Hello%20${encodeURIComponent(siteConfig.businessName)},%20I%20want%20to%20inquire%20about%20bulk%20wholesale%20fabric%20rates.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gold-gradient text-brand-dark font-bold text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Inquire for Bulk Orders</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Sales;
