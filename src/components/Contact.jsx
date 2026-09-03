import React from 'react';
import SectionHeading from './SectionHeading';
import { businessInfo } from '../data/businessData';
import { Phone, MapPin, MessageSquare, User, ExternalLink, Navigation } from 'lucide-react';

const Contact = ({ darkMode = true }) => {
  return (
    <section id="contact" className={`py-20 relative overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-fabric-pattern' : 'bg-fabric-pattern-light'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          badge="Contact Information"
          title="Connect With Munna Dyeing Printing"
          subtitle="Reach out to us directly via phone, WhatsApp, or visit our workshop in Pragathi Nagar, Nizampet."
          darkMode={darkMode}
        />

        <div className="max-w-3xl mx-auto mt-12">

          {/* Visiting Card Style Box */}
          <div className={`rounded-3xl border p-8 sm:p-12 shadow-2xl relative overflow-hidden ${darkMode
            ? 'bg-gradient-to-br from-brand-card via-brand-dark to-brand-card border-brand-gold/40'
            : 'bg-white border-brand-gold/40 shadow-xl'
            }`}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">Contact Details</span>
              <span className="px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs text-brand-gold font-bold">MDP</span>
            </div>

            {/* Business Title & Tagline */}
            <h3 className={`font-heading text-3xl sm:text-4xl font-bold tracking-wider ${darkMode ? 'text-white' : 'text-gray-900'
              }`}>
              {businessInfo.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mt-1 mb-8">
              "{businessInfo.tagline}"
            </p>

            {/* Business Contact Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t text-sm ${darkMode ? 'border-brand-surface' : 'border-gray-200'
              }`}>

              {/* Contact Person */}
              <div className={`p-4 rounded-xl border flex items-start gap-3 ${darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30'
                }`}>
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs block ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Contact Person</span>
                  <span className={`font-heading font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{businessInfo.owner}</span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className={`p-4 rounded-xl border flex items-start gap-3 ${darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30'
                }`}>
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs block ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Call Directly</span>
                  <div className="flex flex-col gap-1 mt-0.5">
                    {businessInfo.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="font-bold text-brand-gold hover:underline text-sm"
                      >
                        +91 {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Address Full */}
              <div className={`sm:col-span-2 p-4 rounded-xl border flex items-start gap-3 ${darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30'
                }`}>
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs block ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Workshop Location</span>
                  <p className={`text-sm leading-relaxed mt-0.5 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {businessInfo.address}
                  </p>
                </div>
              </div>

            </div>

            {/* Social Media Shortcuts */}
            <div className={`mt-6 pt-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs ${darkMode ? 'border-brand-surface text-gray-400' : 'border-gray-200 text-gray-600'
              }`}>
              <span className="font-semibold uppercase tracking-wider text-brand-gold">Official Links:</span>
              <div className="flex items-center gap-2">
                <a
                  href={businessInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1.5 transition-colors ${darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-brand-gold' : 'bg-gray-100 border-gray-300 text-gray-800 hover:text-brand-gold-dark'
                    }`}
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>

                <a
                  href={businessInfo.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1.5 transition-colors ${darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-red-400' : 'bg-gray-100 border-gray-300 text-gray-800 hover:text-red-600'
                    }`}
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>YouTube</span>
                </a>

                <a
                  href={businessInfo.socials.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1.5 transition-colors ${darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-brand-gold' : 'bg-gray-100 border-gray-300 text-gray-800 hover:text-brand-gold-dark'
                    }`}
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 7 13 8 16 1-3 8-10.75 8-16 0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                  </svg>
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t ${darkMode ? 'border-brand-surface' : 'border-gray-200'
              }`}>
              <a
                href={`https://wa.me/${businessInfo.whatsappPhone}?text=Hello%20Munna%20Dyeing%20Printing,%20I%20would%20like%20to%20inquire%20about%20your%20dyeing%20and%20printing%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#map"
                className="py-3.5 px-6 rounded-xl bg-gold-gradient text-brand-dark font-bold text-sm shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300"
              >
                <Navigation className="w-5 h-5" />
                <span>View Google Map</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
