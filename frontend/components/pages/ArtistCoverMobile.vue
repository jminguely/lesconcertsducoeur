<template>
  <div class="relative w-full h-full">
    <template v-if="data.picture != null">
      <img class="object-cover w-full" :src="'https://cdc-backend.minguely.ch' + data.picture.url" />
    </template>

    <template v-if="data.cover != null">
      <img class="object-cover w-full" :src="'https://cdc-backend.minguely.ch' + data.cover.url" />
    </template>

    <div class="mt-2 text-left w-full">
      <p class="text-xl font-playFair">
        <template v-if="data.first_name != null && data.last_name != null"> {{ data.first_name }} {{ data.last_name }} </template>
        <template v-if="data.name != null"> {{ data.name }} </template>
      </p>
      <p class="text-lg font-newsCycle">
        <template v-if="data.instrument != null">
          {{ data.instrument }}
        </template>
        <template v-if="data.music_genre != null">
          {{ data.music_genre }}
        </template>
      </p>
    </div>
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
