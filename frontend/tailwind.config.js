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
      borderWidth: {
        1: '1px',
      },
      spacing: {
        120: '30rem',
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  variants: {
    typography: [],
  },
}
