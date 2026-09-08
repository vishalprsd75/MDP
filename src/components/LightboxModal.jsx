import React, { useEffect } from 'react';
import { X, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const LightboxModal = ({ item, onClose, darkMode = true }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Centered Modal Card: Flex column on mobile, Grid on desktop */}
      <div className={`relative z-10 w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden flex flex-col md:grid md:grid-cols-12 h-[92dvh] max-h-[calc(100dvh-24px)] md:h-auto md:max-h-[85vh] ${
        darkMode ? 'bg-brand-card border-brand-gold/40 text-gray-200' : 'bg-white border-brand-gold/40 text-gray-900'
      }`}>
        
        {/* Prominent High Z-Index Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 sm:top-4 sm:right-4 z-40 p-2 sm:p-2.5 rounded-full shadow-xl transition-transform hover:scale-110 ${
            darkMode ? 'bg-brand-dark/90 text-brand-gold border border-brand-gold/40 hover:bg-brand-surface' : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
          }`}
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Top/Left: Image View with constrained height on mobile */}
        <div className="shrink-0 max-h-[35vh] sm:max-h-[40vh] md:max-h-[80vh] md:col-span-7 bg-black flex items-center justify-center relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Bottom/Right: Details & Sticky Actions */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-4 md:col-span-5">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider">
              {item.category}
            </span>

            <h3 className={`font-heading text-xl sm:text-2xl md:text-3xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {item.title}
            </h3>

            <p className={`text-xs sm:text-sm leading-relaxed font-light ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {item.description}
            </p>

            <div className={`mt-4 pt-3 border-t space-y-1.5 text-[11px] sm:text-xs ${darkMode ? 'border-brand-surface text-gray-400' : 'border-gray-200 text-gray-600'}`}>
              <p>• Traditional Indian Textile Technique</p>
              <p>• Custom colors & fabric specifications available</p>
              <p>• Own manufacturing in Nizampet, Hyderabad</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className={`space-y-2 sm:space-y-2.5 pt-3 sm:pt-4 border-t shrink-0 pb-[max(4px,env(safe-area-inset-bottom))] ${darkMode ? 'border-brand-surface' : 'border-gray-200'}`}>
            <a
              href={`https://wa.me/${siteConfig.whatsappPhone}?text=Hi,%20I%20saw%20${encodeURIComponent(item.title)}%20in%20your%20gallery%20and%20want%20to%20inquire.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>

            <a
              href="#contact"
              onClick={onClose}
              className={`w-full py-2 sm:py-2.5 px-4 rounded-xl border font-semibold text-xs text-center block transition-all ${
                darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-brand-gold' : 'bg-gray-100 border-gray-300 text-gray-800 hover:text-gray-900'
              }`}
            >
              View Workshop Contact Details
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LightboxModal;
