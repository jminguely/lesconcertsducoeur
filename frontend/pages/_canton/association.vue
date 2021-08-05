<template>
  <div v-if="association != null">
    <div class="flex flex-col justify-between lg:flex-row lg:space-x-8">
      <div>
        <Headline>
          <template #headline>{{ association.section_hero_title }}</template>
          <template #content>
            <div class="prose prose-xl" v-html="$md.render(association.section_hero_description)"></div>
          </template>
        </Headline>
      </div>

      <div v-if="association.section_hero_img != null" class="max-w-sm">
        <img :src="'https://api.lesconcertsducoeur.ch' + association.section_hero_img.url" />
      </div>
    </div>

    <!-- Section Comtié et Direction Artistique -->
    <Headline class="my-16">
      <template #headline>
        <span class="text-4xl lg:text-7xl"> Comité et direction artistique Valais </span>
      </template>
    </Headline>

    <template v-if="association.section_comite != null">
      <div class="grid grid-cols-2">
        <div class="prose prose-xl" v-html="$md.render(association.section_comite.col_left)"></div>
        <div class="prose prose-xl" v-html="$md.render(association.section_comite.col_right)"></div>
      </div>
    </template>

    <Spacing />

    <Headline class="mb-8">
      <template #headline> Comment soutenir le Valais? </template>
    </Headline>

    <DonationBlock class="mb-16">
      <template #title>Devenez bénévole</template>
      <template #details>
        <div v-if="association.section_benevole != null" :class="`prose prose-xl text-${canton}`" v-html="$md.render(association.section_benevole)"></div>
      </template>
    </DonationBlock>

    <DonationBlock class="mb-16" circle :canton="canton">
      <template #title>Faites un don</template>
      <template #details>
        <div v-if="association.section_don != null" :class="`prose prose-xl text-${canton}`" v-html="$md.render(association.section_don)"></div>
      </template>
    </DonationBlock>

    <DonationBlock>
      <template #title>Devenez membre</template>
      <template #details>
        <div v-if="association.section_membre != null" :class="`prose prose-xl text-${canton}`" v-html="$md.render(association.section_membre)"></div>
      </template>
    </DonationBlock>

    <Spacing />

    <Headline class="mb-12">
      <template #headline>Nos partenaires et soutiens</template>
    </Headline>

    <h2 class="mb-10 text-3xl font-playFair">En partenariat avec</h2>
    <div class="grid grid-cols-3 gap-5">
      <img class="object-contain w-full h-full" src="~/assets/img/partners/LMN.svg" />
    </div>

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
import Sponsors from '@/components/pages/Sponsors.vue'
import Spacing from '~/components/typography/Spacing.vue'

export default {
  components: {
    Headline,
    DonationBlock,
    Sponsors,
    Spacing,
  },
  data() {
    return {
      sponsors: [
        { img: require('~/assets/img/partners/BS.svg'), link: '' },
        { img: require('~/assets/img/partners/Hemu.svg'), link: '' },
        { img: require('~/assets/img/partners/LR.svg'), link: '' },
        { img: require('~/assets/img/partners/M.svg'), link: '' },
      ],
      data: null,
      association: null,
      canton: null,
    }
  },
  async fetch() {
    this.canton = this.$route.params.canton
    await this.getAssociation(this.$route.params.canton)
  },
  methods: {
    getCantonID(canton) {
      if (canton === 'all') return 1
      if (canton === 'vs') return 2
      if (canton === 'vd') return 3
      if (canton === 'ge') return 4
    },
    async getAssociation(canton) {
      const query = gql`
        query getAssociation($locale: String, $canton: ID) {
          associations(locale: $locale, where: { canton: $canton }) {
            id
            section_comite {
              col_right
              col_left
            }
            section_hero_img {
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
        canton: this.getCantonID(canton),
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
      if (this.data != null) this.association = this.data.associations[0]
    },
  },
}
</script>
