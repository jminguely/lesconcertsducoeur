import fr from './i18n/fr.js'
import de from './i18n/de.js'

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Les Concerts du Cœur',
    htmlAttrs: {
      lang: 'fr',
      class: 'bg-white',
    },
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        once: true,
        rel: 'stylesheet',
        href: '/fonts.css',
        as: 'style',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-dompurify.js', mode: 'client' },
    { src: '@/plugins/vue-clickaway.js', mode: 'client' },
    { src: '@/plugins/vue-splide.js', mode: 'client' },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxtjs/date-fns'],

  modules: ['@nuxtjs/apollo', 'nuxt-i18n', '@nuxtjs/markdownit'],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api-new.lesconcertsducoeur.ch/graphql',
        // httpEndpoint: 'http://localhost:1337/graphql',
      },
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

  server: {
    host: process.env.IP || '0.0.0.0',
    port: process.env.PORT || '3000',
  },
}
