import React from 'react';
import { ArrowRight, Layers, Sparkles, Package } from 'lucide-react';

const CategoryBlocks = ({ darkMode = true, onSelectCategory }) => {
  const blocks = [
    {
      id: 'dyeable-base',
      title: 'Dyeable Fabric Bases',
      subtitle: 'Pure Cottons, Silks & Chiffons',
      category: 'Dyeable Base',
      image: '/images/gallery_dyeing.jpg',
      icon: Layers,
      count: 'Direct Vat Processing'
    },
    {
      id: 'traditional-prints',
      title: 'Traditional Hand Prints',
      subtitle: 'Shibori, Block, Kalamkari & Batik',
      category: 'Traditional Prints',
      image: '/images/gallery_shibori.jpg',
      icon: Sparkles,
      count: 'Artisanal Craftsmanship'
    },
    {
      id: 'wholesale-rolls',
      title: 'Factory Wholesale Rolls',
      subtitle: 'Bulk Fabric Rolls & Yardage',
      category: 'Wholesale Rolls',
      image: '/images/gallery_batik.jpg',
      icon: Package,
      count: 'Factory Direct Rates'
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Featured Collections</span>
        <h3 className={`font-heading text-2xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Browse Fabric Collections
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blocks.map((block) => {
          const IconComp = block.icon;
          return (
            <div
              key={block.id}
              onClick={() => onSelectCategory && onSelectCategory(block.category)}
              className={`group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 hover:border-brand-gold hover:shadow-2xl ${
                darkMode ? 'border-brand-gold/30 bg-brand-card' : 'border-brand-gold/40 bg-white shadow-md'
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={block.image}
                  alt={block.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent opacity-80 group-hover:opacity-75 transition-opacity"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 z-10 w-10 h-10 rounded-xl bg-brand-dark/80 border border-brand-gold/40 text-brand-gold flex items-center justify-center backdrop-blur-sm">
                  <IconComp className="w-5 h-5" />
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {block.count}
                  </span>
                </div>
              </div>

              {/* Bottom Content Bar */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h4 className={`font-heading text-lg font-bold group-hover:text-brand-gold transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {block.title}
                  </h4>
                  <p className="text-xs text-brand-gold font-medium mt-0.5">
                    {block.subtitle}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center group-hover:bg-gold-gradient group-hover:text-brand-dark transition-all shrink-0">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
