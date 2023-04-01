<template>
  <footer class="site-footer mt-32 lg:mt-48 p-5 bg-gray text-white px-12">
    <div class="mb-5">
      <nuxt-link class="block" :to="localePath('/')">
        <img
          class="w-24 md:w-48 h-auto -ml-3 filter invert mix-blend-screen"
          src="/CdC-logo.png"
        />
      </nuxt-link>
    </div>
    <Navigation />
    Partner
    <div
      v-if="footer.partners"
      class="flex flex-row flex-wrap gap-5 justify-between items-stretch"
    >
      <div
        v-for="(partner, i) in footer.partners"
        :key="i"
        class="bg-white flex filter invert mix-blend-screen"
      >
        <nuxt-img
          class="filter grayscale aspect-4/3 object-contain w-28 m-auto"
          provider="strapi"
          :src="partner.url"
        />
      </div>
    </div>
    <div class="hidden">
      <div class="items-center">
        <div class="lg:mr-2">
          <SocialLink
            link="https://www.facebook.com/concertsducoeur/"
            name="facebook"
            sidebar
          />
        </div>

        <div class="mr-2">
          <SocialLink
            name="instagram"
            link="https://www.instagram.com/lesconcertsducoeur/"
            sidebar
          />
        </div>

        <nuxt-link :to="localePath('contact')" class="text-xl hover:font-bold">
          {{ $t('nav').contact }}
        </nuxt-link>
      </div>

      <form
        id="mc-embedded-subscribe-form"
        action="https://lesconcertsducoeur.us17.list-manage.com/subscribe/post?u=e047a05962015364141e05684&amp;id=7c376f04c5&amp;f_id=00e649e0f0"
        method="post"
        target="_blank"
        novalidate
        class="hidden mt-4 lg:flex lg:items-center lg:w-full border-2 border-gray"
      >
        <input
          id="mce-EMAIL"
          class="flex-auto px-2 py-1 focus:rounded-none focus:border-0 focus:outline-none"
          :placeholder="$t('nav').newsletter"
          type="email"
          value=""
          name="EMAIL"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="text-lg">
      © 2023 <i>Les Concerts du Cœur</i> |
      <nuxt-link :to="localePath('impressum')">
        {{ $t('impressum').title }}
      </nuxt-link>
      |
      <nuxt-link :to="localePath('privacy')">{{
        $t('privacy').title
      }}</nuxt-link>
    </div>
  </footer>
</template>

<script>
import { gql } from 'graphql-tag'
import Navigation from './Navigation.vue'
import SocialLink from '@/components/pages/SocialLink.vue'

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
    SocialLink,
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
