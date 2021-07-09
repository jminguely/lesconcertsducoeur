<template>
  <div>
    <Headline>
      <template #headline>Nos Artistes</template>
    </Headline>

    <!-- {{ content }} -->
    <nuxt-link class="absolute flex items-center justify-center text-xl leading-5 text-center text-white transform bg-green-700 rounded-full top-24 w-28 h-28 right-10 font-playFair" to="auditions">
      Auditions
    </nuxt-link>

    <ArtistsAlbums id="artists" :artists="artists" />
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import ArtistsAlbums from '@/components/pages/ArtistAlbums.vue'

import { gql } from 'graphql-tag'

export default {
  components: {
    Headline,
    ArtistsAlbums,
  },
  data() {
    return {
      artists: [
        { id: 1, name: 'Cayos Quitett', style: 'Jazz', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { id: 2, name: 'Jazzbox', style: 'Jazz', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { id: 3, name: 'Paramore', style: 'Alternative', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { id: 4, name: 'Kendrick Lamar', style: 'Hip-hop', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { id: 5, name: 'Koven', style: 'EDM', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { id: 6, name: 'Lane 8', style: 'Deep House', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { id: 7, name: 'Ararat Band', style: 'Symphony', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { id: 8, name: 'All American Rejects', style: 'Alternative', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { id: 9, name: 'Yo-Yo Ma', style: 'Classical', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { id: 10, name: 'Ennio Morricone', style: 'Classical', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { id: 11, name: 'Einar Selvik', style: 'Folk', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
      ],
      content: null,
    }
  },

  async fetch() {
    console.log(this.$route.params)
    await this.getArtists(this.$route.params.canton)
  },

  methods: {
    async getArtists(canton) {
      const query = gql`
        query getArtists($canton: String) {
          artists(where: { canton: { uid: $canton } }) {
            id
            name
            music_genre
            description
            repertoire
            formats
            cover {
              id
              url
            }
          }
        }
      `
      const variables = {
        canton: canton.toUpperCase(),
      }

      this.content = await this.$apollo
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
