<template>
  <div>
    <Headline class="mt-20">
      <template #headline>Nos Artistes</template>
    </Headline>

    <nuxt-link class="absolute flex items-center justify-center text-xl leading-5 text-center text-white transform bg-green-700 rounded-full top-24 w-28 h-28 right-10 font-playFair" to="auditions">
      Auditions
    </nuxt-link>

    <ArtistsAlbums :artists="artists" />
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import ArtistsAlbums from '@/components/pages/ArtistAlbums.vue'

export default {
  components: {
    Headline,
    ArtistsAlbums,
  },
  data() {
    return {
      artists: [
        { name: 'Cayos Quitett', style: 'Jazz', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { name: 'Jazzbox', style: 'Jazz', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { name: 'Paramore', style: 'Alternative', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { name: 'Kendrick Lamar', style: 'Hip-hop', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { name: 'Koven', style: 'EDM', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { name: 'Lane 8', style: 'Deep House', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { name: 'Ararat Band', style: 'Symphony', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { name: 'All American Rejects', style: 'Alternative', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { name: 'Yo-Yo Ma', style: 'Classical', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { name: 'Ennio Morricone', style: 'Classical', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
        { name: 'Einar Selvik', style: 'Folk', image: `https://placeimg.com/540/317/people?nocache=${Math.random()}` },
      ],
    }
  },
}
</script>
