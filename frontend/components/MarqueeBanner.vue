<template>
  <div class="marquee md:mr-5 py-2 overflow-hidden">
    <client-only>
      <splide :options="getSplideOptions()">
        <splide-slide
          v-for="notification in notifications"
          :key="notification.id"
        >
          <a
            v-if="notification.Link"
            class="whitespace-nowrap pr-3"
            :href="notification.Link"
          >
            {{ notification.Texte }}
          </a>
          <span v-else class="whitespace-nowrap pr-3">{{
            notification.Texte
          }}</span>
        </splide-slide>
      </splide>
    </client-only>
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
  methods: {
    getSplideOptions() {
      return {
        autoWidth: true,
        easing: 'linear',
        gap: '2rem',
        type: 'loop',
        pagination: false,
        arrows: false,
        drag: false,
        autoplay: true,
        speed: 15000,
        interval: 0,
      }
    },
  },
}
</script>

<style lang="postcss">
.marquee {
  position: relative;

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
  width: 2rem;
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
  width: 2rem;
  height: 100%;
  top: 0;
  right: 0;
  pointer-events: none;
}
</style>
