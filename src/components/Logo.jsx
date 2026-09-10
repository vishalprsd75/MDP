import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * Official MDP Navbar Brand Identity
 * 
 * Clean Wordmark:
 * “Munna Dyeing Printing” (Strictly Single-Line on Mobile & Desktop)
 */
const Logo = ({
  darkMode = true,
  size = 'md',
  showText = true,
  showLogo = false, // Clean pure wordmark in navbar; emblem kept in Footer/Story
  className = ''
}) => {
  // Synchronize with active font selection from Font Preview Studio
  const [activeFontFamily, setActiveFontFamily] = useState(() => {
    return localStorage.getItem('mdp_selected_font_family') || null;
  });
  const [activeCasing, setActiveCasing] = useState(() => {
    return localStorage.getItem('mdp_selected_font_casing') || 'title';
  });
  const [activeColorScheme, setActiveColorScheme] = useState(() => {
    return localStorage.getItem('mdp_selected_font_color') || 'dual';
  });
  const [activeShowLogo, setActiveShowLogo] = useState(() => {
    const saved = localStorage.getItem('mdp_selected_font_show_emblem');
    return saved !== null ? saved === 'true' : showLogo;
  });

  useEffect(() => {
    const handleFontChanged = () => {
      setActiveFontFamily(localStorage.getItem('mdp_selected_font_family') || null);
      setActiveCasing(localStorage.getItem('mdp_selected_font_casing') || 'title');
      setActiveColorScheme(localStorage.getItem('mdp_selected_font_color') || 'dual');
      const saved = localStorage.getItem('mdp_selected_font_show_emblem');
      if (saved !== null) {
        setActiveShowLogo(saved === 'true');
      }
    };

    window.addEventListener('mdp_font_changed', handleFontChanged);
    window.addEventListener('storage', handleFontChanged);

    return () => {
      window.removeEventListener('mdp_font_changed', handleFontChanged);
      window.removeEventListener('storage', handleFontChanged);
    };
  }, [showLogo]);

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
  // Beautifully scaled for high-impact single-line presence across all screen sizes
  const sharedTypographySize = isFooter
    ? 'text-2xl sm:text-3xl md:text-4xl'
    : 'text-[15px] min-[375px]:text-base sm:text-xl md:text-2xl lg:text-[26px] xl:text-[28px]';

  const munnaLabel = activeCasing === 'upper' ? 'MUNNA' : 'Munna';
  const dyeingLabel = activeCasing === 'upper' ? 'DYEING PRINTING' : 'Dyeing Printing';

  const getMunnaColor = () => {
    switch (activeColorScheme) {
      case 'emerald-gold':
        return darkMode
          ? 'bg-gradient-to-r from-[#ffe58f] via-[#ffd043] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,215,0,0.4)]'
          : 'text-brand-gold-dark drop-shadow-sm';
      case 'couture-white':
        return darkMode ? 'text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]' : 'text-[#0f172a]';
      case 'indigo-copper':
        return darkMode ? 'text-[#38bdf8] drop-shadow-[0_2px_10px_rgba(56,189,248,0.4)]' : 'text-[#1e3a8a]';
      case 'neon-cyan':
        return darkMode
          ? 'bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,240,255,0.5)]'
          : 'text-[#0284c7]';
      case 'crimson-brass':
        return darkMode
          ? 'bg-gradient-to-r from-[#fb7185] to-[#f43f5e] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(244,63,94,0.4)]'
          : 'text-[#be123c]';
      case 'titanium-black':
        return darkMode ? 'text-white drop-shadow-[0_1px_8px_rgba(255,255,255,0.25)]' : 'text-black';
      case 'saffron-terracotta':
        return darkMode
          ? 'bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#eab308] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(234,179,8,0.4)]'
          : 'text-[#b45309]';
      case 'prismatic-aurora':
        return darkMode
          ? 'bg-gradient-to-r from-[#38bdf8] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(168,85,247,0.4)]'
          : 'bg-gradient-to-r from-[#0284c7] via-[#7c3aed] to-[#db2777] bg-clip-text text-transparent';
      case 'navy-champagne':
        return darkMode ? 'text-[#fef3c7] drop-shadow-[0_2px_10px_rgba(254,243,199,0.3)]' : 'text-[#1e293b]';
      case 'all-gold':
        return darkMode
          ? 'bg-gradient-to-r from-[#ffe58f] via-[#ffd043] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,215,0,0.4)]'
          : 'text-brand-gold-dark drop-shadow-sm';
      case 'all-blue':
        return darkMode ? 'text-[#38bdf8] drop-shadow-[0_1px_8px_rgba(56,189,248,0.4)]' : 'text-[#0b2559]';
      case 'crisp-white':
        return darkMode ? 'text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]' : 'text-[#0b2559]';
      default: // dual
        return darkMode
          ? 'bg-gradient-to-r from-[#ffe58f] via-[#ffd043] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,215,0,0.35)]'
          : 'text-[#0b2559] drop-shadow-sm';
    }
  };

  const getDyeingColor = () => {
    switch (activeColorScheme) {
      case 'emerald-gold':
        return darkMode ? 'text-[#34d399] drop-shadow-[0_1px_8px_rgba(52,211,153,0.4)]' : 'text-[#047857]';
      case 'couture-white':
        return darkMode ? 'text-brand-gold-light drop-shadow-[0_1px_8px_rgba(226,201,124,0.3)]' : 'text-[#b45309]';
      case 'indigo-copper':
        return darkMode
          ? 'bg-gradient-to-r from-[#fde047] to-[#f59e0b] bg-clip-text text-transparent drop-shadow-[0_1px_8px_rgba(245,158,11,0.4)]'
          : 'text-[#c2410c]';
      case 'neon-cyan':
        return darkMode ? 'text-slate-200 drop-shadow-[0_1px_6px_rgba(241,245,249,0.3)]' : 'text-slate-700';
      case 'crimson-brass':
        return darkMode ? 'text-[#fbbf24] drop-shadow-[0_1px_8px_rgba(251,191,36,0.4)]' : 'text-[#d97706]';
      case 'titanium-black':
        return darkMode ? 'text-slate-300 drop-shadow-[0_1px_6px_rgba(203,213,225,0.2)]' : 'text-slate-600';
      case 'saffron-terracotta':
        return darkMode ? 'text-[#fb923c] drop-shadow-[0_1px_8px_rgba(251,146,60,0.4)]' : 'text-[#c2410c]';
      case 'prismatic-aurora':
        return darkMode ? 'text-[#fde047] drop-shadow-[0_1px_8px_rgba(253,224,71,0.4)]' : 'text-[#b45309]';
      case 'navy-champagne':
        return darkMode ? 'text-[#60a5fa] drop-shadow-[0_1px_8px_rgba(96,165,250,0.35)]' : 'text-[#2563eb]';
      case 'all-gold':
        return darkMode
          ? 'bg-gradient-to-r from-[#ffe58f] via-[#ffd043] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,215,0,0.4)]'
          : 'text-brand-gold-dark drop-shadow-sm';
      case 'all-blue':
        return darkMode ? 'text-[#38bdf8] drop-shadow-[0_1px_8px_rgba(56,189,248,0.4)]' : 'text-[#0b2559]';
      case 'crisp-white':
        return darkMode ? 'text-gray-100 drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]' : 'text-[#1e3a8a]';
      default: // dual
        return darkMode ? 'text-[#38bdf8] drop-shadow-[0_1px_8px_rgba(56,189,248,0.35)]' : 'text-[#a37f37]';
    }
  };

  return (
    <div className={`flex items-center shrink-0 group transition-all duration-300 ${className}`}>
      {/* Optional Emblem (Only when explicitly enabled) */}
      {activeShowLogo && (
        <>
          {renderFixedLogo(
            isFooter
              ? 'h-8 sm:h-10 md:h-11'
              : 'h-5 sm:h-6 md:h-7 lg:h-7.5'
          )}
          <span
            className={`w-[1.5px] mr-2.5 sm:mr-3 ${
              isFooter ? 'h-9 sm:h-11 md:h-12' : 'h-6 sm:h-7 md:h-8 lg:h-9'
            } bg-gradient-to-b from-brand-gold-light via-[#38bdf8] to-brand-gold-dark rounded-full shrink-0 block shadow-[0_0_8px_rgba(212,175,55,0.35)]`}
            aria-hidden="true"
          />
        </>
      )}

      {/* Complete Business Name Wordmark: Munna Dyeing Printing (ALWAYS ONE SINGLE LINE) */}
      <div className="flex items-center justify-center select-none py-0.5">
        <div
          className={`flex flex-row items-baseline gap-1.5 sm:gap-2.5 whitespace-nowrap leading-none ${
            !activeFontFamily ? 'font-swash' : ''
          }`}
          style={activeFontFamily ? { fontFamily: activeFontFamily } : undefined}
        >
          {/* Munna */}
          <span
            className={`font-normal tracking-normal sm:tracking-wide transition-all duration-300 leading-none ${sharedTypographySize} ${getMunnaColor()}`}
          >
            {munnaLabel}
          </span>

          {/* Dyeing Printing */}
          <span
            className={`font-normal tracking-normal sm:tracking-wide transition-all duration-300 leading-none ${sharedTypographySize} ${getDyeingColor()}`}
          >
            {dyeingLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;

