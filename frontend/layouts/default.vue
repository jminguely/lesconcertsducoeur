<template>
  <div class="antialiased min-h-screen">
    <div class="site-wrapper px-12">
      <div class="site-topbar">
        <MarqueeBanner />
        <div class="lang-switcher hidden md:block">
          <nuxt-link :to="switchLocalePath('fr')">fr</nuxt-link> |
          <nuxt-link :to="switchLocalePath('de')">de</nuxt-link>
        </div>
        <div class="hidden md:block">
          <Btn
            color="multi"
            :text="$t('nav').nousSoutenir"
            :link="localePath('soutien')"
          />
        </div>
        <div class="md:hidden">
          <MenuToggle :menu-open="menuOpen" @toggleMenu="toggleMenu" />
        </div>
      </div>
      <Sidebar :menu-open="menuOpen" />
      <Nuxt id="content" class="site-content" />
    </div>
    <Footer />
  </div>
</template>
<script>
import MenuToggle from '~/components/MenuToggle.vue'

export default {
  components: { MenuToggle },
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen

      if (this.menuOpen) window.scrollTo(0, 0)
    },
  },
}
</script>
