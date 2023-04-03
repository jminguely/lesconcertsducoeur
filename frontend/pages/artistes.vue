<template>
  <div class="relative">
    <Headline>
      <template #headline>{{ $t('artistes').title }} </template>
    </Headline>

    <template v-if="!$fetchState.pending">
      <template v-if="data != null">
        <div
          class="gap-y-5 sm:gap-x-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5"
        >
          <artist-cover
            v-for="artist in data"
            :key="artist.id"
            :data="artist"
            class="hidden md:block"
            @click.native="openPopup(artist)"
          ></artist-cover>
          <artist-cover-mobile
            v-for="artist in data"
            :key="artist.id"
            :data="artist"
            class="md:hidden"
            @click.native="openPopup(artist)"
          ></artist-cover-mobile>
        </div>
        <artist-popup
          :class="{ hidden: !popup }"
          :data="data"
          :item.sync="selected"
          :popup.sync="popup"
          :canton="canton"
        />
      </template>
    </template>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import Headline from '@/components/typography/Headline.vue'
import ArtistCover from '@/components/pages/ArtistCover.vue'
import ArtistCoverMobile from '@/components/pages/ArtistCoverMobile.vue'
import ArtistPopup from '@/components/pages/ArtistPopup.vue'

export default {
  components: {
    Headline,
    ArtistCover,
    ArtistCoverMobile,
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

  fetchOnServer: false,

  async fetch() {
    await this.getArtists('vs')
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
          musicGroups(locale: $locale, where: { cantons_contains: $cantons }) {
            id
            name
            music_genre
            repertoire
            formats
            description
            artists {
              id
              first_name
              last_name
              instrument
            }
            cover {
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

      const queryData = await this.$apollo
        .query({ query, variables })
        .then(({ data }) => {
          // if (process.env.dev) console.log(data)
          return data
        })
        .catch((e) => {
          // if (process.env.dev) console.log(e)
        })

      const musicGroups = queryData.musicGroups
      this.data = musicGroups
    },
  },
}
</script>
