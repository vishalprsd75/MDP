import React from 'react';
import { siteConfig } from '../config/siteConfig';

const Logo = ({ darkMode = true, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-10 sm:h-11',
    md: 'h-12 sm:h-14 lg:h-16',
    lg: 'h-16 sm:h-20 lg:h-24',
  };

  const currentHeight = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center shrink-0 group transition-transform duration-300 ${className}`}>
      {/* Official Client 3D Metallic Logo Emblem (Contains MUNNA DYEING PRINTING in artwork) */}
      {siteConfig.logoImage ? (
        <img
          src={siteConfig.logoImage}
          alt={siteConfig.businessName}
          className={`${currentHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.25)]`}
        />
      ) : (
        /* Text Fallback */
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold-light via-brand-gold to-brand-gold-dark p-[1px] flex items-center justify-center shadow-lg">
            <div className={`w-full h-full rounded-[11px] flex items-center justify-center font-heading font-bold ${
              darkMode ? 'bg-brand-dark text-brand-gold' : 'bg-brand-cream text-brand-gold-dark'
            }`}>
              MDP
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-lg leading-none ${darkMode ? 'text-white' : 'text-gray-900'}`}>MUNNA</span>
            <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase">Dyeing Printing</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
