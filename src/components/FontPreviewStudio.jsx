import React, { useState, useEffect, useMemo } from 'react';
import { ArrowLeft, Check, Copy, Moon, Sun, Smartphone, Monitor, Sparkles, Palette, Search, Filter } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FONT_COLLECTION = [
  // 1. Current Live & Swashes
  {
    id: 'berkshire',
    name: 'Berkshire Swash',
    category: 'Calligraphic Swash Serif',
    group: 'artistic',
    cssFamily: '"Berkshire Swash", serif',
    tailwindClass: 'font-swash',
    weight: 'font-normal',
    letterSpacing: 'tracking-normal sm:tracking-wide',
    recommendedCase: 'title',
    description: 'Current live brand font. Semi-sweet calligraphic swash serif with graceful flourishing initial capitals (M, D, P).',
    vibe: 'Artisanal • Ornate • Distinctive',
    badge: 'Current Live',
  },

  // 2. Indian Textile & Heritage Artisan
  {
    id: 'rozha',
    name: 'Rozha One',
    category: 'Indian Heritage High-Contrast Serif',
    group: 'artistic',
    cssFamily: '"Rozha One", serif',
    tailwindClass: 'font-serif',
    weight: 'font-normal',
    letterSpacing: 'tracking-wide',
    recommendedCase: 'title',
    description: 'Designed specifically with Indian typographic heritage. Dramatic contrast between thick downstrokes and razor-thin serifs. Radiates artisanal Indian fabric craft.',
    vibe: 'Textile Heritage • Indian Art • Handcrafted',
    badge: 'Textile Heritage',
  },
  {
    id: 'shrikhand',
    name: 'Shrikhand',
    category: 'Artisanal Hand-Painted Script',
    group: 'artistic',
    cssFamily: '"Shrikhand", cursive, display',
    tailwindClass: 'font-serif',
    weight: 'font-normal',
    letterSpacing: 'tracking-normal',
    recommendedCase: 'title',
    description: 'Vibrant, thick, joyful Gujarati hand-painted signage script. Radiates warmth, authenticity, and generational fabric dye-house pride.',
    vibe: 'Authentic • Vibrant • Workshop Pride',
    badge: 'Artisan Pride',
  },
  {
    id: 'yeseva',
    name: 'Yeseva One',
    category: 'Sculptural Curved Display Serif',
    group: 'luxury',
    cssFamily: '"Yeseva One", cursive, serif',
    tailwindClass: 'font-serif',
    weight: 'font-normal',
    letterSpacing: 'tracking-normal sm:tracking-wide',
    recommendedCase: 'title',
    description: 'Exquisite, sculptural display serif with swooping curved serifs. Unique, highly memorable, and high-fashion.',
    vibe: 'Graceful • Sculptural • High-Fashion',
    badge: 'Designer Pick',
  },

  // 3. High Impact & Ultra Bold
  {
    id: 'abril',
    name: 'Abril Fatface',
    category: 'Dramatic Display Serif',
    group: 'bold',
    cssFamily: '"Abril Fatface", cursive, serif',
    tailwindClass: 'font-abril',
    weight: 'font-normal',
    letterSpacing: 'tracking-wide',
    recommendedCase: 'title',
    description: 'Heavyweight Didone display serif with immense visual authority. Ultra-thick strokes that demand attention from across the room.',
    vibe: 'High Impact • Bold Luxury • Unmissable',
    badge: 'Maximum Impact',
  },
  {
    id: 'alfaslab',
    name: 'Alfa Slab One',
    category: 'Heavy Industrial Slab Serif',
    group: 'bold',
    cssFamily: '"Alfa Slab One", cursive, serif',
    tailwindClass: 'font-serif',
    weight: 'font-normal',
    letterSpacing: 'tracking-wider',
    recommendedCase: 'upper',
    description: 'Solid 19th-century ultra-heavy English slab serif. Heavyweight industrial presence suited for large-scale fabric manufacturing and print shop authority.',
    vibe: 'Heavy Duty • Manufacturing • Solid Authority',
    badge: 'Ultra Heavy',
  },
  {
    id: 'bebas',
    name: 'Bebas Neue',
    category: 'Towering Condensed Headline Sans',
    group: 'bold',
    cssFamily: '"Bebas Neue", sans-serif',
    tailwindClass: 'font-sans',
    weight: 'font-normal',
    letterSpacing: 'tracking-[0.08em]',
    recommendedCase: 'upper',
    description: 'World-famous clean condensed display sans. Towering vertical height, maximum impact, instantly catches the eye on billboards and storefronts.',
    vibe: 'Billboard Bold • Tall & Proud • Powerful',
    badge: 'Tall Headline',
  },
  {
    id: 'righteous',
    name: 'Righteous',
    category: 'Art Deco Geometric Display',
    group: 'bold',
    cssFamily: '"Righteous", cursive, sans-serif',
    tailwindClass: 'font-righteous',
    weight: 'font-normal',
    letterSpacing: 'tracking-wider',
    recommendedCase: 'upper',
    description: 'Streamlined Art Deco geometric display font. Sleek rounded letters with futuristic symmetry and striking modern presence.',
    vibe: 'Art Deco • Sleek • Eye-Catching',
    badge: 'Distinctive',
  },

  // 4. European Haute Couture & Luxury Serifs
  {
    id: 'playfair',
    name: 'Playfair Display',
    category: 'Haute Couture Editorial Serif',
    group: 'luxury',
    cssFamily: '"Playfair Display", Georgia, serif',
    tailwindClass: 'font-playfair',
    weight: 'font-black',
    letterSpacing: 'tracking-wide sm:tracking-wider',
    recommendedCase: 'title',
    description: 'Classic high-contrast editorial serif used by world-class fashion magazines and European luxury houses. Timeless prestige.',
    vibe: 'Editorial • Vogue Luxury • Prestigious',
    badge: 'Timeless Luxury',
  },
  {
    id: 'dmserif',
    name: 'DM Serif Display',
    category: 'Contemporary Royal Serif',
    group: 'luxury',
    cssFamily: '"DM Serif Display", Georgia, serif',
    tailwindClass: 'font-dmserif',
    weight: 'font-normal',
    letterSpacing: 'tracking-wide',
    recommendedCase: 'title',
    description: 'Modern, high-contrast transitional serif with clean curves and robust stems. Looks imperial, crisp, and executive.',
    vibe: 'Royal • Crisp • Executive',
    badge: 'Popular',
  },
  {
    id: 'marcellus',
    name: 'Marcellus',
    category: 'Flared Roman Imperial Serif',
    group: 'luxury',
    cssFamily: '"Marcellus", Georgia, serif',
    tailwindClass: 'font-marcellus',
    weight: 'font-normal',
    letterSpacing: 'tracking-[0.06em]',
    recommendedCase: 'upper',
    description: 'Statuesque Roman flared serif inspired by classical stone inscriptions. Subtly flared terminals give it unmatched nobility.',
    vibe: 'Imperial • Heritage • Classical',
    badge: 'Regal Heritage',
  },
  {
    id: 'italiana',
    name: 'Italiana',
    category: 'Slender Italian Calligraphic Serif',
    group: 'luxury',
    cssFamily: '"Italiana", Georgia, serif',
    tailwindClass: 'font-serif',
    weight: 'font-normal',
    letterSpacing: 'tracking-[0.08em]',
    recommendedCase: 'upper',
    description: 'Inspired by classical Italian calligraphy and architectural stonework. Slender, tall, and effortlessly sophisticated like a luxury perfume house.',
    vibe: 'Slender • Runway Chic • Ultra-Refined',
    badge: 'Runway Chic',
  },
  {
    id: 'castoro',
    name: 'Castoro Titling',
    category: 'Renaissance Architectural Titling',
    group: 'luxury',
    cssFamily: '"Castoro Titling", Georgia, serif',
    tailwindClass: 'font-serif',
    weight: 'font-normal',
    letterSpacing: 'tracking-[0.06em]',
    recommendedCase: 'upper',
    description: 'Noble Italian Renaissance titling capitals. Carved stone dignity with generous proportions and razor-sharp serifs.',
    vibe: 'Architectural • Monumental • Noble',
    badge: 'Renaissance',
  },
  {
    id: 'bellefair',
    name: 'Bellefair',
    category: 'Haute Couture Silk Display Serif',
    group: 'luxury',
    cssFamily: '"Bellefair", Georgia, serif',
    tailwindClass: 'font-serif',
    weight: 'font-normal',
    letterSpacing: 'tracking-wide',
    recommendedCase: 'title',
    description: 'Whisper-thin, tall, delicate fashion serif. Captures the airy luxury of pure georgette, chiffon, and raw silk.',
    vibe: 'Silk Touch • Whispering Luxury • Chic',
    badge: 'Pure Silk',
  },
  {
    id: 'prata',
    name: 'Prata',
    category: 'Teardrop Didot Serif',
    group: 'luxury',
    cssFamily: '"Prata", Georgia, serif',
    tailwindClass: 'font-prata',
    weight: 'font-normal',
    letterSpacing: 'tracking-wide',
    recommendedCase: 'title',
    description: 'Didone typeface with elegant teardrop terminals and delicate hairline bridges. Evokes fine craftsmanship and silk tailoring.',
    vibe: 'Silk Luxury • Fine Craft • Refined',
    badge: 'Artisan Chic',
  },
  {
    id: 'bodoni',
    name: 'Bodoni Moda',
    category: 'Italian High-Fashion Serif',
    group: 'luxury',
    cssFamily: '"Bodoni Moda", Georgia, serif',
    tailwindClass: 'font-fashion',
    weight: 'font-black',
    letterSpacing: 'tracking-[0.08em]',
    recommendedCase: 'upper',
    description: 'The definitive Italian haute-couture typeface. Extreme vertical contrast and flat unbracketed serifs. Pure Milan fashion house.',
    vibe: 'Milan Fashion • Haute Couture • Exclusive',
    badge: 'Haute Couture',
  },
  {
    id: 'unna',
    name: 'Unna Bold',
    category: 'Refined Heritage Continental Serif',
    group: 'luxury',
    cssFamily: '"Unna", Georgia, serif',
    tailwindClass: 'font-serif',
    weight: 'font-bold',
    letterSpacing: 'tracking-wide',
    recommendedCase: 'title',
    description: 'Warm neoclassical curves with strong roots in continental literature and artisanal books. Dignified, trusted, and timeless.',
    vibe: 'Classic Dignity • Soft Neoclassical • Trusted',
    badge: 'Heritage Warmth',
  },
  {
    id: 'cinzel-dec',
    name: 'Cinzel Decorative',
    category: 'Flourished Roman Inscription',
    group: 'luxury',
    cssFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
    tailwindClass: 'font-heritage',
    weight: 'font-bold',
    letterSpacing: 'tracking-[0.08em]',
    recommendedCase: 'upper',
    description: 'Elaborate Roman inscriptional with dramatic artistic swashes and flourishes on classical capitals. Feels like an ancient imperial seal.',
    vibe: 'Ceremonial • Majestic • Regal',
    badge: 'Majestic',
  },
  {
    id: 'cinzel',
    name: 'Cinzel Classical',
    category: 'Pure Roman Capital Serif',
    group: 'luxury',
    cssFamily: '"Cinzel", Georgia, serif',
    tailwindClass: 'font-roman',
    weight: 'font-bold',
    letterSpacing: 'tracking-[0.1em]',
    recommendedCase: 'upper',
    description: 'Disciplined classical Roman inscriptional proportions. Crisp, clean, monumental gravitas.',
    vibe: 'Monumental • Timeless • Prestige',
    badge: 'Clean Roman',
  },
  {
    id: 'cormorant',
    name: 'Cormorant Garamond',
    category: 'Fine Historical Heritage Serif',
    group: 'luxury',
    cssFamily: '"Cormorant Garamond", Georgia, serif',
    tailwindClass: 'font-heading',
    weight: 'font-bold',
    letterSpacing: 'tracking-wide',
    recommendedCase: 'title',
    description: 'Graceful Renaissance serif with sharp diamond terminals, tall ascenders, and delicate hairline balance. Traditional literary luxury.',
    vibe: 'Traditional Luxury • Fine Art • Heritage',
    badge: 'Historical Heritage',
  },

  // 5. Artistic Scripts & Calligraphy
  {
    id: 'philosopher',
    name: 'Philosopher Bold',
    category: 'Artistic Flared Byzantine Serif',
    group: 'artistic',
    cssFamily: '"Philosopher", sans-serif',
    tailwindClass: 'font-serif',
    weight: 'font-bold',
    letterSpacing: 'tracking-wide',
    recommendedCase: 'title',
    description: 'Expressive flared terminal curves inspired by ancient Byzantine calligraphy. Completely distinct from conventional web fonts.',
    vibe: 'Mystical • Artistic • Flared Dignity',
    badge: 'Artistic Flared',
  },
  {
    id: 'lobstertwo',
    name: 'Lobster Two Bold',
    category: 'Boutique Vintage Upright Script',
    group: 'artistic',
    cssFamily: '"Lobster Two", cursive, display',
    tailwindClass: 'font-serif',
    weight: 'font-bold',
    letterSpacing: 'tracking-normal',
    recommendedCase: 'title',
    description: 'Upright, friendly, premium vintage script with smooth connecting ligatures. Gives a welcoming artisanal boutique warmth.',
    vibe: 'Vintage Boutique • Warm Craft • Friendly',
    badge: 'Vintage Script',
  },

  // 6. Modern & Industrial Sans
  {
    id: 'syne',
    name: 'Syne ExtraBold',
    category: 'Avant-Garde Architectural Sans',
    group: 'modern',
    cssFamily: '"Syne", sans-serif',
    tailwindClass: 'font-modern',
    weight: 'font-extrabold',
    letterSpacing: 'tracking-[0.05em]',
    recommendedCase: 'upper',
    description: 'Ultra-wide contemporary French avant-garde sans. Wide proportioned letterforms that dominate horizontal space effortlessly.',
    vibe: 'Architectural • Contemporary • Trendsetter',
    badge: 'Modern Avant-Garde',
  },
  {
    id: 'montserrat',
    name: 'Montserrat Black',
    category: 'Industrial Commercial Sans',
    group: 'modern',
    cssFamily: '"Montserrat", sans-serif',
    tailwindClass: 'font-brand',
    weight: 'font-black',
    letterSpacing: 'tracking-[0.04em]',
    recommendedCase: 'upper',
    description: 'Solid, heavyweight geometric sans. Matches the bold corporate typography on physical visiting cards and industrial manufacturing signage.',
    vibe: 'Corporate • Heavy-Duty • Commercial',
    badge: 'Business Card Style',
  },
  {
    id: 'greatvibes',
    name: 'Great Vibes',
    category: 'Imperial Royal Script',
    group: 'artistic',
    cssFamily: '"Great Vibes", cursive',
    tailwindClass: 'font-serif',
    weight: 'font-normal',
    letterSpacing: 'tracking-wide',
    recommendedCase: 'title',
    description: 'Breathtaking, flowing imperial calligraphy script with dramatic ascending loops and clean baseline rhythm. Pure royal luxury.',
    vibe: 'Imperial • Calligraphic Majesty • Flowing',
    badge: 'Royal Script',
  },
  {
    id: 'alexbrush',
    name: 'Alex Brush',
    category: 'Fluid Signature Calligraphy',
    group: 'artistic',
    cssFamily: '"Alex Brush", cursive',
    tailwindClass: 'font-serif',
    weight: 'font-normal',
    letterSpacing: 'tracking-normal',
    recommendedCase: 'title',
    description: 'Smooth, beautifully balanced brush script with short descenders and restrained flourishes for exceptional readability.',
    vibe: 'Fluid Signature • Graceful • Artisan',
    badge: 'Signature Calligraphy',
  },
  {
    id: 'parisienne',
    name: 'Parisienne',
    category: 'French Boutique Script',
    group: 'artistic',
    cssFamily: '"Parisienne", cursive',
    tailwindClass: 'font-serif',
    weight: 'font-normal',
    letterSpacing: 'tracking-normal',
    recommendedCase: 'title',
    description: 'Chic, vintage Parisian brush script with free-spirited bounce. Feels like a private custom couture atelier.',
    vibe: 'Parisian Atelier • Chic • Romantic',
    badge: 'French Atelier',
  },
  {
    id: 'kalam',
    name: 'Kalam Bold',
    category: 'Organic Indian Hand-Drawn Script',
    group: 'artistic',
    cssFamily: '"Kalam", cursive',
    tailwindClass: 'font-serif',
    weight: 'font-bold',
    letterSpacing: 'tracking-normal',
    recommendedCase: 'title',
    description: 'Organic, natural Indian handwriting script with authentic wooden-pen strokes. Deeply rooted in Indian craftsmanship and dye workshop heritage.',
    vibe: 'Handmade Craft • Indian Soul • Organic',
    badge: 'Indian Soul',
  },
  {
    id: 'forum',
    name: 'Forum Classical',
    category: 'Classical Roman Antiqua',
    group: 'luxury',
    cssFamily: '"Forum", Georgia, serif',
    tailwindClass: 'font-serif',
    weight: 'font-normal',
    letterSpacing: 'tracking-[0.08em]',
    recommendedCase: 'upper',
    description: 'Classical antiqua with medieval and Roman inscriptional proportions. Slender vertical stems and delicate serifs for refined luxury.',
    vibe: 'Classical Antiqua • Sculptured • Dignified',
    badge: 'Classical Antiqua',
  },
  {
    id: 'gildadisplay',
    name: 'Gilda Display',
    category: 'Graceful Continental Didone',
    group: 'luxury',
    cssFamily: '"Gilda Display", Georgia, serif',
    tailwindClass: 'font-serif',
    weight: 'font-normal',
    letterSpacing: 'tracking-wide',
    recommendedCase: 'title',
    description: 'Continental Didone serif with delicate horizontal brackets and generous counters. Quiet, self-assured high-end luxury.',
    vibe: 'Quiet Luxury • Continental • Balanced',
    badge: 'Quiet Luxury',
  },
  {
    id: 'outfit',
    name: 'Outfit Black',
    category: 'Contemporary Lifestyle Geometric Sans',
    group: 'modern',
    cssFamily: '"Outfit", sans-serif',
    tailwindClass: 'font-sans',
    weight: 'font-black',
    letterSpacing: 'tracking-[0.04em]',
    recommendedCase: 'upper',
    description: 'Ultra-clean modern geometric sans. High-end lifestyle brand vibe with circular curves and contemporary authority.',
    vibe: 'Lifestyle Brand • Crisp • State-of-the-Art',
    badge: 'Modern Lifestyle',
  },
  {
    id: 'caveat',
    name: 'Caveat Bold',
    category: 'Freehand Textile Artisan Script',
    group: 'artistic',
    cssFamily: '"Caveat", cursive',
    tailwindClass: 'font-serif',
    weight: 'font-bold',
    letterSpacing: 'tracking-wide',
    recommendedCase: 'title',
    description: 'Playful, spontaneous freehand artisan brush script. Full of creative life, handcrafted personality, and warmth.',
    vibe: 'Artisan Brush • Creative • Spontaneous',
    badge: 'Artisan Brush',
  },
];

