<template>
  <div>
    <div class="mb-10 text-3xl font-playFair">
      <slot name="title"></slot>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-10">
      <div v-for="(item, i) in logos" :key="i">
        <img class="logo-item filter grayscale w-full h-full object-contain aspect-4/3" :src="'https://api.lesconcertsducoeur.ch' + item.url" />
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
    isPartner: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.logo-item {
  aspect-ratio: 4 / 3;
  max-width: 250px;
  object-fit: contain;
}
</style>
