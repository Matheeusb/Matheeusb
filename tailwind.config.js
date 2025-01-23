/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B4D8',
          dark: '#0096B4',
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};