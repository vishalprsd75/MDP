import React, { useState, useEffect } from 'react';
import { products, productCategories } from '../data/products';
import { siteConfig } from '../config/siteConfig';
import { ArrowLeft, Search, MessageSquare, Eye, ArrowUpDown, X, Home, ChevronRight, ShoppingBag, Tag, Filter, Layers, Check } from 'lucide-react';

const CategoryStorePage = ({ category = 'All', onBackToHome, onOpenProductDetails, onSelectCategory, darkMode = true }) => {
  const [activeCategory, setActiveCategory] = useState(category);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category]);

  // Compute category product counts dynamically
  const getCategoryCount = (catName) => {
    if (catName === 'All') return products.length;
    return products.filter((p) => p.category === catName).length;
  };

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

  const handleCategoryClick = (catName) => {
    setActiveCategory(catName);
    if (onSelectCategory) onSelectCategory(catName);
    setMobileFilterOpen(false);
  };

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-colors duration-500 ${
      darkMode ? 'bg-brand-dark text-gray-200' : 'bg-brand-cream text-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation & Breadcrumbs Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-gold/20">
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

        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className={`w-full py-3 px-4 rounded-xl border font-bold text-xs flex items-center justify-between transition-colors ${
              darkMode ? 'bg-brand-card border-brand-gold/30 text-brand-gold' : 'bg-white border-brand-gold/40 text-brand-dark shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-brand-gold" />
              <span>Browse Categories ({activeCategory})</span>
            </div>
            <ChevronRight className={`w-4 h-4 transition-transform ${mobileFilterOpen ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Main E-Commerce Catalog Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR COLUMN: CATEGORIES & SEARCH */}
          <aside className={`lg:col-span-3 space-y-6 ${
            mobileFilterOpen ? 'block mb-6' : 'hidden lg:block'
          }`}>
            
            {/* Categories Sidebar Card */}
            <div className={`p-5 rounded-2xl border shadow-xl sticky top-28 ${
              darkMode ? 'bg-brand-card border-brand-gold/30' : 'bg-white border-brand-gold/40'
            }`}>
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-brand-gold/20 text-brand-gold font-bold text-xs uppercase tracking-wider">
                <Filter className="w-4 h-4" />
                <span>Categories</span>
              </div>

              {/* Category List */}
              <div className="space-y-1.5">
                {productCategories.map((catName) => {
                  const isActive = activeCategory === catName;
                  const count = getCategoryCount(catName);

                  return (
                    <button
                      key={catName}
                      onClick={() => handleCategoryClick(catName)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all duration-200 text-left ${
                        isActive
                          ? 'bg-gold-gradient text-brand-dark shadow-md font-bold'
                          : darkMode
                            ? 'text-gray-300 hover:bg-brand-surface hover:text-brand-gold'
                            : 'text-gray-800 hover:bg-brand-cream hover:text-brand-gold-dark'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isActive && <Check className="w-3.5 h-3.5 shrink-0" />}
                        <span className="truncate">{catName === 'All' ? 'All Collections' : catName}</span>
                      </div>

                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isActive
                          ? 'bg-brand-dark/20 text-brand-dark'
                          : darkMode
                            ? 'bg-brand-surface text-brand-gold border border-brand-gold/20'
                            : 'bg-brand-cream text-gray-700 border border-brand-gold/30'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Box in Sidebar */}
              <div className="mt-6 pt-5 border-t border-brand-gold/20">
                <span className="block text-[10px] uppercase font-bold text-brand-gold mb-2 tracking-wider">Search Catalog</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gold">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search fabric name..."
                    className={`w-full pl-8 pr-8 py-2 rounded-xl border text-xs font-medium focus:outline-none focus:ring-1 focus:ring-brand-gold ${
                      darkMode
                        ? 'bg-brand-surface/90 border-brand-gold/30 text-white placeholder-gray-400'
                        : 'bg-brand-cream/60 border-brand-gold/40 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-400 hover:text-brand-gold"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>

          </aside>

          {/* RIGHT PRODUCT CATALOG COLUMN */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Header & Sort Selector Bar */}
            <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              darkMode ? 'bg-brand-card/80 border-brand-gold/20' : 'bg-white border-brand-gold/30 shadow-sm'
            }`}>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold block">Selected Collection</span>
                <h2 className={`font-heading text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {activeCategory === 'All' ? 'All Fabric Collections' : `${activeCategory} Collection`}
                </h2>
                <p className="text-xs text-gray-400 font-light mt-0.5">
                  Showing {filtered.length} fabrics matching your criteria
                </p>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1.5 text-xs text-brand-gold font-semibold uppercase tracking-wider">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Sort by:</span>
                </div>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`px-3 py-2 rounded-xl border text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-brand-gold ${
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

            {/* Empty Search State */}
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

            {/* Product Grid (2 Columns Mobile, 3 Columns Desktop) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
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
            <div className={`mt-10 p-6 sm:p-8 rounded-2xl border text-center flex flex-col sm:flex-row items-center justify-between gap-6 ${
              darkMode
                ? 'bg-gradient-to-r from-brand-card via-brand-surface to-brand-card border-brand-gold/40'
                : 'bg-white border-brand-gold/40 shadow-xl'
            }`}>
              <div className="text-left space-y-1">
                <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest">
                  <Tag className="w-4 h-4" />
                  <span>Wholesale & Custom Orders</span>
                </div>
                <h4 className={`font-heading text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
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

          </main>

        </div>

      </div>
    </div>
  );
};

export default CategoryStorePage;
