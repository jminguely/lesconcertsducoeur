<template>
  <div v-if="audition != null" :class="canton">
    <Headline>
      <template #headline>{{ audition.hero.headline }}</template>
      <template #content>
        <div class="prose prose-xl" v-html="$md.render(audition.hero.subhead)"></div>
      </template>
    </Headline>

    <div v-for="content in audition.content" :key="content.id" class="text-xl mt-4">
      <div v-if="content.__typename === 'ComponentContentText'">
        <div v-html="$md.render(content.text)"></div>
      </div>
    </div>

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
      audition: null,
      canton: null,
    }
  },

  fetchOnServer: false,
  async fetch() {
    this.canton = this.$route.params.canton
    await this.getContent(this.$route.params.canton)
  },

  methods: {
    getCantonID(canton) {
      if (canton === 'all') return 1
      if (canton === 'vs') return 2
      if (canton === 'vd') return 3
      if (canton === 'ge') return 4
    },
    async getContent(canton) {
      const query = gql`
        query getAudition($canton: ID) {
          auditions(where: { canton: $canton }) {
            id
            locale
            localizations {
              id
              locale
              content {
                __typename
                ... on ComponentContentText {
                  text
                  id
                }
              }
              hero {
                headline
                subhead
              }
            }
            content {
              __typename
              ... on ComponentContentText {
                id
                text
              }
            }
            hero {
              ... on ComponentContentHero {
                headline
                subhead
              }
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
      if (this.data != null) {
        if (locale === this.data.auditions[0].locale) this.audition = this.data.auditions[0]
        else this.audition = this.data.auditions[0].localizations.find((localization) => localization.locale === locale)
      }
    },
  },
}
</script>
