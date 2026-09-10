import React from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * MDP Official Navbar Branding Lockup - Creative Horizontal Directions
 * 
 * Explores 5 GENUINELY CREATIVE HORIZONTAL Concepts for:
 * [FIXED MDP LOGO] + “MUNNA DYEING PRINTING”
 * 
 * Rules:
 * 1. The MDP logo is 100% fixed, approved and untouched.
 * 2. “MUNNA DYEING PRINTING” is ONE complete, unified business name.
 * 3. All concepts are strictly HORIZONTAL to fit the navbar strip naturally.
 * 
 * Concepts:
 * - 'h-ribbon':   THE ROYAL RIBBON UNROLL (Silk scroll extends as gilded baseline)
 * - 'h-wordmark': HAUTE COUTURE SINGLE-LINE (Bodoni Moda Didone with diamond glyph)
 * - 'h-capsule':  GILDED ATELIER CAPSULE (Munna + framed gold pill for Dyeing Printing)
 * - 'h-triptych': IMPERIAL TRIPTYCH (Architectural 3-zone pinstripe lockup)
 * - 'h-vanguard': MODERN VANGUARD (High-impact horizontal sans with dot cadence)
 */
const Logo = ({
  darkMode = true,
  size = 'md',
  variant = 'h-ribbon',
  className = ''
}) => {

  // The 100% Fixed, Approved MDP Logo Emblem (Never modified, recolored, or cropped)
  const renderFixedLogo = (imgClass = 'h-8 sm:h-9 md:h-10.5') => {
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
  // HORIZONTAL 1: THE ROYAL RIBBON UNROLL (Recommended)
  // The blue/gold silk scroll from the MDP crest flows into a horizontal gilded flourish
  // ==========================================================================
  if (variant === 'h-ribbon') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2 sm:gap-3 md:gap-3.5 ${className}`}>
        {renderFixedLogo('h-8 sm:h-9 md:h-10 lg:h-11')}

        {/* Delicate gold vertical pin divider */}
        <span
          className="w-[1.5px] h-7 sm:h-8 md:h-9 bg-gradient-to-b from-transparent via-brand-gold/60 to-transparent shrink-0 block"
          aria-hidden="true"
        />

        {/* Complete horizontal name with flowing silk baseline */}
        <div className="flex flex-col justify-center select-none">
          <div className="flex items-baseline gap-1.5 sm:gap-2.5 md:gap-3 whitespace-nowrap">
            <span
              className={`font-heritage font-bold tracking-[0.06em] uppercase text-base sm:text-xl md:text-2xl lg:text-[25px] leading-none transition-all duration-300 ${
                darkMode
                  ? 'text-white group-hover:text-amber-300 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]'
                  : 'text-gray-950 group-hover:text-brand-gold-dark'
              }`}
            >
              MUNNA
            </span>
            <span
              className={`font-heading font-extrabold tracking-[0.16em] sm:tracking-[0.22em] uppercase text-[10px] sm:text-xs md:text-sm lg:text-[15px] leading-none transition-colors duration-300 ${
                darkMode
                  ? 'text-brand-gold-light group-hover:text-amber-200'
                  : 'text-brand-gold-dark group-hover:text-amber-950'
              }`}
            >
              DYEING & PRINTING
            </span>
          </div>

          {/* Flowing Gilded Silk Ribbon Underline Accent */}
          <div className="flex items-center w-full mt-1 sm:mt-1.5">
            <span className="h-[1.5px] w-2 sm:w-3 bg-brand-gold/70 rounded-full"></span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-gold/70 via-brand-gold/40 to-transparent"></span>
            <span className="text-brand-gold text-[8px] sm:text-[9px] -ml-0.5 opacity-80">✦</span>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // HORIZONTAL 2: HAUTE COUTURE SINGLE-LINE WORDMARK
  // Bodoni Moda Didone high-fashion horizontal reading line with diamond cadence
  // ==========================================================================
  if (variant === 'h-wordmark') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2 sm:gap-3 md:gap-3.5 ${className}`}>
        {renderFixedLogo('h-7.5 sm:h-8.5 md:h-9.5 lg:h-10')}

        {/* Razor-sharp hairline axis */}
        <span
          className="w-[1px] h-7 sm:h-8 md:h-9 bg-gradient-to-b from-transparent via-brand-gold/70 to-transparent shrink-0 block"
          aria-hidden="true"
        />

        {/* Continuous single horizontal baseline */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 whitespace-nowrap select-none">
          <span
            className={`font-fashion font-black tracking-[0.12em] sm:tracking-[0.15em] uppercase text-base sm:text-xl md:text-2xl lg:text-[26px] leading-none transition-colors duration-300 ${
              darkMode
                ? 'text-white group-hover:text-amber-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]'
                : 'text-gray-950 group-hover:text-brand-gold-dark'
            }`}
          >
            MUNNA
          </span>

          <span className="text-brand-gold text-[7px] sm:text-[8px] md:text-[9px] opacity-75">◆</span>

          <span
            className={`font-body font-bold tracking-[0.2em] sm:tracking-[0.26em] uppercase text-[9px] sm:text-xs md:text-sm lg:text-[14px] leading-none transition-colors duration-300 ${
              darkMode
                ? 'text-brand-gold-light group-hover:text-amber-200'
                : 'text-brand-gold-dark group-hover:text-amber-950'
            }`}
          >
            DYEING PRINTING
          </span>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // HORIZONTAL 3: GILDED ATELIER CAPSULE
  // MUNNA in bold display + DYEING PRINTING encased in a horizontal luxury gold capsule
  // ==========================================================================
  if (variant === 'h-capsule') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2 sm:gap-2.5 md:gap-3 whitespace-nowrap ${className}`}>
        {renderFixedLogo('h-7.5 sm:h-8.5 md:h-9.5 lg:h-10')}

        <div className="flex items-center gap-1.5 sm:gap-2.5 select-none">
          <span
            className={`font-heading font-black tracking-[0.06em] uppercase text-base sm:text-xl md:text-2xl lg:text-[26px] leading-none transition-colors duration-300 ${
              darkMode
                ? 'text-white group-hover:text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
                : 'text-gray-950 group-hover:text-brand-gold-dark'
            }`}
          >
            MUNNA
          </span>

          {/* Distinctive Horizontal Gold Capsule */}
          <div className={`px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-full border transition-all duration-300 flex items-center gap-1 sm:gap-1.5 shadow-sm ${
            darkMode
              ? 'bg-brand-gold/10 border-brand-gold/40 text-brand-gold-light group-hover:bg-brand-gold/20 group-hover:border-brand-gold'
              : 'bg-brand-gold/10 border-brand-gold/50 text-brand-gold-dark group-hover:bg-brand-gold/20'
          }`}>
            <span className="w-1 h-1 rounded-full bg-brand-gold shrink-0"></span>
            <span className="font-body font-black tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[8px] sm:text-[10px] md:text-[11.5px] leading-none">
              DYEING PRINTING
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // HORIZONTAL 4: IMPERIAL TRIPTYCH
  // Architectural three-zone horizontal lockup partitioned by twin gold pinstripes
  // ==========================================================================
  if (variant === 'h-triptych') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2 sm:gap-2.5 md:gap-3 whitespace-nowrap ${className}`}>
        {renderFixedLogo('h-7.5 sm:h-8.5 md:h-9.5')}

        <span
          className="w-[1.5px] h-6 sm:h-7 md:h-8 bg-gradient-to-b from-transparent via-brand-gold/60 to-transparent shrink-0 block"
          aria-hidden="true"
        />

        <span
          className={`font-roman font-bold tracking-[0.1em] uppercase text-base sm:text-xl md:text-2xl leading-none transition-colors duration-300 select-none ${
            darkMode ? 'text-white group-hover:text-amber-200' : 'text-gray-950 group-hover:text-brand-gold-dark'
          }`}
        >
          MUNNA
        </span>

        <span
          className="w-[1.5px] h-6 sm:h-7 md:h-8 bg-gradient-to-b from-transparent via-brand-gold/60 to-transparent shrink-0 block"
          aria-hidden="true"
        />

        <div className="flex flex-col justify-center select-none">
          <span
            className={`font-roman font-semibold tracking-[0.2em] sm:tracking-[0.26em] uppercase text-[8.5px] sm:text-[10px] md:text-xs leading-none transition-colors duration-300 ${
              darkMode ? 'text-brand-gold-light' : 'text-brand-gold-dark'
            }`}
          >
            DYEING PRINTING
          </span>
          <span className="text-[7px] sm:text-[8px] tracking-[0.28em] text-gray-400 uppercase font-medium mt-0.5">
            HYDERABAD
          </span>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // HORIZONTAL 5: MODERN VANGUARD
  // Clean, high-impact horizontal rhythm with geometric cadence
  // ==========================================================================
  if (variant === 'h-vanguard') {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2 sm:gap-3 md:gap-3.5 whitespace-nowrap ${className}`}>
        {renderFixedLogo('h-8 sm:h-9 md:h-10')}

        <span
          className="w-[2.5px] h-7 sm:h-8 md:h-9 bg-brand-gold rounded-full shrink-0 block shadow-[0_0_8px_rgba(212,175,55,0.4)]"
          aria-hidden="true"
        />

        <div className="flex items-center gap-1.5 sm:gap-2.5 select-none">
          <span
            className={`font-modern font-black tracking-tight uppercase text-base sm:text-xl md:text-2xl lg:text-[26px] leading-none transition-colors duration-300 ${
              darkMode ? 'text-white group-hover:text-brand-gold-light' : 'text-gray-950'
            }`}
          >
            MUNNA
          </span>
          <span className="text-brand-gold font-black text-xs sm:text-sm">/</span>
          <span
            className={`font-body font-black tracking-[0.2em] sm:tracking-[0.26em] uppercase text-[9px] sm:text-xs md:text-sm leading-none transition-colors duration-300 ${
              darkMode ? 'text-brand-gold' : 'text-brand-gold-dark'
            }`}
          >
            DYEING · PRINTING
          </span>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // DEFAULT: THE ROYAL RIBBON UNROLL
  // ==========================================================================
  return (
    <div className={`flex items-center shrink-0 group transition-all duration-300 gap-2 sm:gap-3 md:gap-3.5 ${className}`}>
      {renderFixedLogo(size === 'lg' ? 'h-10 sm:h-12 md:h-14' : 'h-8 sm:h-9 md:h-10 lg:h-11')}

      <span
        className={`w-[1.5px] ${size === 'lg' ? 'h-9 sm:h-11 md:h-12' : 'h-7 sm:h-8 md:h-9'} bg-gradient-to-b from-transparent via-brand-gold/60 to-transparent shrink-0 block`}
        aria-hidden="true"
      />

      <div className="flex flex-col justify-center select-none">
        <div className="flex items-baseline gap-1.5 sm:gap-2.5 md:gap-3 whitespace-nowrap">
          <span
            className={`font-heritage font-bold tracking-[0.06em] uppercase transition-all duration-300 ${
              size === 'lg'
                ? 'text-2xl sm:text-3xl md:text-4xl'
                : 'text-base sm:text-xl md:text-2xl lg:text-[25px]'
            } ${
              darkMode
                ? 'text-white group-hover:text-amber-300 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]'
                : 'text-gray-950 group-hover:text-brand-gold-dark'
            }`}
          >
            MUNNA
          </span>
          <span
            className={`font-heading font-extrabold tracking-[0.16em] sm:tracking-[0.22em] uppercase leading-none transition-colors duration-300 ${
              size === 'lg'
                ? 'text-xs sm:text-sm md:text-base'
                : 'text-[10px] sm:text-xs md:text-sm lg:text-[15px]'
            } ${
              darkMode
                ? 'text-brand-gold-light group-hover:text-amber-200'
                : 'text-brand-gold-dark group-hover:text-amber-950'
            }`}
          >
            DYEING & PRINTING
          </span>
        </div>

        {/* Flowing Gilded Silk Ribbon Underline Accent */}
        <div className="flex items-center w-full mt-1 sm:mt-1.5">
          <span className="h-[1.5px] w-2 sm:w-3 bg-brand-gold/70 rounded-full"></span>
          <span className="h-[1px] flex-1 bg-gradient-to-r from-brand-gold/70 via-brand-gold/40 to-transparent"></span>
          <span className="text-brand-gold text-[8px] sm:text-[9px] -ml-0.5 opacity-80">✦</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
