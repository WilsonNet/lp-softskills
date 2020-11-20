module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
        '40xl': '40rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
