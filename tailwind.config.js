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
          dark: '#0f0e0d',
          card: '#191715',
          surface: '#26231f',
          gold: '#d4af37',
          'gold-light': '#f5e4a3',
          'gold-dark': '#b58e22',
          cream: '#faf7f2',
          'cream-dark': '#f0e8dc',
          terracotta: '#b85d43',
          indigo: '#2b3a4e',
          amber: '#d99738',
        }
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f5e4a3 0%, #d4af37 50%, #b58e22 100%)',
        'dark-gradient': 'linear-gradient(180deg, #191715 0%, #0f0e0d 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
