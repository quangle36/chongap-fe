/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": " #242038ff",
        "slate-blue": " #725ac1ff",
        "middle-blue-purple": " #8d86c9ff",
        "lavender-gray": "#cac4ceff",
        linen: " #f7ece1ff",
        "mariner": "#277BC0",
        "selective-yellow": "#FFB200",
        "bright-sun": "#FFCB42",
        "barley-white": "#FFF4CF",
        "black-squeeze": "#F7FBFC",
        "link-water": "#D6E6F2",
        "spindle": "#B9D7EA",
        "polo-blue": "#769FCD",
        "hint-of-red": "#F9F7F7"
      },
    },
  },
  plugins: [require("daisyui")],
}
