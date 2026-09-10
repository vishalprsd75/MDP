import React from 'react';
import { siteConfig } from '../config/siteConfig';

const Logo = ({ darkMode = true, size = 'md', className = '' }) => {
  const sizeConfig = {
    sm: {
      img: 'h-8 sm:h-9',
      title: 'text-base sm:text-lg',
      subtitle: 'text-[9px] sm:text-[10px]',
      gap: 'gap-2 sm:gap-2.5',
      divider: 'h-6 sm:h-7',
    },
    md: {
      img: 'h-9 sm:h-11 md:h-13',
      title: 'text-lg sm:text-2xl md:text-[26px]',
      subtitle: 'text-[9px] sm:text-[10px] md:text-xs',
      gap: 'gap-2 sm:gap-3',
      divider: 'h-7 sm:h-9 md:h-10',
    },
    lg: {
      img: 'h-12 sm:h-14 md:h-16',
      title: 'text-2xl sm:text-3xl md:text-4xl',
      subtitle: 'text-xs sm:text-sm md:text-base',
      gap: 'gap-3 sm:gap-4',
      divider: 'h-10 sm:h-12 md:h-14',
    },
  };

  const current = sizeConfig[size] || sizeConfig.md;

  return (
    <div className={`flex items-center shrink-0 group transition-all duration-300 ${current.gap} ${className}`}>
      {/* Official 3D Metallic MDP Crest Emblem */}
      {siteConfig.logoImage ? (
        <div className="relative flex items-center shrink-0">
          <img
            src={siteConfig.logoImage}
            alt="MDP Crest"
            className={`${current.img} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter ${
              darkMode
                ? 'drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)] drop-shadow-[0_0_20px_rgba(212,175,55,0.18)]'
                : 'drop-shadow-[0_2px_8px_rgba(180,130,20,0.3)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.1)]'
            }`}
          />
        </div>
      ) : (
        /* Fallback Emblem */
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold-light via-brand-gold to-brand-gold-dark p-[1.5px] flex items-center justify-center shadow-lg shrink-0">
          <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-heading font-extrabold text-sm ${
            darkMode ? 'bg-brand-dark text-brand-gold' : 'bg-brand-cream text-brand-gold-dark'
          }`}>
            MDP
          </div>
        </div>
      )}

      {/* Elegant Vertical Divider */}
      <span
        className={`w-[1px] ${current.divider} bg-gradient-to-b from-transparent via-brand-gold/40 to-transparent shrink-0 block`}
        aria-hidden="true"
      />

      {/* Prominent High-Impact Business Name Typography */}
      <div className="flex flex-col justify-center select-none">
        <span
          className={`font-heading font-black tracking-[0.06em] leading-none uppercase transition-colors duration-300 ${
            current.title
          } ${
            darkMode
              ? 'text-white group-hover:text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
              : 'text-gray-900 group-hover:text-brand-gold-dark drop-shadow-sm'
          }`}
        >
          MUNNA
        </span>
        <span
          className={`font-bold tracking-[0.2em] sm:tracking-[0.24em] uppercase mt-0.5 sm:mt-1 transition-colors duration-300 ${
            current.subtitle
          } ${
            darkMode
              ? 'text-brand-gold-light group-hover:text-amber-200'
              : 'text-brand-gold-dark group-hover:text-amber-900'
          }`}
        >
          DYEING PRINTING
        </span>
      </div>
    </div>
  );
};

export default Logo;
