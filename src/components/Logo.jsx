import React from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * Official MDP Approved Brand Identity Lockup
 * 
 * Composition:
 * [100% FIXED MDP LOGO CREST] + [MASTER "MUNNA DYEING PRINTING" WORDMARK]
 * 
 * Design Features:
 * - Direct sampling of the 24K polished gold from crest letters "M" and "P"
 * - Direct sampling of the deep royal sapphire navy from crest letter "D" & silk roll
 * - Classical Roman chisel serif typography (Cinzel) with refined optical kerning
 * - Substantive, unified single horizontal line for "MUNNA DYEING PRINTING" (one business name)
 * - Beautifully balanced in both Dark Mode and Light Mode
 */
const Logo = ({
  darkMode = true,
  size = 'md',
  showText = true,
  showLogo = true,
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
              ? 'drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)] drop-shadow-[0_0_14px_rgba(212,175,55,0.15)]'
              : 'drop-shadow-[0_2px_6px_rgba(180,130,20,0.25)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
          }`}
        />
      </div>
    );
  };

  // When text is hidden (e.g. subtle footer crest), render only the MDP emblem
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

  // Shared font size class for "Munna Dyeing Printing" in Cormorant Garamond (calibrated for lowercase x-height)
  const sharedTypographySize = isFooter
    ? 'text-2xl sm:text-3xl md:text-4xl'
    : 'text-[14px] min-[350px]:text-[15.5px] min-[380px]:text-[17px] min-[410px]:text-[18px] sm:text-xl md:text-2xl lg:text-[27px] xl:text-[29px]';

  // Classes for unified royal sapphire navy with thin light gold hairline border
  const strokeClass = darkMode ? 'wordmark-gold-stroke-dark' : 'wordmark-gold-stroke-light';
  const navyFillClass = darkMode ? 'wordmark-navy-fill-dark' : 'wordmark-navy-fill-light';

  return (
    <div className={`flex items-center shrink-0 group transition-all duration-300 gap-1.5 min-[360px]:gap-2 sm:gap-3 md:gap-3.5 ${className}`}>
      {/* 1. 100% Fixed, Untouched MDP Logo Emblem (Supporting Hallmark Scale) */}
      {showLogo && (
        <div className="shrink-0 flex items-center">
          {renderFixedLogo(
            isFooter
              ? 'h-8 sm:h-9 md:h-10'
              : 'h-4.5 min-[360px]:h-5 min-[390px]:h-5.5 sm:h-6 md:h-6.5 lg:h-7'
          )}
        </div>
      )}

      {/* 2. Complete Business Name Wordmark: Munna Dyeing Printing (True Lowercase Classical Serif) */}
      <div className="flex items-center justify-center select-none py-0.5">
        <div
          className={`flex flex-row items-baseline whitespace-nowrap leading-none tracking-[0.03em] sm:tracking-[0.04em] font-semibold ${sharedTypographySize}`}
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {/* Dual-Layer: Deep Royal Sapphire Navy Fill + Delicate Light Gold Hairline Border */}
          <span className="wordmark-bordered-navy-container leading-none select-none">
            {/* Layer 1: Fine Light Gold Hairline Border (Behind) */}
            <span
              aria-hidden="true"
              className={strokeClass}
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Munna Dyeing Printing
            </span>

            {/* Layer 2: Deep Royal Sapphire Navy Fill (In Front) */}
            <span
              className={navyFillClass}
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Munna Dyeing Printing
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
