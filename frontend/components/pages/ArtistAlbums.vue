<template>
  <div class="flex flex-wrap items-center justify-start">
    <div v-for="(artist, i) in mutated" :key="i" class="relative h-64 my-16 lg:my-6 lg:w-1/3 lg:pr-8 lg:h-96">
      <div v-if="artist.is_notice" class="w-full h-full p-5 border border-black">
        <p class="text-3xl lg:mb-10 font-playFair">{{ artist.text }}</p>
        <nuxt-link class="text-xl text-green-500" :to="artist.link">{{ artist.linkText }}</nuxt-link>
      </div>

      <div v-else class="w-full h-full">
        <img class="object-cover w-full h-full" :src="artist.image" />

        <button class="absolute top-0 left-0 z-30 block w-full h-full p-10 text-black duration-300 ease-in-out lg:text-white hover:opacity-0 focus:outline-none" @click="openPopup(artist)">
          <div class="absolute left-0 z-20 text-left -bottom-20 lg:bottom-0 lg:top-5 lg:left-5">
            <p class="text-xl font-playFair">{{ artist.name }}</p>
            <p class="text-lg font-newsCycle">{{ artist.style }}</p>
          </div>
          <div class="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-40"></div>
        </button>
      </div>
    </div>
    <ArtistPopup :class="{ hidden: !popup }" :artists="artists" :item.sync="selected" :popup.sync="popup" />
  </div>
</template>

<script>
import ArtistPopup from '@/components/pages/ArtistPopup.vue'

export default {
  components: {
    ArtistPopup,
  },
  props: {
    artists: {
      type: Array,
      default() {
        return [
          {
            id: '',
            name: '',
            style: '',
            image: '',
          },
        ]
      },
    },
  },
  data() {
    return {
      mutated: [],
      selected: {},
      popup: false,
    }
  },
  created() {
    const clone = [...this.artists]

    clone.splice(6, 0, {
      is_notice: true,
      text: 'Vous êtes musicien·nne et souhaitez jouer avec les Concerts du Coeur Vaudois?',
      linkText: '> participez aux auditons',
      link: 'auditions',
    })

    this.mutated = clone
  },
  methods: {
    openPopup(item) {
      this.selected = item
      this.popup = true
    },
  },
}
</script>
