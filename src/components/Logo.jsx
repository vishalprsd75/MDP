import React from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * Official Master MDP Brand Identity Lockup
 * 
 * Direct authentic visual asset derived from the master brand artwork:
 * [APPROVED MDP EMBLEM] + [3D CHISELED GOLD "MUNNA"] + [ROYAL SAPPHIRE SATIN "DYEING PRINTING" WITH 24K GOLD BEZEL]
 * 
 * Design Features:
 * - 100% exact match in 3D bevels, lighting, texture, and color palette
 * - Razor-sharp Retina & 4K display fidelity
 * - Seamlessly responsive across mobile, tablet, and desktop
 * - Adaptive ambient glow in Dark Mode and Light Mode
 */
const Logo = ({
  darkMode = true,
  size = 'md',
  showText = true,
  showLogo = true,
  className = ''
}) => {
  // 1. When only crest is requested (showText === false, e.g. Footer):
  if (!showText) {
    return (
      <div className={`flex items-center shrink-0 group transition-all duration-300 ${className}`}>
        <img
          src={siteConfig.logoImage || '/images/logo.png'}
          alt="MDP Official Crest"
          className={`${
            size === 'lg' ? 'h-8 sm:h-9' : size === 'sm' ? 'h-6 sm:h-7' : 'h-7 sm:h-8'
          } w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter ${
            darkMode
              ? 'drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)] drop-shadow-[0_0_14px_rgba(212,175,55,0.15)]'
              : 'drop-shadow-[0_2px_6px_rgba(180,130,20,0.25)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
          }`}
        />
      </div>
    );
  }

  // 2. When only wordmark is requested (showLogo === false):
  if (!showLogo) {
    return (
      <div className={`flex items-center shrink min-w-0 group transition-all duration-300 ${className}`}>
        <img
          src="/images/brand-wordmark.png"
          alt="Munna Dyeing Printing"
          className={`${
            size === 'lg'
              ? 'h-6 sm:h-7 md:h-8'
              : 'h-[17px] min-[360px]:h-[19px] min-[400px]:h-5 sm:h-6 md:h-7 lg:h-8'
          } w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01] filter ${
            darkMode
              ? 'drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)] drop-shadow-[0_0_12px_rgba(212,175,55,0.15)]'
              : 'drop-shadow-[0_2px_6px_rgba(180,130,20,0.25)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
          }`}
        />
      </div>
    );
  }

  // 3. Full Official Master Brand Identity Lockup (Crest + MUNNA DYEING PRINTING):
  // 100% exact replica of approved master reference
  const heightClasses = size === 'lg'
    ? 'h-7 sm:h-8 md:h-9 lg:h-10'
    : 'h-[18px] min-[350px]:h-[20px] min-[390px]:h-[22px] min-[420px]:h-[24px] sm:h-7 md:h-[29px] lg:h-8 xl:h-[33px]';

  return (
    <div className={`flex items-center shrink min-w-0 group transition-all duration-300 ${className}`}>
      <img
        src="/images/brand-full-lockup.png"
        alt="Munna Dyeing Printing"
        className={`${heightClasses} max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01] filter ${
          darkMode
            ? 'drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] drop-shadow-[0_0_16px_rgba(212,175,55,0.18)]'
            : 'drop-shadow-[0_2px_6px_rgba(180,130,20,0.3)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.08)]'
        }`}
      />
    </div>
  );
};

export default Logo;

