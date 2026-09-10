import React from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * Official MDP Navbar Brand Identity
 * 
 * Master Horizontal Lockup:
 * [FIXED MDP LOGO] + MUNNA DYEING PRINTING
 * 
 * Colors:
 * - Dark Mode: Radiant 3D Gold Gradient for "MUNNA" + Royal Sapphire Blue for "DYEING PRINTING"
 * - Light Mode: Deep Imperial Royal Navy for "MUNNA" + Burnished Antique Gold for "DYEING PRINTING"
 */
const Logo = ({
  darkMode = true,
  size = 'md',
  className = ''
}) => {

  // The 100% Fixed, Approved MDP Logo Emblem (Never modified, recolored, or cropped)
  const renderFixedLogo = (imgClass) => {
    if (!siteConfig.logoImage) {
      return (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold-light via-brand-gold to-brand-gold-dark p-[1.5px] flex items-center justify-center shadow-lg shrink-0">
          <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-heading font-extrabold text-sm ${
            darkMode ? 'bg-brand-dark text-brand-gold' : 'bg-brand-cream text-brand-gold-dark'
          }`}>
            MDP
          </div>
        </div>
      );
    }

    return (
      <div className="relative flex items-center shrink-0">
        <img
          src={siteConfig.logoImage}
          alt="MDP Official Crest"
          className={`${imgClass} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter ${
            darkMode
              ? 'drop-shadow-[0_2px_14px_rgba(212,175,55,0.45)] drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]'
              : 'drop-shadow-[0_2px_8px_rgba(180,130,20,0.3)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]'
          }`}
        />
      </div>
    );
  };

  const isFooter = size === 'lg';

  return (
    <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2.5 sm:gap-3.5 md:gap-4 ${className}`}>
      {/* 1. Approved MDP Crest */}
      {renderFixedLogo(
        isFooter
          ? 'h-11 sm:h-13 md:h-15 lg:h-16'
          : 'h-8 sm:h-9 md:h-11 lg:h-12'
      )}

      {/* 2. Dual-Tone Brand Divider (Gold to Royal Blue to Gold) */}
      <span
        className={`w-[2px] ${
          isFooter ? 'h-11 sm:h-13 md:h-15' : 'h-8 sm:h-9 md:h-11'
        } bg-gradient-to-b from-brand-gold-light via-[#38bdf8] to-brand-gold-dark rounded-full shrink-0 block shadow-[0_0_10px_rgba(212,175,55,0.4)]`}
        aria-hidden="true"
      />

      {/* 3. Complete Business Name: MUNNA DYEING PRINTING */}
      <div className="flex flex-col justify-center select-none">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2.5 md:gap-3 whitespace-nowrap">
          {/* Primary Name: MUNNA (Large, Bold & Illuminated in 3D Gold) */}
          <span
            className={`font-heading font-black tracking-[0.05em] uppercase transition-all duration-300 leading-none ${
              isFooter
                ? 'text-3xl sm:text-4xl md:text-5xl'
                : 'text-xl sm:text-2xl md:text-3xl lg:text-[34px]'
            } ${
              darkMode
                ? 'bg-gradient-to-r from-[#fff3b0] via-[#ffd700] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,215,0,0.45)] group-hover:brightness-110'
                : 'text-[#0b2559] group-hover:text-brand-gold-dark drop-shadow-sm'
            }`}
          >
            MUNNA
          </span>

          {/* Secondary Part: DYEING PRINTING (Vibrant Royal Sapphire Blue with Gold Accents) */}
          <div className="flex items-center gap-1.5 mt-0.5 sm:mt-0 leading-none">
            <span
              className={`font-bold transition-colors duration-300 ${
                darkMode ? 'text-brand-gold' : 'text-[#0b2559]'
              }`}
            >
              —
            </span>
            <span
              className={`font-body font-black tracking-[0.2em] sm:tracking-[0.26em] uppercase transition-all duration-300 ${
                isFooter
                  ? 'text-xs sm:text-sm md:text-base'
                  : 'text-[9.5px] sm:text-[11px] md:text-xs lg:text-[14px]'
              } ${
                darkMode
                  ? 'text-[#38bdf8] group-hover:text-[#60a5fa] drop-shadow-[0_1px_8px_rgba(56,189,248,0.4)]'
                  : 'text-[#a37f37] group-hover:text-[#0b2559]'
              }`}
            >
              DYEING PRINTING
            </span>
            <span
              className={`font-bold transition-colors duration-300 ${
                darkMode ? 'text-brand-gold' : 'text-[#0b2559]'
              }`}
            >
              —
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
