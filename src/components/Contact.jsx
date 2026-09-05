import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { siteConfig } from '../config/siteConfig';
import { generateGeneralWhatsAppLink } from '../utils/whatsapp';
import { Phone, MapPin, MessageSquare, User, ExternalLink, Navigation, Sparkles, CreditCard, Maximize2, Download, X } from 'lucide-react';

const Contact = ({ darkMode = true }) => {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

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
          badge="Contact Information"
          title="Connect With Munna Dyeing Printing"
          subtitle="Reach out to owner MD. Mansoor directly via phone, WhatsApp, or visit our workshop in Pragathi Nagar, Nizampet."
          darkMode={darkMode}
        />

        <div className="max-w-5xl mx-auto mt-12">
          <div className={`rounded-3xl border p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-500 ${
            darkMode
              ? 'bg-gradient-to-br from-brand-card via-brand-dark to-brand-card border-brand-gold/40 hover:border-brand-gold'
              : 'bg-white border-brand-gold/40 shadow-xl'
          }`}>
            {/* Subtle Background Glow Orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-terracotta/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Verified Direct Business Details</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-xs text-brand-gold font-bold">
                {siteConfig.shortName}
              </span>
            </div>

            {/* Business Title & Tagline */}
            <h3 className={`font-heading text-3xl sm:text-5xl font-bold tracking-wider ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {siteConfig.businessName}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-brand-gold uppercase tracking-[0.25em] mt-1 mb-8">
              "{siteConfig.tagline}"
            </p>

            {/* Official Visiting Card Display Section */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold">
                  <CreditCard className="w-4 h-4" />
                  <span>Official Business Visiting Card</span>
                </div>
                <button
                  onClick={() => setIsCardModalOpen(true)}
                  className="text-xs font-semibold text-brand-gold hover:underline flex items-center gap-1 transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Expand Card</span>
                </button>
              </div>

              <div
                onClick={() => setIsCardModalOpen(true)}
                className={`group relative rounded-2xl overflow-hidden border p-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl ${
                  darkMode
                    ? 'bg-brand-surface/80 border-brand-gold/40 hover:border-brand-gold shadow-brand-gold/5'
                    : 'bg-brand-cream border-brand-gold/30 hover:border-brand-gold shadow-md'
                }`}
              >
                <div className="relative aspect-[1.8/1] sm:aspect-[2.2/1] max-h-72 w-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src="/images/business-card.png"
                    alt="Munna Dyeing Printing Official Business Card - MD. Mansoor"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <span className="px-4 py-2 rounded-full bg-brand-gold text-brand-dark font-bold text-xs shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                      <span>Click to View Full Size</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Contact Cards Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t ${
              darkMode ? 'border-brand-surface' : 'border-gray-200'
            }`}>
              
              {/* Contact Person */}
              <div className={`p-5 rounded-2xl border flex items-start gap-4 transition-transform hover:-translate-y-1 ${
                darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30 shadow-sm'
              }`}>
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-xs block font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Managing Owner</span>
                  <span className={`font-heading font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>{siteConfig.owner}</span>
                  <p className="text-[11px] text-brand-gold font-medium mt-0.5">In-House Manufacturing Supervisor</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className={`p-5 rounded-2xl border flex items-start gap-4 transition-transform hover:-translate-y-1 ${
                darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30 shadow-sm'
              }`}>
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-xs block font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Direct Phone Lines</span>
                  <div className="flex flex-col gap-1 mt-1">
                    {siteConfig.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="font-bold text-brand-gold hover:underline text-base"
                      >
                        +91 {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Address Full */}
              <div className={`sm:col-span-2 p-5 rounded-2xl border flex items-start gap-4 transition-transform hover:-translate-y-1 ${
                darkMode ? 'bg-brand-surface/60 border-brand-gold/20' : 'bg-brand-cream border-brand-gold/30 shadow-sm'
              }`}>
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-xs block font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Factory & Workshop Location</span>
                  <p className={`text-sm sm:text-base leading-relaxed mt-1 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {siteConfig.address}
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Action CTAs */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t ${
              darkMode ? 'border-brand-surface' : 'border-gray-200'
            }`}>
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-xl flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat Directly on WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#map"
                className="py-4 px-6 rounded-xl bg-gold-gradient text-brand-dark font-bold text-sm sm:text-base shadow-xl flex items-center justify-center gap-2.5 hover:scale-[1.02] transition-all duration-300"
              >
                <Navigation className="w-5 h-5" />
                <span>Get Google Map Directions</span>
              </a>
            </div>

            {/* Official Social Links */}
            <div className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4 text-xs ${
              darkMode ? 'border-brand-surface text-gray-400' : 'border-gray-200 text-gray-600'
            }`}>
              <span className="font-semibold uppercase tracking-wider text-brand-gold">Official Social Profiles:</span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-xl border font-semibold flex items-center gap-1.5 transition-all hover:scale-105 ${
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
                  className={`px-4 py-2 rounded-xl border font-semibold flex items-center gap-1.5 transition-all hover:scale-105 ${
                    darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-red-400' : 'bg-gray-100 border-gray-300 text-gray-800 hover:text-red-600 shadow-sm'
                  }`}
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Business Card Full Screen Lightbox Modal */}
      {isCardModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setIsCardModalOpen(false)}></div>

          <div className={`relative z-10 w-full max-w-3xl rounded-3xl border p-6 sm:p-8 shadow-2xl overflow-hidden ${
            darkMode ? 'bg-brand-card border-brand-gold/50' : 'bg-white border-brand-gold/50'
          }`}>
            <button
              onClick={() => setIsCardModalOpen(false)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-brand-gold hover:text-brand-dark transition-all border border-brand-gold/30 z-20"
              aria-label="Close card modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest mb-4">
              <CreditCard className="w-4 h-4" />
              <span>Official Visiting Card — MD. Mansoor</span>
            </div>

            <div className="rounded-2xl overflow-hidden border border-brand-gold/30 bg-black shadow-2xl p-2 mb-6">
              <img
                src="/images/business-card.png"
                alt="Munna Dyeing Printing Business Card"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-brand-surface">
              <div className="text-xs text-gray-400">
                <span className="font-semibold text-brand-gold">Munna Dyeing Printing</span> • Pragathi Nagar, Nizampet, Hyderabad
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="/images/business-card.png"
                  download="Munna_Dyeing_Printing_Business_Card.png"
                  className="flex-1 sm:flex-none py-2.5 px-5 rounded-xl bg-gold-gradient text-brand-dark font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Save Card Image</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;

