/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0b111e',        // Rich Midnight Charcoal
          card: '#131c2e',        // Deep Slate Navy Card
          surface: '#1b263b',     // Elevated Surface Layer
          gold: '#c5a059',        // Muted Champagne / Antique Gold Accent
          'gold-light': '#e2c97c',  // Soft Warm Gold
          'gold-dark': '#a37f37',   // Deep Burnished Gold
          cream: '#fbf9f5',       // Warm Ivory / Linen Light Mode Background
          'cream-card': '#ffffff', // Crisp White Card
          'cream-dark': '#f4efe6', // Muted Linen Surface
          emerald: '#15803d',     // Luxury Forest Emerald for WhatsApp
          'emerald-hover': '#166534',
          terracotta: '#b85d43',
          indigo: '#1e293b',
          amber: '#d99738',
        }
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e2c97c 0%, #c5a059 50%, #a37f37 100%)',
        'dark-gradient': 'linear-gradient(180deg, #131c2e 0%, #0b111e 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 15px rgba(197, 160, 89, 0.08)',
        'luxury-light': '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 15px rgba(197, 160, 89, 0.12)',
        'gold-glow': '0 0 20px rgba(197, 160, 89, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
