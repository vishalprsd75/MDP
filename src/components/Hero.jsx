import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, MapPin } from 'lucide-react';
import { heroSlides } from '../data/heroData';
import { siteConfig } from '../config/siteConfig';

const Hero = ({ darkMode = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const activeSlide = heroSlides[currentSlide] || heroSlides[0];

  // Auto-advance slides with pause on hover / touch, respecting reduced motion
  useEffect(() => {
    if (isPaused) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  return (
    <section
      id="hero"
      aria-label="Hero Showcase"
      className="relative pt-20 sm:pt-24 pb-8 lg:pb-12 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Cinematic Visual Stage */}
        <div className={`relative w-full rounded-3xl overflow-hidden border shadow-2xl transition-all duration-700 ${
          darkMode
            ? 'border-brand-gold/30 bg-brand-card shadow-black/60'
            : 'border-brand-gold/40 bg-brand-cream shadow-gray-300/60'
        }`}>
          
          {/* Background Image Composition */}
          <div className="relative w-full h-[500px] sm:h-[560px] lg:h-[620px] xl:h-[660px] overflow-hidden">
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
                    className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-7000 ease-out"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  
                  {/* Sophisticated Editorial Vignette & Legibility Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-brand-dark/20 sm:from-brand-dark/95 sm:via-brand-dark/40 sm:to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-brand-dark/40 hidden sm:block"></div>
                </div>
              );
            })}

            {/* Content Overlay: Image-Led Minimal Editorial Hierarchy */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 lg:p-14 text-white">
              <div className="max-w-2xl space-y-4 sm:space-y-5">
                
                {/* Category / Manufacturing Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-gold/40 bg-brand-dark/70 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-brand-gold">
                    {activeSlide.badge}
                  </span>
                </div>

                {/* Concise Headline */}
                <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-md">
                  {activeSlide.headline}
                </h1>

                {/* Supporting Line of Crafts */}
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-brand-gold-light/95 uppercase">
                  {activeSlide.supportingLine}
                </p>

                {/* Primary CTA & Assurance Badges */}
                <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                  <a
                    href={activeSlide.ctaLink}
                    className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gold-gradient text-brand-dark font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-brand-gold/20"
                  >
                    <span>{activeSlide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-gray-300/90 pl-2">
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

              {/* Slide Navigation Controls & Indicators */}
              <div className="w-full flex items-center justify-between pt-6 mt-4 border-t border-white/15">
                {/* Dots / Indicators */}
                <div className="flex items-center gap-2">
                  {heroSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        idx === currentSlide
                          ? 'w-8 sm:w-10 bg-brand-gold'
                          : 'w-2 sm:w-3 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                  <span className="text-[11px] font-mono text-gray-300 ml-2">
                    0{currentSlide + 1} / 0{heroSlides.length}
                  </span>
                </div>

                {/* Next / Previous Chevrons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-brand-dark/60 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold text-white flex items-center justify-center transition-all backdrop-blur-md"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-brand-dark/60 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold text-white flex items-center justify-center transition-all backdrop-blur-md"
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
