import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/heroData';

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
                  
                  {/* Subtle Bottom Vignette for Control Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                </div>
              );
            })}

            {/* Bottom Floating Bar: Slide Indicator, Minimal Separate CTA, and Chevrons */}
            <div className="absolute inset-x-0 bottom-0 z-30 p-4 sm:p-6 lg:p-8 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
              
              {/* Left: Slide Counter & Dynamic Progress Bar */}
              <div className="flex items-center gap-3 sm:gap-4 pointer-events-auto bg-black/40 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none px-3 py-1.5 sm:p-0 rounded-full sm:rounded-none border border-white/10 sm:border-none">
                {/* Clickable Slide Pills */}
                <div className="flex items-center gap-1.5">
                  {heroSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentSlide
                          ? 'w-6 sm:w-8 bg-brand-gold'
                          : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/70'
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
                  <div className="w-14 sm:w-20 h-0.5 bg-white/25 rounded-full overflow-hidden">
                    <div
                      key={progressKey}
                      className={`h-full bg-brand-gold rounded-full animate-hero-progress ${
                        isHovered ? 'paused-animation' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Center / Action: Minimal Standalone CTA */}
              <div className="pointer-events-auto">
                <a
                  href="#sales"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gold-gradient text-brand-dark font-bold text-xs uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-brand-gold/25"
                >
                  <span>Explore Fabrics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Right: Minimal Circular Chevron Buttons */}
              <div className="flex items-center gap-2 pointer-events-auto">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/25 bg-black/50 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Slide"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/25 bg-black/50 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
