<template>
  <div>
    <Headline>
      <template #headline>{{ $t('soutien').donate.title }} </template>
      <template #content>{{ $t('soutien').donate[canton] }}</template>
    </Headline>

    <iframe class="border-2 p-5 lg:mt-5" :class="{ 'border-vs': canton == 'vs', 'border-vd': canton == 'vd', 'border-ge': canton == 'ge' }" width="100%" height="2200" :src="src"></iframe>
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
  computed: {
    src() {
      if (this.canton === 'vs') return `https://widget.raisenow.com/widgets/lema/lesco-7b80/index-${this.$i18n.locale}.html`
      if (this.canton === 'ge') return `https://tamaro.raisenow.com/lesco-3625/latest/index.html`
      else return ''
    },
  },
  mounted() {
    this.canton = this.$route.params.canton
  },
}
</script>
