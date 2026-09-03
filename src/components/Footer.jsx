import React from 'react';
import { siteConfig } from '../config/siteConfig';
import Logo from './Logo';
import { Phone, MapPin, MessageSquare, ExternalLink } from 'lucide-react';

const Footer = ({ darkMode = true }) => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Fabric Store', href: '#sales' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`border-t transition-colors duration-500 ${
      darkMode ? 'bg-brand-dark border-brand-surface text-gray-400' : 'bg-brand-cream-dark/40 border-brand-gold/30 text-gray-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo darkMode={darkMode} size="md" />
            
            <p className="text-xs sm:text-sm leading-relaxed max-w-md font-light">
              "{siteConfig.tagline}" — Providing expert fabric dyeing, screen printing, Shibori, block print, Kalamkari, and Batik craftsmanship in Pragathi Nagar, Nizampet, Hyderabad.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all hover:scale-105 ${
                  darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-brand-gold hover:border-brand-gold' : 'bg-white border-brand-gold/40 text-gray-800 shadow-sm'
                }`}
              >
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all hover:scale-105 ${
                  darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-red-400 hover:border-red-400/50' : 'bg-white border-brand-gold/40 text-gray-800 shadow-sm'
                }`}
              >
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={siteConfig.socials.maps}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all hover:scale-105 ${
                  darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-brand-gold hover:border-brand-gold' : 'bg-white border-brand-gold/40 text-gray-800 shadow-sm'
                }`}
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`font-heading text-lg font-bold tracking-wider ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Navigation Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors ${
                      darkMode ? 'hover:text-brand-gold' : 'hover:text-brand-gold-dark'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Workshop Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className={`font-heading text-lg font-bold tracking-wider ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Workshop Contact
            </h4>
            
            <div className="space-y-2.5 text-xs font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <div className="flex gap-2">
                  {siteConfig.phones.map((p, i) => (
                    <a key={i} href={`tel:${p.replace(/\s+/g, '')}`} className="hover:underline font-semibold text-brand-gold">
                      +91 {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsappPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-green-500 font-semibold"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] block font-semibold text-brand-gold uppercase tracking-wider">Contact Person</span>
              <span className={`text-sm font-heading font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{siteConfig.owner}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          darkMode ? 'border-brand-surface text-gray-500' : 'border-brand-gold/20 text-gray-600'
        }`}>
          <p>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
          <p className="text-brand-gold font-medium">{siteConfig.tagline}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
