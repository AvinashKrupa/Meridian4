/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
          dark: '#A07830',
        },
        navy: {
          DEFAULT: '#0B1F3A',
          light: '#1A3557',
        },
        charcoal: '#1C1C1C',
        ivory: {
          DEFAULT: '#FAF8F3',
          dark: '#F2EDE4',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(201,168,76,0.1)',
        'luxury-lg': '0 16px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(201,168,76,0.15)',
        gold: '0 4px 20px rgba(201, 168, 76, 0.35)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #A07830, #C9A84C, #E8C97A)',
        'navy-gradient': 'linear-gradient(135deg, #0B1F3A, #1A3557)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(11,31,58,0.65) 0%, rgba(11,31,58,0.4) 50%, rgba(11,31,58,0.7) 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'float':     'floatY 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
