<template>
  <div>
    <h1>Canton {{ canton }}</h1>
    <div v-if="association != null" :class="canton">
      <div class="flex flex-col justify-between lg:flex-row lg:space-x-8">
        <div>
          <Headline>
            <template #headline>{{ association.section_hero_title }}</template>
            <template #content>
              <div
                v-dompurify-html="
                  $md.render(association.section_hero_description)
                "
                class="prose prose-xl"
              ></div>
            </template>
          </Headline>
        </div>

        <div
          v-if="association.section_hero_img != null"
          class="pt-8 max-w-sm lg: pt-0"
        >
          <img
            :src="
              'https://api-new.lesconcertsducoeur.ch' +
              association.section_hero_img.url
            "
          />
        </div>
      </div>

      <spacing />

      <template v-if="association.section_comite">
        <Headline>
          <template #headline>
            <span class="text-4xl lg:text-5xl">{{
              $t('association').comite.title
            }}</span>
          </template>
        </Headline>
        <div id="comite" class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            v-dompurify-html="$md.render(association.section_comite.col_left)"
            class="prose prose-xl"
          ></div>
          <div
            v-dompurify-html="$md.render(association.section_comite.col_right)"
            class="prose prose-xl"
          ></div>
        </div>
      </template>

      <Spacing />

      <DonationBlock v-if="association.section_membre">
        <template #headline>{{ $t('association').soutien }}</template>
        <template #title>{{ $t('association').membre }}</template>
        <template #details>
          <div
            v-dompurify-html="$md.render(association.section_membre)"
            class="prose prose-xl"
            :class="{
              'text-VS': canton == 'vs',
              'text-VD': canton == 'vd',
              'text-GE': canton == 'ge',
            }"
          ></div>
        </template>
      </DonationBlock>

      <Spacing />

      <template v-if="association.partners.length > 0">
        <Headline class="mb-12">
          <template #headline>{{ $t('association').partners }} </template>
        </Headline>
        <logo-cloud :logos="association.partners" is-partner>
          <template #title> {{ $t('home').partners.title }}</template>
        </logo-cloud>
      </template>

      <spacing />

      <template v-if="association.sponsors">
        <logo-cloud
          v-if="association.sponsors.length > 0"
          :logos="association.sponsors"
        >
          <template #title> {{ $t('home').sponsors.title }}</template>
        </logo-cloud>
      </template>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'

import Headline from '@/components/typography/Headline.vue'
import DonationBlock from '@/components/typography/DonationBlock.vue'
import LogoCloud from '@/components/LogoCloud.vue'
import Spacing from '~/components/typography/Spacing.vue'

export default {
  components: {
    Headline,
    DonationBlock,
    LogoCloud,
    Spacing,
  },
  data() {
    return {
      data: null,
      association: null,
      canton: null,
    }
  },

  fetchOnServer: false,
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
      if (canton === 'fr') return 5
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
            partners {
              id
              url
            }
            sponsors {
              id
              url
            }
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
