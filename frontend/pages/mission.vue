<template>
  <div class="mt-16 lg:mt-0">
    <!-- <nuxt-link
      class="absolute flex items-center justify-center w-20 h-20 leading-5 text-center text-white transform bg-gray-700 rounded-full right-20 -rotate-25 top-32 lg:top-20 font-playFair"
      :to="localePath('soutien')"
    >
      Nous soutenir!
    </nuxt-link> -->
    <Headline>
      <template #headline>{{ $t('mission').hero.title }}</template>
      <template #content>
        <p v-html="$t('mission').hero.subtitle"></p>
      </template>
    </Headline>

    <spacing />

    <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
      <sublink v-for="(canton, i) in ['vs', 'vd', 'ge']" :key="canton + i" :canton="canton">
        <template #text
          ><nuxt-link :to="localePath({ name: 'canton-association', params: { canton: canton } })">{{ $t('mission').enSavoirPlus[canton] }}</nuxt-link></template
        >
      </sublink>
    </div>

    <spacing />

    <Headline>
      <template #headline>
        <span class="text-4xl lg:text-5xl">{{ $t('mission').buts.title }}</span>
      </template>
    </Headline>

    <DetailedImages :items="items" />

    <spacing />

    <Headline class="mb-8">
      <template #headline>{{ $t('mission').objectifs.title }}</template>
    </Headline>

    <accordion-item v-for="(item, i) in $t('mission').objectifs.content" :key="i">
      <template #label>{{ item.title }}{{ i }}</template>
      <template #content><div v-html="item.text"></div></template>
      <template #image><img class="mx-auto" :src="images[i]" /></template>
    </accordion-item>

    <accordion :items="$t('mission').objectifs.content" :images="images"> </accordion>

    <div class="mt-12 text-xl font-newsCycle">
      <!-- <div v-for="(item, i) in $t('mission').objectifs.content" :key="i" class="pb-8">
        <h3 class="font-bold pb-4">{{ item.title }}</h3>
        <p v-html="item.text"></p>
      </div> -->
    </div>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import Sublink from '@/components/typography/Sublink.vue'
import DetailedImages from '@/components/typography/DetailedImages.vue'
import Spacing from '@/components/typography/Spacing.vue'
// import AccordionItem from '@/components/pages/AccordionItem.vue'
import Accordion from '@/components/pages/Accordion.vue'

export default {
  components: {
    Headline,
    Sublink,
    DetailedImages,
    Spacing,
    // AccordionItem,
    Accordion,
  },
  data() {
    return {
      activeAccordionItem: -1,
      images: ['/img/mission_objectif_1.jpg', '/img/mission_objectif_2.jpg', '/img/mission_objectif_3.jpg', '/img/mission_objectif_4.jpg', '/img/mission_objectif_5.jpg'],
      items: [
        { description: this.$t('mission').buts.content[0], img: '/img/mission_but_1.jpg' },
        {
          description: this.$t('mission').buts.content[1],
          img: '/img/mission_but_2.jpg',
        },
        {
          description: this.$t('mission').buts.content[2],
          img: '/img/mission_but_3.jpg',
        },
      ],
    }
  },
  methods: {
    setActiveAccordionItem(i) {
      console.log(i)
      this.activeAccordionItem = i
    },
  },
}
</script>
