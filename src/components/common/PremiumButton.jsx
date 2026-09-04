import React from 'react';

/**
 * Premium Luxury Button component supporting primary gold, secondary outline, and WhatsApp emerald variants.
 */
const PremiumButton = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'whatsapp' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  href,
  onClick,
  target,
  rel,
  className = '',
  darkMode = true,
  icon: IconComponent,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-300 rounded-xl focus:outline-none cursor-pointer';

  const sizeStyles = {
    sm: 'py-2 px-3.5 text-[11px]',
    md: 'py-3 px-5 text-xs',
    lg: 'py-3.5 px-7 text-xs sm:text-sm',
  };

  const variantStyles = {
    primary: 'bg-gold-gradient text-brand-dark shadow-md hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98]',
    secondary: darkMode
      ? 'bg-brand-surface/80 border border-brand-gold/30 text-gray-200 hover:border-brand-gold hover:text-brand-gold hover:bg-brand-surface'
      : 'bg-white border border-brand-gold/40 text-gray-800 hover:border-brand-gold-dark hover:text-brand-gold-dark shadow-sm',
    whatsapp: 'bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white shadow-lg hover:shadow-emerald-900/30 hover:scale-[1.02] active:scale-[0.98]',
    ghost: darkMode
      ? 'text-gray-300 hover:text-brand-gold hover:bg-white/5'
      : 'text-gray-700 hover:text-brand-gold-dark hover:bg-black/5',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {IconComponent && <IconComponent className="w-4 h-4 mr-2 shrink-0" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} target={target} rel={rel} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default PremiumButton;
