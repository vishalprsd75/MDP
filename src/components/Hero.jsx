import React from 'react';
import { Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import businessService from '../services/businessService';

const Hero = ({ darkMode = true }) => {
  const servicesData = businessService.getServices();

  return (
    <section id="hero" className={`relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden transition-colors duration-500 ${
      darkMode ? 'bg-fabric-pattern' : 'bg-fabric-pattern-light'
    }`}>
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-terracotta/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Tagline & Manufacturing Badge */}
            <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border shadow-sm backdrop-blur-md ${
              darkMode ? 'bg-brand-surface/60 border-brand-gold/30' : 'bg-white/80 border-brand-gold/40'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span className={`text-[11px] sm:text-xs font-bold tracking-widest uppercase ${
                darkMode ? 'text-brand-gold' : 'text-brand-gold-dark'
              }`}>
                EST. HYDERABAD • IN-HOUSE MANUFACTURING
              </span>
            </div>

            {/* Main Headline */}
            <h1 className={`font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Crafting Colors.{' '}
              <span className="text-gold-gradient block mt-1">Printing Tradition.</span>
            </h1>

            {/* Supporting Description */}
            <p className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
               Hyderabad’s premier textile processing unit. Specializing in precision fabric dyeing, screen printing, Shibori, block print, Kalamkari, and Batik for designers and wholesale buyers.
            </p>

            {/* Services Pill Strip */}
            <div className="pt-2">
              <p className={`text-[10px] uppercase tracking-widest mb-3 font-bold ${
                darkMode ? 'text-brand-gold' : 'text-brand-gold-dark'
              }`}>Specialized Fabric Crafts:</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-xs font-medium">
                {servicesData.map((s) => (
                  <a
                    key={s.id}
                    href={`#sales`}
                    className={`px-3.5 py-1.5 rounded-lg border transition-all duration-300 ${
                      darkMode
                        ? 'bg-brand-surface/60 border-brand-gold/20 text-gray-300 hover:border-brand-gold hover:text-brand-gold'
                        : 'bg-white border-brand-gold/30 text-gray-800 hover:border-brand-gold-dark hover:text-brand-gold-dark shadow-sm'
                    }`}
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Key Assurance Line */}
            <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 text-xs font-semibold ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Own Manufacturing Facility</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{siteConfig.area}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-gold via-brand-amber to-brand-terracotta opacity-30 blur-lg transition duration-500"></div>

              {/* Main Image Card */}
              <div className={`relative rounded-2xl overflow-hidden border shadow-2xl group ${
                darkMode ? 'border-brand-gold/30 bg-brand-card' : 'border-brand-gold/40 bg-white'
              }`}>
                <img
                  src="/images/hero_textile.jpg"
                  alt={`${siteConfig.businessName} - Indian Dyeing and Printing Craftsmanship`}
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Overlay Banner */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-70"></div>
                
                {/* Floating Craft Badge Card */}
                <div className={`absolute bottom-6 left-6 right-6 p-4 rounded-xl border backdrop-blur-md flex items-center justify-between ${
                  darkMode ? 'glass-nav border-brand-gold/30' : 'glass-nav-light border-brand-gold/40'
                }`}>
                  <div>
                    <h3 className={`font-heading text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Traditional Craftsmanship</h3>
                    <p className="text-xs text-brand-gold font-medium">{siteConfig.tagline}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold flex items-center justify-center text-brand-gold">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </div>
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
