import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, MapPin } from 'lucide-react';
import { heroSlides } from '../data/heroData';
import { siteConfig } from '../config/siteConfig';

const AUTOPLAY_DURATION = 5000; // 5.0 seconds per slide

const Hero = ({ darkMode = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDocHidden, setIsDocHidden] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const transitionTimeout = useRef(null);

  const totalSlides = heroSlides.length;
  const activeSlide = heroSlides[currentSlide] || heroSlides[0];

  // Transition to a specific slide with smooth dual-layer crossfade
  const goToSlide = useCallback((newIndex) => {
    if (newIndex === currentSlide) return;
    setPrevSlide(currentSlide);
    setCurrentSlide(newIndex);
    setProgressKey((k) => k + 1);

    if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    transitionTimeout.current = setTimeout(() => {
      setPrevSlide(null);
    }, 900);
  }, [currentSlide]);

  const handleNext = useCallback(() => {
    const nextIndex = (currentSlide + 1) % totalSlides;
    goToSlide(nextIndex);
  }, [currentSlide, totalSlides, goToSlide]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prevIndex);
  }, [currentSlide, totalSlides, goToSlide]);

  // Autoplay management
  useEffect(() => {
    // Only pause if desktop is hovering or browser tab is hidden
    if (isHovered || isDocHidden) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [isHovered, isDocHidden, handleNext]);

  // Tab visibility listener
  useEffect(() => {
    const handleVisibility = () => {
      setIsDocHidden(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch Swipe for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="hero"
      aria-label="Hero Carousel Showcase"
      className="relative pt-20 sm:pt-24 pb-8 lg:pb-12 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Full-Width Cinematic Frame */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`relative w-full rounded-3xl overflow-hidden border shadow-2xl transition-colors duration-500 ${
            darkMode
              ? 'border-brand-gold/30 bg-brand-card shadow-black/80'
              : 'border-brand-gold/40 bg-brand-cream shadow-gray-300/80'
          }`}
        >
          
          {/* Background Crossfade Image Container */}
          <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] xl:h-[680px] overflow-hidden bg-brand-dark">
            {heroSlides.map((slide, index) => {
              const isActive = index === currentSlide;
              const isExiting = index === prevSlide;

              let zIndex = 'z-0';
              let opacityClass = 'opacity-0 pointer-events-none';

              if (isActive) {
                zIndex = 'z-20';
                opacityClass = 'opacity-100';
              } else if (isExiting) {
                zIndex = 'z-10';
                opacityClass = 'opacity-100';
              }

              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${zIndex} ${opacityClass}`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className={`w-full h-full object-cover object-center ${
                      isActive ? 'animate-ken-burns' : ''
                    }`}
                  />
                  
                  {/* Subtle Contrast Gradients for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/50 to-brand-dark/20 sm:from-brand-dark/95 sm:via-brand-dark/40 sm:to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/30 to-transparent hidden sm:block pointer-events-none" />
                </div>
              );
            })}

            {/* Editorial Content Overlay */}
            <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 sm:p-10 lg:p-14 text-white pointer-events-none">
              <div
                key={`content-${currentSlide}`}
                className="max-w-2xl space-y-4 sm:space-y-5 pointer-events-auto transition-all duration-700 ease-out"
              >
                
                {/* Eyebrow / Category Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-gold/40 bg-brand-dark/75 backdrop-blur-md shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-brand-gold">
                    {activeSlide.eyebrow}
                  </span>
                </div>

                {/* Two-Line Headline */}
                <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-lg">
                  <span>{activeSlide.titleLine1}</span>
                  <span className="block text-gold-gradient mt-1">{activeSlide.titleLine2}</span>
                </h1>

                {/* Supporting Line of Core Crafts */}
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-brand-gold-light/95 uppercase max-w-xl">
                  {activeSlide.supportingLine}
                </p>

                {/* Primary CTA & Assurance Badges */}
                <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                  <a
                    href={activeSlide.ctaLink}
                    className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gold-gradient text-brand-dark font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-brand-gold/25"
                  >
                    <span>{activeSlide.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-gray-300/90 pl-1">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-brand-gold" />
                      <span>In-House Unit</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-brand-gold" />
                      <span>{siteConfig.area}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Control Bar: Counter, Progress Bar & Chevron Buttons */}
              <div className="w-full flex items-center justify-between pt-6 mt-6 border-t border-white/15 pointer-events-auto">
                
                {/* Slide Counter & Dynamic Progress Bar */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Clickable Slide Pills */}
                  <div className="flex items-center gap-1.5">
                    {heroSlides.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => goToSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentSlide
                            ? 'w-7 sm:w-10 bg-brand-gold'
                            : 'w-2 sm:w-2.5 bg-white/30 hover:bg-white/60'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* 01 / 03 Counter & Progress Bar */}
                  <div className="flex flex-col gap-1 pl-1">
                    <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-brand-gold">
                      0{currentSlide + 1} <span className="text-white/40">/</span> 0{totalSlides}
                    </span>
                    {/* Animated Progress Bar */}
                    <div className="w-16 sm:w-24 h-0.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        key={progressKey}
                        className={`h-full bg-brand-gold rounded-full animate-hero-progress ${
                          isHovered ? 'paused-animation' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Minimal Circular Chevron Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/25 bg-brand-dark/65 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Slide"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/25 bg-brand-dark/65 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
