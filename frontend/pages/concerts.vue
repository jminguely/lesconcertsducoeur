<template>
  <div>
    <Headline>
      <template #headline>{{ $t('concerts').hero.title }}</template>
      <template #content><p v-html="$t('concerts').hero.subtitle"></p></template>
    </Headline>

    <p class="mb-12 text-2xl font-newsCycle" v-html="$t('concerts').hero.text"></p>

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

    <accordion-item v-for="(item, i) in $t('concerts').concertTypes" :key="i">
      <template #label>{{ item.title }}</template>
      <template #content><div v-html="item.content"></div></template>
      <template #image><img class="mx-auto" :src="images[i]" /></template>
    </accordion-item>

    <Spacing />

    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div class="max-w-xl">
        <img src="~/assets/img/illustrations/illustration6.svg" />
      </div>

      <Testimonial class="max-w-xl">
        <template #quote>
          Votre concert a permis au personnel soignant de constater l’effet bénéfique de la musique sur l’ensemble des résidents. Votre performance a apporté du calme, de la sérénité, beaucoup de joie
          et de plaisir.
        </template>

        <template #name>Claude Crettol</template>

        <template #title>Directeur des EMS Beaulieu et Jasmins</template>
      </Testimonial>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import Spacing from '@/components/typography/Spacing.vue'
import Testimonial from '@/components/typography/Testimonial.vue'
import AccordionItem from '@/components/pages/AccordionItem.vue'

export default {
  components: {
    Headline,
    AccordionItem,
    Spacing,
    Testimonial,
  },
  data() {
    return {
      images: ['/img/mission_1.jpeg', '/img/mission_2.jpeg', '/img/mission_3.jpeg', '/img/mission_4.jpeg', '/img/mission_1.jpeg', '/img/mission_2.jpeg', '/img/mission_3.jpeg', '/img/mission_4.jpeg'],
    }
  },
}
</script>
