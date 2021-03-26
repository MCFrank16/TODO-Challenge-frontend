module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'false' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'upper-image-desktop': "url('./images/bg-desktop-dark.jpg')",
        "upper-image-mobile": "url('./images/bg-mobile-dark.jpg')",
        "upper-image-mobile-light": "url('./images/bg-mobile-light.jpg')",
        "upper-image-desktop-light": "url('./images/bg-desktop-light.jpg')"
      }),
      width: {
        '1/7': '40%',
      },
      borderWidth: {
        '2': '1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
