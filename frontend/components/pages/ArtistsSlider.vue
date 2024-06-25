<template>
  <div class="slider-container">
    <client-only>
      <splide
        :options="{
          perPage: 5,
          perMove: 1,
          easing: 'linear',
          gap: '1rem',
          type: 'loop',
          width: '100%',
          pagination: false,
          arrows: false,
          drag: false,
          autoplay: true,
          speed: 6000,
          interval: 0,
          lazyLoad: true,
          breakpoints: {
            320: {
              perPage: 1,
            },
            640: {
              perPage: 2,
            },
            960: {
              perPage: 4,
            },
          },
        }"
      >
        <template v-for="artist in artists">
          <splide-slide
            v-if="artist.cover"
            :key="artist.id"
            class="flex bg-white flex-col"
          >
            <nuxt-link
              class="artist-teaser"
              :to="localePath(`/artistes/${artist.slug}`)"
            >
              <nuxt-img
                class="aspect-square object-cover mx-auto"
                provider="strapi"
                :src="artist.cover.url"
              />
              <p class="artist-name">{{ artist.name }}</p>
            </nuxt-link>
          </splide-slide>
        </template>
      </splide>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    artists: {
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
  background: linear-gradient(to right, #ffff, #fff0);
  display: block;
  width: 2rem;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.slider-container::after {
  content: '';
  z-index: 2;
  position: absolute;
  background: linear-gradient(to left, #ffff, #fff0);
  display: block;
  width: 2rem;
  height: 100%;
  top: 0;
  right: 0;
  pointer-events: none;
}

.artist-name {
  padding: 0.5rem;
  text-align: center;
  line-height: 1.4;
}
</style>
