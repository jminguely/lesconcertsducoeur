<template>
  <div class="mb-20">
    <h3>{{ title }}</h3>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gid-cols-5 gap-10"
    >
      <div v-for="image in images" :key="image.id">
        <nuxt-img
          class="filter grayscale w-full h-full object-contain aspect-4/3"
          provider="strapi"
          :src="image.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
