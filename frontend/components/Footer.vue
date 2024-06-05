<template>
  <footer class="site-footer mt-20 pt-32 pb-8 px-3 md:px-6 bg-gray text-white">
    <div class="site-footer-container">
      <div class="logo-container mb-5 md:pl-3">
        <img
          class="w-24 lg:w-48 h-auto md:-ml-2 filter invert"
          src="/CdC-logo.png"
        />
      </div>
      <div
        class="navigation-container sm:col-start-1 sm:row-span-3 lg:row-span-2 md:pl-3"
      >
        <Navigation />
      </div>
      <div class="sm:row-start-1 sm:col-start-2 lg:row-start-auto">
        <h3 class="mb-3">{{ $t('footer').socials }}</h3>
        <div class="flex flex-row gap-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/concertsducoeur/"
          >
            <svg class="icon text-white h-8 w-8">
              <use href="~/assets/img/icons.svg#facebook"></use>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/lesconcertsducoeur/"
          >
            <svg class="icon text-white h-8 w-8">
              <use href="~/assets/img/icons.svg#instagram"></use>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@lesconcertsducur109"
          >
            <svg class="icon text-white h-8 w-8">
              <use href="~/assets/img/icons.svg#youtube"></use>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:contact@lesconcertsducoeur.ch"
          >
            <svg class="icon text-white h-8 w-8">
              <use href="~/assets/img/icons.svg#email"></use>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col items-start sm:col-start-2 lg:col-start-auto">
        <h3 class="mb-3">{{ $t('footer').newsletter_infos }}</h3>

        <form
          id="mc-embedded-subscribe-form"
          action="https://newsletter.infomaniak.com/external/submit"
          method="post"
          target="_blank"
          novalidate
          class="flex items-center justify-start border-1"
        >
          <input type="email" name="email" class="hidden" />
          <input
            type="hidden"
            name="key"
            value="eyJpdiI6Ik9HeUV4SWdocHNET0t5TEhWSFZVSjNPRjhPWUN2dzZoMlRRbkc0Z0liTHM9IiwidmFsdWUiOiI5UXAxdlMrYnBCcjZPXC9vaENWdXVld0pPK2VtVkIxcFIra1hHQkF1MlJLUT0iLCJtYWMiOiJiMzk0NjdjZGY4OWI3YmRmNzUzNTJkYmEzN2YzNzc0NTIxOTBlZDExZmEzNTJkNzdjNmQ4ZGMyYjA5MmM3ZTg3In0="
          />
          <input type="hidden" name="webform_id" value="15246" />

          <!-- Field "langue" -->
          <input
            v-if="$i18n"
            class="hidden"
            type="text"
            name="inf[51622]"
            :value="$i18n.locale"
          />

          <input
            id="mce-EMAIL"
            class="flex-auto p-2 focus:rounded-none focus:border-0 focus:outline-none bg-transparent"
            :placeholder="$t('footer').newsletter"
            type="email"
            value=""
            name="inf[1]"
            required
          />
          <button type="submit" class="text-lg px-3">></button>
        </form>
      </div>
      <div class="sm:col-start-2 lg:col-start-auto">
        <h3 class="mb-3">{{ $t('footer').partner }}</h3>
        <div class="grid md:grid-cols-2 gap-5">
          <a
            class="block"
            href="https://www.livemusicnow.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="h-14 w-28 object-contain object-left filter invert"
              src="/LMN-logo.png"
            />
          </a>
          <img
            class="h-14 w-28 object-contain object-left"
            src="/HEMU-logo.png"
          />
          <img
            class="h-14 w-28 object-contain object-left"
            src="/HEMUGE-logo.png"
          />
          <img
            class="h-14 w-28 object-contain object-left"
            src="/HESSO-logo.png"
          />
        </div>
      </div>
      <div class="sm:col-start-2 lg:col-start-auto flex flex-col items-start">
        © {{ new Date().getFullYear() }}
        <i>Les Concerts du Cœur</i>
        <nuxt-link :to="`/${$i18n.locale}/impressum`">
          {{ $t('footer').impressum }}</nuxt-link
        >
        <nuxt-link :to="`/${$i18n.locale}/privacy`">
          {{ $t('footer').privacy }}
        </nuxt-link>
      </div>
      <div
        v-if="logos.length"
        class="partner-container lg:col-span-3 mt-16 min-w-0 sm:col-span-2"
      >
        <h3>{{ $t('footer').support }}</h3>
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
