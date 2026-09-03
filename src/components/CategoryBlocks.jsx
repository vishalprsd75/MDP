import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { getDynamicCategories } from '../data/products';

const CategoryBlocks = ({ darkMode = true, onSelectCategory }) => {
  const dynamicCategories = getDynamicCategories();

  return (
    <div className="mb-14">
      {/* Section Sub-heading */}
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Curated Collections</span>
        <h3 className={`font-heading text-3xl sm:text-4xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Popular Categories
        </h3>
        <p className={`text-xs sm:text-sm mt-1 max-w-xl mx-auto font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Select a category below to explore its full fabric yardage and wholesale catalog.
        </p>
      </div>

      {/* Dynamic Grid of Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dynamicCategories.map((catItem) => {
          return (
            <div
              key={catItem.id}
              onClick={() => onSelectCategory && onSelectCategory(catItem.category)}
              className={`group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 hover:border-brand-gold hover:shadow-2xl flex flex-col justify-between ${
                darkMode ? 'border-brand-gold/30 bg-brand-card' : 'border-brand-gold/40 bg-white shadow-md'
              }`}
            >
              {/* Image Frame with Overlay */}
              <div className="relative h-64 overflow-hidden bg-brand-surface">
                <img
                  src={catItem.image}
                  alt={catItem.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity"></div>
                
                {/* Category Count Tag Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-brand-dark/90 border border-brand-gold/40 text-brand-gold text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {catItem.count} {catItem.count === 1 ? 'Product' : 'Products'}
                  </span>
                </div>

                {/* Floating "See Products" CTA Button on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h4 className="font-heading text-xl font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">
                    {catItem.category}
                  </h4>
                  <p className="text-xs text-gray-300 font-light mb-3 line-clamp-1">
                    {catItem.subtitle}
                  </p>

                  <div className="w-full py-2.5 px-4 rounded-xl bg-brand-dark/90 border border-brand-gold/50 text-brand-gold font-bold text-xs uppercase tracking-wider backdrop-blur-md group-hover:bg-gold-gradient group-hover:text-brand-dark group-hover:border-transparent transition-all flex items-center justify-between shadow-lg">
                    <span>See Products</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBlocks;
