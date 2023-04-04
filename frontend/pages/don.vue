<template>
  <div>
    <Headline :title="$t('nav').donate" />
    <iframe
      class="border-1 lg:mt-5"
      width="100%"
      height="100%"
      :src="src"
    ></iframe>
  </div>
</template>

<script>
import Headline from '@/components/dynamic/Headline.vue'
export default {
  components: {
    Headline,
  },
  head() {
    return {
      script: [
        {
          hid: 'tamaro-raisenow',
          src: `https://tamaro.raisenow.com/lesco-3625/latest/widget.js`,
          defer: true,
        },
      ],
    }
  },
  computed: {
    src() {
      return `https://widget.raisenow.com/widgets/lema/lesco-7b80/index-${this.$i18n.locale}.html`
    },
  },
}
</script>

<!-- <style scoped>
#tamaro-widget-overlay.tamaro-widget.tamaro-widget,
#tamaro-widget.tamaro-widget {
  padding: 0 !important;
}
</style> -->
