/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefdf7',
          100: '#fdf9e7',
          200: '#faf0c3',
          300: '#f5e194',
          400: '#eece63',
          500: '#D4AF37', // Or luxueux
          600: '#c1971f',
          700: '#a67c00',
          800: '#8b6914',
          900: '#755c1a',
        },
        navy: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',  
          300: '#a5b8ff',
          400: '#8292ff',
          500: '#1e3a8a', // Bleu marine luxueux
          600: '#1e40af',
          700: '#1d4ed8',
          800: '#1e3a8a',
          900: '#0f1419', // Bleu très foncé
        },
        luxury: {
          blue: '#0E0F11', // Bleu luxueux principal
          'blue-light': '#1e3a8a',
          gold: '#D4AF37', // Or brillant
          'gold-light': '#F4E078',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'luxury': ['Montserrat', 'sans-serif'], // Police moderne et élégante pour le luxe
        'brand': ['Poppins', 'sans-serif'], // Police clean pour la marque
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #0F1419 0%, #1e3a8a 50%, #D4AF37 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F4E078 100%)',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(212, 175, 55, 0.25)',
        'gold': '0 10px 30px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'shine': 'shine 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};