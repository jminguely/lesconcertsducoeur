<template>
  <div class="marquee mr-5">
    <span class="sr-only">This text will scroll from right to left</span>
    <div class="marquee-inner" aria-hidden="true">
      <span>This text will scroll from right left</span>
      <span>This text will scroll from right left</span>
      <span>This text will scroll from right left</span>
      <span>This text will scroll from right left</span>
      <span>This text will scroll from right left</span>
      <span>This text will scroll from right left</span>
      <span>This text will scroll from right left</span>
      <span>This text will scroll from right left</span>
      <span>This text will scroll from right left</span>
      <span>This text will scroll from right left</span>
      <span>This text will scroll from right left</span>
      <span>This text will scroll from right left</span>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 6px 0;
  min-height: 2rem;
}

.marquee span {
  white-space: nowrap;
  margin-right: 30px;
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

.marquee-inner:hover {
  animation-play-state: paused;
}

.marquee-inner {
  position: absolute;
  z-index: 1;
  left: 0;
  animation: marquee 25s linear infinite;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-50%));
  }
}
</style>
