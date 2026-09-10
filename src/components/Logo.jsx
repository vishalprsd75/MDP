import React from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * Official MDP Navbar Brand Identity
 * 
 * Master Lockup:
 * [COMPACT MDP LOGO] + “MUNNA DYEING PRINTING” (Exact Same Font Size)
 * 
 * Rules:
 * 1. Both "MUNNA" and "DYEING PRINTING" are rendered in the EXACT same font size.
 * 2. The MDP logo is kept more compact/smaller than the brand name to give ample space.
 * 3. Verified responsive design for mobile phones (fits with breathing room, no overflow).
 * 4. Colors: 3D Metallic Gold for "MUNNA" + Royal Sapphire Blue for "DYEING PRINTING".
 */
const Logo = ({
  darkMode = true,
  size = 'md',
  showText = true,
  className = ''
}) => {

  // The 100% Fixed, Approved MDP Logo Emblem (Never modified, recolored, or cropped)
  const renderFixedLogo = (imgClass) => {
    if (!siteConfig.logoImage) {
      return (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-gold-light via-brand-gold to-brand-gold-dark p-[1px] flex items-center justify-center shadow-md shrink-0">
          <div className={`w-full h-full rounded-[7px] flex items-center justify-center font-heading font-extrabold text-xs ${
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
              ? 'drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] drop-shadow-[0_0_16px_rgba(212,175,55,0.2)]'
              : 'drop-shadow-[0_2px_6px_rgba(180,130,20,0.3)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]'
          }`}
        />
      </div>
    );
  };

  // When text is hidden (e.g. Footer), render only the MDP crest
  if (!showText) {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 ${className}`}>
        {renderFixedLogo(
          size === 'lg'
            ? 'h-10 sm:h-12 md:h-14'
            : 'h-6 sm:h-7 md:h-8'
        )}
      </div>
    );
  }

  const isFooter = size === 'lg';

  // Shared font size class for BOTH "MUNNA" and "DYEING PRINTING"
  const sharedTypographySize = isFooter
    ? 'text-xl sm:text-2xl md:text-3xl'
    : 'text-xs sm:text-base md:text-lg lg:text-[21px]';

  return (
    <div className={`flex items-center shrink-0 group transition-all duration-300 gap-1.5 sm:gap-2.5 md:gap-3 ${className}`}>
      {/* 1. Approved MDP Crest (More compact / smaller than the brand name) */}
      {renderFixedLogo(
        isFooter
          ? 'h-8 sm:h-10 md:h-11'
          : 'h-5 sm:h-6 md:h-7 lg:h-7.5'
      )}

      {/* 2. Dual-Tone Brand Divider */}
      <span
        className={`w-[1.5px] ${
          isFooter ? 'h-8 sm:h-10 md:h-11' : 'h-5 sm:h-6 md:h-7'
        } bg-gradient-to-b from-brand-gold-light via-[#38bdf8] to-brand-gold-dark rounded-full shrink-0 block shadow-[0_0_8px_rgba(212,175,55,0.35)]`}
        aria-hidden="true"
      />

      {/* 3. Complete Business Name: MUNNA DYEING PRINTING (SAME SIZE) */}
      <div className="flex flex-col justify-center select-none">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 whitespace-nowrap leading-none">
          {/* MUNNA (Metallic Gold) */}
          <span
            className={`font-heading font-black tracking-[0.06em] uppercase transition-all duration-300 leading-tight sm:leading-none ${sharedTypographySize} ${
              darkMode
                ? 'bg-gradient-to-r from-[#ffe58f] via-[#ffd043] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)] group-hover:brightness-110'
                : 'text-[#0b2559] group-hover:text-brand-gold-dark drop-shadow-sm'
            }`}
          >
            MUNNA
          </span>

          {/* DYEING PRINTING (Exact Same Size, Font & Weight — Royal Sapphire Blue) */}
          <span
            className={`font-heading font-black tracking-[0.06em] uppercase transition-all duration-300 leading-tight sm:leading-none mt-0.5 sm:mt-0 ${sharedTypographySize} ${
              darkMode
                ? 'text-[#38bdf8] group-hover:text-[#60a5fa] drop-shadow-[0_1px_8px_rgba(56,189,248,0.4)]'
                : 'text-[#a37f37] group-hover:text-[#0b2559]'
            }`}
          >
            DYEING PRINTING
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
