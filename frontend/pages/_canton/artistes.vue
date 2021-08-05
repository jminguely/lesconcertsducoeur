<template>
  <div>
    <Headline>
      <template #headline>Nos Artistes</template>
    </Headline>

    <nuxt-link :class="`absolute flex items-center justify-center text-xl leading-5 text-center text-white transform bg-${canton} rounded-full top-24 w-28 h-28 right-10 font-playFair`" to="auditions">
      Auditions
    </nuxt-link>

    <template v-if="data != null">
      <template v-if="data.artists != null">
        <div class="mt-12 grid md:grid-cols-3 md:gap-5">
          <artist-cover v-for="artist in data.artists" :key="artist.id" :artist="artist" @click.native="openPopup(artist)"></artist-cover>
        </div>
        <artist-popup :class="{ hidden: !popup }" :artists="data.artists" :item.sync="selected" :popup.sync="popup" />
      </template>
    </template>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import ArtistCover from '@/components/pages/ArtistCover.vue'
import ArtistPopup from '@/components/pages/ArtistPopup.vue'

import { gql } from 'graphql-tag'

export default {
  components: {
    Headline,
    ArtistCover,
    ArtistPopup,
  },
  data() {
    return {
      data: null,
      selected: {},
      popup: false,
      canton: null,
    }
  },

  async fetch() {
    this.canton = this.$route.params.canton
    await this.getArtists(this.$route.params.canton)
  },

  methods: {
    openPopup(item) {
      this.selected = item
      this.popup = true
    },
    getCantonID(canton) {
      if (canton === 'ALL') return 1
      if (canton === 'VS') return 2
      if (canton === 'VD') return 3
      if (canton === 'GE') return 4
    },
    async getArtists(canton) {
      const query = gql`
        query getArtists($locale: String, $cantons: ID) {
          artists(locale: $locale, where: { cantons_contains: $cantons }) {
            id
            first_name
            last_name
            instrument
            description
            repertoire
            formats
            picture {
              id
              url
            }
          }
        }
      `

      const locale = this.$i18n.locale + '-CH'

      const variables = {
        cantons: this.getCantonID(canton.toUpperCase()),
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
