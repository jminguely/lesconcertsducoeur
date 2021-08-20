import fr from './i18n/fr.js'
import de from './i18n/de.js'

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Les Concerts du Coeur',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-clickaway.js', mode: 'client' },
    { src: '@/plugins/vue-splide.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://www.npmjs.com/package/@nuxtjs/date-fns
    '@nuxtjs/date-fns',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://www.npmjs.com/package/@nuxtjs/apollo
    '@nuxtjs/apollo',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
    // https://www.npmjs.com/package/@nuxtjs/markdownit
    '@nuxtjs/markdownit',
  ],

  apollo: {
    clientConfigs: {
      default: '@/plugins/apollo-client-configs-default.js',
    },
  },

  i18n: {
    detectBrowserLanguage: false,
    locales: [
      { code: 'fr', iso: 'fr-CH', file: 'fr.js' },
      { code: 'de', iso: 'de-CH', file: 'de.js' },
    ],
    defaultLocale: 'fr',
    landDir: 'i18n/',
    strategy: 'prefix',
    vueI18n: {
      fallbackLocale: 'fr',
      messages: {
        fr,
        de,
      },
    },
  },

  markdownit: {
    runtime: true, // Support `$md()`
  },

  // Build Configuration: https://go.nuxtjs.dev/config-buildhome(locale:"de-CH"){
  build: {},
}
