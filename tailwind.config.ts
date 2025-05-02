module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
    require('@tailwindcss/line-clamp'),
  ],
};