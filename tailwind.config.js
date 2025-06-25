// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4E6E81',
        secondary: '#F9DBBB',
        accent: '#FF0303',
        dark: '#2E3840'
      }
    },
  },
  plugins: [],
}
