/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#fafafa',
          300: '#f5f5f5',
          400: '#e5e5e5',
          500: '#d4d4d4',
          600: '#a3a3a3',
          700: '#737373',
          800: '#404040',
          900: '#171717',
        },
        accent: {
          50: '#fefcf0',
          100: '#fef7d9',
          200: '#fdeeb3',
          300: '#fce083',
          400: '#f9cc51',
          500: '#f7b32b',
          600: '#d4af37',
          700: '#b8941f',
          800: '#967a1c',
          900: '#7a651d',
        },
        gold: {
          50: '#fefcf0',
          100: '#fef7d9',
          200: '#fdeeb3',
          300: '#fce083',
          400: '#f9cc51',
          500: '#f7b32b',
          600: '#d4af37',
          700: '#b8941f',
          800: '#967a1c',
          900: '#7a651d',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #f7b32b 0%, #d4af37 100%)',
        'gradient-gold-dark': 'linear-gradient(135deg, #b8941f 0%, #967a1c 100%)',
      }
    },
  },
  plugins: [],
}