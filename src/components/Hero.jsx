import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, MapPin } from 'lucide-react';
import { heroSlides } from '../data/heroData';
import { siteConfig } from '../config/siteConfig';

const AUTOPLAY_DURATION = 5500; // 5.5 seconds per slide

const Hero = ({ darkMode = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const carouselRef = useRef(null);

  const totalSlides = heroSlides.length;
  const activeSlide = heroSlides[currentSlide] || heroSlides[0];

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgressKey((prev) => prev + 1);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgressKey((prev) => prev + 1);
  }, [totalSlides]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
    setProgressKey((prev) => prev + 1);
  };

  // Autoplay timer with pause on hover, visibility change, and reduced-motion check
  useEffect(() => {
    if (isPaused) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => {
      handleNext();
    }, AUTOPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [currentSlide, isPaused, handleNext]);

  // Pause when browser tab is inactive to save performance
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Keyboard navigation when carousel is focused or hovered
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Verify gesture was predominantly horizontal with >= 45px swipe
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="hero"
      ref={carouselRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Munna Dyeing Printing Editorial Showcase"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative pt-20 sm:pt-24 pb-8 lg:pb-12 overflow-hidden outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Cinematic Visual Frame */}
        <div className={`relative w-full rounded-3xl overflow-hidden border shadow-2xl transition-colors duration-700 ${
          darkMode
            ? 'border-brand-gold/30 bg-brand-card shadow-black/70'
            : 'border-brand-gold/40 bg-brand-cream shadow-gray-300/70'
        }`}>
          
          {/* Full-Bleed Image Container */}
          <div className="relative w-full h-[500px] sm:h-[560px] lg:h-[620px] xl:h-[680px] overflow-hidden select-none">
            {heroSlides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    loading={index === 0 ? "eager" : "lazy"}
                    className={`w-full h-full object-cover object-center ${
                      isActive ? 'animate-ken-burns' : ''
                    }`}
                  />
                  
                  {/* Editorial Vignette & Dual-Direction Contrast Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/50 to-brand-dark/20 sm:from-brand-dark/95 sm:via-brand-dark/40 sm:to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/30 to-transparent hidden sm:block pointer-events-none" />
                </div>
              );
            })}

            {/* Editorial Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 lg:p-14 text-white pointer-events-none">
              <div className="max-w-2xl space-y-4 sm:space-y-5 pointer-events-auto">
                
                {/* Eyebrow Category Tag */}
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

                {/* CTA Button & Assurance Pill */}
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

              {/* Bottom Control Bar: Counter, Progress Bar & Navigation */}
              <div className="w-full flex items-center justify-between pt-6 mt-4 border-t border-white/15 pointer-events-auto">
                
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
                            ? 'w-6 sm:w-8 bg-brand-gold'
                            : 'w-2 sm:w-2.5 bg-white/30 hover:bg-white/60'
                        }`}
                        aria-label={`Jump to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* 01 / 03 Counter & Progress Line */}
                  <div className="flex flex-col gap-1 pl-1">
                    <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-brand-gold">
                      0{currentSlide + 1} <span className="text-white/40">/</span> 0{totalSlides}
                    </span>
                    {/* Thin animated progress indicator */}
                    <div className="w-14 sm:w-20 h-0.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        key={progressKey}
                        className={`h-full bg-brand-gold rounded-full animate-hero-progress ${
                          isPaused ? 'paused-animation' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Minimal Circular Chevron Arrows */}
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
