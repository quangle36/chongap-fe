/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['SVN Gilroy', ...fontFamily.sans],
        'SVN-Gilroy': 'SVN Gilroy',
        'UTM-Avo': 'UTM Avo',
        'SVN-Cintra': 'SVN Cintra',
      },
      colors: {
        'dark-purple': ' #242038ff',
        'slate-blue': ' #725ac1ff',
        'middle-blue-purple': ' #8d86c9ff',
        'lavender-gray': '#cac4ceff',
        linen: ' #f7ece1ff',
        mariner: '#277BC0',
        'selective-yellow': '#FFB200',
        'bright-sun': '#FFCB42',
        'barley-white': '#FFF4CF',
        'black-squeeze': '#F7FBFC',
        'link-water': '#D6E6F2',
        spindle: '#B9D7EA',
        'polo-blue': '#769FCD',
        'hint-of-red': '#F9F7F7',
        'card-title': '#E03C31',
        'main-blue': '#4487C7',
        'google-red': '#EA4335',
        'facebook-blue': '#3B5998',
        concrete: '#F2F2F2',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
};
