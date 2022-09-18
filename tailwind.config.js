/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {},
    colors: {
      'white-900': '#FFFFFF',
      'white-600': '#F0F0F0',
      'white-400': '#EDEDED',
      'grey-300': '#C6C6D3',
      'grey-400': '#A1A1AA',
      'dark-300': '#3F3F46',
      'dark-400': '#27272A',
      'dark-500': '#3E3E41',
      'dark-600': '#1C1C1C',
      'dark-700': '#09090A',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}
