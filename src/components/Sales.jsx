import React from 'react';
import SectionHeading from './SectionHeading';
import CategoryBlocks from './CategoryBlocks';
import { siteConfig } from '../config/siteConfig';
import { ShoppingBag, Tag, Sparkles } from 'lucide-react';

const Sales = ({ darkMode = true, onOpenCategoryPage }) => {
  return (
    <section id="sales" className={`py-20 relative transition-colors duration-500 border-t ${
      darkMode ? 'bg-brand-dark border-brand-surface' : 'bg-brand-cream border-brand-cream-dark'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Direct Factory Store"
          title="Fabric Sales & Wholesale Catalog"
          subtitle="Explore our specialized fabric collections. Click any category below to view available fabric yardage and wholesale rolls."
          darkMode={darkMode}
        />

        {/* Popular Categories Showcase Cards (Triggers Dedicated Category Store Page) */}
        <CategoryBlocks
          darkMode={darkMode}
          onSelectCategory={(cat) => {
            if (onOpenCategoryPage) {
              onOpenCategoryPage(cat);
            }
          }}
        />

        {/* Wholesale Bulk Order Highlight Banner */}
        <div className={`mt-10 p-6 sm:p-8 rounded-2xl border text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 ${
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
