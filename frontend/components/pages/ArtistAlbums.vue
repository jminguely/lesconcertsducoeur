<template>
  <div class="flex flex-wrap items-center justify-start">
    <div v-for="(artist, i) in mutated" :key="i" class="relative mx-12 my-6 w-80 h-96">
      <div v-if="artist.is_notice" class="w-full h-full p-5 border border-black">
        <p class="mb-10 text-3xl font-playFair">{{ artist.text }}</p>
        <nuxt-link class="text-xl text-green-500" :to="artist.link">{{ artist.linkText }}</nuxt-link>
      </div>

      <div v-else class="w-full h-full">
        <img class="object-cover w-full h-full" :src="artist.image" />

        <a :href="artist.link" target="_blank" class="absolute top-0 left-0 w-full h-full p-10 text-white duration-300 ease-in-out hover:opacity-0">
          <div class="absolute z-20">
            <p class="text-2xl font-playFair">{{ artist.name }}</p>
            <p class="text-lg font-newsCycle">{{ artist.style }}</p>
          </div>
          <div class="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-40"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artists: {
      type: Array,
      default() {
        return [
          {
            name: '',
            style: '',
            image: '',
            link: '',
          },
        ]
      },
    },
  },
  data() {
    return {
      mutated: [],
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
}
</script>
