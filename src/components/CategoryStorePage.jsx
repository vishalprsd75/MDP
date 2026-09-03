import React, { useState, useEffect } from 'react';
import { products, productCategories } from '../data/products';
import { siteConfig } from '../config/siteConfig';
import { ArrowLeft, Search, MessageSquare, Eye, ArrowUpDown, X, Home, ChevronRight, ShoppingBag, ShieldCheck, Tag } from 'lucide-react';

const categoryDetails = {
  'Dyeable Base': {
    title: 'Georgette & Silk Dyeable Bases',
    subtitle: '100% Pure Cotton, Mulberry Silk & Chiffon Base Fabrics for Custom Dye Vats',
    description: 'High-absorbency fabric bases manufactured specifically for custom shade dyeing, screen printing, and artisanal textile processing.',
    bannerImage: '/images/gallery_dyeing.jpg'
  },
  'Traditional Prints': {
    title: 'Traditional Hand Printed Yardage',
    subtitle: 'Authentic Shibori Tie-Dye, Teak Block Print, Kalamkari & Wax Batik',
    description: 'Artisanal surface-printed fabrics crafted using traditional Indian wood stamps, organic dyes, and wax resist processes.',
    bannerImage: '/images/gallery_block_print.jpg'
  },
  'Wholesale Rolls': {
    title: 'Factory Wholesale Fabric Rolls',
    subtitle: 'Bulk Fabric Rolls & Factory Direct Yardage Orders',
    description: 'Bulk fabric rolls available at direct manufacturer prices for boutique designers, garment factories, and apparel brands.',
    bannerImage: '/images/gallery_batik.jpg'
  },
  'All': {
    title: 'All Fabric Collections',
    subtitle: 'Complete Catalog of Dyeable Bases and Traditional Printed Yardage',
    description: 'Browse our full catalog of factory manufactured dyeable bases, hand block prints, Shibori tie-dye, and wholesale fabric rolls.',
    bannerImage: '/images/hero_textile.jpg'
  }
};

