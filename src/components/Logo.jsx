import React from 'react';
import { siteConfig } from '../config/siteConfig';

const Logo = ({ darkMode = true, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12 md:h-14 lg:h-16',
    lg: 'h-14 sm:h-16 md:h-20 lg:h-24',
  };

  const currentHeight = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center shrink-0 group transition-all duration-300 ${className}`}>
      {/* Official 3D Metallic Horizontal Master Logo Emblem */}
      {siteConfig.logoImage ? (
        <img
          src={siteConfig.logoImage}
          alt={siteConfig.businessName}
          className={`${currentHeight} w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
            darkMode
              ? 'filter drop-shadow-[0_2px_16px_rgba(212,175,55,0.45)] drop-shadow-[0_0_25px_rgba(212,175,55,0.2)] group-hover:drop-shadow-[0_0_30px_rgba(212,175,55,0.7)]'
              : 'filter drop-shadow-[0_2px_12px_rgba(180,130,20,0.35)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.12)] group-hover:drop-shadow-[0_4px_20px_rgba(180,130,20,0.55)]'
          }`}
        />
      ) : (
        /* Text Fallback */
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-gold-light via-brand-gold to-brand-gold-dark p-[1.5px] flex items-center justify-center shadow-lg">
            <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-heading font-extrabold text-sm ${
              darkMode ? 'bg-brand-dark text-brand-gold' : 'bg-brand-cream text-brand-gold-dark'
            }`}>
              MDP
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-black text-xl leading-none tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>MUNNA</span>
            <span className="text-[11px] font-bold text-brand-gold tracking-[0.2em] uppercase mt-0.5">Dyeing Printing</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
