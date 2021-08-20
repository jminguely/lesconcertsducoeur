<template>
  <div>
    <Headline>
      <template #headline> Médias </template>
    </Headline>

    <p class="text-xl font-newsCycle">Retrouvez-nous sur nos réseaux sociaux</p>

    <div class="flex my-5">
      <SocialLink class="mr-4 lg:mr-8" name="facebook" link="https://www.facebook.com" />
      <SocialLink name="instagram" link="https://www.instagram.com" />
    </div>

    <spacing />

    <Headline>
      <template #headline>
        <span class="text-4xl lg:text-7xl">Newletters</span>
      </template>
    </Headline>

    <div class="mt-8 text-xl font-newsCycle">
      <p>Newsletter No 6 – Rapport d’activité 2019 | 03.2020</p>
      <p>Newsletter No 5 | 11.2019</p>
      <p>Newsletter No 4 – Rapport d’activité 2018 | 07.2019</p>
      <p>Newsletter No 3 | 04.2019</p>
    </div>

    <spacing />

    <Headline>
      <template #headline>
        <span class="text-4xl lg:text-7xl">Presse</span>
      </template>
    </Headline>

    <p class="text-xl font-playFair">Ils parlent de nous</p>

    <div class="flex flex-col justify-between pt-10 lg:flex-row">
      <div>
        <div class="mb-10">
          <p class="text-xl underline">La musique adoucit la vie</p>
          <p class="text-xl">Journal de Sierre – 27 janvier 2017</p>
        </div>

        <div class="mb-10">
          <p class="text-xl underline">La musique adoucit le temps qui passe</p>
          <p class="text-xl">Le Nouvelliste – 14 février 2017</p>
        </div>

        <div class="mb-10">
          <p class="text-xl underline">Les notes à la rencontre des isolés</p>
          <p class="text-xl">Le Nouvelliste: Supplément Culture – 5 octobre 2017</p>
        </div>

        <div class="mb-10">
          <p class="text-xl underline">L’univers de la chanteuse lyrique valaisanne Laure Barras</p>
          <p class="text-xl">RTS, La Puce à l’Oreille, 14 décembre 2017</p>
        </div>
      </div>

      <div>
        <div class="mb-10">
          <p class="text-xl underline">La musique adoucit la vie</p>
          <p class="text-xl">Journal de Sierre – 27 janvier 2017</p>
        </div>

        <div class="mb-10">
          <p class="text-xl underline">La musique adoucit le temps qui passe</p>
          <p class="text-xl">Le Nouvelliste – 14 février 2017</p>
        </div>

        <div class="mb-10">
          <p class="text-xl underline">Les notes à la rencontre des isolés</p>
          <p class="text-xl">Le Nouvelliste: Supplément Culture – 5 octobre 2017</p>
        </div>

        <div class="mb-10">
          <p class="text-xl underline">L’univers de la chanteuse lyrique valaisanne Laure Barras</p>
          <p class="text-xl">RTS, La Puce à l’Oreille, 14 décembre 2017</p>
        </div>
      </div>
    </div>

    <spacing />

    <Headline>
      <template #headline>Images</template>
    </Headline>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import SocialLink from '@/components/pages/SocialLink.vue'
import Spacing from '@/components/typography/Spacing.vue'

export default {
  components: {
    Headline,
    SocialLink,
    Spacing,
  },
}
</script>
