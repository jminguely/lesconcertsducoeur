<template>
  <div class="grid grid-cols-2 gap-10 mb-10">
    <div class="relative border-t-1 pl-12 pt-3">
      <p class="bullet">{{ bullet }}.</p>
      <RichText :content="richText" />
    </div>
    <div v-if="image">
      <nuxt-img class="mx-auto" provider="strapi" :src="image.url" />
    </div>
  </div>
</template>

<script>
import RichText from './RichText.vue'

export default {
  components: { RichText },
  props: {
    bullet: {
      type: String,
      default: '',
    },
    richText: {
      type: String,
      default: '',
    },
    image: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.bullet {
  @apply text-4xl absolute -top-7 left-0 w-10 bg-white font-playFair;
}
</style>
