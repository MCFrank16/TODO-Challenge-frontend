module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'upper-image-desktop': "url('./images/bg-desktop-dark.jpg')",
        "upper-image-mobile": "url('./images/bg-mobile-dark.jpg')"
      }),
      width: {
        '1/7': '40%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
