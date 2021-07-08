<template>
  <div v-if="content != null">
    {{ content.auditions }}
    <Headline>
      <template #headline>
        {{ content.auditions[0].hero.headline }}
      </template>
      <template #content>
        {{ content.auditions[0].hero.subhead }}
      </template>
    </Headline>

    <div v-for="el in content.auditions[0].content" :key="el.__typename + el.id">
      <template v-if="el.__typename === 'ComponentContentText'">
        <div class="prose prose-xl max-w-none" v-html="$md.render(el.text)"></div>
      </template>
    </div>

    <p class="text-2xl font-newsCycle">
      Avez-vous envie d’apporter des moments de légèreté aux personnes âgées, hospitalisées et/ou en difficulté en leur partageant votre musicalité avec celles-ci tout en développant vos aptitudes de
      médiation culturelle grâce à des concerts rémunérés ? Si cela vous intéresse, les Associations des Concerts du Coeur Valaisans etVaudois organisent des auditions à Sion et à Lausanne afin de
      recruter de nouveaux musicien.ne.s.
    </p>

    <Headline>
      <template #content>Les artistes intéressés doivent répondre aux critères ci-dessous : </template>
    </Headline>

    <div class="text-xl font-newsCycle">
      <p>
        — la majorité des musiciens du groupe doit résider dans le canton de Vaud ou du Valais; <br />
        — démontrer un standard très élevé de qualité musicale et technique instrumentale; <br />
        — posséder de bonnes capacités de communication et une aisance manifeste à établir une relation avec le public en <br />
        — l’invitant à participer autant que faire se peut; <br />
        — proposer un choix de répertoire varié et adapté aux différents publics des Concerts du Coeur; <br />
        — s’engager à respecter et à défendre les valeurs de l’Association.
      </p>
      <p class="my-5">Tous les genres de musique sont bienvenus (classique / jazz / folklorique / musique du monde etc.).</p>
    </div>

    <div class="flex flex-col justify-start my-20 lg:flex-row">
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
    </div>

    <p class="max-w-md text-3xl text-yellow-500 font-playFair lg:mb-36">Nous nous réjouissons de vous rencontrer et de vous écouter !</p>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import ExtendedBlock from '@/components/typography/ExtendedBlock.vue'

import { gql } from 'graphql-tag'

export default {
  components: {
    Headline,
    ExtendedBlock,
  },

  data() {
    return {
      content: null,
    }
  },

  async fetch() {
    await this.getContent()
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
