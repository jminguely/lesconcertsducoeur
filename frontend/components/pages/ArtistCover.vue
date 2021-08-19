<template>
  <div class="relative w-full h-full md:border-1 md:border-gray-500">
    <template v-if="artist.picture != null">
      <img class="object-cover w-full h-4/5 md:h-full" :src="'https://api.lesconcertsducoeur.ch' + artist.picture.url" />
    </template>

    <button class="absolute bottom-0 left-0 z-30 block w-full h-1/5 md:top-0 md:h-full p-10 text-black duration-300 ease-in-out md:text-white md:hover:opacity-0 focus:outline-none">
      <div class="absolute left-0 z-20 text-left top-5 md:bottom-0 md:top-5 md:left-5">
        <p class="text-2xl font-playFair">{{ artist.first_name }} {{ artist.last_name }}</p>
        <p class="text-lg font-newsCycle">{{ artist.instrument }}</p>
      </div>
      <div class="absolute top-0 left-0 w-full h-full md:bg-gray-800 md:opacity-40"></div>
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
