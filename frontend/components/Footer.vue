<template>
  <footer
    class="site-footer mt-32 lg:mt-48 pt-32 pb-8 px-12 bg-gray text-white"
  >
    <div class="logo-container mb-5 md:col-span-3">
      <img
        class="w-24 md:w-48 h-auto -ml-3 filter invert mix-blend-screen"
        src="/CdC-logo.png"
      />
    </div>
    <div class="navigation-container md:row-span-2">
      <Navigation />
    </div>
    <div>
      <h3 class="mb-3">Retrouvez-nous sur les réseaux</h3>
      <div class="flex flex-row gap-5">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/concertsducoeur/"
        >
          <img
            class="filter invert h-8 w-8"
            alt="facebook"
            src="~/assets/img/social/facebook.svg"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/lesconcertsducoeur/"
        >
          <img
            class="filter invert h-8 w-8"
            alt="Instagram"
            src="~/assets/img/social/instagram.svg"
          />
        </a>
      </div>
    </div>
    <div class="flex flex-col items-start">
      <h3 class="mb-3">Vous souhaitez recevoir les infos</h3>
      <form
        id="mc-embedded-subscribe-form"
        action="https://lesconcertsducoeur.us17.list-manage.com/subscribe/post?u=e047a05962015364141e05684&amp;id=7c376f04c5&amp;f_id=00e649e0f0"
        method="post"
        target="_blank"
        novalidate
        class="flex items-center justify-start border-1 border-white"
      >
        <input
          id="mce-EMAIL"
          class="flex-auto p-2 focus:rounded-none focus:border-0 focus:outline-none bg-transparent"
          :placeholder="$t('footer').newsletter"
          type="email"
          value=""
          name="EMAIL"
          required
        />
        <button type="submit" class="text-lg px-3">→</button>
      </form>
    </div>
    <div>
      <h3 class="mb-3">En partenariat avec:</h3>
      <a
        class="block"
        href="https://www.livemusicnow.org.uk/"
        target="_blank"
        rel="noreferrer"
      >
        <img class="w-10 md:w-20 h-auto filter invert" src="/LMN-logo.png" />
      </a>
    </div>
    <div>
      © {{ new Date().getFullYear() }}<br />
      <i>Les Concerts du Cœur</i><br />
      <nuxt-link :to="localePath('impressum')">
        {{ $t('footer').impressum }} </nuxt-link
      ><br />
      <nuxt-link :to="localePath('privacy')">
        {{ $t('footer').privacy }}
      </nuxt-link>
    </div>
    <div v-if="footer.partners" class="partner-container md:col-span-3 mt-16">
      <h3>Merci à nos soutiens:</h3>
      <div
        class="flex flex-row flex-wrap gap-5 justify-between items-stretch border-t-1 border-white pt-5 mt-5"
      >
        <div
          v-for="(partner, i) in footer.partners"
          :key="i"
          class="bg-white flex filter invert mix-blend-screen"
        >
          <nuxt-img
            class="filter grayscale aspect-4/3 object-contain w-24 m-auto"
            provider="strapi"
            :src="partner.url"
          />
        </div>
      </div>
    </div>
    <div class="hidden">
      <div class="items-center">
        <nuxt-link :to="localePath('contact')" class="text-xl hover:font-bold">
          {{ $t('nav').contact }}
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
import { gql } from 'graphql-tag'
import Navigation from './Navigation.vue'

const FOOTER_QUERY = gql`
  query FOOTER_QUERY {
    footer {
      partners {
        id
        url
      }
    }
  }
`

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      partners: [],
    }
  },
  apollo: {
    footer: {
      query: FOOTER_QUERY,
      prefetch: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.site-footer {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  gap: 0 100px;

  @screen md {
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 200px auto auto;
  }

  a {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
    text-decoration-thickness: 1px;
  }
}
</style>
