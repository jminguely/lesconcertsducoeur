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
        <span class="text-4xl lg:text-7xl">{{ $t('mission').buts.title }}</span>
      </template>
    </Headline>

    <DetailedImages :items="items" />

    <spacing />

    <Headline>
      <template #headline>{{ $t('mission').objectifs.title }}</template>
    </Headline>

    <div class="mt-12 text-2xl font-newsCycle">
      <div v-for="(item, i) in $t('mission').objectifs.content" :key="i" class="pb-8">
        <h3 class="font-bold pb-4">{{ item.title }}</h3>
        <p v-html="item.text"></p>
      </div>

      <p class="pb-2 text-lg">[1] CHANDA, Mona Lisa et LEVITIN, Daniel J. (avril 2013), Trends in Cognitive Sciences</p>
      <p class="text-lg">[2] PLATEL, Hervé (octobre 2015), "Pourquoi la musique est bonne pour le cerveau ?"</p>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import Sublink from '@/components/typography/Sublink.vue'
import DetailedImages from '@/components/typography/DetailedImages.vue'
import Spacing from '@/components/typography/Spacing.vue'

export default {
  components: {
    Headline,
    Sublink,
    DetailedImages,
    Spacing,
  },
  data() {
    return {
      items: [
        { description: this.$t('mission').buts.content[0], img: '/img/mission_1.jpeg' },
        {
          description: this.$t('mission').buts.content[1],
          img: '/img/mission_2.jpeg',
        },
        {
          description: this.$t('mission').buts.content[2],
          img: '/img/mission_3.jpeg',
        },
      ],
    }
  },
}
</script>
