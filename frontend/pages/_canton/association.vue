<template>
  <div v-if="data.associations != null">
    <div class="flex flex-col justify-between lg:flex-row lg:space-x-8">
      <div>
        <Headline>
          <template #headline>{{ data.associations[0].section_hero_title }}</template>
          <template #content>
            <div class="prose prose-xl" v-html="$md.render(data.associations[0].section_hero_description)"></div>
          </template>
        </Headline>
      </div>

      <div>
        <img src="~/assets/img/illustrations/illustration1.svg" />
      </div>
    </div>

    <Headline class="my-16">
      <template #headline>
        <span class="text-4xl lg:text-7xl"> Comité et direction artistique Valais </span>
      </template>
    </Headline>

    <div class="grid grid-cols-2">
      <div class="prose prose-xl" v-html="$md.render(data.associations[0].section_comite.col_left)"></div>
      <div class="prose prose-xl" v-html="$md.render(data.associations[0].section_comite.col_right)"></div>
    </div>

    <div class="grid grid-cols-2">
      <div class="flex-col mb-16 lg:mb-0 lg:flex-row">
        <div class="mb-16">
          <h3 class="text-2xl font-playFair">Direction artistique</h3>
          <h5 class="ml-8 text-xl font-newsCycle lg:ml-0">Laure Barras, soprano</h5>
          <p class="ml-8 text-lg text-red-500 lg:ml-0">Contacter par email</p>
        </div>

        <div>
          <h3 class="text-2xl font-playFair">Statuts de l’accociation</h3>
          <br class="hidden lg:block" />
          <p class="text-lg text-red-500">> Document officiel des statuts (PDF)</p>
        </div>
      </div>
    </div>

    <Headline class="mb-8">
      <template #headline> Comment soutenir le Valais? </template>
    </Headline>

    <DonationBlock class="mb-16" :circle="false">
      <template #title>Devenez bénévole</template>
      <template #details>

      <div class="prose prose-xl" v-html="$md.render(data.associations[0].section_comite.col_right)"></div>
        Nous avons besoin de votre soutien pour les tâches suivantes:
        <br />— alksdfjal <br />— alksdfjal <br /><br />Annoncez-vous à benevoles-vs@lesconcertsducoeur.ch
      </template>
    </DonationBlock>

    <DonationBlock class="mb-16">
      <template #title>Faites un don</template>
      <template #details>
        No de compte : 103.079.98.07<br />
        IBAN : CH82 0076 5001 0307 9980 7<br />
        SWIFT / BIC : BCVSCH2LXXX<br />
        CCP : 19-81-6<br />
        Clearing : 765
      </template>
    </DonationBlock>

    <DonationBlock :circle="false">
      <template #title>Devenez membre</template>
      <template #details>
        > Bulletin d'adhésion pour les membres<br />
        > Document officiel des statuts de l’association
      </template>
    </DonationBlock>

    <Spacing />

    <Headline class="mb-12">
      <template #headline>Nos partenaires et soutiens</template>
    </Headline>

    <Partner>
      <template #title> En partenariat avec </template>
      <template #image>
        <img src="~/assets/img/partners/LMN.svg" />
      </template>
    </Partner>

    <Spacing />

    <Sponsors :sponsors="sponsors">
      <template #title> Soutiens </template>
    </Sponsors>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'

import Headline from '@/components/typography/Headline.vue'
import DonationBlock from '@/components/typography/DonationBlock.vue'
import Partner from '@/components/pages/Partner.vue'
import Sponsors from '@/components/pages/Sponsors.vue'
import Spacing from '~/components/typography/Spacing.vue'

export default {
  components: {
    Headline,
    DonationBlock,
    Partner,
    Sponsors,
    Spacing,
  },
  data() {
    return {
      sponsors: [
        { img: require('~/assets/img/partners/BS.svg'), link: 'https://google.com' },
        { img: require('~/assets/img/partners/Hemu.svg'), link: 'https://google.com' },
        { img: require('~/assets/img/partners/LR.svg'), link: 'https://google.com' },
        { img: require('~/assets/img/partners/M.svg'), link: 'https://google.com' },
      ],
      data: null,
    }
  },
  async fetch() {
    await this.getAssociation(this.$route.params.canton)
  },
  methods: {
    getCantonID(canton) {
      if (canton === 'ALL') return 1
      if (canton === 'VS') return 2
      if (canton === 'VD') return 3
      if (canton === 'GE') return 4
    },
    async getAssociation(canton) {
      const query = gql`
        query getAssociation($locale: String) {
          associations(locale: $locale, where: { canton: 2 }) {
            id
            section_comite {
              col_right
              col_left
            }
            section_hero_img {
              id
              url
            }
            section_hero_title
            section_hero_description
            section_benevole
            section_don
            section_membre
          }
        }
      `

      const locale = this.$i18n.locale + '-CH'

      const variables = {
        // canton: this.getCantonID(canton.toUpperCase()),
        locale,
      }

      this.data = await this.$apollo
        .query({ query, variables })
        .then(({ data }) => {
          if (process.env.dev) console.log(data)
          return data
        })
        .catch((e) => {
          if (process.env.dev) console.log(e)
        })
    },
  },
}
</script>
