<template>
  <div class="antialiased min-h-screen">
    <div class="site-wrapper">
      <div class="site-topbar">
        <MarqueeBanner />
        <div class="lang-switcher hidden md:block"><nuxt-link :to="switchLocalePath('fr')">fr</nuxt-link> | <nuxt-link :to="switchLocalePath('de')">de</nuxt-link></div>
        <div class="hidden md:block"><ButtonSupport /></div>
      </div>
      <Sidebar />
      <Nuxt id="content" class="site-content" />
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return { canton: '' }
  },
  watch: {
    $route(newRoute) {
      if (newRoute.params) this.canton = newRoute.params.canton
    },
  },
  mounted() {
    if (this.$route.params) this.canton = this.$route.params.canton
  },
}
</script>
