import React from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * Official MDP Navbar Brand Identity
 * 
 * Clean Wordmark:
 * "Munna Dyeing Printing" — Berkshire Swash Signature Font Style
 * Strictly Single Horizontal Line on Mobile & Desktop
 */
const Logo = ({
  darkMode = true,
  size = 'md',
  showText = true,
  showLogo = false,
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

  // When text is hidden (e.g. Footer), render only the MDP crest in compact size
  if (!showText) {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 ${className}`}>
        {renderFixedLogo(
          size === 'lg'
            ? 'h-7 sm:h-8'
            : size === 'sm'
            ? 'h-5 sm:h-6'
            : 'h-6 sm:h-7'
        )}
      </div>
    );
  }

  const isFooter = size === 'lg';

  // Shared font size class for BOTH "Munna" and "Dyeing Printing"
  const sharedTypographySize = isFooter
    ? 'text-2xl sm:text-3xl md:text-4xl'
    : 'text-[15px] min-[375px]:text-base sm:text-xl md:text-2xl lg:text-[26px] xl:text-[28px]';

  return (
    <div className={`flex items-center shrink-0 group transition-all duration-300 ${className}`}>
      {/* Optional Emblem */}
      {showLogo && (
        <div className="mr-2 sm:mr-3 shrink-0">
          {renderFixedLogo(
            isFooter
              ? 'h-8 sm:h-10 md:h-11'
              : 'h-5 sm:h-6 md:h-7 lg:h-7.5'
          )}
        </div>
      )}

      {/* Brand Name: Munna Dyeing Printing (Strictly Single Horizontal Line in Signature Berkshire Swash) */}
      <div className="flex items-center justify-center select-none py-0.5">
        <div
          className="flex flex-row items-baseline gap-1.5 sm:gap-2.5 whitespace-nowrap leading-none font-swash"
          style={{ fontFamily: "'Berkshire Swash', cursive, serif" }}
        >
          {/* Munna — Gold */}
          <span
            className={`font-normal tracking-normal sm:tracking-wide transition-all duration-300 leading-none ${sharedTypographySize} ${
              darkMode
                ? 'bg-gradient-to-r from-[#ffe58f] via-[#ffd043] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,215,0,0.35)] group-hover:brightness-110'
                : 'text-[#0b2559] group-hover:text-brand-gold-dark drop-shadow-sm'
            }`}
            style={{ fontFamily: "'Berkshire Swash', cursive, serif" }}
          >
            Munna
          </span>

          {/* Dyeing Printing — Royal Blue */}
          <span
            className={`font-normal tracking-normal sm:tracking-wide transition-all duration-300 leading-none ${sharedTypographySize} ${
              darkMode
                ? 'text-[#38bdf8] group-hover:text-[#7dd3fc] drop-shadow-[0_1px_8px_rgba(56,189,248,0.35)]'
                : 'text-[#a37f37] group-hover:text-[#0b2559]'
            }`}
            style={{ fontFamily: "'Berkshire Swash', cursive, serif" }}
          >
            Dyeing Printing
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
