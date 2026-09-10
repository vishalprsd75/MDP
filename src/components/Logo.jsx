import React from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * MDP Official Navbar Branding Lockup
 * 
 * Explores 6 GENUINELY DIFFERENT Brand Identity Concepts for:
 * [FIXED MDP LOGO] + “MUNNA DYEING PRINTING”
 * 
 * Rules:
 * 1. The MDP logo is 100% fixed, approved and untouched.
 * 2. “MUNNA DYEING PRINTING” is ONE complete, unified business name.
 * 3. Each concept represents a fundamentally different design philosophy.
 * 
 * Concepts:
 * - 'concept-1': LUXURY FASHION HOUSE (Didone / Bodoni Moda Haute Couture)
 * - 'concept-2': HERITAGE INDIAN TEXTILE (Cinzel Decorative Royal Nizam Karkhana)
 * - 'concept-3': MODERN TEXTILE MANUFACTURER (Syne Industrial Blueprint Architecture)
 * - 'concept-4': SIGNATURE / CUSTOM WORDMARK (Bespoke Ligature Typography & Silk Arc)
 * - 'concept-5': EMBLEM / BADGE INSPIRED (Royal Atelier Engraved Plaque Cartouche)
 * - 'concept-6': BOLD CONTEMPORARY BRAND (Oswald Condensed Vanguard Presence)
 */
