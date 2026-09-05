import React from 'react';
import SectionHeading from './SectionHeading';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, MapPin, Layers, ArrowUpRight } from 'lucide-react';

const specializedCrafts = [
  { name: "Dyeing", subtitle: "Custom Shade Formulation", tag: "Own Vat" },
  { name: "Screen Printing", subtitle: "Precision Graphic Motifs", tag: "Bulk Ready" },
  { name: "Shibori", subtitle: "Artisanal Tie-Dye Resist", tag: "Handcraft" },
  { name: "Block Print", subtitle: "Hand Carved Wood Stamp", tag: "Heritage" },
  { name: "Kalamkari", subtitle: "Classic Storytelling Motifs", tag: "Traditional" },
  { name: "Batik", subtitle: "Wax-Resist Crackle Dyeing", tag: "Artisan" }
];

const About = ({ darkMode = true }) => {
  return (
    <section id="about" className={`py-16 sm:py-20 relative overflow-hidden transition-colors duration-500 border-t ${
      darkMode ? 'bg-brand-dark border-brand-surface' : 'bg-brand-cream border-brand-cream-dark'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="About Our Unit"
          title={`Welcome to ${siteConfig.businessName}`}
          subtitle="A dedicated in-house fabric dyeing, traditional hand-printing, and wholesale textile unit in Hyderabad."
          darkMode={darkMode}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-12">
          
          {/* Left Visual Frame: Editorial Workshop Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-gold via-brand-amber to-brand-terracotta opacity-20 blur-md"></div>
              
              <div className={`relative rounded-2xl overflow-hidden border shadow-2xl ${
                darkMode ? 'border-brand-gold/30 bg-brand-card' : 'border-brand-gold/40 bg-white'
              }`}>
                <img
                  src="/images/about_craft.jpg"
                  alt={`Fabric dyeing and printing craft at ${siteConfig.businessName} workshop`}
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center"
                  loading="lazy"
                />
                
                {/* Location & Unit Status Footer */}
                <div className={`p-4 border-t backdrop-blur-md flex items-center justify-between ${
                  darkMode ? 'bg-brand-dark/90 border-brand-gold/20' : 'bg-white/95 border-brand-gold/30'
                }`}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{siteConfig.area}, Hyderabad</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase tracking-wider">
                    In-House Unit
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column: Refined Information Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Story & Operations */}
            <div className="space-y-3.5">
              <h3 className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Dedicated Textile Craftsmanship & Quality Manufacturing
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed font-light ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Operating out of <strong>Pragathi Nagar, Nizampet, Hyderabad</strong>, {siteConfig.businessName} provides complete fabric processing—from custom dye vat formulation to authentic traditional surface printing techniques.
              </p>

              <p className={`text-sm sm:text-base leading-relaxed font-light ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We work across all dyeable fabric bases including pure cottons, chiffons, silks, and linens. Under the direct supervision of owner <strong>{siteConfig.owner}</strong>, our manufacturing facility caters to individual designer requirements as well as wholesale fabric yardage orders.
              </p>
            </div>

            {/* Prominently Highlighted Specialized Fabric Crafts */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                    Specialized Fabric Crafts
                  </span>
                </div>
                <a
                  href="#sales"
                  className="text-xs font-semibold text-brand-gold hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  <span>View in Fabric Store</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 2x3 / 3x2 Editorial Craft Chips Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {specializedCrafts.map((craft) => (
                  <a
                    key={craft.name}
                    href="#sales"
                    className={`group p-3 rounded-xl border transition-all duration-300 transform hover:-translate-y-0.5 ${
                      darkMode
                        ? 'bg-brand-surface/70 border-brand-gold/20 hover:border-brand-gold/60 hover:bg-brand-surface'
                        : 'bg-white border-brand-gold/25 hover:border-brand-gold shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-heading text-sm sm:text-base font-bold transition-colors group-hover:text-brand-gold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {craft.name}
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-brand-gold/60 group-hover:text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className={`text-[10px] mt-0.5 font-light truncate ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {craft.subtitle}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                darkMode ? 'bg-brand-surface/50 border-brand-gold/20' : 'bg-white border-brand-gold/25 shadow-sm'
              }`}>
                <Layers className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className={`font-heading font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    All Dyeable Fabrics
                  </h4>
                  <p className={`text-xs mt-0.5 font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Cottons, pure chiffons, silks, linens & dyeable blends.
                  </p>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                darkMode ? 'bg-brand-surface/50 border-brand-gold/20' : 'bg-white border-brand-gold/25 shadow-sm'
              }`}>
                <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className={`font-heading font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Own Manufacturing
                  </h4>
                  <p className={`text-xs mt-0.5 font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Direct quality control over shade accuracy & fastness.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
