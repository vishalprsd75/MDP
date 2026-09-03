import React from 'react';
import SectionHeading from './SectionHeading';
import { siteConfig } from '../config/siteConfig';
import EnquiryForm from './EnquiryForm';
import { Phone, MapPin, MessageSquare, User, ExternalLink, Navigation } from 'lucide-react';

const Contact = ({ darkMode = true }) => {
  return (
    <section id="contact" className={`py-20 relative overflow-hidden transition-colors duration-500 ${
      darkMode ? 'bg-fabric-pattern' : 'bg-fabric-pattern-light'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Contact Information"
          title="Connect With Munna Dyeing Printing"
          subtitle="Reach out to us directly via phone, WhatsApp, or visit our workshop in Pragathi Nagar, Nizampet."
          darkMode={darkMode}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
          
          {/* Left Column: Business Card Details */}
          <div className="lg:col-span-6">
            <div className={`rounded-3xl border p-8 sm:p-10 shadow-2xl relative overflow-hidden ${
              darkMode
                ? 'bg-gradient-to-br from-brand-card via-brand-dark to-brand-card border-brand-gold/40'
                : 'bg-white border-brand-gold/40 shadow-xl'
            }`}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">Contact Details</span>
                <span className="px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs text-brand-gold font-bold">
                  {siteConfig.shortName}
                </span>
              </div>

              {/* Business Title & Tagline */}
              <h3 className={`font-heading text-3xl sm:text-4xl font-bold tracking-wider ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {siteConfig.businessName}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mt-1 mb-8">
                "{siteConfig.tagline}"
              </p>

              {/* Business Contact Grid */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t text-sm ${
                darkMode ? 'border-brand-surface' : 'border-gray-200'
              }`}>
                
                {/* Contact Person */}
                <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                  darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30'
                }`}>
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-xs block ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Contact Person</span>
                    <span className={`font-heading font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{siteConfig.owner}</span>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                  darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30'
                }`}>
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-xs block ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Call Directly</span>
                    <div className="flex flex-col gap-1 mt-0.5">
                      {siteConfig.phones.map((phone, i) => (
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
                <div className={`sm:col-span-2 p-4 rounded-xl border flex items-start gap-3 ${
                  darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30'
                }`}>
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-xs block ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Workshop Location</span>
                    <p className={`text-sm leading-relaxed mt-0.5 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Media Shortcuts */}
              <div className={`mt-6 pt-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs ${
                darkMode ? 'border-brand-surface text-gray-400' : 'border-gray-200 text-gray-600'
              }`}>
                <span className="font-semibold uppercase tracking-wider text-brand-gold">Official Links:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1.5 transition-colors ${
                      darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-brand-gold' : 'bg-gray-100 border-gray-300 text-gray-800 hover:text-brand-gold-dark'
                    }`}
                  >
                    <span>Instagram</span>
                  </a>

                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1.5 transition-colors ${
                      darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-red-400' : 'bg-gray-100 border-gray-300 text-gray-800 hover:text-red-600'
                    }`}
                  >
                    <span>YouTube</span>
                  </a>

                  <a
                    href={siteConfig.socials.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1.5 transition-colors ${
                      darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-brand-gold' : 'bg-gray-100 border-gray-300 text-gray-800 hover:text-brand-gold-dark'
                    }`}
                  >
                    <span>Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t ${
                darkMode ? 'border-brand-surface' : 'border-gray-200'
              }`}>
                <a
                  href={`https://wa.me/${siteConfig.whatsappPhone}?text=Hello%20${encodeURIComponent(siteConfig.businessName)},%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
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

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-6">
            <EnquiryForm darkMode={darkMode} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
