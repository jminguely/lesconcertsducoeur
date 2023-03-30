<template>
  <div>
    <Headline class="mb-5">
      <template #headline>{{ $t('soutien').donate.title }} </template>
      <template #content>{{ $t('soutien').donate[canton] }}</template>
    </Headline>
    <template v-if="canton == 'vs'">
      <iframe
        v-if="canton == 'vs'"
        class="border-2 lg:mt-5"
        :class="{ 'border-vs': canton == 'vs', 'border-vd': canton == 'vd', 'border-ge': canton == 'ge' }"
        width="100%"
        height="2200"
        :src="src"
      ></iframe>
    </template>
    <template v-else>
      <div class="rnw-widget-container border-2 p-5 lg:mt-5" :class="{ 'border-vs': canton == 'vs', 'border-vd': canton == 'vd', 'border-ge': canton == 'ge' }"></div>
    </template>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
export default {
  components: {
    Headline,
  },
  data() {
    return {
      canton: '',
    }
  },
  head() {
    return {
      title: `${this.$t('soutien').donate.title} | Les Concerts du Coeur`,
      script: [{ hid: 'tamaro-raisenow', src: `https://tamaro.raisenow.com/lesco-3625/latest/widget.js`, defer: true }],
    }
  },
  computed: {
    widgetKey() {
      if (this.canton === 'ge') return 'lesco-3625'
      if (this.canton === 'vd') return 'lesco-c420'
      else return ''
    },
    src() {
      if (this.canton === 'vs') return `https://widget.raisenow.com/widgets/lema/lesco-7b80/index-${this.$i18n.locale}.html`
      else return ''
    },
  },
  mounted() {
    this.canton = 'vs'
    // console.log(window)
    if (process.browser) {
      window.rnw.tamaro.runWidget('.rnw-widget-container', {
        language: this.$i18n.locale,
      })
    }
  },
}
</script>

<style scoped>
#tamaro-widget-overlay.tamaro-widget.tamaro-widget,
#tamaro-widget.tamaro-widget {
  padding: 0 !important;
}
</style>
