<template>
  <div>
    <Headline>
      <template #headline>{{ $t('concerts').hero.title }}</template>
      <template #content><p v-html="$t('concerts').hero.subtitle"></p></template>
    </Headline>

    <p class="mt-4 mb-12 text-xl font-newsCycle" v-html="$t('concerts').hero.text"></p>

    <!-- <ImageBlock>
      <template #title>Vous souhaitez organiser un concert?</template>
      <template #content>
        <ul class="my-10 font-newsCycle">
          <li>> organiser un concert en Valais</li>
          <li>> organiser un concert sur Vaud</li>
          <li>> organiser un concert sur Genève</li>
        </ul>
        <p class="font-playFair">Nous sommes à votre écoute.</p>
      </template>

      <template #image>
        <img class="mx-auto" src="https://placeimg.com/540/360/animals" />
      </template>
    </ImageBlock> -->

    <!-- <accordion-item v-for="(item, i) in $t('concerts').concertTypes" :key="i">
      <template #label>{{ item.title }}</template>
      <template #content><div v-html="item.content"></div></template>
      <template #image><img class="mx-auto" :src="images[i]" /></template>
    </accordion-item> -->

    <accordion :items="$t('concerts').concertTypes" :images="images"> </accordion>

    <div v-for="(item, i) in $t('concerts').content" :key="i">
      <spacing />
      <Headline>
        <template #headline>{{ item.title }}</template>
      </Headline>
      <div class="text-xl" v-html="item.content"></div>
    </div>

    <Spacing />

    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div class="max-w-xl">
        <img src="~/assets/img/illustrations/illustration6.svg" />
      </div>

      <Testimonial class="max-w-xl">
        <template #quote>
          {{ $t('concerts').testimonial.quote }}
        </template>

        <template #name>
          {{ $t('concerts').testimonial.name }}
        </template>

        <template #title>
          {{ $t('concerts').testimonial.title }}
        </template>
      </Testimonial>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import Spacing from '@/components/typography/Spacing.vue'
import Testimonial from '@/components/typography/Testimonial.vue'
// import AccordionItem from '@/components/pages/AccordionItem.vue'
import Accordion from '@/components/pages/Accordion.vue'

export default {
  components: {
    Headline,
    // AccordionItem,
    Accordion,
    Spacing,
    Testimonial,
  },
  data() {
    return {
      images: ['/img/concert_mediation.jpg', '/img/concert_exterieur.jpg', '/img/concert_itinerant.jpg', '/img/concert_chambres.jpg', '/img/concert_virtuel.jpg', '/img/rencontre_virtuelle.jpg'],
    }
  },
}
</script>
