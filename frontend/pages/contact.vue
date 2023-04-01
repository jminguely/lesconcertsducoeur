<template>
  <div>
    <Headline>
      <template #headline> {{ $t('contact').hero.title }}</template>
      <template #content>
        {{ $t('contact').hero.subtitle }}
      </template>
    </Headline>

    <spacing />

    <h2 class="text-3xl font-playFair">{{ $t('contact').general }}</h2>
    <p class="text-xl">contact@lesconcertsducoeur.ch</p>

    <spacing />
    <accordion :items="items" class="hidden lg:block"> </accordion>

    <div
      v-for="(item, i) in items"
      :key="i + item.title"
      class="mb-12 lg:hidden"
    >
      <div>
        <h3 class="mb-4 text-3xl font-playFair">{{ item.title }}</h3>
      </div>
      <div v-dompurify-html="item.text"></div>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import Accordion from '@/components/pages/Accordion.vue'
import Spacing from '@/components/typography/Spacing.vue'

export default {
  components: {
    Headline,
    Accordion,
    Spacing,
  },
  data() {
    return {
      items: [
        {
          noImage: true,
          title: this.$t('contact').vs.title,
          text: this.$t('contact').vs.text,
        },
        {
          noImage: true,
          title: this.$t('contact').vd.title,
          text: this.$t('contact').vd.text,
        },
        {
          noImage: true,
          title: this.$t('contact').ge.title,
          text: this.$t('contact').ge.text,
        },
      ],
    }
  },
}
</script>
