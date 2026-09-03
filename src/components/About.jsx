import React from 'react';
import SectionHeading from './SectionHeading';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, Award, MapPin, Layers, CheckCircle2 } from 'lucide-react';

const About = ({ darkMode = true }) => {
  return (
    <section id="about" className={`py-20 relative overflow-hidden transition-colors duration-500 border-t ${
      darkMode ? 'bg-brand-dark border-brand-surface' : 'bg-brand-cream border-brand-cream-dark'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="About Our Unit"
          title={`Welcome to ${siteConfig.businessName}`}
          subtitle="Specializing in fabric dyeing, traditional hand printing, and fabric store sales in Hyderabad."
          darkMode={darkMode}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Left Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-gold via-brand-amber to-brand-terracotta opacity-20 blur-md"></div>
              
              <div className={`relative rounded-2xl overflow-hidden border shadow-2xl ${
                darkMode ? 'border-brand-gold/30 bg-brand-card' : 'border-brand-gold/40 bg-white'
              }`}>
                <img
                  src="/images/about_craft.jpg"
                  alt={`Fabric dyeing and printing craft at ${siteConfig.businessName}`}
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center"
                />
                
                <div className={`p-4 border-t backdrop-blur-md flex items-center justify-between ${
                  darkMode ? 'bg-brand-dark/90 border-brand-gold/20' : 'bg-white/95 border-brand-gold/30'
                }`}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{siteConfig.area}, Hyderabad</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase">
                    In-House Unit
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4">
              <h3 className={`font-heading text-2xl sm:text-3xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Dedicated Textile Craftsmanship & Quality Manufacturing
              </h3>

              <p className={`text-base leading-relaxed font-light ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Operating out of <strong>Pragathi Nagar, Nizampet, Hyderabad</strong>, {siteConfig.businessName} provides complete fabric processing—from custom dye formulation to traditional surface printing techniques.
              </p>

              <p className={`text-base leading-relaxed font-light ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We work across all dyeable fabric bases including pure cottons, chiffons, silks, and linens. Under the supervision of owner <strong>{siteConfig.owner}</strong>, our manufacturing facility caters to individual designer requirements as well as wholesale fabric yardage orders.
              </p>
            </div>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-white border-brand-gold/30 shadow-sm'
              }`}>
                <Layers className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className={`font-heading font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    All Dyeable Fabrics
                  </h4>
                  <p className={`text-xs mt-0.5 font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Cottons, chiffons, silks, linens & synthetic dyeable blends.
                  </p>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-white border-brand-gold/30 shadow-sm'
              }`}>
                <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className={`font-heading font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Own Manufacturing
                  </h4>
                  <p className={`text-xs mt-0.5 font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Direct quality control over shade accuracy & dye fastness.
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className={`pt-4 border-t ${darkMode ? 'border-brand-surface' : 'border-gray-200'}`}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  "Custom Dye Vat Formulation",
                  "Traditional Screen & Block Printing",
                  "Artisanal Shibori, Kalamkari & Batik",
                  "Direct Wholesale Fabric Store"
                ].map((item, idx) => (
                  <li key={idx} className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
