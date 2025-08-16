/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Primary Brand Colors
        'primary': '#0D2341',
        'primary-light': '#E6F0F7',
        'primary-bright': '#0070D2',
        
        // Accent Colors
        'accent': '#FF6B35',
        'gold': '#D4AF37',
        'emerald': '#50C878',
        
        // Text Colors
        'text-primary': '#333333',
        'text-secondary': '#666666',
        'text-light': '#FFFFFF',
        
        // Background Colors
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#E6F0F7',
        'bg-dark': '#0D2341',
        'bg-footer': '#1A1A1A',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'breathe': 'breathe 4s ease-in-out infinite',
        'tilt': 'tilt 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        breathe: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' },
        },
        tilt: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'luxury': '8px',
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(13, 35, 65, 0.1)',
        'luxury-hover': '0 20px 60px rgba(13, 35, 65, 0.15)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
};