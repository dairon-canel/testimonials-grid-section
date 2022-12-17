/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  purge: ['./public/index.html'],
  theme: {
    extend: {},
    colors: {
      moderateViolet: 'hsl(263, 55%, 52%)',
      veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
      veryDarkBlackishBlue: 'hsl(219, 29%, 14%)',
      lightGray: 'hsl(0, 0%, 81%)',
      lightGrayishBlue: 'hsl(210, 46%, 95%)',
      white: 'hsl(0, 100%, 100%)',
      noColor: 'hsla(0, 0%, 0%, 0)',
    },
    fontWeight: {
      500: '500',
      600: '600',
    },
  },
  plugins: [],
};
