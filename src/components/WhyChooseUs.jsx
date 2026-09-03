import React from 'react';
import SectionHeading from './SectionHeading';
import { whyChooseUsData } from '../data/businessData';
import { Grid, Award, Home, CheckCircle } from 'lucide-react';

const iconMap = {
  Grid: Grid,
  Award: Award,
  Home: Home,
  CheckCircle: CheckCircle,
};

const WhyChooseUs = ({ darkMode = true }) => {
  return (
    <section id="why-us" className={`py-20 relative overflow-hidden transition-colors duration-500 ${
      darkMode ? 'bg-fabric-pattern' : 'bg-fabric-pattern-light'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Our Value Pillars"
          title="Why Choose Munna"
          subtitle="Built on craftsmanship, versatility, and dedicated in-house manufacturing for all dyeable fabrics."
          darkMode={darkMode}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {whyChooseUsData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || CheckCircle;

            return (
              <div
                key={index}
                className={`group p-6 rounded-2xl border hover:border-brand-gold hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  darkMode ? 'bg-brand-card border-brand-gold/20' : 'bg-white border-brand-gold/30 shadow-sm'
                }`}
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className={`font-heading text-xl font-bold mb-3 group-hover:text-brand-gold transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed font-light ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>

                {/* Bottom Decorative Accent */}
                <div className={`mt-6 pt-4 border-t flex items-center gap-2 ${
                  darkMode ? 'border-brand-surface' : 'border-gray-200'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold">Quality Standard</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
