<template>
  <div class="sidebar">
    <div
      class="main-nav pt-10 md:pt-24 md:block sticky top-0 bg-white w-full"
      :class="{ hidden: !menuOpen }"
    >
      <div class="flex flex-row md:flex-col align-middle mb-5 gap-10">
        <nuxt-link class="block" :to="localePath('/')">
          <img class="w-full h-auto" src="/CdC-logo.png" />
        </nuxt-link>
        <a
          class="block"
          href="https://www.livemusicnow.org.uk/"
          target="_blank"
          rel="noreferrer"
        >
          <img class="w-full md:w-1/2 h-auto" src="/LMN-logo.png" />
        </a>
      </div>
      <Navigation />
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
