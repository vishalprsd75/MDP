import React from 'react';
import { X, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const LightboxModal = ({ item, onClose, darkMode = true }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-16 sm:pt-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className={`relative z-10 w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[85vh] ${
        darkMode ? 'bg-brand-card border-brand-gold/40' : 'bg-white border-brand-gold/40 text-gray-900'
      }`}>
        
        {/* Prominent High Z-Index Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 z-30 p-2.5 rounded-full shadow-lg transition-transform hover:scale-110 ${
            darkMode ? 'bg-brand-dark/90 text-brand-gold border border-brand-gold/40 hover:bg-brand-surface' : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
          }`}
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Full Resolution Image View */}
        <div className="md:col-span-7 bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full max-h-[55vh] md:max-h-[80vh] object-cover object-center"
          />
        </div>

        {/* Right: Details & Action */}
        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[60vh] md:max-h-[80vh]">
          <div>
            <span className="px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider">
              {item.category}
            </span>

            <h3 className={`font-heading text-2xl sm:text-3xl font-bold mt-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {item.title}
            </h3>

            <p className={`text-sm leading-relaxed mt-3 font-light ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {item.description}
            </p>

            <div className={`mt-6 pt-4 border-t space-y-2 text-xs ${darkMode ? 'border-brand-surface text-gray-400' : 'border-gray-200 text-gray-600'}`}>
              <p>• Traditional Indian Textile Technique</p>
              <p>• Custom colors & fabric specifications available</p>
              <p>• Own manufacturing in Nizampet, Hyderabad</p>
            </div>
          </div>

          <div className={`space-y-3 pt-4 border-t ${darkMode ? 'border-brand-surface' : 'border-gray-200'}`}>
            <a
              href={`https://wa.me/${siteConfig.whatsappPhone}?text=Hi,%20I%20saw%20${encodeURIComponent(item.title)}%20in%20your%20gallery%20and%20want%20to%20inquire.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>

            <a
              href="#contact"
              onClick={onClose}
              className={`w-full py-2.5 rounded-xl border font-semibold text-xs text-center block transition-all ${
                darkMode ? 'bg-brand-surface border-brand-gold/20 text-gray-200 hover:text-brand-gold' : 'bg-gray-100 border-gray-300 text-gray-800 hover:text-gray-900'
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
