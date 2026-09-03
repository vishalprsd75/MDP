import React, { useState } from 'react';
import { businessInfo } from '../data/businessData';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

const MapSection = ({ darkMode = true }) => {
  const [iframeError, setIframeError] = useState(false);

  return (
    <section id="map" className={`py-16 relative border-t transition-colors duration-500 ${
      darkMode ? 'bg-brand-dark border-brand-surface' : 'bg-brand-cream border-brand-cream-dark'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
              <MapPin className="w-3.5 h-3.5" />
              Workshop Location
            </div>
            <h2 className={`font-heading text-3xl sm:text-4xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Visit Munna Dyeing Printing
            </h2>
            <p className={`text-sm mt-1 max-w-xl ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              H.No. 4-191/90/1, Shop No. 1, Opp. Shivalayam Park, Pragathi Nagar, Nizampet, Hyderabad 500090.
            </p>
          </div>

          <a
            href={businessInfo.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-gold-gradient text-brand-dark font-bold text-sm shadow-md hover:shadow-brand-gold/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Map Frame Container */}
        <div className={`relative rounded-2xl overflow-hidden border shadow-2xl min-h-[380px] ${
          darkMode ? 'border-brand-gold/30 bg-brand-card' : 'border-brand-gold/40 bg-white'
        }`}>
          {!iframeError ? (
            <iframe
              title="Munna Dyeing Printing Location"
              src={businessInfo.googleMapsEmbedUrl}
              className="w-full h-[400px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onError={() => setIframeError(true)}
            ></iframe>
          ) : (
            <div className={`w-full h-[400px] flex flex-col items-center justify-center text-center p-8 ${
              darkMode ? 'bg-brand-surface' : 'bg-brand-cream'
            }`}>
              <Compass className="w-12 h-12 text-brand-gold mb-4 animate-bounce" />
              <h3 className={`font-heading text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Pragathi Nagar, Nizampet</h3>
              <p className={`text-sm max-w-md mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Opposite Shivalayam Park, Shop No. 1, Hyderabad, Telangana 500090.
              </p>
              <a
                href={businessInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gold-gradient text-brand-dark font-bold text-sm"
              >
                Open in Google Maps App
              </a>
            </div>
          )}

          {/* Floating Location Pill Overlay */}
          <div className={`absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-3 p-3.5 rounded-xl border backdrop-blur-md shadow-lg ${
            darkMode ? 'glass-nav border-brand-gold/30' : 'glass-nav-light border-brand-gold/40'
          }`}>
            <div className="w-9 h-9 rounded-lg bg-brand-gold text-brand-dark flex items-center justify-center font-bold text-xs">
              MDP
            </div>
            <div>
              <p className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{businessInfo.name}</p>
              <p className="text-[11px] text-brand-gold font-medium">Opp. Shivalayam Park, Pragathi Nagar</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MapSection;
