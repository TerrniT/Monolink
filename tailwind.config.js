/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-green': '#99F128',
        'accent-green-second': '#A4FF66',
        'gray-stroke': '#575757'
      },
      fontSize: {
        'p': '16px'
      }
    },
  },
  daisyui: {
    themes: ['black'],
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui'), require('tailwind-scrollbar')],
}
