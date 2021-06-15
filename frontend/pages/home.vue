<template>
  <div class="mt-24 px-9">
    <Headline class="mb-36">
      <template #headline> La musique adoucit le temps qui passe </template>
      <template #content>
        L’association Les Concerts du Coeur souhaite inscrire la musique dans le quotidien des personnes âgées, des personnes hospitalisées, incarcérées ou défavorisées afin d’essayer de rompre
        quelque peu leur isolement en partageant de l’émotion, par le biais d'ateliers musicaux, de concerts de qualité et d’une interaction avec les artistes.
      </template>
    </Headline>

    <div class="flex justify-between">
      <Illustration>
        <template #image><img src="~/assets/img/illustrations/illustration1.svg" /></template>
        <template #label> Valais </template>
      </Illustration>

      <Illustration color="green">
        <template #image><img src="~/assets/img/illustrations/illustration2.svg" /></template>
        <template #label> Vaud </template>
      </Illustration>

      <Illustration color="yellow">
        <template #image><img src="~/assets/img/illustrations/illustration3.svg" /></template>
        <template #label> Genève </template>
      </Illustration>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import Illustration from '@/components/pages/Illustration.vue'

export default {
  components: {
    Headline,
    Illustration,
  },
}
</script>
