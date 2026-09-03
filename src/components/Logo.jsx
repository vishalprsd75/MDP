import React from 'react';
import { siteConfig } from '../config/siteConfig';

const Logo = ({ darkMode = true, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: {
      imgHeight: 'h-9 sm:h-11',
      badge: 'w-8 h-8 text-xs',
      title: 'text-base sm:text-lg',
      subtitle: 'text-[9px]',
    },
    md: {
      imgHeight: 'h-11 sm:h-14 lg:h-16',
      badge: 'w-10 h-10 text-sm',
      title: 'text-lg sm:text-2xl',
      subtitle: 'text-[10px] sm:text-xs',
    },
    lg: {
      imgHeight: 'h-16 sm:h-20 lg:h-24',
      badge: 'w-14 h-14 text-lg',
      title: 'text-2xl sm:text-4xl',
      subtitle: 'text-xs sm:text-sm',
    },
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group transition-transform duration-300 ${className}`}>
      {/* Official Client Transparent 3D Metallic Logo Emblem */}
      {siteConfig.logoImage ? (
        <div className="relative flex items-center shrink-0">
          <img
            src={siteConfig.logoImage}
            alt={siteConfig.businessName}
            className={`${currentSize.imgHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.25)]`}
          />
        </div>
      ) : (
        /* Text Fallback */
        <div className={`${currentSize.badge} rounded-xl bg-gradient-to-br from-brand-gold-light via-brand-gold to-brand-gold-dark p-[1px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 shrink-0`}>
          <div className={`w-full h-full rounded-[11px] flex items-center justify-center font-heading font-bold tracking-tighter ${
            darkMode ? 'bg-brand-dark text-brand-gold' : 'bg-brand-cream text-brand-gold-dark'
          }`}>
            MDP
          </div>
        </div>
      )}

      {/* Brand Title (Visible on all viewports for maximum clarity) */}
      <div className="flex flex-col justify-center">
        <span className={`font-heading font-extrabold tracking-wider leading-none group-hover:text-brand-gold transition-colors ${currentSize.title} ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          MUNNA
        </span>
        <span className={`font-bold text-brand-gold tracking-[0.2em] uppercase mt-0.5 ${currentSize.subtitle}`}>
          DYEING PRINTING
        </span>
      </div>
    </div>
  );
};

export default Logo;
