<template>
  <div class="marquee mr-5 py-2 overflow-hidden">
    <splide
      :options="{
        autoWidth: true,
        easing: 'linear',
        gap: '1rem',
        type: 'loop',
        pagination: false,
        arrows: false,
        drag: false,
        autoplay: true,
        speed: 6000,
        interval: 0,
      }"
    >
      <splide-slide v-for="i in 5" :key="i">
        <span class="whitespace-nowrap">
          {{ i }} This text will scroll from right to left
        </span>
      </splide-slide>
    </splide>
  </div>
</template>

<style lang="postcss">
.marquee {
  position: relative;
  opacity: 0;
  transition: opacity 1s;

  &:has(> .is-active) {
    opacity: 1;
  }
}

.marquee::before {
  content: '';
  z-index: 2;
  position: absolute;
  background: linear-gradient(to right, #ffffffff, #ffffff00);
  display: block;
  width: 4rem;
  height: 100%;
  top: 0;
  left: 0;
}

.marquee::after {
  content: '';
  z-index: 2;
  position: absolute;
  background: linear-gradient(to left, #ffffffff, #ffffff00);
  display: block;
  width: 4rem;
  height: 100%;
  top: 0;
  right: 0;
}
</style>