export const CATEGORY_TABS = [
  { id: 'all', label: 'All Fonts', count: FONT_COLLECTION.length },
  { id: 'luxury', label: '👑 Luxury & Royal Serifs', count: FONT_COLLECTION.filter(f => f.group === 'luxury').length },
  { id: 'artistic', label: '🎨 Calligraphic & Heritage', count: FONT_COLLECTION.filter(f => f.group === 'artistic').length },
  { id: 'bold', label: '⚡ High Impact & Bold', count: FONT_COLLECTION.filter(f => f.group === 'bold').length },
  { id: 'modern', label: '📐 Modern & Industrial', count: FONT_COLLECTION.filter(f => f.group === 'modern').length },
];

export const COLOR_SCHEMES = [
  {
    id: 'dual',
    name: '3D Gold + Sapphire Blue (Signature)',
    description: 'Matches approved MDP crest colors: 3D Metallic Gold for Munna, Royal Sapphire for Dyeing Printing.',
  },
  {
    id: 'all-gold',
    name: 'All 3D Metallic Gold',
    description: 'Complete name bathed in warm metallic gold leaf shimmer.',
  },
  {
    id: 'all-blue',
    name: 'All Royal Sapphire Blue',
    description: 'Dignified royal sapphire blue gradient across both words.',
  },
  {
    id: 'crisp-white',
    name: 'Crisp Regal White',
    description: 'Pure high-contrast white with soft golden ambient shadow.',
  },
];

