import React from 'react';
import SectionHeading from './SectionHeading';
import { processSteps } from '../data/businessData';
import { Sliders, Droplets, Compass, CheckSquare, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';

const iconMap = {
  Sliders: Sliders,
  Droplets: Droplets,
  Compass: Compass,
  CheckSquare: CheckSquare,
};

const Process = ({ darkMode = true }) => {
  return (
    <section id="process" className={`py-20 relative transition-colors duration-500 border-t ${
      darkMode ? 'bg-brand-dark border-brand-surface' : 'bg-brand-cream border-brand-cream-dark'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Manufacturing Workflow"
          title="Our Work Process"
          subtitle="A systematic four-stage process ensuring consistent fabric dyeing and high quality traditional printing."
          darkMode={darkMode}
        />

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {processSteps.map((stepItem, index) => {
            const IconComponent = iconMap[stepItem.icon] || Sliders;

            return (
              <div
                key={stepItem.step}
                className={`relative rounded-2xl border p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group hover:border-brand-gold hover:scale-[1.02] hover:shadow-xl ${
                  darkMode
                    ? 'bg-brand-card border-brand-gold/20 hover:shadow-brand-gold/10'
                    : 'bg-white border-brand-gold/30 shadow-sm hover:shadow-brand-gold/20'
                }`}
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-4xl font-bold text-brand-gold/40 group-hover:text-brand-gold transition-colors">
                      {stepItem.step}
                    </span>
                    
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all ${
                      darkMode
                        ? 'bg-brand-surface border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark'
                        : 'bg-brand-cream border-brand-gold/30 text-brand-gold-dark group-hover:bg-brand-gold group-hover:text-brand-dark'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step Title & Subtitle */}
                  <h3 className={`font-heading text-xl font-bold mb-1 group-hover:text-brand-gold transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stepItem.title}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-3">
                    {stepItem.subtitle}
                  </p>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed font-light mb-6 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {stepItem.description}
                  </p>
                </div>

                {/* Craft Highlights List */}
                <div className={`pt-4 border-t ${
                  darkMode ? 'border-brand-surface' : 'border-gray-200'
                }`}>
                  <ul className="space-y-2">
                    {stepItem.highlights.map((item, hIdx) => (
                      <li key={hIdx} className={`flex items-center gap-2 text-xs ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prominent Large Connector Arrow between steps on desktop */}
                {index < processSteps.length - 1 && (
                  <div className={`hidden lg:flex absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border-2 border-brand-gold shadow-lg flex items-center justify-center transition-transform group-hover:scale-110 ${
                    darkMode ? 'bg-brand-dark text-brand-gold' : 'bg-white text-brand-gold-dark shadow-md'
                  }`}>
                    <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* Process Guarantee Banner */}
        <div className={`mt-14 p-6 sm:p-8 rounded-2xl border text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 ${
          darkMode
            ? 'bg-gradient-to-r from-brand-card via-brand-surface to-brand-card border-brand-gold/30'
            : 'bg-white border-brand-gold/40 shadow-lg'
        }`}>
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">In-House Manufacturing</span>
            <h4 className={`font-heading text-2xl font-bold mt-0.5 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Quality Checked at Every Stage
            </h4>
            <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              From color fastness testing to final steam setting, all dyeable fabrics are crafted under direct supervision.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-gold-gradient text-brand-dark font-bold text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>Start Your Order</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Process;
