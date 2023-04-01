<template>
  <div class="sidebar">
    <div
      class="main-nav pt-10 md:pt-24 md:block sticky top-0 bg-white w-full"
      :class="{ hidden: !menuOpen }"
    >
      <div class="mb-5">
        <nuxt-link class="block" :to="localePath('/')">
          <img class="w-24 md:w-48 h-auto mb-3 -ml-3" src="/CdC-logo.png" />
        </nuxt-link>
        <a
          class="block"
          href="https://www.livemusicnow.org.uk/"
          target="_blank"
          rel="noreferrer"
        >
          <img class="w-10 md:w-20 h-auto" src="/LMN-logo.png" />
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
