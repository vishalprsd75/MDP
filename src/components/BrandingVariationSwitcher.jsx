import React, { useState } from 'react';
import { Sparkles, Check, ChevronUp, ChevronDown, X } from 'lucide-react';

const VARIATIONS = [
  {
    id: 'stacked',
    name: '2. Stacked Name',
    tag: 'Recommended',
    description: 'High-impact monolithic 2-tier lockup. Both words feel like ONE unified business name with calibrated tracking.',
  },
  {
    id: 'horizontal',
    name: '1. Horizontal Wordmark',
    tag: 'Modern',
    description: 'Single continuous reading baseline: MDP | MUNNA DYEING PRINTING. Sleek, contemporary fashion house feel.',
  },
  {
    id: 'editorial',
    name: '3. Editorial Serif',
    tag: 'Couture',
    description: 'Bespoke Cormorant Garamond luxury serif for both lines. Regal Indian heritage textile manufacturer aesthetic.',
  },
  {
    id: 'balanced',
    name: '4. Balanced Frame',
    tag: 'Enterprise',
    description: 'Optically balanced symmetry between the crest and wordmark, framed with delicate gold accent bars.',
  },
  {
    id: 'manufacturer',
    name: '5. Manufacturer Badge',
    tag: 'Industrial',
    description: 'Frosted container badge framing the brand lockup. Authoritative certified manufacturing plant identity.',
  },
  {
    id: 'bold',
    name: '6. Bold First-Impression',
    tag: 'Maximum Impact',
    description: 'Oversized typography with ambient gold gradient sheen. Impossible for a visitor to miss upon landing.',
  },
];

const BrandingVariationSwitcher = ({
  activeVariant = 'stacked',
  onSelectVariant,
  darkMode = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-4 right-4 z-50 px-3 py-2 rounded-full bg-brand-gold text-brand-dark font-bold text-xs shadow-2xl flex items-center gap-1.5 hover:scale-105 transition-transform"
        title="Re-open Brand Variations Preview"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Compare Brand Styles</span>
      </button>
    );
  }

  const activeObj = VARIATIONS.find((v) => v.id === activeVariant) || VARIATIONS[0];

  return (
    <aside aria-label="Brand Variation Switcher" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[calc(100vw-32px)] sm:max-w-md animate-fadeIn">
      <div className={`rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 ${
        darkMode ? 'bg-brand-card/95 border-brand-gold/40 text-gray-200' : 'bg-white/95 border-brand-gold/50 text-gray-900'
      }`}>
        
        {/* Header Bar */}
        <div className={`px-3.5 py-2.5 flex items-center justify-between border-b ${
          darkMode ? 'border-brand-gold/20 bg-brand-surface/70' : 'border-brand-gold/20 bg-brand-cream/80'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="font-heading font-bold text-xs sm:text-sm tracking-wide text-brand-gold">
              Navbar Brand Variations
            </span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-brand-gold/20 text-brand-gold uppercase">
              6 Styles
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-lg hover:bg-brand-gold/20 transition-colors text-brand-gold"
              title={isOpen ? "Collapse options" : "Expand all 6 options"}
            >
              {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 rounded-lg hover:bg-brand-gold/20 transition-colors text-gray-400 hover:text-gray-200"
              title="Close floating panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick summary of currently active variation */}
        <div className="px-3.5 py-2 flex items-center justify-between gap-2">
          <div className="text-[11px] leading-tight truncate">
            <span className="font-bold text-brand-gold">{activeObj.name}</span>
            <span className="text-gray-400 mx-1">•</span>
            <span className="text-gray-300 font-light truncate">{activeObj.tag}</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[10px] font-semibold text-brand-gold underline underline-offset-2 shrink-0 hover:text-brand-gold-light"
          >
            {isOpen ? "Hide List" : "Switch Style"}
          </button>
        </div>

        {/* Expandable list of all 6 variations */}
        {isOpen && (
          <div className="p-2.5 pt-1 space-y-1.5 max-h-[50vh] overflow-y-auto">
            {VARIATIONS.map((v) => {
              const isSelected = v.id === activeVariant;
              return (
                <button
                  key={v.id}
                  onClick={() => {
                    onSelectVariant(v.id);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all duration-200 flex items-start justify-between gap-2 ${
                    isSelected
                      ? 'bg-brand-gold/20 border-brand-gold shadow-md'
                      : darkMode
                        ? 'bg-brand-surface/50 border-brand-gold/15 hover:border-brand-gold/40 hover:bg-brand-surface'
                        : 'bg-gray-50 border-gray-200 hover:border-brand-gold/40 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className={`text-xs font-bold ${isSelected ? 'text-brand-gold' : darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {v.name}
                      </span>
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-semibold ${
                        v.id === 'stacked'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-brand-gold/15 text-brand-gold'
                      }`}>
                        {v.tag}
                      </span>
                    </div>
                    <p className="text-[10.5px] text-gray-400 leading-snug line-clamp-2">
                      {v.description}
                    </p>
                  </div>

                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center shrink-0 mt-0.5 shadow">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
};

export default BrandingVariationSwitcher;
