import React from 'react';
import SectionHeading from './SectionHeading';
import { servicesData } from '../data/businessData';
import { Palette, Layers, Sparkles, Stamp, Feather, Flame, ArrowUpRight, Check } from 'lucide-react';

const iconMap = {
  Palette: Palette,
  Layers: Layers,
  Sparkles: Sparkles,
  Stamp: Stamp,
  Feather: Feather,
  Flame: Flame,
};

const Services = ({ darkMode = true }) => {
  return (
    <section id="services" className={`py-20 relative overflow-hidden transition-colors duration-500 ${
      darkMode ? 'bg-fabric-pattern' : 'bg-fabric-pattern-light'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Textile Craftsmanship"
          title="Our Specialized Services"
          subtitle="Explore our comprehensive range of fabric dyeing and traditional printing techniques, crafted with precision."
          darkMode={darkMode}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Palette;

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl border p-6 sm:p-8 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${
                  darkMode
                    ? 'bg-brand-card border-brand-gold/20 hover:shadow-brand-gold/10'
                    : 'bg-white border-brand-gold/30 shadow-sm hover:shadow-brand-gold/20'
                }`}
              >
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300 shadow-md ${
                      darkMode ? 'bg-brand-surface border-brand-gold/30' : 'bg-brand-cream border-brand-gold/40'
                    }`}>
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`font-heading text-2xl font-bold group-hover:text-brand-gold transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold block mt-1 mb-3">
                    {service.subtitle}
                  </span>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 font-light ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className={`space-y-2 mb-6 pt-4 border-t ${
                    darkMode ? 'border-brand-surface' : 'border-gray-200'
                  }`}>
                    {service.features.map((feat, idx) => (
                      <li key={idx} className={`flex items-center gap-2 text-xs ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <Check className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action CTA */}
                <a
                  href="#contact"
                  className={`w-full py-3 px-4 rounded-xl border font-semibold text-xs uppercase tracking-wider hover:bg-gold-gradient hover:text-brand-dark hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                    darkMode
                      ? 'bg-brand-surface border-brand-gold/30 text-gray-200'
                      : 'bg-brand-cream border-brand-gold/40 text-gray-800'
                  }`}
                >
                  <span>Contact Us For {service.title}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
