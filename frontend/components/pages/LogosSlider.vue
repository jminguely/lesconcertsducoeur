<template>
  <div class="slider-container">
    <client-only>
      <splide
        :options="{
          perPage: 11,
          perMove: 1,
          easing: 'linear',
          gap: '1rem',
          type: 'loop',
          pagination: false,
          arrows: false,
          drag: false,
          autoplay: true,
          speed: 5000,
          interval: 0,
          width: '100%',
          lazyLoad: true,
          breakpoints: {
            320: {
              perPage: 2,
            },
            640: {
              perPage: 3,
            },
            1280: {
              perPage: 8,
            },
          },
        }"
      >
        <splide-slide v-for="logo in logos" :key="logo.id" class="flex">
          <nuxt-img
            class="aspect-logo p-2 object-contain m-auto filter grayscale"
            provider="strapi"
            :src="logo.url"
          />
        </splide-slide>
      </splide>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    logos: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
.slider-container {
  position: relative;
}

.slider-container::before {
  content: '';
  z-index: 2;
  position: absolute;
  background: linear-gradient(to right, #393939ff, #39393900);
  display: block;
  width: 1rem;
  height: 100%;
  top: 0;
  left: -1px;
  pointer-events: none;
}

.slider-container::after {
  content: '';
  z-index: 2;
  position: absolute;
  background: linear-gradient(to left, #393939ff, #39393900);
  display: block;
  width: 1rem;
  height: 100%;
  top: 0;
  right: -1px;
  pointer-events: none;
}
</style>
