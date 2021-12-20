<template>
  <div class="text-xl">
    <Headline>
      <template #headline>{{ $t('auditions').hero.title }}</template>
      <template #content> <span v-html="$t('auditions').hero.subtitle[canton]"></span></template>
    </Headline>

    <p class="text-xl mt-4">
      {{ $t('auditions').hero.text }}
    </p>

    <br />

    <p class="text-xl">
      {{ $t('auditions').hero.text_1 }}
    </p>

    <div v-html="$t('auditions').requirements[canton][0]"></div>

    <br />

    <p>{{ $t('auditions').requirements[canton][1] }}</p>
    <h2 class="mt-12 mb-4 text-xl lg:text-3xl font-playFair">{{ $t('auditions').prochainesAuditions }}</h2>
    <p class="text-xl" :class="{ 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }" v-html="$t('auditions').requirements[canton][2]"></p>

    <Spacing />
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import Spacing from '@/components/typography/Spacing.vue'

export default {
  components: {
    Headline,
    Spacing,
  },

  data() {
    return {
      canton: null,
    }
  },

  fetchOnServer: false,

  fetch() {
    this.canton = this.$route.params.canton
  },
}
</script>
