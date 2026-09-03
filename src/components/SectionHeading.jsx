import React from 'react';

const SectionHeading = ({ badge, title, subtitle, darkMode = true }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4 ${
          darkMode
            ? 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold'
            : 'bg-brand-gold/15 border-brand-gold-dark/40 text-brand-gold-dark'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${darkMode ? 'bg-brand-gold' : 'bg-brand-gold-dark'}`}></span>
          {badge}
        </div>
      )}
      
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>

      {/* Decorative Gold Ornament Line */}
      <div className="flex items-center justify-center gap-3 my-3">
        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brand-gold/60"></span>
        <div className="w-2 h-2 rotate-45 border border-brand-gold bg-brand-gold/20"></div>
        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-brand-gold/60"></span>
      </div>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-3 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
