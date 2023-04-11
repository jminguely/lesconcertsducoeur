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
        VS: '#DB303D',
        VD: '#4D9A70',
        GE: '#EE6F22',
        FR: '#3751C0',
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
  purge: {
    safelist: [/^bg-/, /^text-/],
  },
  plugins: [require('@tailwindcss/typography')],
  variants: {
    extend: {
      borderWidth: ['first'],
    },
  },
}
