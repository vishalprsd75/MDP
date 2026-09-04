import React from 'react';
import { ShieldCheck, Award, Factory, RefreshCw } from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Award,
  Factory,
  RefreshCw
};

/**
 * Reusable Trust Assurance Feature Card Component
 */
const TrustFeature = ({ icon = 'ShieldCheck', title, description, darkMode = true }) => {
  const IconComponent = iconMap[icon] || ShieldCheck;

  return (
    <div className={`p-5 rounded-2xl border transition-all duration-300 hover:border-brand-gold flex items-start gap-4 ${
      darkMode
        ? 'bg-brand-card/80 border-brand-gold/20 hover:shadow-luxury'
        : 'bg-white border-brand-gold/30 shadow-sm hover:shadow-luxury-light'
    }`}>
      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
        <IconComponent className="w-5 h-5 stroke-[2]" />
      </div>
      <div>
        <h4 className={`font-heading text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h4>
        {description && (
          <p className={`text-xs mt-1 font-light leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default TrustFeature;
