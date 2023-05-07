<template>
  <div class="carousel my-20">
    <splide :options="getSplideOptions()">
      <splide-slide v-for="image in images" :key="image.id">
        <nuxt-img
          provider="strapi"
          :src="image.url"
          class="aspect-video object-cover w-full"
        />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getSplideOptions() {
      return {
        perPage: 1,
        easing: 'ease',
        gap: '2rem',
        type: 'loop',
        pagination: true,
        arrows: true,
        drag: true,
        autoplay: true,
        speed: 2000,
        interval: 4000,
        lazyLoad: true,
      }
    },
  },
}
</script>
