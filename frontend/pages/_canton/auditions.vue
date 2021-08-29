<template>
  <div class="text-xl">
    <Headline>
      <template #headline>{{ $t('auditions').hero.title }}</template>
      <template #content> {{ $t('auditions').hero.subtitle[canton] }}</template>
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
    <p class="text-xl" :class="{ 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }">{{ $t('auditions').requirements[canton][2] }}</p>

    <!-- <div v-for="el in content.auditions[0].content" :key="el.__typename + el.id">
      <template v-if="el.__typename === 'ComponentContentText'">
        <div class="prose prose-xl max-w-none" v-html="$md.render(el.text)"></div>
      </template>
    </div> -->

    <!-- <div class="flex flex-col justify-start my-20 lg:flex-row">
      <ExtendedBlock class="mb-10 lg:mr-28 lg:mb-0">
        <template #datetime> Audition dimanche 11 avril 2021 </template>
        <template #content>
          <div class="text-xl font-newsCycle">
            <p class="block mb-10">10h00-17h00</p>
            <p class="block">
              Grande Salle de la Haute Ecole de musique de Lausanne, site de Sion<br />
              Rue de Gravelone 5<br />
              1950 Sion
            </p>
            <a href="https://google.com" class="block my-10 text-yellow-600">> Circulaire d’information pour les candidats aux auditions pour les Concerts du Cœur Genevois</a>
            <p class="block my-10">
              Merci de lire attentivement la circulaire d’information pour les candidats et d’envoyer à <span class="text-yellow-600">geneve@lesconcertsducoeur.ch</span> les documents suivants :
            </p>
            <p class="block">
              — une description de votre ensemble ;<br />
              — les CVs de chaque membre ;<br />
              — une lettre de motivation.
            </p>
            <p class="mt-5 font-bold">Délai pour l’inscription : 5 avril 2021</p>
          </div>
        </template>
      </ExtendedBlock>
      <ExtendedBlock class="mr-10">
        <template #datetime> Audition dimanche 11 avril 2021 </template>
        <template #content>
          <div class="text-xl font-newsCycle">
            <p class="block mb-10">10h00-17h00</p>
            <p class="block">
              Grande Salle de la Haute Ecole de musique de Lausanne, site de Sion<br />
              Rue de Gravelone 5<br />
              1950 Sion
            </p>
            <a href="https://google.com" class="block my-10 text-yellow-600">> Circulaire d’information pour les candidats aux auditions pour les Concerts du Cœur Genevois</a>
            <p class="block my-10">
              Merci de lire attentivement la circulaire d’information pour les candidats et d’envoyer à <span class="text-yellow-600">geneve@lesconcertsducoeur.ch</span> les documents suivants :
            </p>
            <p class="block">
              — une description de votre ensemble ;<br />
              — les CVs de chaque membre ;<br />
              — une lettre de motivation.
            </p>
            <p class="mt-5 font-bold">Délai pour l’inscription : 5 avril 2021</p>
          </div>
        </template>
      </ExtendedBlock>
    </div> -->

    <Spacing />
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import Spacing from '@/components/typography/Spacing.vue'

import { gql } from 'graphql-tag'

export default {
  components: {
    Headline,
    Spacing,
  },

  data() {
    return {
      content: null,
      canton: null,
    }
  },

  fetch() {
    this.canton = this.$route.params.canton
    // await this.getContent()
  },

  methods: {
    async getContent() {
      const query = gql`
        query getAudition {
          auditions(locale: "fr-CH") {
            id
            locale
            hero {
              ... on ComponentContentHero {
                headline
                subhead
              }
            }
            canton_switch {
              ... on ComponentContentCantonSwitch {
                canton
              }
            }
            content {
              ... on ComponentContentText {
                __typename
                id
                text
              }
              ... on ComponentContentHeadline {
                __typename
                id
                headline
                text
              }
            }
          }
        }
      `

      this.content = await this.$apollo
        .query({ query })
        .then(({ data }) => {
          if (process.env.dev) window.console.log(data)
          return data
        })
        .catch((e) => {
          if (process.env.dev) window.console.log(e)
        })
    },
  },
}
</script>
