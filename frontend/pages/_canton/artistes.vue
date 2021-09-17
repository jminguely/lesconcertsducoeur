<template>
  <div class="relative">
    <Headline>
      <template #headline>{{ $t('artistes').title }} </template>
    </Headline>

    <donate-button-link class="hidden lg:block absolute right-28 top-6" :to="localePath('canton-auditions')" :canton="canton">
      {{ $t('auditions').hero.title }}
    </donate-button-link>

    <template v-if="data != null">
      <div class="gap-y-5 sm:gap-x-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
        <artist-cover v-for="artist in data" :key="artist.id" :data="artist" @click.native="openPopup(artist)"></artist-cover>
      </div>
      <artist-popup :class="{ hidden: !popup }" :data="data" :item.sync="selected" :popup.sync="popup" :canton="canton" />
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

  fetchOnServer: false,

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
      // artists(locale: $locale, where: { cantons_contains: $cantons }) {
      //   id
      //   first_name
      //   last_name
      //   instrument
      //   description
      //   repertoire
      //   formats
      //   picture {
      //     id
      //     url
      //   }
      // }
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
          if (process.env.dev) console.log(data)
          return data
        })
        .catch((e) => {
          if (process.env.dev) console.log(e)
        })

      // const artists = queryData.artists
      const musicGroups = queryData.musicGroups
      this.data = musicGroups
      // this.data = musicGroups.concat(artists)
    },
  },
}
</script>
