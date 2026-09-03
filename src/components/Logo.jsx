import React from 'react';
import { siteConfig } from '../config/siteConfig';

const Logo = ({ darkMode = true, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: {
      badge: 'w-8 h-8 text-xs',
      title: 'text-lg',
      subtitle: 'text-[9px]',
    },
    md: {
      badge: 'w-10 h-10 text-sm',
      title: 'text-xl sm:text-2xl',
      subtitle: 'text-[10px] sm:text-xs',
    },
    lg: {
      badge: 'w-14 h-14 text-lg',
      title: 'text-3xl sm:text-4xl',
      subtitle: 'text-xs sm:text-sm',
    },
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* MDP Star Icon Badge */}
      <div className={`${currentSize.badge} rounded-lg bg-gradient-to-br from-brand-gold-light via-brand-gold to-brand-gold-dark p-[1px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 shrink-0`}>
        <div className={`w-full h-full rounded-[7px] flex items-center justify-center font-heading font-bold tracking-tighter ${
          darkMode ? 'bg-brand-dark text-brand-gold' : 'bg-brand-cream text-brand-gold-dark'
        }`}>
          {siteConfig.shortName || 'MDP'}
        </div>
      </div>

      {/* Business Name Typography */}
      <div className="flex flex-col">
        <span className={`font-heading font-bold tracking-wider leading-tight group-hover:text-brand-gold transition-colors ${currentSize.title} ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {siteConfig.shortName || 'MUNNA'}
        </span>
        <span className={`font-semibold text-brand-gold tracking-[0.25em] uppercase ${currentSize.subtitle}`}>
          Dyeing Printing
        </span>
      </div>
    </div>
  );
};

export default Logo;
