<template>
  <div class="relative w-full h-full">
    <template v-if="data.picture != null">
      <img
        class="object-cover w-full h-4/5 md:h-full"
        :src="'https://api-new.lesconcertsducoeur.ch' + data.picture.url"
      />
    </template>

    <template v-if="data.cover != null">
      <img
        class="object-cover w-full h-4/5 md:h-full"
        :src="'https://api-new.lesconcertsducoeur.ch' + data.cover.url"
      />
    </template>

    <button
      class="absolute bottom-0 left-0 z-30 block w-full h-1/5 md:top-0 md:h-full p-10 text-black duration-300 ease-in-out md:text-white md:hover:opacity-0 focus:outline-none"
    >
      <div
        class="absolute left-0 z-20 text-left top-8 md:top-0 md:mt-5 md:mx-5"
      >
        <p class="text-xl font-playFair">
          <template v-if="data.first_name != null && data.last_name != null">
            {{ data.first_name }} {{ data.last_name }}
          </template>
          <template v-if="data.name != null"> {{ data.name }} </template>
        </p>
        <p class="text-lg">
          <template v-if="data.instrument != null">
            {{ data.instrument }}
          </template>
          <template v-if="data.music_genre != null">
            {{ data.music_genre }}
          </template>
        </p>
      </div>
      <div
        class="absolute top-0 left-0 w-full h-full md:bg-gray-800 md:opacity-40"
      ></div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