const FontPreviewStudio = ({
  darkMode = true,
  onToggleTheme,
  onClose,
  onNavigateHome,
}) => {
  const [selectedFont, setSelectedFont] = useState(() => {
    const saved = localStorage.getItem('mdp_selected_font_id');
    return FONT_COLLECTION.find((f) => f.id === saved) || FONT_COLLECTION[0];
  });

  const [activeGroup, setActiveGroup] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [casing, setCasing] = useState('title'); // 'title' | 'upper'
  const [showEmblem, setShowEmblem] = useState(false);
  const [colorScheme, setColorScheme] = useState('dual');
  const [previewDevice, setPreviewDevice] = useState('both'); // 'both' | 'phone' | 'desktop'
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [appliedNotification, setAppliedNotification] = useState(false);

  // Filtered fonts based on tab & search query
  const filteredFonts = useMemo(() => {
    return FONT_COLLECTION.filter((font) => {
      const matchesGroup = activeGroup === 'all' || font.group === activeGroup;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        font.name.toLowerCase().includes(q) ||
        font.category.toLowerCase().includes(q) ||
        font.vibe.toLowerCase().includes(q) ||
        font.badge.toLowerCase().includes(q) ||
        font.description.toLowerCase().includes(q);
      return matchesGroup && matchesSearch;
    });
  }, [activeGroup, searchQuery]);

  const handleSelectFont = (font) => {
    setSelectedFont(font);
    if (font.recommendedCase && font.recommendedCase !== casing) {
      setCasing(font.recommendedCase);
    }
  };

  const handleApplyToSite = () => {
    localStorage.setItem('mdp_selected_font_id', selectedFont.id);
    localStorage.setItem('mdp_selected_font_family', selectedFont.cssFamily);
    localStorage.setItem('mdp_selected_font_class', selectedFont.tailwindClass);
    localStorage.setItem('mdp_selected_font_casing', casing);
    localStorage.setItem('mdp_selected_font_show_emblem', showEmblem ? 'true' : 'false');
    localStorage.setItem('mdp_selected_font_color', colorScheme);

    // Dispatch a custom event so live navbar updates instantly across tabs/components
    window.dispatchEvent(new Event('mdp_font_changed'));

    setAppliedNotification(true);
    setTimeout(() => setAppliedNotification(false), 3000);
  };

  const handleCopyFontDetails = () => {
    const text = `Chosen Brand Font: ${selectedFont.name} (${selectedFont.category})
CSS font-family: ${selectedFont.cssFamily}
Casing: ${casing === 'upper' ? 'ALL CAPS (MUNNA DYEING PRINTING)' : 'Title Case (Munna Dyeing Printing)'}
Logo in Navbar: ${showEmblem ? 'With MDP Emblem' : 'Pure Wordmark Only'}
Color Scheme: ${colorScheme}`;
    navigator.clipboard?.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  // Helper to render text with selected font and casing
  const renderBrandText = (isPhone = false) => {
    const munnaText = casing === 'upper' ? 'MUNNA' : 'Munna';
    const dyeingText = casing === 'upper' ? 'DYEING PRINTING' : 'Dyeing Printing';

    const munnaColor = () => {
      if (colorScheme === 'all-gold') {
        return darkMode
          ? 'bg-gradient-to-r from-[#ffe58f] via-[#ffd043] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,215,0,0.4)]'
          : 'text-brand-gold-dark drop-shadow-sm';
      }
      if (colorScheme === 'all-blue') {
        return darkMode
          ? 'text-[#38bdf8] drop-shadow-[0_1px_8px_rgba(56,189,248,0.4)]'
          : 'text-[#0b2559]';
      }
      if (colorScheme === 'crisp-white') {
        return darkMode
          ? 'text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]'
          : 'text-[#0b2559]';
      }
      // Dual tone (default)
      return darkMode
        ? 'bg-gradient-to-r from-[#ffe58f] via-[#ffd043] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,215,0,0.35)]'
        : 'text-[#0b2559] drop-shadow-sm';
    };

    const dyeingColor = () => {
      if (colorScheme === 'all-gold') {
        return darkMode
          ? 'bg-gradient-to-r from-[#ffe58f] via-[#ffd043] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,215,0,0.4)]'
          : 'text-brand-gold-dark drop-shadow-sm';
      }
      if (colorScheme === 'all-blue') {
        return darkMode
          ? 'text-[#38bdf8] drop-shadow-[0_1px_8px_rgba(56,189,248,0.4)]'
          : 'text-[#0b2559]';
      }
      if (colorScheme === 'crisp-white') {
        return darkMode
          ? 'text-gray-100 drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]'
          : 'text-[#1e3a8a]';
      }
      // Dual tone (default)
      return darkMode
        ? 'text-[#38bdf8] drop-shadow-[0_1px_8px_rgba(56,189,248,0.35)]'
        : 'text-[#a37f37]';
    };

    const fontSize = isPhone
      ? 'text-[15px] min-[380px]:text-base'
      : 'text-xl md:text-2xl lg:text-[26px]';

    return (
      <div className="flex items-center shrink-0">
        {showEmblem && (
          <>
            <img
              src={siteConfig.logoImage}
              alt="MDP Emblem"
              className={`${isPhone ? 'h-5' : 'h-7'} w-auto object-contain shrink-0`}
            />
            <span
              className={`w-[1.5px] ${
                isPhone ? 'h-5 mx-2' : 'h-7 mx-2.5'
              } bg-gradient-to-b from-brand-gold-light via-[#38bdf8] to-brand-gold-dark rounded-full shrink-0 block`}
              aria-hidden="true"
            />
          </>
        )}
        <div
          className={`flex flex-row items-baseline gap-1.5 sm:gap-2.5 whitespace-nowrap leading-none ${selectedFont.weight} ${selectedFont.letterSpacing}`}
          style={{ fontFamily: selectedFont.cssFamily }}
        >
          <span className={`${munnaColor()} ${fontSize} transition-all duration-300 leading-none`}>
            {munnaText}
          </span>
          <span className={`${dyeingColor()} ${fontSize} transition-all duration-300 leading-none`}>
            {dyeingText}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? 'bg-[#0b111e] text-gray-200' : 'bg-[#faf8f5] text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-brand-gold/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-gold/15 text-brand-gold border border-brand-gold/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Brand Typography Studio — {FONT_COLLECTION.length} Curated Fonts</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Test & Choose Your Brand Font
            </h1>
            <p className="text-sm sm:text-base text-gray-400 mt-1 max-w-2xl">
              Preview real commercial production typography for <strong>“Munna Dyeing Printing”</strong> side-by-side in full desktop and mobile navbar layouts.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  if ('caches' in window) {
                    caches.keys().then((names) => {
                      names.forEach((name) => caches.delete(name));
                    });
                  }
                  window.location.reload(true);
                }
              }}
              className={`px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1.5 ${
                darkMode
                  ? 'bg-brand-surface border-brand-gold/30 text-brand-gold hover:bg-brand-gold/20'
                  : 'bg-white border-brand-gold/40 text-brand-gold-dark hover:bg-brand-gold/10 shadow-sm'
              }`}
              title="Refresh / Reload Latest Fonts Suite"
            >
              <span>🔄</span>
              <span className="font-bold">Reload Latest ({FONT_COLLECTION.length})</span>
            </button>

            <button
              onClick={onToggleTheme}
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-brand-surface border-brand-gold/30 text-brand-gold hover:bg-brand-gold/20'
                  : 'bg-white border-brand-gold/40 text-brand-gold-dark hover:bg-brand-gold/10 shadow-sm'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={onClose || onNavigateHome}
              className={`px-4 py-2.5 rounded-xl border font-semibold text-sm transition-all flex items-center gap-2 ${
                darkMode
                  ? 'border-gray-700 bg-brand-surface text-gray-300 hover:text-white hover:border-gray-500'
                  : 'border-gray-300 bg-white text-gray-700 hover:text-black hover:border-gray-400 shadow-sm'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Website</span>
            </button>
          </div>
        </div>

        {/* CONTROLS BAR: Case Toggle, Emblem Toggle, Color Scheme, Device Preview */}
        <div
          className={`p-5 rounded-2xl border shadow-lg space-y-4 ${
            darkMode
              ? 'bg-[#131d2e] border-brand-gold/20'
              : 'bg-white border-brand-gold/30 shadow-brand-gold/5'
          }`}
        >
          <div className="text-xs font-bold uppercase tracking-wider text-brand-gold flex items-center gap-2">
            <Palette className="w-4 h-4" />
            <span>Interactive Customization Controls</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Letter Casing Toggle */}
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-1.5">Letter Casing</label>
              <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-black/20 border border-white/5">
                <button
                  onClick={() => setCasing('title')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                    casing === 'title'
                      ? 'bg-brand-gold text-brand-dark shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Title Case (Munna)
                </button>
                <button
                  onClick={() => setCasing('upper')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                    casing === 'upper'
                      ? 'bg-brand-gold text-brand-dark shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  ALL CAPS (MUNNA)
                </button>
              </div>
            </div>

            {/* 2. Logo Emblem Toggle */}
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-1.5">Navbar Emblem</label>
              <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-black/20 border border-white/5">
                <button
                  onClick={() => setShowEmblem(false)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                    !showEmblem
                      ? 'bg-brand-gold text-brand-dark shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Wordmark Only (Clean)
                </button>
                <button
                  onClick={() => setShowEmblem(true)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                    showEmblem
                      ? 'bg-brand-gold text-brand-dark shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  + MDP Crest Logo
                </button>
              </div>
            </div>

            {/* 3. Color Palette */}
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-1.5">Color Styling</label>
              <select
                value={colorScheme}
                onChange={(e) => setColorScheme(e.target.value)}
                className={`w-full py-2 px-3 rounded-xl text-xs font-medium border focus:outline-none transition-all ${
                  darkMode
                    ? 'bg-[#0b111e] border-brand-gold/30 text-gray-200'
                    : 'bg-gray-50 border-brand-gold/40 text-gray-800'
                }`}
              >
                {COLOR_SCHEMES.map((scheme) => (
                  <option key={scheme.id} value={scheme.id}>
                    {scheme.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Device Filter */}
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-1.5">View Layout</label>
              <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-black/20 border border-white/5">
                <button
                  onClick={() => setPreviewDevice('both')}
                  className={`py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1 ${
                    previewDevice === 'both'
                      ? 'bg-brand-gold text-brand-dark shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Both
                </button>
                <button
                  onClick={() => setPreviewDevice('phone')}
                  className={`py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1 ${
                    previewDevice === 'phone'
                      ? 'bg-brand-gold text-brand-dark shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Phone</span>
                </button>
                <button
                  onClick={() => setPreviewDevice('desktop')}
                  className={`py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1 ${
                    previewDevice === 'desktop'
                      ? 'bg-brand-gold text-brand-dark shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LIVE SIMULATED PREVIEWS (Desktop & Mobile) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-gold">Real Navbar Simulation</div>
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 mt-0.5">
                <span>Active Preview: </span>
                <span className="text-brand-gold underline decoration-brand-gold/40">{selectedFont.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
                  {selectedFont.category}
                </span>
              </h2>
            </div>

            {/* Action Buttons: Apply to Live Site & Copy Name */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyFontDetails}
                className={`px-3.5 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  darkMode
                    ? 'border-gray-700 bg-brand-surface text-gray-300 hover:text-white hover:border-brand-gold'
                    : 'border-gray-300 bg-white text-gray-700 hover:text-black hover:border-brand-gold shadow-sm'
                }`}
              >
                {copiedNotification ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedNotification ? 'Details Copied!' : 'Copy Font Info'}</span>
              </button>

              <button
                onClick={handleApplyToSite}
                className="px-4 py-2 rounded-xl text-xs font-bold text-brand-dark bg-gold-gradient shadow-md hover:shadow-brand-gold/30 transition-all flex items-center gap-1.5 transform active:scale-95"
              >
                {appliedNotification ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                <span>{appliedNotification ? 'Applied to Live Navbar!' : 'Select & Apply to Site'}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* DESKTOP NAVBAR SIMULATION */}
            {(previewDevice === 'both' || previewDevice === 'desktop') && (
              <div
                className={`rounded-2xl border p-5 shadow-xl transition-all ${
                  previewDevice === 'desktop' ? 'lg:col-span-12' : 'lg:col-span-8'
                } ${
                  darkMode
                    ? 'bg-[#101726] border-brand-gold/20'
                    : 'bg-white border-brand-gold/30 shadow-brand-gold/5'
                }`}
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-brand-gold" />
                    <span className="font-semibold text-gray-300">Desktop Header Simulation (100% Scale)</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-black/30 border border-white/5">
                    Mode: {darkMode ? 'Dark' : 'Light'}
                  </span>
                </div>

                {/* Simulated Real Desktop Navbar Bar */}
                <div
                  className={`px-4 sm:px-6 py-3.5 rounded-xl border flex items-center justify-between transition-all ${
                    darkMode
                      ? 'bg-[#0b111e] border-brand-gold/20 shadow-inner'
                      : 'bg-[#fbf9f5] border-brand-gold/30 shadow-inner'
                  }`}
                >
                  {/* Brand Wordmark with selected font */}
                  {renderBrandText(false)}

                  {/* Simulated Nav Links */}
                  <div className="hidden sm:flex items-center space-x-3 md:space-x-5 text-xs font-medium text-gray-400">
                    <span className="hover:text-brand-gold cursor-pointer transition-colors">Home</span>
                    <span className="hover:text-brand-gold cursor-pointer transition-colors">About</span>
                    <span className="hover:text-brand-gold cursor-pointer transition-colors">Fabric & Colors</span>
                    <span className="hover:text-brand-gold cursor-pointer transition-colors">Gallery</span>
                  </div>

                  {/* Simulated Buttons */}
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-2 rounded-lg border text-xs ${
                        darkMode ? 'bg-brand-surface border-brand-gold/30 text-brand-gold' : 'bg-white border-brand-gold/30 text-brand-gold-dark'
                      }`}
                    >
                      {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                    </div>
                    <div className="px-3 py-1.5 rounded-lg text-xs font-bold text-brand-dark bg-gold-gradient shadow-sm">
                      Contact Us
                    </div>
                  </div>
                </div>

                {/* Big Hero Display Card */}
                <div
                  className={`mt-4 p-6 rounded-xl border text-center relative overflow-hidden ${
                    darkMode ? 'bg-[#080d18] border-brand-gold/15' : 'bg-[#f4efe6] border-brand-gold/20'
                  }`}
                >
                  <div className="text-[11px] uppercase tracking-widest text-brand-gold font-semibold mb-2">
                    Hero Section Headline Preview
                  </div>
                  <div
                    className={`text-2xl sm:text-4xl md:text-5xl transition-all leading-tight ${selectedFont.weight} ${selectedFont.letterSpacing}`}
                    style={{ fontFamily: selectedFont.cssFamily }}
                  >
                    <span className={colorScheme === 'all-blue' ? (darkMode ? 'text-[#38bdf8]' : 'text-[#0b2559]') : (darkMode ? 'bg-gradient-to-r from-[#ffe58f] via-[#ffd043] to-[#d4af37] bg-clip-text text-transparent' : 'text-[#0b2559]')}>
                      {casing === 'upper' ? 'MUNNA' : 'Munna'}
                    </span>
                    <span className="mx-2"> </span>
                    <span className={colorScheme === 'all-gold' ? (darkMode ? 'bg-gradient-to-r from-[#ffe58f] via-[#ffd043] to-[#d4af37] bg-clip-text text-transparent' : 'text-brand-gold-dark') : (darkMode ? 'text-[#38bdf8]' : 'text-[#a37f37]')}>
                      {casing === 'upper' ? 'DYEING PRINTING' : 'Dyeing Printing'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 font-light max-w-md mx-auto">
                    "{siteConfig.tagline}" — Wholesale Fabric Dyeing & Hand Printing Unit Hyderabad
                  </p>
                </div>
              </div>
            )}

            {/* MOBILE PHONE SIMULATION (Actual 360px Device Frame) */}
            {(previewDevice === 'both' || previewDevice === 'phone') && (
              <div
                className={`rounded-2xl border p-5 shadow-xl transition-all ${
                  previewDevice === 'phone' ? 'lg:col-span-12 flex justify-center' : 'lg:col-span-4'
                } ${
                  darkMode
                    ? 'bg-[#101726] border-brand-gold/20'
                    : 'bg-white border-brand-gold/30 shadow-brand-gold/5'
                }`}
              >
                <div className="w-full max-w-[360px] mx-auto">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-brand-gold" />
                      <span className="font-semibold text-gray-300">Mobile Phone View (360px)</span>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-black/30 border border-white/5">
                      Single-Line Test
                    </span>
                  </div>

                  {/* Simulated iPhone Frame */}
                  <div
                    className={`rounded-[28px] border-4 p-3 shadow-2xl overflow-hidden ${
                      darkMode ? 'bg-[#080d18] border-gray-800' : 'bg-white border-gray-300'
                    }`}
                  >
                    {/* Phone Status Bar */}
                    <div className="flex justify-between items-center text-[10px] text-gray-400 px-2 pb-2">
                      <span>9:41</span>
                      <div className="w-12 h-3.5 bg-black rounded-full mx-auto" />
                      <span>5G 100%</span>
                    </div>

                    {/* Simulated Mobile Header Bar */}
                    <div
                      className={`px-3 py-3 rounded-xl border flex items-center justify-between transition-all ${
                        darkMode
                          ? 'bg-[#0b111e] border-brand-gold/20'
                          : 'bg-[#faf8f5] border-brand-gold/30'
                      }`}
                    >
                      {/* Mobile Wordmark (Strict single line) */}
                      <div className="shrink-0 overflow-hidden pr-1">
                        {renderBrandText(true)}
                      </div>

                      {/* Mobile Header Buttons (Right side) */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div
                          className={`p-1.5 rounded-md border text-[11px] ${
                            darkMode ? 'bg-brand-surface border-brand-gold/30 text-brand-gold' : 'bg-white border-brand-gold/30 text-brand-gold-dark'
                          }`}
                        >
                          {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                        </div>
                        <div className="px-2.5 py-1 rounded text-[10px] font-bold text-brand-dark bg-gold-gradient shadow-sm">
                          Contact
                        </div>
                        <div
                          className={`p-1.5 rounded-md ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          <div className="w-4 h-0.5 bg-current mb-1" />
                          <div className="w-4 h-0.5 bg-current mb-1" />
                          <div className="w-4 h-0.5 bg-current" />
                        </div>
                      </div>
                    </div>

                    {/* Simulated Body */}
                    <div
                      className={`mt-3 p-3 rounded-lg border text-center text-xs text-gray-400 ${
                        darkMode ? 'bg-white/5 border-white/5' : 'bg-black/5 border-black/5'
                      }`}
                    >
                      <div className="w-full h-24 bg-gradient-to-br from-brand-gold/20 to-blue-500/10 rounded-md flex items-center justify-center text-[11px] text-brand-gold font-medium">
                        Hero Banner Preview
                      </div>
                      <p className="mt-2 text-[10px] text-gray-400">
                        Fits horizontally on phone without overflow or clipping.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FONT SELECTOR GALLERY: Categories + Search + Cards */}
        <div className="space-y-5 pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-gold">Curated Font Library</div>
              <h3 className="text-2xl font-bold mt-0.5">Click Any Font to Preview Instantly</h3>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search font name or style..."
                className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs border focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all ${
                  darkMode
                    ? 'bg-[#101726] border-white/10 text-gray-200 placeholder-gray-500'
                    : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400'
                }`}
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeGroup === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveGroup(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                    isActive
                      ? 'bg-brand-gold text-brand-dark border-brand-gold shadow-md font-bold'
                      : darkMode
                      ? 'bg-[#101726] border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                      : 'bg-white border-gray-300 text-gray-600 hover:text-black hover:border-gray-400 shadow-sm'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/20 text-brand-dark' : 'bg-white/10 text-gray-400'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Font Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFonts.map((font) => {
              const isSelected = selectedFont.id === font.id;
              const sampleMunna = casing === 'upper' ? 'MUNNA' : 'Munna';
              const sampleDyeing = casing === 'upper' ? 'DYEING PRINTING' : 'Dyeing Printing';

              return (
                <div
                  key={font.id}
                  onClick={() => handleSelectFont(font)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 relative group transform hover:-translate-y-1 ${
                    isSelected
                      ? darkMode
                        ? 'bg-gradient-to-b from-[#172338] to-[#101928] border-brand-gold shadow-[0_0_25px_rgba(212,175,55,0.25)] ring-1 ring-brand-gold'
                        : 'bg-white border-brand-gold shadow-xl ring-2 ring-brand-gold/40'
                      : darkMode
                      ? 'bg-[#101726] border-white/10 hover:border-brand-gold/40 hover:bg-[#141d2e]'
                      : 'bg-white border-gray-200 hover:border-brand-gold/50 shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Top Bar: Badge & Selection Indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        isSelected
                          ? 'bg-brand-gold text-brand-dark border-brand-gold font-bold'
                          : 'bg-brand-gold/10 text-brand-gold border-brand-gold/20'
                      }`}
                    >
                      {font.badge}
                    </span>

                    {isSelected ? (
                      <div className="flex items-center gap-1 text-xs font-bold text-brand-gold">
                        <Check className="w-4 h-4" />
                        <span>Active</span>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400 group-hover:text-brand-gold transition-colors">
                        Click to Preview →
                      </span>
                    )}
                  </div>

                  {/* Font Name & Category */}
                  <div className="mb-3">
                    <h4 className="text-lg font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 group-hover:text-brand-gold transition-colors">
                      {font.name}
                    </h4>
                    <p className="text-xs text-gray-400 font-light">{font.category}</p>
                  </div>

                  {/* Live Font Sample rendering */}
                  <div
                    className={`py-3 px-3 rounded-xl border mb-3 overflow-hidden ${
                      darkMode ? 'bg-[#080d18] border-white/5' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div
                      className={`text-lg sm:text-xl truncate leading-tight ${font.weight} ${font.letterSpacing}`}
                      style={{ fontFamily: font.cssFamily }}
                    >
                      <span className={darkMode ? 'text-brand-gold-light' : 'text-[#0b2559]'}>
                        {sampleMunna}
                      </span>{' '}
                      <span className={darkMode ? 'text-[#38bdf8]' : 'text-[#a37f37]'}>
                        {sampleDyeing}
                      </span>
                    </div>
                  </div>

                  {/* Vibe / Description */}
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {font.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                    <span className="font-medium text-brand-gold/80">{font.vibe}</span>
                    <span className="text-[10px] opacity-70">Rec: {font.recommendedCase === 'upper' ? 'ALL CAPS' : 'Title Case'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Helper Bar */}
        <div
          className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
            darkMode ? 'bg-[#131d2e] border-brand-gold/20' : 'bg-white border-brand-gold/30 shadow-md'
          }`}
        >
          <div>
            <h4 className="text-base font-bold">Have you found the font you love?</h4>
            <p className="text-xs text-gray-400 mt-0.5">
              Click <strong>"Select & Apply to Site"</strong> above or simply tell me the font name (e.g. <em>"{selectedFont.name}"</em>) and I will permanently lock it as the default!
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleApplyToSite}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-brand-dark bg-gold-gradient shadow-md hover:shadow-brand-gold/30 transition-all flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Apply {selectedFont.name}</span>
            </button>

            <button
              onClick={onClose || onNavigateHome}
              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold ${
                darkMode ? 'border-gray-700 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              Done / Return
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FontPreviewStudio;
