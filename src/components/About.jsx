import React from 'react';
import SectionHeading from './SectionHeading';
import { businessInfo } from '../data/businessData';
import { CheckCircle2, MapPin, Factory } from 'lucide-react';

const About = ({ darkMode = true }) => {
  return (
    <section id="about" className={`py-20 relative overflow-hidden transition-colors duration-500 border-t ${
      darkMode ? 'bg-brand-dark border-brand-surface' : 'bg-brand-cream border-brand-cream-dark'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Heritage & Quality"
          title="About Munna Dyeing Printing"
          subtitle="Dyeing and traditional fabric printing services based in Pragathi Nagar, Nizampet, Hyderabad."
          darkMode={darkMode}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Left Column: Visual Craft Showcase */}
          <div className="lg:col-span-6">
            <div className={`relative rounded-2xl overflow-hidden border shadow-2xl group ${
              darkMode ? 'border-brand-gold/30' : 'border-brand-gold/40'
            }`}>
              <img
                src="/images/about_craft.jpg"
                alt="Artisan fabric dyeing process at Munna Dyeing Printing"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
              
              {/* Badge Overlay */}
              <div className={`absolute bottom-6 left-6 right-6 p-5 rounded-xl border backdrop-blur-md ${
                darkMode ? 'bg-brand-dark/95 border-brand-gold/30' : 'bg-white/95 border-brand-gold/40 shadow-lg'
              }`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-brand-gold/10 text-brand-gold border border-brand-gold/20 shrink-0">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`font-heading font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>Own Manufacturing Facility</h4>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Located at Shop No. 1, Opp. Shivalayam Park, Pragathi Nagar, Nizampet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Text & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4">
              <h3 className={`font-heading text-2xl sm:text-3xl font-bold leading-snug ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Dedicated Fabric Transformation <span className="text-gold-gradient">& Dye Craftsmanship</span>
              </h3>

              <p className={`text-base sm:text-lg leading-relaxed font-light ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Munna Dyeing Printing provides specialized fabric dyeing and traditional printing services in Hyderabad. From raw fabric dyeing to intricate surface printing techniques, we work across a wide variety of textile styles and processes.
              </p>

              <p className={`text-sm sm:text-base leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Operating under the motto <strong className="text-brand-gold font-semibold">"All Dyeable Fabric, Own Manufacturing"</strong>, we handle dyeing, screen printing, Shibori, block printing, Kalamkari, and Batik techniques to serve diverse client needs.
              </p>
            </div>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                darkMode ? 'bg-brand-card border-brand-gold/20' : 'bg-white border-brand-gold/30 shadow-sm'
              }`}>
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>All Dyeable Fabrics</h4>
                  <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Cotton, silk, linen & blends</p>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                darkMode ? 'bg-brand-card border-brand-gold/20' : 'bg-white border-brand-gold/30 shadow-sm'
              }`}>
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>6 Core Services</h4>
                  <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Dyeing, Screen, Shibori, Block, Kalamkari, Batik</p>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                darkMode ? 'bg-brand-card border-brand-gold/20' : 'bg-white border-brand-gold/30 shadow-sm'
              }`}>
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Own Manufacturing</h4>
                  <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Direct oversight of dyeing and printing</p>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                darkMode ? 'bg-brand-card border-brand-gold/20' : 'bg-white border-brand-gold/30 shadow-sm'
              }`}>
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Hyderabad Location</h4>
                  <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pragathi Nagar, Nizampet</p>
                </div>
              </div>
            </div>

            {/* Address Banner */}
            <div className={`p-4 rounded-xl border flex items-center justify-between ${
              darkMode ? 'bg-brand-surface border-brand-gold/30' : 'bg-white border-brand-gold/40 shadow-sm'
            }`}>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold">Contact Person</span>
                <p className={`font-heading font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{businessInfo.owner}</p>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-gold-gradient text-brand-dark font-bold text-xs hover:opacity-90 transition-opacity"
              >
                Visit Workshop
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
