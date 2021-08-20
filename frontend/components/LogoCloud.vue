<template>
  <div>
    <div class="mb-10 text-3xl font-playFair">
      <slot name="title"></slot>
    </div>
    <div :class="{ 'grid grid-cols-2 md:grid-cols-3 md:gap-0': !isHome, 'grid grid-cols-3 sm:grid-cols-4 2xl:grid-cols-6': isHome }">
      <div v-for="(item, i) in logos" :key="i">
        <img class="filter grayscale w-full h-full object-contain" :src="'https://api.lesconcertsducoeur.ch' + item.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logos: {
      type: Array,
      default: () => [],
    },
    isHome: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
