<template>
  <footer class="site-footer mt-20 pt-32 pb-8 px-12 bg-gray text-white">
    <div class="site-footer-container">
      <div class="logo-container mb-5 md:col-span-3">
        <img
          class="w-24 md:w-48 h-auto -ml-3 filter invert"
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
          <button type="submit" class="text-lg px-3">></button>
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
        <nuxt-link :to="`/${$i18n.locale}/impressum`">
          {{ $t('footer').impressum }}</nuxt-link
        ><br />
        <nuxt-link :to="`/${$i18n.locale}/privacy`">
          {{ $t('footer').privacy }} </nuxt-link
        ><br />
      </div>
      <div v-if="logos" class="partner-container md:col-span-3 mt-16 min-w-0">
        <h3>Merci à nos soutiens:</h3>
        <div class="border-t-1 border-white pt-3 mt-2 slider-container">
          <client-only>
            <splide
              :options="{
                perPage: 12,
                perMove: 1,
                easing: 'linear',
                gap: '1rem',
                type: 'loop',
                pagination: false,
                arrows: false,
                drag: false,
                autoplay: true,
                speed: 6000,
                interval: 0,
                width: '100%',
                breakpoints: {
                  320: {
                    perPage: 2,
                  },
                  640: {
                    perPage: 3,
                  },
                  1280: {
                    perPage: 8,
                  },
                },
              }"
            >
              <splide-slide
                v-for="logo in logos"
                :key="logo.id"
                class="flex bg-white"
              >
                <nuxt-img
                  class="aspect-logo p-2 object-contain m-auto filter grayscale"
                  provider="strapi"
                  :src="logo.url"
                />
              </splide-slide>
            </splide>
          </client-only>
        </div>
      </div>
      <div class="hidden">
        <div class="items-center">
          <nuxt-link
            :to="`/${$i18n.locale}/contact`"
            class="text-xl hover:font-bold"
          >
            {{ $t('nav').contact }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  components: {
    Navigation,
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
  @apply max-w-7xl mx-auto px-12;

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

.slider-container {
  position: relative;
  opacity: 0;
  transition: opacity 1s;

  &:has(> .is-active) {
    opacity: 1;
  }
}

.slider-container::before {
  content: '';
  z-index: 2;
  position: absolute;
  background: linear-gradient(to right, #393939ff, #39393900);
  display: block;
  width: 4rem;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.slider-container::after {
  content: '';
  z-index: 2;
  position: absolute;
  background: linear-gradient(to left, #393939ff, #39393900);
  display: block;
  width: 4rem;
  height: 100%;
  top: 0;
  right: 0;
  pointer-events: none;
}
</style>
