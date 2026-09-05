import React from 'react';
import SectionHeading from './SectionHeading';
import ContactBusinessCard from './ContactBusinessCard';
import { siteConfig } from '../config/siteConfig';
import { generateGeneralWhatsAppLink } from '../utils/whatsapp';
import { Phone, MapPin, MessageSquare, User, ExternalLink, Navigation, Sparkles } from 'lucide-react';

const Contact = ({ darkMode = true }) => {
  const generalWhatsAppUrl = generateGeneralWhatsAppLink(
    siteConfig.whatsappPhone,
    `Hello ${siteConfig.businessName}, I would like to inquire about fabric dyeing and printing.`
  );

  return (
    <section id="contact" className={`py-20 relative overflow-hidden transition-colors duration-500 ${
      darkMode ? 'bg-fabric-pattern' : 'bg-fabric-pattern-light'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Contact & Workshop"
          title="Visit Munna Dyeing Printing"
          subtitle="Reach out to owner MD. Mansoor directly or visit our manufacturing workshop in Pragathi Nagar, Nizampet for custom fabric dyeing, screen printing, wholesale dyeable fabrics, and bespoke orders."
          darkMode={darkMode}
        />

        <div className="max-w-6xl mx-auto mt-12">
          <div className={`rounded-3xl border p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-500 ${
            darkMode
              ? 'bg-gradient-to-br from-brand-card via-brand-dark to-brand-card border-brand-gold/40 hover:border-brand-gold'
              : 'bg-white border-brand-gold/40 shadow-xl'
          }`}>
            {/* Subtle Background Glow Orbs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-terracotta/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Top Verified Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Verified Direct Business & Workshop Details</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs text-brand-gold font-bold">
                {siteConfig.shortName}
              </span>
            </div>

            {/* Business Title & Tagline */}
            <h3 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {siteConfig.businessName}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-brand-gold uppercase tracking-[0.25em] mt-1 mb-8">
              "{siteConfig.tagline}"
            </p>

            {/* Two-Column Grid: Left Contact Details (col-7), Right Business Card (col-5) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start pt-6 border-t border-brand-surface/60">
              
              {/* LEFT COLUMN (lg:col-span-7): Information & Actions */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Managing Owner */}
                  <div className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-4 transition-transform hover:-translate-y-1 ${
                    darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30 shadow-sm'
                  }`}>
                    <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`text-xs block font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Managing Owner</span>
                      <span className={`font-heading font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{siteConfig.owner}</span>
                      <p className="text-[11px] text-brand-gold font-medium mt-0.5">In-House Manufacturing Supervisor</p>
                    </div>
                  </div>

                  {/* Clickable Phone Numbers */}
                  <div className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-4 transition-transform hover:-translate-y-1 ${
                    darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30 shadow-sm'
                  }`}>
                    <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`text-xs block font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Direct Phone Lines</span>
                      <div className="flex flex-col gap-1 mt-1">
                        {siteConfig.phones.map((phone, i) => (
                          <a
                            key={i}
                            href={`tel:${phone.replace(/\s+/g, '')}`}
                            className="font-bold text-brand-gold hover:underline text-base tracking-wide"
                          >
                            +91 {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Factory & Workshop Location Address */}
                <div className={`p-5 rounded-2xl border flex items-start gap-4 transition-transform hover:-translate-y-1 ${
                  darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30 shadow-sm'
                }`}>
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-xs block font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Factory & Workshop Location</span>
                      <a
                        href={siteConfig.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-brand-gold hover:underline flex items-center gap-1 shrink-0"
                      >
                        <span>View in Map</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className={`text-sm leading-relaxed mt-1 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                {/* Direct Action CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href={generalWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat Directly on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={siteConfig.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 rounded-xl bg-gold-gradient text-brand-dark font-bold text-sm shadow-xl flex items-center justify-center gap-2.5 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                </div>

                {/* Official Social Links */}
                <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-4 text-xs ${
                  darkMode ? 'border-brand-surface text-gray-400' : 'border-gray-200 text-gray-600'
                }`}>
                  <span className="font-semibold uppercase tracking-wider text-brand-gold">Official Social Profiles:</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3.5 py-1.5 rounded-xl border font-semibold flex items-center gap-1.5 transition-all hover:scale-105 ${
                        darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-brand-gold' : 'bg-gray-100 border-gray-300 text-gray-800 hover:text-brand-gold-dark shadow-sm'
                      }`}
                    >
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={siteConfig.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3.5 py-1.5 rounded-xl border font-semibold flex items-center gap-1.5 transition-all hover:scale-105 ${
                        darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-red-400' : 'bg-gray-100 border-gray-300 text-gray-800 hover:text-red-600 shadow-sm'
                      }`}
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={siteConfig.socials.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3.5 py-1.5 rounded-xl border font-semibold flex items-center gap-1.5 transition-all hover:scale-105 ${
                        darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-brand-gold' : 'bg-gray-100 border-gray-300 text-gray-800 hover:text-brand-gold-dark shadow-sm'
                      }`}
                    >
                      <MapPin className="w-3 h-3 text-brand-gold" />
                      <span>Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN (lg:col-span-5): Supplied Official Business Card */}
              <div className="lg:col-span-5 flex items-center justify-center w-full">
                <ContactBusinessCard
                  imagePath={siteConfig.businessCardImage}
                  label="OUR BUSINESS CARD"
                  subtitle="Keep our contact details handy."
                  darkMode={darkMode}
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
