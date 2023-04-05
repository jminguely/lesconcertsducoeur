<template>
  <div class="marquee mr-5 py-2 overflow-hidden">
    <splide :options="splideOptions">
      <splide-slide
        v-for="notification in notifications"
        :key="notification.id"
      >
        <a
          v-if="notification.Link"
          class="whitespace-nowrap"
          :href="notification.Link"
        >
          {{ notification.Texte }}
        </a>
        <span v-else class="whitespace-nowrap">{{ notification.Texte }}</span>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
export default {
  props: {
    notifications: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      splideOptions: {
        autoWidth: true,
        easing: 'linear',
        gap: '2rem',
        type: 'loop',
        pagination: false,
        arrows: false,
        drag: false,
        autoplay: true,
        speed: 10000,
        interval: 0,
      },
    }
  },
}
</script>

<style lang="postcss">
.marquee {
  position: relative;
  opacity: 0;
  transition: opacity 1s;

  &:has(> .is-active) {
    opacity: 1;
  }

  a:hover {
    opacity: 0.7;
  }
}

.marquee::before {
  content: '';
  z-index: 2;
  position: absolute;
  background: linear-gradient(to right, #ffff, #fff0, #fff0);
  display: block;
  width: 4rem;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.marquee::after {
  content: '';
  z-index: 2;
  position: absolute;
  background: linear-gradient(to left, #ffff, #fff0, #fff0);
  display: block;
  width: 4rem;
  height: 100%;
  top: 0;
  right: 0;
  pointer-events: none;
}
</style>
