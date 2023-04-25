<template>
  <div class="site-sidebar">
    <div
      class="main-nav pt-10 md:pt-24 md:block sticky top-0 bg-white w-full border-b-1 pb-10 md:border-b-0 md:pb-0 border-gray"
      :class="{ hidden: !menuOpen }"
    >
      <div class="mb-5 hidden md:block">
        <nuxt-link class="block" :to="localePath('/')">
          <img class="w-24 md:w-48 h-auto mb-5 md:-ml-2" src="/CdC-logo.png" />
        </nuxt-link>
        <a
          class="block"
          href="https://www.livemusicnow.org.uk/"
          target="_blank"
          rel="noreferrer"
        >
          <img class="w-28 h-auto" src="/LMN-logo.png" />
        </a>
      </div>
      <Navigation />
      <div class="md:hidden mt-10" aria-hidden="true">
        <Btn
          color="multi"
          class="whitespace-nowrap text-sm"
          :text="$t('nav').nousSoutenir"
          :link="`/${$i18n.locale}/soutien`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
  components: { Navigation },
  props: {
    menuOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
