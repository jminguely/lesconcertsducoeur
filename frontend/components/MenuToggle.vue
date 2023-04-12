<template>
  <button
    :class="{ opened: menuOpen }"
    :aria-expanded="menuOpen"
    class="flex items-center p-0 bg-transparent border-none cursor-pointer focus:outline-none"
    aria-label="Main Menu"
    @click="toggleMenu()"
  >
    <svg
      :class="{ hidden: menuOpen, block: !menuOpen }"
      width="40"
      height="40"
      viewBox="0 0 56 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1" x2="56" y2="1" stroke="#393939" stroke-width="2" />
      <line y1="14" x2="56" y2="14" stroke="#393939" stroke-width="2" />
      <line y1="27" x2="56" y2="27" stroke="#393939" stroke-width="2" />
    </svg>

    <svg
      :class="{ hidden: !menuOpen, block: menuOpen }"
      width="40"
      height="40"
      viewBox="0 0 56 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.42738"
        y1="1.09593"
        x2="55.4274"
        y2="27.0959"
        stroke="#393939"
        stroke-width="2"
      />
      <line
        x1="0.57262"
        y1="27.0959"
        x2="55.5726"
        y2="1.09593"
        stroke="#393939"
        stroke-width="2"
      />
    </svg>
  </button>
</template>
<script>
export default {
  props: {
    menuOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu')
    },
  },
}
</script>
