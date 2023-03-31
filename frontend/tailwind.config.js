module.exports = {
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
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
              marginBottom: '0.7rem',
              lineHeight: '1.1',
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
        sans: ['News Cycle'],
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
        fr: '#3751C0',
        gray: '#393939',
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