const CategoryStorePage = ({ category = 'All', onBackToHome, onOpenProductDetails, onSelectCategory, darkMode = true }) => {
  const [activeCategory, setActiveCategory] = useState(category);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category]);

  const catMeta = categoryDetails[activeCategory] || categoryDetails['All'];

  // Filter products by active category & search query
  let filtered = products.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery = !q || 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.fabricType.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q));
    return matchesCat && matchesQuery;
  });

  // Sort products
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-colors duration-500 ${
      darkMode ? 'bg-brand-dark text-gray-200' : 'bg-brand-cream text-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation & Breadcrumbs Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-brand-gold/20">
          
          <button
            onClick={onBackToHome}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-bold transition-all w-fit ${
              darkMode
                ? 'bg-brand-surface border-brand-gold/30 text-brand-gold hover:bg-brand-gold/20'
                : 'bg-white border-brand-gold/40 text-brand-gold-dark hover:bg-brand-gold/10 shadow-sm'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Website</span>
          </button>

          <nav className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <button onClick={onBackToHome} className="flex items-center gap-1 hover:text-brand-gold">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3 text-brand-gold" />
            <span className="text-gray-400">Collections</span>
            <ChevronRight className="w-3 h-3 text-brand-gold" />
            <span className="text-brand-gold font-bold">{activeCategory}</span>
          </nav>

        </div>

        {/* Category Hero Banner */}
        <div className={`relative rounded-3xl overflow-hidden border mb-10 p-6 sm:p-10 shadow-2xl ${
          darkMode ? 'border-brand-gold/30 bg-brand-card' : 'border-brand-gold/40 bg-white'
        }`}>
          {/* Banner Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={catMeta.bannerImage}
              alt={catMeta.title}
              className="w-full h-full object-cover object-center opacity-25"
            />
            <div className={`absolute inset-0 ${
              darkMode ? 'bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent' : 'bg-gradient-to-r from-brand-cream via-brand-cream/95 to-transparent'
            }`}></div>
          </div>

          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider">
              <span>Category Collection</span>
            </div>

            <h1 className={`font-heading text-3xl sm:text-5xl font-bold tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {catMeta.title}
            </h1>

            <p className={`text-sm sm:text-base leading-relaxed font-light ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {catMeta.description}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-brand-gold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Direct Manufacturing
              </span>
              <span>•</span>
              <span>{filtered.length} Fabrics Available</span>
            </div>
          </div>
        </div>

        {/* Search, Filter & Sort Control Bar */}
        <div className={`p-4 sm:p-6 rounded-2xl border mb-8 ${
          darkMode ? 'bg-brand-card/80 border-brand-gold/20' : 'bg-white border-brand-gold/30 shadow-sm'
        }`}>
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-gold">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products in this category..."
                className={`w-full pl-10 pr-9 py-2.5 rounded-xl border text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  darkMode
                    ? 'bg-brand-surface/80 border-brand-gold/30 text-white placeholder-gray-400'
                    : 'bg-brand-cream/60 border-brand-gold/40 text-gray-900 placeholder-gray-500'
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

            {/* Sort Selector */}
            <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
              <div className="flex items-center gap-1.5 text-xs text-brand-gold font-semibold uppercase tracking-wider">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span>Sort by:</span>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`px-3 py-2 rounded-xl border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  darkMode
                    ? 'bg-brand-surface border-brand-gold/30 text-white'
                    : 'bg-white border-brand-gold/40 text-gray-900'
                }`}
              >
                <option value="featured">Featured Fabrics</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Fabric Name: A to Z</option>
              </select>
            </div>

          </div>

          {/* Category Navigation Pills */}
          <div className="mt-4 pt-4 border-t border-brand-gold/20 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto whitespace-nowrap pb-1 scrollbar-none">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (onSelectCategory) onSelectCategory(cat);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 shrink-0 ${
                  activeCategory === cat
                    ? 'bg-gold-gradient text-brand-dark shadow-md scale-105 font-bold'
                    : darkMode
                      ? 'bg-brand-surface text-gray-300 border border-brand-gold/20 hover:border-brand-gold hover:text-brand-gold'
                      : 'bg-white text-gray-700 border border-brand-gold/30 hover:border-brand-gold-dark hover:text-brand-gold-dark'
                }`}
              >
                {cat === 'All' ? 'All Collections' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className={`text-center py-16 px-4 rounded-2xl border max-w-md mx-auto ${
            darkMode ? 'bg-brand-card border-brand-gold/20' : 'bg-white border-brand-gold/30 shadow-sm'
          }`}>
            <Search className="w-10 h-10 text-brand-gold mx-auto mb-3 opacity-60" />
            <h4 className={`font-heading text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              No fabrics found
            </h4>
            <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No results matching "{searchQuery}" in {activeCategory}.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-4 px-4 py-2 rounded-lg bg-gold-gradient text-brand-dark font-bold text-xs"
            >
              Show All Collections
            </button>
          </div>
        )}

        {/* Dedicated Product Grid (2 Columns Mobile matching shikhafab.com reference, 4 Columns Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filtered.map((product) => {
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

                    {/* Badge */}
                    <div className="absolute top-2 left-2 z-10">
                      <span className="px-2 py-0.5 rounded-full bg-brand-dark/90 border border-brand-gold/40 text-brand-gold text-[9px] sm:text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                        {product.badge || product.category}
                      </span>
                    </div>

                    {/* Hover Quick Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                      <button
                        onClick={(e) => { e.stopPropagation(); onOpenProductDetails && onOpenProductDetails(product); }}
                        className="w-9 h-9 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
                        title="View Fabric Details"
                      >
                        <Eye className="w-4 h-4 stroke-[2.5]" />
                      </button>

                      <a
                        href={`https://wa.me/${siteConfig.whatsappPhone}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
                        title="Order on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-2 left-2 z-10">
                      {product.showPrice ? (
                        <div className="px-2.5 py-1 rounded-lg bg-gold-gradient text-brand-dark font-heading font-extrabold text-xs sm:text-sm shadow-md flex items-baseline gap-0.5">
                          <span>₹{product.price}</span>
                          <span className="text-[9px] font-semibold lowercase font-body">/ {product.priceUnit || 'm'}</span>
                        </div>
                      ) : (
                        <div className="px-2 py-1 rounded-lg bg-brand-dark/90 border border-brand-gold/50 text-brand-gold font-bold text-[9px] sm:text-[10px] backdrop-blur-sm">
                          Contact Price
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-3 sm:p-4 space-y-2">
                    <h3
                      onClick={() => onOpenProductDetails && onOpenProductDetails(product)}
                      className={`font-heading text-sm sm:text-base font-bold transition-colors cursor-pointer group-hover:text-brand-gold line-clamp-2 leading-snug ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {product.name}
                    </h3>

                    {/* Specs */}
                    <div className={`grid grid-cols-2 gap-1 p-2 rounded-lg border text-center text-[10px] ${
                      darkMode ? 'bg-brand-surface/60 border-brand-gold/20 text-gray-300' : 'bg-brand-cream border-brand-gold/30 text-gray-800'
                    }`}>
                      <div>
                        <span className="block text-[8px] uppercase font-semibold text-brand-gold">MOQ</span>
                        <span className="font-bold">{product.moq}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] uppercase font-semibold text-brand-gold">GSM</span>
                        <span className="font-bold">{product.gsm}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Order Button */}
                <div className="p-3 sm:p-4 pt-0">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappPhone}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-2 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5 transition-all group/btn"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Order</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Wholesale Bulk Order Banner */}
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
    </div>
  );
};

export default CategoryStorePage;
