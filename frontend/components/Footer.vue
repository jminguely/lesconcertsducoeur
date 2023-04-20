<template>
  <footer class="site-footer mt-20 pt-32 pb-8 px-6 bg-gray text-white">
    <div class="site-footer-container">
      <div class="logo-container mb-5 md:pl-3">
        <img
          class="w-24 lg:w-48 h-auto -ml-3 filter invert"
          src="/CdC-logo.png"
        />
      </div>
      <div
        class="navigation-container sm:col-start-1 sm:row-span-3 lg:row-span-2 md:pl-3"
      >
        <Navigation />
      </div>
      <div class="sm:row-start-1 sm:col-start-2 lg:row-start-auto">
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
      <div class="flex flex-col items-start sm:col-start-2 lg:col-start-auto">
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
          <button type="submit" class="text-lg px-3">></button>
        </form>
      </div>
      <div class="sm:col-start-2 lg:col-start-auto">
        <h3 class="mb-3">En partenariat avec:</h3>
        <a
          class="block"
          href="https://www.livemusicnow.org.uk/"
          target="_blank"
          rel="noreferrer"
        >
          <img class="w-10 lg:w-20 h-auto filter invert" src="/LMN-logo.png" />
        </a>
      </div>
      <div class="sm:col-start-2 lg:col-start-auto">
        © {{ new Date().getFullYear() }}<br />
        <i>Les Concerts du Cœur</i><br />
        <nuxt-link :to="`/${$i18n.locale}/impressum`">
          {{ $t('footer').impressum }}</nuxt-link
        ><br />
        <nuxt-link :to="`/${$i18n.locale}/privacy`">
          {{ $t('footer').privacy }} </nuxt-link
        ><br />
      </div>
      <div
        v-if="logos.length"
        class="partner-container lg:col-span-3 mt-16 min-w-0 sm:col-span-2"
      >
        <h3>Merci à nos soutiens:</h3>
        <div class="border-t-1 border-white pt-3 mt-2">
          <LogosSlider :key="logos[0].id" :logos="logos" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Navigation from './Navigation.vue'
import LogosSlider from './pages/LogosSlider.vue'

export default {
  components: {
    Navigation,
    LogosSlider,
  },
  props: {
    logos: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
.site-footer-container {
  @apply max-w-7xl mx-auto;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  gap: 50px;

  @screen sm {
    grid-template-rows: auto auto;
    grid-template-columns: 200px auto;
  }

  @screen lg {
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 200px auto auto;
    gap: 0 50px;
  }

  a {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
    text-decoration-thickness: 1px;
  }
}
</style>
