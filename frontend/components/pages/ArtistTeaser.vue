<template>
  <nuxt-link class="artist-teaser" :to="localePath(`/artistes/${data.slug}`)">
    <template v-if="data.cover != null">
      <nuxt-img
        loading="lazy"
        class="absolute object-cover top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500"
        :class="{ 'opacity-100': loaded }"
        provider="strapi"
        :src="data.cover.formats.small.url"
        @load="loaded = true"
      />
    </template>
    <div class="content">
      <p class="font-playFair">
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
  </nuxt-link>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      loaded: false,
    }
  },
}
</script>

<style lang="postcss" scoped>
.artist-teaser {
  @apply relative w-full bg-gray text-left p-0 m-0 block overflow-hidden;

  aspect-ratio: 1 / 1;

  img {
    transform: scale(1);
    filter: brightness(1);
    transition: all 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
    filter: brightness(0.75);
  }

  p {
    margin: 0;
    font-size: 1.3rem;
    line-height: 1;
  }

  .infos {
    margin-top: 0.25rem;
    font-size: 1rem;
    line-height: 1.6;
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
