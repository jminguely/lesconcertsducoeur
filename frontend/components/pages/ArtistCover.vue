<template>
  <button
    class="artist-cover relative w-full aspect-square bg-gray text-left p-0 m-0 block"
  >
    <template v-if="data.cover != null">
      <img
        class="absolute object-cover top-0 left-0 w-full h-full"
        :src="'https://api-new.lesconcertsducoeur.ch' + data.cover.url"
      />
    </template>
    <div class="content">
      <p class="text-xl font-playFair">
        <template v-if="data.first_name != null && data.last_name != null">
          {{ data.first_name }} {{ data.last_name }}
        </template>
        <template v-if="data.name != null"> {{ data.name }} </template>
      </p>
      <p class="infos">
        <span v-if="data.instrument != null">{{ data.instrument }}</span>
        <span v-if="data.music_genre != null">{{ data.music_genre }}</span>
      </p>
    </div>
  </button>
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

<style lang="postcss" scoped>
.artist-cover {
  p {
    margin: 0;
    font-size: 1.5rem;
  }

  .infos {
    font-size: 1rem;
  }

  .content {
    width: 100%;
    min-height: 4rem;
    padding: 2rem 1rem 1rem;
    color: white;
    background: linear-gradient(to top, #000a, #0000);
    position: absolute;
    bottom: 0;
    z-index: 10;
  }
}
</style>
