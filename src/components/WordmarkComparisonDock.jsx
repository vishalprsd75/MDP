import React, { useState } from 'react';
import { WORDMARK_OPTIONS } from '../config/wordmarkOptions';
import { Sparkles, Eye, X, ChevronUp, ChevronDown, Check, Layers, Award } from 'lucide-react';
import Logo from './Logo';

const WordmarkComparisonDock = ({
  activeOptionId,
  onSelectOption,
  darkMode = true
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const activeOption = WORDMARK_OPTIONS.find((opt) => opt.id === activeOptionId) || WORDMARK_OPTIONS[0];

  return (
    <>
      {/* Floating Bottom Comparison Dock */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] w-auto">
        <div
          className={`backdrop-blur-xl border rounded-2xl shadow-2xl transition-all duration-300 p-2.5 sm:p-3 ${
            darkMode
              ? 'bg-[#0b111e]/90 border-brand-gold/40 text-gray-200 shadow-black/80'
              : 'bg-white/95 border-brand-gold/50 text-gray-900 shadow-xl'
          }`}
        >
          {isMinimized ? (
            /* Minimized Pill */
            <div className="flex items-center gap-3 px-2 py-1">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-gold">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
                <span>Wordmark:</span>
                <span className="underline decoration-brand-gold font-bold">{activeOption.name}</span>
              </span>
              <button
                onClick={() => setIsMinimized(false)}
                className="p-1 rounded-lg bg-brand-gold/20 hover:bg-brand-gold/30 text-brand-gold transition-colors text-xs flex items-center gap-1 font-medium"
                title="Expand Options"
              >
                <span>Switch (5)</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            /* Full Dock */
            <div className="flex flex-col gap-2.5">
              {/* Header Bar */}
              <div className="flex items-center justify-between gap-4 px-1 text-xs border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                  <span className="font-bold tracking-wider uppercase text-[11px] text-brand-gold">
                    Wordmark Redesign • 5 Directions
                  </span>
                  <span className="hidden md:inline-block text-[11px] opacity-70">
                    (Click to preview live in Navbar)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brand-gold/20 hover:bg-brand-gold/30 text-brand-gold font-bold text-[11px] transition-all border border-brand-gold/30"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Compare All 5</span>
                  </button>

                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-1 rounded-lg hover:bg-white/10 opacity-70 hover:opacity-100 transition-opacity"
                    title="Minimize dock"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 5 Options Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-0.5 no-scrollbar max-w-[88vw] sm:max-w-none">
                {WORDMARK_OPTIONS.map((opt) => {
                  const isActive = opt.id === activeOptionId;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => onSelectOption(opt.id)}
                      className={`group relative flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 shrink-0 border ${
                        isActive
                          ? 'bg-brand-gold text-brand-dark font-bold shadow-md shadow-brand-gold/30 border-brand-gold scale-[1.03]'
                          : darkMode
                          ? 'bg-brand-surface/70 hover:bg-brand-surface border-white/10 text-gray-300 hover:text-white'
                          : 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-700 hover:text-black'
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold ${
                          isActive
                            ? 'bg-brand-dark text-brand-gold'
                            : 'bg-brand-gold/20 text-brand-gold'
                        }`}
                      >
                        {opt.number}
                      </span>
                      <span className="whitespace-nowrap">{opt.name}</span>
                      {opt.id === 'classic-serif' && (
                        <span className={`text-[9px] px-1 rounded uppercase tracking-wider font-extrabold ${
                          isActive ? 'bg-black/20 text-black' : 'bg-brand-gold/20 text-brand-gold'
                        }`}>
                          Rec
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Side-by-Side Comparison Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl p-5 sm:p-8 ${
              darkMode ? 'bg-brand-dark border-brand-gold/30 text-gray-200' : 'bg-white border-brand-gold/40 text-gray-900'
            }`}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-brand-gold/20 pb-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                    Wordmark Redesign Evaluation
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/30">
                    MDP Logo Locked & Untouched
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold mt-1">
                  Compare the 5 Typography Directions
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Fixed MDP Logo Emblem + Premium "MUNNA DYEING PRINTING" Wordmark. Evaluated across 8 criteria.
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Recommendation Spotlight Banner */}
            <div className={`p-4 rounded-2xl border mb-6 flex items-start gap-3.5 ${
              darkMode ? 'bg-brand-gold/10 border-brand-gold/40' : 'bg-brand-gold/15 border-brand-gold/50'
            }`}>
              <div className="w-8 h-8 rounded-xl bg-brand-gold text-brand-dark flex items-center justify-center shrink-0 mt-0.5 font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <h4 className="font-bold text-brand-gold text-sm sm:text-base">
                  Recommendation: Option 1 — Classic Luxury Serif (Cinzel)
                </h4>
                <p className="mt-1 leading-relaxed opacity-90">
                  Matches the royal heritage, golden symmetry, and navy elegance of the official MDP logo crest with perfection. It communicates <strong>"MUNNA DYEING PRINTING"</strong> as one complete, prestigious, 50-year established manufacturing brand rather than a generic tech or casual label.
                </p>
              </div>
            </div>

            {/* Grid of All 5 Directions */}
            <div className="space-y-5">
              {WORDMARK_OPTIONS.map((opt) => {
                const isActive = opt.id === activeOptionId;
                return (
                  <div
                    key={opt.id}
                    onClick={() => {
                      onSelectOption(opt.id);
                    }}
                    className={`cursor-pointer rounded-2xl border p-4 sm:p-5 transition-all duration-300 ${
                      isActive
                        ? 'border-brand-gold bg-brand-gold/10 ring-2 ring-brand-gold/40 shadow-xl'
                        : darkMode
                        ? 'border-white/10 bg-brand-surface/40 hover:border-brand-gold/40 hover:bg-brand-surface/70'
                        : 'border-gray-200 bg-gray-50 hover:border-brand-gold/40 hover:bg-white'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-brand-gold/20 text-brand-gold font-bold text-xs flex items-center justify-center">
                            {opt.number}
                          </span>
                          <h4 className="font-bold text-base sm:text-lg">{opt.name}</h4>
                          <span className="text-xs px-2 py-0.5 rounded bg-white/10 font-mono text-brand-gold">
                            {opt.fontName}
                          </span>
                          {opt.id === 'classic-serif' && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full font-extrabold uppercase bg-brand-gold text-brand-dark">
                              Top Recommendation
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{opt.tagline}</p>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectOption(opt.id);
                          setShowModal(false);
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-brand-gold text-brand-dark shadow-md'
                            : 'bg-white/10 hover:bg-brand-gold hover:text-brand-dark'
                        }`}
                      >
                        {isActive ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Active in Navbar</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-4 h-4" />
                            <span>Apply to Navbar</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Live Preview Strip */}
                    <div className={`p-4 rounded-xl border flex items-center justify-center overflow-x-auto my-3 ${
                      darkMode ? 'bg-[#080d17] border-white/10' : 'bg-white border-gray-200'
                    }`}>
                      <Logo
                        darkMode={darkMode}
                        size="md"
                        showLogo={true}
                        optionId={opt.id}
                      />
                    </div>

                    {/* Description & Criteria */}
                    <p className="text-xs leading-relaxed opacity-80 mt-2">
                      {opt.description}
                    </p>

                    {/* Scores Quick-Badge Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-white/10 text-[11px]">
                      <div>
                        <span className="opacity-60 block">Visibility:</span>
                        <span className="font-bold text-brand-gold">{opt.scores.visibility}</span>
                      </div>
                      <div>
                        <span className="opacity-60 block">Luxury Feel:</span>
                        <span className="font-bold text-brand-gold">{opt.scores.luxuryFeel}</span>
                      </div>
                      <div>
                        <span className="opacity-60 block">Textile Suitability:</span>
                        <span className="font-bold text-brand-gold">{opt.scores.textileSuitability}</span>
                      </div>
                      <div>
                        <span className="opacity-60 block">Logo Balance:</span>
                        <span className="font-bold text-brand-gold">{opt.scores.logoBalance}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2.5 rounded-xl text-xs font-bold bg-brand-gold text-brand-dark hover:brightness-110 transition-all shadow-lg"
              >
                Close & View Navbar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WordmarkComparisonDock;
