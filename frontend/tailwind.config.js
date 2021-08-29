module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#393939',
            a: {
              color: '',
            },
          },
        },
        xl: {
          css: {
            lineHeight: '1.25',
            h2: {
              fontFamily: 'Playfair',
              fontSize: '1.875rem',
              marginBottom: '1.5rem',
              lineHeight: '1.25',
              fontWeight: 'normal',
            },
            ul: {
              li: {
                margin: 0,
              },
            },
          },
        },
      },
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
        vs: '#DB303D',
        vd: '#4D9A70',
        ge: '#EE6F22',
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
    extend: {
      borderWidth: ['first'],
    },
  },
}
