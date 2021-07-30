<template>
  <div class="relative w-full h-full border-1 border-gray-500">
    <template v-if="artist.picture != null">
      <img class="object-cover w-full h-full" :src="'https://api.lesconcertsducoeur.ch' + artist.picture.url" />
    </template>

    <button class="absolute top-0 left-0 z-30 block w-full h-full p-10 text-black duration-300 ease-in-out lg:text-white hover:opacity-0 focus:outline-none">
      <div class="absolute left-0 z-20 text-left -bottom-20 lg:bottom-0 lg:top-5 lg:left-5">
        <p class="text-2xl font-playFair">{{ artist.first_name }} {{ artist.last_name }}</p>
        <p class="text-lg font-newsCycle">{{ artist.instrument }}</p>
      </div>
      <div class="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-40"></div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    artist: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
