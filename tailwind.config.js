const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        // gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {
      backdropGrayscale: ['hover'],
      display: ['group-hover'],
      padding: ['last'],
      scale: ['group-hover'],
      translate: ['group-hover'],
      visibility: ['group-hover'],
      width: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
