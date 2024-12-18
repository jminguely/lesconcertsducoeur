<template>
  <div>
    <Headline :title="$t('nav').donate" />
    <iframe width="100%" height="2300px" :src="src"></iframe>
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
      title: `Donation — Les Concerts du Cœur`,
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
      return `https://donate.raisenow.io/vpztw?analytics.channel=embed&lng=${this.$i18n.locale}`
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
