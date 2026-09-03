import React from 'react';
import { businessInfo, servicesData } from '../data/businessData';
import { Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = ({ darkMode = true }) => {
  return (
    <footer className={`border-t pt-16 pb-12 relative overflow-hidden transition-colors duration-500 ${
      darkMode ? 'bg-brand-dark border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b ${
          darkMode ? 'border-brand-surface' : 'border-gray-300'
        }`}>
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gold-gradient p-[1px]">
                <div className={`w-full h-full rounded-[7px] flex items-center justify-center font-heading font-bold text-sm ${
                  darkMode ? 'bg-brand-dark text-brand-gold' : 'bg-brand-cream text-brand-gold-dark'
                }`}>
                  MDP
                </div>
              </div>
              <div>
                <span className={`font-heading font-bold text-2xl tracking-wider block ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  MUNNA
                </span>
                <span className="text-[10px] font-semibold text-brand-gold tracking-[0.25em] uppercase block">
                  Dyeing Printing
                </span>
              </div>
            </a>

            <p className={`text-sm leading-relaxed max-w-sm font-light ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              "{businessInfo.tagline}"
            </p>

            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Contact Person: <strong className={darkMode ? 'text-white' : 'text-gray-900'}>{businessInfo.owner}</strong>
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-colors ${
                  darkMode
                    ? 'bg-brand-surface border-brand-gold/20 text-gray-300 hover:text-brand-gold hover:border-brand-gold'
                    : 'bg-white border-brand-gold/30 text-gray-700 hover:text-brand-gold-dark hover:border-brand-gold-dark shadow-sm'
                }`}
                title="Instagram (Profile)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={businessInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-colors ${
                  darkMode
                    ? 'bg-brand-surface border-brand-gold/20 text-gray-300 hover:text-red-500 hover:border-red-500'
                    : 'bg-white border-brand-gold/30 text-gray-700 hover:text-red-500 hover:border-red-500 shadow-sm'
                }`}
                title="YouTube (Channel)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href={businessInfo.socials.maps}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-colors ${
                  darkMode
                    ? 'bg-brand-surface border-brand-gold/20 text-gray-300 hover:text-brand-gold hover:border-brand-gold'
                    : 'bg-white border-brand-gold/30 text-gray-700 hover:text-brand-gold-dark hover:border-brand-gold-dark shadow-sm'
                }`}
                title="Google Maps Location"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 7 13 8 16 1-3 8-10.75 8-16 0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Home</a></li>
              <li><a href="#about" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>About Us</a></li>
              <li><a href="#services" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Services</a></li>
              <li><a href="#gallery" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Gallery</a></li>
              <li><a href="#why-us" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Why Choose Us</a></li>
              <li><a href="#contact" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest">Our Crafts</h4>
            <ul className="space-y-2 text-sm">
              {servicesData.map(s => (
                <li key={s.id}>
                  <a href="#services" className={`${darkMode ? 'text-gray-400 hover:text-brand-gold' : 'text-gray-600 hover:text-brand-gold-dark'} transition-colors`}>
                    {s.title} ({s.subtitle})
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest">Workshop Address</h4>
            <div className={`space-y-2.5 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {businessInfo.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.replace(/\s+/g, '')}`} className={`block font-semibold ${darkMode ? 'text-white hover:text-brand-gold' : 'text-gray-900 hover:text-brand-gold-dark'}`}>
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          darkMode ? 'text-gray-500' : 'text-gray-600'
        }`}>
          <p>© 2026 {businessInfo.name}. All Rights Reserved.</p>

          <a
            href="#hero"
            className={`flex items-center gap-1.5 transition-colors ${
              darkMode ? 'text-gray-400 hover:text-brand-gold' : 'text-gray-600 hover:text-brand-gold-dark'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
