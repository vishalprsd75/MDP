import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, User, MessageSquare, Layers } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { servicesData } from '../data/businessData';

const EnquiryForm = ({ darkMode = true }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Dyeing & Printing Inquiry',
    quantity: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form Validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }

    const phoneRegex = /^[0-9+\s-]{8,15}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid phone number (minimum 8 digits).');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your message or inquiry requirements.');
      return;
    }

    setStatus('submitting');

    // Build WhatsApp pre-filled inquiry string
    const messageString = encodeURIComponent(
      `Hello ${siteConfig.businessName},\nI would like to submit a business inquiry:\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n🧵 Service/Interest: ${formData.service}\n📐 Quantity Requirement: ${formData.quantity || 'Not Specified'}\n💬 Message: ${formData.message}`
    );

    setTimeout(() => {
      setStatus('success');
      // Open WhatsApp chat directly with form data
      window.open(`https://wa.me/${siteConfig.whatsappPhone}?text=${messageString}`, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl transition-all ${
      darkMode ? 'bg-brand-card/90 border-brand-gold/30' : 'bg-white border-brand-gold/40 shadow-lg'
    }`}>
      
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Direct Business Inquiry</span>
        <h3 className={`font-heading text-2xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Send an Official Enquiry
        </h3>
        <p className={`text-xs sm:text-sm mt-1 font-light ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Fill out the form below to connect directly with MD. Mansoor for fabric dyeing, printing, or store orders.
        </p>
      </div>

      {status === 'success' ? (
        <div className="py-8 text-center space-y-4 animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className={`font-heading text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Enquiry Prepared Successfully!
          </h4>
          <p className={`text-xs sm:text-sm max-w-sm mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            WhatsApp has been opened with your inquiry details. You can also reach us directly at <strong>+91 {siteConfig.primaryPhone}</strong>.
          </p>
          <button
            onClick={() => { setStatus('idle'); setFormData({ name: '', phone: '', service: 'General Dyeing & Printing Inquiry', quantity: '', message: '' }); }}
            className="px-5 py-2.5 rounded-xl bg-gold-gradient text-brand-dark font-bold text-xs uppercase tracking-wider"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Error Alert */}
          {status === 'error' && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2 animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name & Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Your Name <span className="text-brand-gold">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-brand-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. MD. Rajesh Kumar"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                    darkMode
                      ? 'bg-brand-surface/80 border-brand-gold/20 text-white placeholder-gray-500'
                      : 'bg-brand-cream border-brand-gold/30 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Phone Number <span className="text-brand-gold">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-brand-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                    darkMode
                      ? 'bg-brand-surface/80 border-brand-gold/20 text-white placeholder-gray-500'
                      : 'bg-brand-cream border-brand-gold/30 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Service & Quantity Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Service / Requirement
              </label>
              <div className="relative">
                <Layers className="w-4 h-4 text-brand-gold absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none ${
                    darkMode
                      ? 'bg-brand-surface border-brand-gold/20 text-white'
                      : 'bg-brand-cream border-brand-gold/30 text-gray-900'
                  }`}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  {servicesData.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Fabric Store Order">Fabric Store Order</option>
                  <option value="Bulk Wholesale Order">Bulk Wholesale Order</option>
                </select>
              </div>
            </div>

            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Quantity Requirement (Optional)
              </label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 50 meters, 10 rolls"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  darkMode
                    ? 'bg-brand-surface/80 border-brand-gold/20 text-white placeholder-gray-500'
                    : 'bg-brand-cream border-brand-gold/30 text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Inquiry Details <span className="text-brand-gold">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-brand-gold absolute left-3.5 top-3" />
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your fabric specifications, colors, or printing needs..."
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  darkMode
                    ? 'bg-brand-surface/80 border-brand-gold/20 text-white placeholder-gray-500'
                    : 'bg-brand-cream border-brand-gold/30 text-gray-900 placeholder-gray-400'
                }`}
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3.5 rounded-xl bg-gold-gradient text-brand-dark font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-brand-gold/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{status === 'submitting' ? 'Preparing Inquiry...' : 'Submit Official Enquiry'}</span>
          </button>

        </form>
      )}

    </div>
  );
};

export default EnquiryForm;
