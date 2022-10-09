/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
