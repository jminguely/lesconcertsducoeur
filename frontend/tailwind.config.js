module.exports = {
  theme: {
    extend: {
      fontFamily: {
        bodoni: ['Bodoni'],
        newsCycle: ['News Cycle'],
        playFair: ['Playfair'],
      },
      rotate: {
        '-25': '-25deg',
        25: '25deg',
      },
      colors: {
        concert: {
          dark: '#393939',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  variants: {
    typography: [],
  },
}
