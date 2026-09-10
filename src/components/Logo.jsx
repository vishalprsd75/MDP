import React from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * Logo & Business Name Brand Lockup Component
 * 
 * Supports 6 distinct variations for presenting:
 * [FIXED MDP LOGO] + MUNNA DYEING PRINTING
 * 
 * Variations:
 * 1. 'horizontal'   - Strong Horizontal Wordmark
 * 2. 'stacked'      - Premium Stacked Name (Recommended)
 * 3. 'editorial'    - Editorial Textile Brand (Regal Serif)
 * 4. 'balanced'     - Balanced Logo + Wordmark (Framed Accents)
 * 5. 'manufacturer' - Premium Manufacturer Identity (Badged Container)
 * 6. 'bold'         - Bold First-Impression Version (Maximum Scale & Glow)
 */
const Logo = ({
  darkMode = true,
  size = 'md',
  variant = 'stacked',
  className = ''
}) => {

  // Fixed approved MDP crest image (Asset is 100% untouched)
  const renderCrest = (imgClasses) => {
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
          className={`${imgClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter ${
            darkMode
              ? 'drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)] drop-shadow-[0_0_18px_rgba(212,175,55,0.16)]'
              : 'drop-shadow-[0_2px_8px_rgba(180,130,20,0.3)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]'
          }`}
        />
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // VARIATION 1: STRONG HORIZONTAL WORDMARK
  // MDP logo | MUNNA DYEING PRINTING (Unified horizontal reading line)
  // --------------------------------------------------------------------------
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2 sm:gap-3 ${className}`}>
        {renderCrest('h-7 sm:h-8 md:h-9 lg:h-10')}

        <span
          className="w-[1.5px] h-7 sm:h-8 md:h-9 bg-gradient-to-b from-transparent via-brand-gold/45 to-transparent shrink-0 block"
          aria-hidden="true"
        />

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 select-none">
          <span
            className={`font-heading font-black tracking-[0.05em] uppercase text-lg sm:text-xl md:text-2xl lg:text-[25px] leading-none transition-colors duration-300 ${
              darkMode
                ? 'text-white group-hover:text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
                : 'text-gray-950 group-hover:text-brand-gold-dark'
            }`}
          >
            MUNNA
          </span>
          <span
            className={`font-body font-extrabold tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[9px] sm:text-xs md:text-sm lg:text-[14px] leading-none transition-colors duration-300 ${
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
  }

  // --------------------------------------------------------------------------
  // VARIATION 3: EDITORIAL TEXTILE BRAND
  // High-fashion couture textile house aesthetic (Both lines in luxury serif)
  // --------------------------------------------------------------------------
  if (variant === 'editorial') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2 sm:gap-3.5 ${className}`}>
        {renderCrest('h-8 sm:h-9 md:h-10 lg:h-11')}

        <span
          className="w-[1px] h-8 sm:h-10 md:h-11 bg-gradient-to-b from-transparent via-brand-gold/50 to-transparent shrink-0 block"
          aria-hidden="true"
        />

        <div className="flex flex-col justify-center select-none">
          <span
            className={`font-heading font-bold tracking-[0.08em] uppercase text-xl sm:text-2xl md:text-[28px] lg:text-[30px] leading-none transition-colors duration-300 ${
              darkMode
                ? 'text-white group-hover:text-brand-gold-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]'
                : 'text-gray-950 group-hover:text-brand-gold-dark'
            }`}
          >
            MUNNA
          </span>
          <span
            className={`font-heading font-semibold tracking-[0.25em] sm:tracking-[0.28em] uppercase text-[10px] sm:text-xs md:text-sm lg:text-[15px] mt-1 transition-colors duration-300 ${
              darkMode
                ? 'text-brand-gold group-hover:text-amber-200'
                : 'text-brand-gold-dark group-hover:text-amber-950'
            }`}
          >
            DYEING PRINTING
          </span>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // VARIATION 4: BALANCED LOGO + WORDMARK
  // Perfect optical balance with flanking hairline accent bars
  // --------------------------------------------------------------------------
  if (variant === 'balanced') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2 sm:gap-3 ${className}`}>
        {renderCrest('h-8 sm:h-9 md:h-9 lg:h-10')}

        <span
          className="w-[1.5px] h-8 sm:h-9 md:h-9 bg-gradient-to-b from-transparent via-brand-gold/40 to-transparent shrink-0 block"
          aria-hidden="true"
        />

        <div className="flex flex-col justify-center select-none">
          <span
            className={`font-heading font-extrabold tracking-[0.06em] uppercase text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-none transition-colors duration-300 ${
              darkMode
                ? 'text-white group-hover:text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
                : 'text-gray-900 group-hover:text-brand-gold-dark'
            }`}
          >
            MUNNA
          </span>
          
          <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
            <span className="h-[1px] w-2.5 sm:w-3.5 bg-brand-gold/50" aria-hidden="true"></span>
            <span
              className={`font-body font-bold tracking-[0.2em] sm:tracking-[0.24em] uppercase text-[8.5px] sm:text-[10px] md:text-[11px] leading-none transition-colors duration-300 ${
                darkMode
                  ? 'text-brand-gold-light group-hover:text-amber-200'
                  : 'text-brand-gold-dark group-hover:text-amber-900'
              }`}
            >
              DYEING PRINTING
            </span>
            <span className="h-[1px] w-2.5 sm:w-3.5 bg-brand-gold/50" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // VARIATION 5: PREMIUM MANUFACTURER IDENTITY
  // Industrial luxury frame communicating authoritative certified textile manufacturing
  // --------------------------------------------------------------------------
  if (variant === 'manufacturer') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl border backdrop-blur-sm shadow-sm gap-2 sm:gap-3 ${
        darkMode
          ? 'bg-brand-surface/40 border-brand-gold/25 group-hover:border-brand-gold/45'
          : 'bg-white/70 border-brand-gold/35 group-hover:border-brand-gold/60'
      } ${className}`}>
        {renderCrest('h-7 sm:h-8 md:h-9')}

        <span
          className="w-[1.5px] h-7 sm:h-8 bg-gradient-to-b from-transparent via-brand-gold/50 to-transparent shrink-0 block"
          aria-hidden="true"
        />

        <div className="flex flex-col justify-center select-none">
          <span
            className={`font-heading font-black tracking-[0.06em] uppercase text-lg sm:text-xl md:text-[23px] leading-none transition-colors duration-300 ${
              darkMode ? 'text-white group-hover:text-amber-200' : 'text-gray-950 group-hover:text-brand-gold-dark'
            }`}
          >
            MUNNA
          </span>
          <span
            className={`font-body font-black tracking-[0.2em] uppercase text-[8px] sm:text-[10px] md:text-[11px] mt-0.5 sm:mt-1 transition-colors duration-300 ${
              darkMode ? 'text-brand-gold-light' : 'text-brand-gold-dark'
            }`}
          >
            DYEING PRINTING
          </span>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // VARIATION 6: BOLD FIRST-IMPRESSION VERSION
  // Maximum visual scale, radiant metallic gradient & commanding presence
  // --------------------------------------------------------------------------
  if (variant === 'bold') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2.5 sm:gap-3.5 ${className}`}>
        {renderCrest('h-8 sm:h-10 md:h-11 lg:h-12')}

        <span
          className="w-[2px] h-8 sm:h-10 md:h-11 bg-gradient-to-b from-transparent via-brand-gold to-transparent shrink-0 block"
          aria-hidden="true"
        />

        <div className="flex flex-col justify-center select-none">
          <span
            className={`font-heading font-black tracking-[0.05em] uppercase text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] leading-[0.88] transition-all duration-300 ${
              darkMode
                ? 'bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.45)]'
                : 'text-gray-950 drop-shadow-sm group-hover:text-brand-gold-dark'
            }`}
          >
            MUNNA
          </span>
          <span
            className={`font-body font-black tracking-[0.24em] sm:tracking-[0.28em] uppercase text-[10px] sm:text-xs md:text-sm lg:text-[15px] mt-1 leading-none transition-colors duration-300 ${
              darkMode
                ? 'text-brand-gold drop-shadow-[0_1px_8px_rgba(212,175,55,0.35)] group-hover:text-amber-200'
                : 'text-brand-gold-dark font-extrabold group-hover:text-amber-900'
            }`}
          >
            DYEING PRINTING
          </span>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // VARIATION 2: PREMIUM STACKED NAME (RECOMMENDED DEFAULT)
  // Perfectly calibrated two-tier lockup: Both lines read as ONE unified name
  // --------------------------------------------------------------------------
  // Default fallback to 'stacked'
  return (
    <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2 sm:gap-2.5 md:gap-3 ${className}`}>
      {renderCrest(
        size === 'lg'
          ? 'h-10 sm:h-12 md:h-14'
          : 'h-7 sm:h-8 md:h-9 lg:h-10'
      )}

      {/* Elegant Vertical Divider */}
      <span
        className={`w-[1.5px] ${
          size === 'lg' ? 'h-10 sm:h-12 md:h-14' : 'h-8 sm:h-9 md:h-10'
        } bg-gradient-to-b from-transparent via-brand-gold/45 to-transparent shrink-0 block`}
        aria-hidden="true"
      />

      {/* Unified Business Name Block: MUNNA + DYEING PRINTING */}
      <div className="flex flex-col justify-center select-none">
        <span
          className={`font-heading font-black tracking-[0.05em] leading-[0.9] uppercase transition-colors duration-300 ${
            size === 'lg'
              ? 'text-3xl sm:text-4xl md:text-5xl'
              : 'text-xl sm:text-2xl md:text-[27px] lg:text-[29px]'
          } ${
            darkMode
              ? 'text-white group-hover:text-amber-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]'
              : 'text-gray-950 group-hover:text-brand-gold-dark drop-shadow-sm'
          }`}
        >
          MUNNA
        </span>
        <span
          className={`font-body font-extrabold tracking-[0.22em] sm:tracking-[0.25em] uppercase transition-colors duration-300 mt-1 sm:mt-1.5 leading-none ${
            size === 'lg'
              ? 'text-sm sm:text-base md:text-lg'
              : 'text-[9px] sm:text-[11px] md:text-xs lg:text-[13px]'
          } ${
            darkMode
              ? 'text-brand-gold-light group-hover:text-amber-200 drop-shadow-[0_1px_6px_rgba(212,175,55,0.25)]'
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
