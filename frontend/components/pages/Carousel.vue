<template>
  <splide :options="options">
    <splide-slide v-for="(image, i) in images" :key="i">
      <img :src="image" />
    </splide-slide>
  </splide>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default() {
        return {}
      },
    },
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
