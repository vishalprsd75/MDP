import React from 'react';
import { siteConfig } from '../config/siteConfig';

const Logo = ({ darkMode = true, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: {
      imgHeight: 'h-9 sm:h-10',
      badge: 'w-8 h-8 text-xs',
      title: 'text-lg',
      subtitle: 'text-[9px]',
    },
    md: {
      imgHeight: 'h-11 sm:h-14',
      badge: 'w-10 h-10 text-sm',
      title: 'text-xl sm:text-2xl',
      subtitle: 'text-[10px] sm:text-xs',
    },
    lg: {
      imgHeight: 'h-16 sm:h-20',
      badge: 'w-14 h-14 text-lg',
      title: 'text-3xl sm:text-4xl',
      subtitle: 'text-xs sm:text-sm',
    },
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center gap-3 group transition-transform duration-300 ${className}`}>
      {/* Official Client 3D Metallic Logo Emblem */}
      {siteConfig.logoImage ? (
        <div className="relative rounded-xl overflow-hidden shadow-lg p-0.5 bg-gradient-to-br from-brand-gold/40 via-brand-amber/30 to-brand-gold/10 border border-brand-gold/30 group-hover:scale-105 group-hover:border-brand-gold group-hover:shadow-brand-gold/20 transition-all duration-300">
          <img
            src={siteConfig.logoImage}
            alt={siteConfig.businessName}
            className={`${currentSize.imgHeight} w-auto object-contain rounded-lg shadow-inner bg-brand-dark/90 p-0.5`}
          />
        </div>
      ) : (
        /* Fallback Emblem */
        <div className={`${currentSize.badge} rounded-xl bg-gradient-to-br from-brand-gold-light via-brand-gold to-brand-gold-dark p-[1px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 shrink-0`}>
          <div className={`w-full h-full rounded-[11px] flex items-center justify-center font-heading font-bold tracking-tighter ${
            darkMode ? 'bg-brand-dark text-brand-gold' : 'bg-brand-cream text-brand-gold-dark'
          }`}>
            MDP
          </div>
        </div>
      )}

      {/* Brand Title (Rendered for extra clarity on larger screens) */}
      <div className="hidden sm:flex flex-col">
        <span className={`font-heading font-bold tracking-wider leading-tight group-hover:text-brand-gold transition-colors ${currentSize.title} ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          MUNNA
        </span>
        <span className={`font-semibold text-brand-gold tracking-[0.2em] uppercase ${currentSize.subtitle}`}>
          DYEING PRINTING
        </span>
      </div>
    </div>
  );
};

export default Logo;
