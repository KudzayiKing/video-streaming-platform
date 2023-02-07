/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    // screens: {
    //   'desktop': '1400px',
    //   // => @media (min-width: 1280px) { ... }
    // }
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwindcss-textshadow')
  ],
}
