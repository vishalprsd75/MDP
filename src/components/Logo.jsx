import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { getWordmarkOption } from '../config/wordmarkOptions';

/**
 * Official MDP Navbar Brand Identity
 * 
 * Composition:
 * [100% FIXED MDP LOGO EMBLEM] + [PREMIUM "MUNNA DYEING PRINTING" WORDMARK]
 * 
 * 5 New Typography Treatments matching the exact luxury tone of the MDP Logo:
 * - VERSION 1: Elegant Metallic Gold Wordmark (Cinzel)
 * - VERSION 2: Deep Navy + Gold Edge (Bodoni Moda / Cormorant)
 * - VERSION 3: Dual-Tone Luxury (Cinzel / Marcellus)
 * - VERSION 4: Subtle 3D Crafted Wordmark (Marcellus Beveled)
 * - VERSION 5: Luxury Flat-Plus Wordmark (Outfit / Montserrat)
 */
const Logo = ({
  darkMode = true,
  size = 'md',
  showText = true,
  showLogo = true,
  optionId = 'version-1',
  className = ''
}) => {
  const option = getWordmarkOption(optionId);

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
              ? 'drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)] drop-shadow-[0_0_14px_rgba(212,175,55,0.15)]'
              : 'drop-shadow-[0_2px_6px_rgba(180,130,20,0.25)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
          }`}
        />
      </div>
    );
  };

  // When text is hidden (e.g. Footer subtle brand mark), render only the MDP crest
  if (!showText) {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 ${className}`}>
        {renderFixedLogo(
          size === 'lg'
            ? 'h-8 sm:h-9'
            : size === 'sm'
            ? 'h-6 sm:h-7'
            : 'h-7 sm:h-8'
        )}
      </div>
    );
  }

  const isFooter = size === 'lg';

  // Shared font size class for BOTH "MUNNA" and "DYEING PRINTING"
  // Ensuring ONE COMPLETE BUSINESS NAME with equal presence on a single line
  const sharedTypographySize = isFooter
    ? 'text-xl sm:text-2xl md:text-3xl'
    : 'text-[12.5px] min-[360px]:text-[13.5px] min-[390px]:text-[14.5px] sm:text-base md:text-lg lg:text-[21px] xl:text-[22px]';

  // Classes matching the MDP logo's gold and navy tone
  const munnaClass = darkMode ? option.munnaDarkClass : option.munnaLightClass;
  const dyeingClass = darkMode ? option.dyeingDarkClass : option.dyeingLightClass;

  return (
    <div className={`flex items-center shrink-0 group transition-all duration-300 gap-1.5 min-[360px]:gap-2 sm:gap-2.5 md:gap-3 ${className}`}>
      {/* 1. 100% Fixed, Untouched MDP Logo Emblem */}
      {showLogo && (
        <div className="shrink-0 flex items-center">
          {renderFixedLogo(
            isFooter
              ? 'h-8 sm:h-9 md:h-10'
              : 'h-6 sm:h-7 md:h-8'
          )}
        </div>
      )}

      {/* 2. Complete Business Name Wordmark: MUNNA DYEING PRINTING */}
      <div className="flex items-center justify-center select-none py-0.5">
        <div
          className={`flex flex-row items-baseline gap-1.5 sm:gap-2 whitespace-nowrap leading-none ${option.tracking} ${option.weight}`}
          style={{ fontFamily: option.fontFamily }}
        >
          {/* MUNNA */}
          <span
            className={`transition-all duration-300 leading-none select-none inline-block ${sharedTypographySize} ${munnaClass}`}
            style={{ fontFamily: option.fontFamily }}
          >
            {option.munnaLabel}
          </span>

          {/* DYEING PRINTING (Substantive, equal stature, unified) */}
          <span
            className={`transition-all duration-300 leading-none select-none inline-block ${sharedTypographySize} ${dyeingClass}`}
            style={{ fontFamily: option.fontFamily }}
          >
            {option.dyeingLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