const Logo = ({
  darkMode = true,
  size = 'md',
  variant = 'concept-2',
  className = ''
}) => {

  // The 100% Fixed, Approved MDP Logo Emblem (Never modified, recolored, or cropped)
  const renderFixedLogo = (imgClass = 'h-8 sm:h-9 md:h-10') => {
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
              ? 'drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)] drop-shadow-[0_0_18px_rgba(212,175,55,0.16)]'
              : 'drop-shadow-[0_2px_8px_rgba(180,130,20,0.3)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]'
          }`}
        />
      </div>
    );
  };

  // ==========================================================================
  // CONCEPT 1 — LUXURY FASHION HOUSE (Didone / Bodoni Moda Haute Couture)
  // High-contrast, razor-sharp stems, Parisian-Milanese couture textile house
  // ==========================================================================
  if (variant === 'concept-1') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2.5 sm:gap-3.5 ${className}`}>
        {renderFixedLogo('h-8 sm:h-9 md:h-10')}

        {/* Razor-sharp Didone vertical hairline axis */}
        <span
          className="w-[1px] h-8 sm:h-9 md:h-10 bg-gradient-to-b from-transparent via-brand-gold/60 to-transparent shrink-0 block"
          aria-hidden="true"
        />

        <div className="flex flex-col justify-center select-none">
          <span
            className={`font-fashion font-black tracking-[0.12em] sm:tracking-[0.14em] uppercase text-xl sm:text-2xl md:text-[27px] leading-none transition-colors duration-300 ${
              darkMode
                ? 'text-white group-hover:text-amber-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]'
                : 'text-gray-950 group-hover:text-brand-gold-dark'
            }`}
          >
            MUNNA
          </span>
          <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5">
            <span
              className={`font-body font-bold tracking-[0.32em] sm:tracking-[0.38em] uppercase text-[8px] sm:text-[9.5px] md:text-[11px] leading-none transition-colors duration-300 ${
                darkMode
                  ? 'text-brand-gold-light group-hover:text-amber-200'
                  : 'text-brand-gold-dark group-hover:text-amber-950'
              }`}
            >
              DYEING
            </span>
            <span className="text-brand-gold text-[7px] sm:text-[8px] opacity-70">◆</span>
            <span
              className={`font-body font-bold tracking-[0.32em] sm:tracking-[0.38em] uppercase text-[8px] sm:text-[9.5px] md:text-[11px] leading-none transition-colors duration-300 ${
                darkMode
                  ? 'text-brand-gold-light group-hover:text-amber-200'
                  : 'text-brand-gold-dark group-hover:text-amber-950'
              }`}
            >
              PRINTING
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // CONCEPT 2 — HERITAGE INDIAN TEXTILE (Cinzel Decorative Royal Nizam Karkhana)
  // Regal Indian swashed terminals, authentic cultural dignity, master kalamkari guild
  // ==========================================================================
  if (variant === 'concept-2') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2.5 sm:gap-3.5 ${className}`}>
        {renderFixedLogo('h-8 sm:h-9 md:h-10.5')}

        {/* Royal antique brass pillar divider */}
        <span
          className="w-[2px] h-8 sm:h-9 md:h-10 bg-gradient-to-b from-brand-gold-light via-brand-gold to-brand-gold-dark rounded-full shrink-0 block shadow-[0_0_8px_rgba(212,175,55,0.4)]"
          aria-hidden="true"
        />

        <div className="flex flex-col justify-center select-none">
          <span
            className={`font-heritage font-bold tracking-[0.06em] uppercase text-xl sm:text-2xl md:text-[26px] lg:text-[28px] leading-tight transition-all duration-300 ${
              darkMode
                ? 'text-white group-hover:text-amber-300 drop-shadow-[0_2px_12px_rgba(212,175,55,0.45)]'
                : 'text-gray-950 group-hover:text-brand-gold-dark drop-shadow-sm'
            }`}
          >
            MUNNA
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-brand-gold text-[10px] sm:text-xs">⚜</span>
            <span
              className={`font-heading font-bold tracking-[0.22em] sm:tracking-[0.26em] uppercase text-[9.5px] sm:text-[11.5px] md:text-xs leading-none transition-colors duration-300 ${
                darkMode
                  ? 'text-brand-gold-light group-hover:text-amber-200 drop-shadow-[0_1px_6px_rgba(212,175,55,0.25)]'
                  : 'text-brand-gold-dark group-hover:text-amber-950'
              }`}
            >
              DYEING & PRINTING
            </span>
            <span className="text-brand-gold text-[10px] sm:text-xs">⚜</span>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // CONCEPT 3 — MODERN TEXTILE MANUFACTURER (Syne Industrial Blueprint Architecture)
  // Structural B2B confidence, geometric precision typography, industrial dyeing capacity
  // ==========================================================================
  if (variant === 'concept-3') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2 sm:gap-3 ${className}`}>
        {renderFixedLogo('h-7.5 sm:h-8.5 md:h-9.5')}

        {/* Blueprint technical division */}
        <div className="flex flex-col items-center justify-center shrink-0 h-8 sm:h-9">
          <span className="w-1.5 h-[1px] bg-brand-gold/60"></span>
          <span className="w-[1.5px] h-full bg-brand-gold/40"></span>
          <span className="w-1.5 h-[1px] bg-brand-gold/60"></span>
        </div>

        <div className="flex flex-col justify-center select-none">
          <span
            className={`font-modern font-extrabold tracking-[-0.01em] uppercase text-lg sm:text-xl md:text-2xl leading-none transition-colors duration-300 ${
              darkMode ? 'text-white group-hover:text-brand-gold-light' : 'text-gray-950 group-hover:text-brand-gold-dark'
            }`}
          >
            MUNNA
          </span>
          <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5">
            <span className="px-1 py-0.2 rounded bg-brand-gold/20 text-brand-gold text-[7.5px] sm:text-[8.5px] font-black tracking-wider uppercase">
              MFG
            </span>
            <span
              className={`font-body font-black tracking-[0.22em] sm:tracking-[0.26em] uppercase text-[8.5px] sm:text-[10px] md:text-[11px] leading-none transition-colors duration-300 ${
                darkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-800'
              }`}
            >
              DYEING · PRINTING
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // CONCEPT 4 — SIGNATURE / CUSTOM WORDMARK (Bespoke Ligature Typography & Silk Arc)
  // Tailored interlocking ligatures with organic silk ribbon underline
  // ==========================================================================
  if (variant === 'concept-4') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2.5 sm:gap-3.5 ${className}`}>
        {renderFixedLogo('h-8 sm:h-9 md:h-10')}

        <span
          className="w-[1.5px] h-8 sm:h-9 md:h-10 bg-gradient-to-b from-transparent via-brand-gold to-transparent shrink-0 block"
          aria-hidden="true"
        />

        <div className="flex flex-col justify-center select-none">
          {/* Custom Ligature Wordmark Styling */}
          <div className="flex items-baseline tracking-[0.08em] leading-none font-heading font-black text-2xl sm:text-3xl md:text-[31px]">
            <span className={darkMode ? 'text-amber-300 drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]' : 'text-brand-gold-dark'}>M</span>
            <span className={darkMode ? 'text-white' : 'text-gray-950'}>U</span>
            <span className="relative">
              <span className={darkMode ? 'text-white' : 'text-gray-950'}>NN</span>
              {/* Distinctive bridge ligature linking the double N */}
              <span className="absolute -top-0.5 left-0 right-0 h-[2px] bg-brand-gold/80 rounded-full"></span>
            </span>
            <span className={darkMode ? 'text-white' : 'text-gray-950'}>A</span>
          </div>

          {/* Flowing Silk Arc & Balanced Subtitle */}
          <div className="flex items-center gap-1.5 mt-0.5">
            <svg className="w-3 h-1.5 text-brand-gold shrink-0" viewBox="0 0 24 12" fill="currentColor">
              <path d="M0 6 C6 0, 18 12, 24 6 L24 8 C18 14, 6 2, 0 8 Z" />
            </svg>
            <span
              className={`font-body font-extrabold tracking-[0.24em] sm:tracking-[0.28em] uppercase text-[8.5px] sm:text-[10px] md:text-[11px] leading-none transition-colors duration-300 ${
                darkMode ? 'text-brand-gold-light group-hover:text-amber-200' : 'text-brand-gold-dark group-hover:text-amber-900'
              }`}
            >
              DYEING PRINTING
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // CONCEPT 5 — EMBLEM / BADGE INSPIRED (Royal Atelier Engraved Plaque Cartouche)
  // Certified maker's cartouche plaque with gold filigree corner mounts
  // ==========================================================================
  if (variant === 'concept-5') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border relative shadow-xl backdrop-blur-md gap-2.5 sm:gap-3.5 ${
        darkMode
          ? 'bg-gradient-to-r from-brand-dark/95 via-brand-surface/75 to-brand-dark/95 border-brand-gold/40 group-hover:border-brand-gold/70'
          : 'bg-gradient-to-r from-white via-brand-cream/80 to-white border-brand-gold/50 group-hover:border-brand-gold/80 shadow-md'
      } ${className}`}>
        
        {/* Subtle decorative gold corner brackets */}
        <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-brand-gold/60 rounded-tl-sm"></span>
        <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-brand-gold/60 rounded-tr-sm"></span>
        <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-brand-gold/60 rounded-bl-sm"></span>
        <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-brand-gold/60 rounded-br-sm"></span>

        {renderFixedLogo('h-7.5 sm:h-8.5 md:h-9.5')}

        <span
          className="w-[1.5px] h-7 sm:h-8 md:h-9 bg-gradient-to-b from-transparent via-brand-gold/60 to-transparent shrink-0 block"
          aria-hidden="true"
        />

        <div className="flex flex-col justify-center select-none">
          <span
            className={`font-roman font-bold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-lg sm:text-xl md:text-[23px] leading-none transition-colors duration-300 ${
              darkMode ? 'text-white group-hover:text-amber-200' : 'text-gray-950 group-hover:text-brand-gold-dark'
            }`}
          >
            MUNNA
          </span>
          <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
            <span className="text-brand-gold text-[7px]">★</span>
            <span
              className={`font-roman font-semibold tracking-[0.24em] sm:tracking-[0.28em] uppercase text-[8px] sm:text-[9.5px] md:text-[10.5px] leading-none transition-colors duration-300 ${
                darkMode ? 'text-brand-gold-light' : 'text-brand-gold-dark'
              }`}
            >
              DYEING PRINTING
            </span>
            <span className="text-brand-gold text-[7px]">★</span>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // CONCEPT 6 — BOLD CONTEMPORARY BRAND (Oswald Condensed Vanguard Presence)
  // Towering condensed typography, massive visual impact, bold streetwear-textile crossover
  // ==========================================================================
  if (variant === 'concept-6') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2.5 sm:gap-3.5 ${className}`}>
        {renderFixedLogo('h-8.5 sm:h-10 md:h-11.5')}

        {/* Thick, confident gold block divider */}
        <span
          className="w-[3px] h-8.5 sm:h-10 md:h-11 bg-brand-gold rounded-full shrink-0 block shadow-[0_0_10px_rgba(212,175,55,0.5)]"
          aria-hidden="true"
        />

        <div className="flex flex-col justify-center select-none">
          <span
            className={`font-impact font-bold tracking-[0.03em] uppercase text-2xl sm:text-3xl md:text-4xl leading-[0.85] transition-all duration-300 ${
              darkMode
                ? 'text-white group-hover:text-amber-300 drop-shadow-[0_2px_12px_rgba(212,175,55,0.5)]'
                : 'text-gray-950 drop-shadow-sm group-hover:text-brand-gold-dark'
            }`}
          >
            MUNNA
          </span>
          <span
            className={`font-body font-black tracking-[0.28em] sm:tracking-[0.34em] uppercase text-[9px] sm:text-xs md:text-[13px] leading-none transition-colors duration-300 mt-1 sm:mt-1.5 ${
              darkMode
                ? 'text-brand-gold drop-shadow-[0_1px_8px_rgba(212,175,55,0.35)] group-hover:text-amber-200'
                : 'text-brand-gold-dark font-extrabold group-hover:text-amber-950'
            }`}
          >
            DYEING PRINTING
          </span>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // DEFAULT FALLBACK (Concept 2: Heritage Indian Textile)
  // ==========================================================================
  return (
    <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2.5 sm:gap-3.5 ${className}`}>
      {renderFixedLogo(size === 'lg' ? 'h-10 sm:h-12 md:h-14' : 'h-8 sm:h-9 md:h-10.5')}

      <span
        className={`w-[2px] ${size === 'lg' ? 'h-10 sm:h-12 md:h-14' : 'h-8 sm:h-9 md:h-10'} bg-gradient-to-b from-brand-gold-light via-brand-gold to-brand-gold-dark rounded-full shrink-0 block shadow-[0_0_8px_rgba(212,175,55,0.4)]`}
        aria-hidden="true"
      />

      <div className="flex flex-col justify-center select-none">
        <span
          className={`font-heritage font-bold tracking-[0.06em] uppercase transition-all duration-300 ${
            size === 'lg'
              ? 'text-3xl sm:text-4xl md:text-5xl'
              : 'text-xl sm:text-2xl md:text-[26px] lg:text-[28px]'
          } ${
            darkMode
              ? 'text-white group-hover:text-amber-300 drop-shadow-[0_2px_12px_rgba(212,175,55,0.45)]'
              : 'text-gray-950 group-hover:text-brand-gold-dark drop-shadow-sm'
          }`}
        >
          MUNNA
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-brand-gold text-[10px] sm:text-xs">⚜</span>
          <span
            className={`font-heading font-bold tracking-[0.22em] sm:tracking-[0.26em] uppercase leading-none transition-colors duration-300 ${
              size === 'lg'
                ? 'text-sm sm:text-base md:text-lg'
                : 'text-[9.5px] sm:text-[11.5px] md:text-xs'
            } ${
              darkMode
                ? 'text-brand-gold-light group-hover:text-amber-200 drop-shadow-[0_1px_6px_rgba(212,175,55,0.25)]'
                : 'text-brand-gold-dark group-hover:text-amber-950'
            }`}
          >
            DYEING & PRINTING
          </span>
          <span className="text-brand-gold text-[10px] sm:text-xs">⚜</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
