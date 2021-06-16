<template>
  <div>
    <Headline class="py-24">
      <template #headline> Nos concepts, packaging </template>
    </Headline>
    <p class="mb-16 text-xl font-newsCycle">
      Dans les établissements médico-sociaux et les institutions vouées aux personnes en difficulté nous donnons des concerts sous forme traditionnelle. Nous souhaitons que ces lieux de vie se
      transforment en salle de concert pour les résidents, le personnel ainsi que les proches le temps d’un après-midi. Afin de garantir une meilleure organisation et des concerts participatifs, nous
      travaillons en aval avec le personnel des institutions hôtes.
    </p>

    <ImageBlock>
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
    </ImageBlock>

    <p class="text-lg font-playFair">Nos concepts, packaging</p>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import ImageBlock from '@/components/typography/ImageBlock.vue'

export default {
  components: {
    Headline,
    ImageBlock,
  },
}
</script>
