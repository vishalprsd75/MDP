import React, { useState } from 'react';
import { Sparkles, Check, ChevronUp, ChevronDown, X, Eye } from 'lucide-react';

const CONCEPTS = [
  {
    id: 'h-ribbon',
    number: 'Horizontal 1',
    title: 'The Royal Ribbon Unroll',
    tag: 'Recommended',
    description: 'Bespoke Deccani royal serif. The silk scroll at the base of the MDP crest seamlessly flows into a gilded horizontal underline beneath MUNNA DYEING & PRINTING.',
  },
  {
    id: 'h-wordmark',
    number: 'Horizontal 2',
    title: 'Haute Couture Single-Line',
    tag: 'Bodoni Moda',
    description: 'High-fashion editorial Didone single-line wordmark with a centered gold diamond glyph: MUNNA ◆ DYEING PRINTING. Sleek horizontal flow across the navbar.',
  },
  {
    id: 'h-capsule',
    number: 'Horizontal 3',
    title: 'Gilded Atelier Capsule',
    tag: 'Designer Badge',
    description: 'MUNNA displayed boldly in royal display serif, paired with a sleek horizontal gold hairline pill capsule framing [● DYEING PRINTING] on the same axis.',
  },
  {
    id: 'h-triptych',
    number: 'Horizontal 4',
    title: 'Imperial Triptych',
    tag: 'Roman Lapidary',
    description: 'Architectural three-zone horizontal division: [MDP Crest] │ MUNNA │ DYEING PRINTING │ HYDERABAD partitioned by twin gold pinstripes.',
  },
  {
    id: 'h-vanguard',
    number: 'Horizontal 5',
    title: 'Modern Vanguard',
    tag: 'Contemporary',
    description: 'High-impact geometric sans with solid gold block divider and forward slash cadence: MUNNA / DYEING · PRINTING. Clean, modern, and confident.',
  },
];

const BrandingVariationSwitcher = ({
  activeVariant = 'h-ribbon',
  onSelectVariant,
  darkMode = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-4 right-4 z-50 px-4 py-2.5 rounded-full bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-extrabold text-xs shadow-2xl flex items-center gap-2 hover:scale-105 transition-all border border-brand-gold"
        title="Re-open Horizontal Brand Concepts Comparison"
      >
        <Sparkles className="w-4 h-4 fill-current" />
        <span>Compare Horizontal Styles</span>
      </button>
    );
  }

  const activeObj = CONCEPTS.find((c) => c.id === activeVariant) || CONCEPTS[0];

  return (
    <aside
      aria-label="Horizontal Brand Concepts Comparison Switcher"
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 max-w-[calc(100vw-24px)] sm:max-w-md animate-fadeIn"
    >
      <div className={`rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 ${
        darkMode ? 'bg-brand-card/95 border-brand-gold/40 text-gray-200' : 'bg-white/95 border-brand-gold/50 text-gray-900'
      }`}>
        
        {/* Header Bar */}
        <div className={`px-4 py-3 flex items-center justify-between border-b ${
          darkMode ? 'border-brand-gold/25 bg-brand-surface/80' : 'border-brand-gold/25 bg-brand-cream/90'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse"></span>
            <div>
              <span className="font-heading font-black text-xs sm:text-sm tracking-wide text-brand-gold block leading-none">
                Horizontal Brand Concepts
              </span>
              <span className="text-[10px] text-gray-400 font-medium">
                Live Navbar Strip Comparison
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-2 py-1 rounded-lg bg-brand-gold/20 hover:bg-brand-gold/30 transition-colors text-brand-gold font-bold text-[11px] flex items-center gap-1"
              title={isOpen ? "Collapse options" : "Expand horizontal concepts"}
            >
              <span>{isOpen ? "Collapse" : "Switch Style"}</span>
              {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 rounded-lg hover:bg-brand-gold/20 transition-colors text-gray-400 hover:text-gray-200"
              title="Close floating comparison panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Current Active Concept Snapshot */}
        <div className="px-4 py-2.5 flex items-center justify-between gap-3 border-b border-brand-gold/10">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-xs">
              <span className="font-extrabold text-brand-gold">{activeObj.number}:</span>
              <span className="font-bold truncate text-white">{activeObj.title}</span>
            </div>
            <p className="text-[10.5px] text-gray-400 line-clamp-1 mt-0.5">
              {activeObj.description}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[10.5px] font-bold text-brand-gold underline underline-offset-2 shrink-0 hover:text-brand-gold-light"
          >
            {isOpen ? "Close" : "All Styles"}
          </button>
        </div>

        {/* Expandable list of all horizontal concepts */}
        {isOpen && (
          <div className="p-3 pt-2 space-y-2 max-h-[55vh] overflow-y-auto">
            {CONCEPTS.map((c) => {
              const isSelected = c.id === activeVariant;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    onSelectVariant(c.id);
                  }}
                  className={`w-full text-left p-3 rounded-xl border transition-all duration-200 flex items-start justify-between gap-2.5 ${
                    isSelected
                      ? 'bg-brand-gold/20 border-brand-gold shadow-md ring-1 ring-brand-gold/50'
                      : darkMode
                        ? 'bg-brand-surface/50 border-brand-gold/15 hover:border-brand-gold/40 hover:bg-brand-surface'
                        : 'bg-gray-50 border-gray-200 hover:border-brand-gold/40 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-black tracking-wide ${isSelected ? 'text-brand-gold' : darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {c.number} — {c.title}
                      </span>
                    </div>
                    <span className={`inline-block text-[9.5px] px-2 py-0.5 rounded font-bold mb-1 ${
                      c.id === 'h-ribbon'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-brand-gold/15 text-brand-gold'
                    }`}>
                      {c.tag}
                    </span>
                    <p className="text-[11px] text-gray-300 leading-snug">
                      {c.description}
                    </p>
                  </div>

                  {isSelected ? (
                    <div className="w-5 h-5 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center shrink-0 mt-1 shadow">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="p-1 text-gray-500 hover:text-brand-gold shrink-0 mt-1">
                      <Eye className="w-4 h-4" />
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
