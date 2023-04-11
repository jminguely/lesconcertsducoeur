<template>
  <div class="mb-20 headline" :class="{ 'grid md:grid-cols-2 gap-5': image }">
    <h1 class="text-4xl lg:text-5xl">{{ title }}</h1>
    <div v-if="image" class="md:col-start-2 md:row-start-1 md:row-span-2">
      <nuxt-img class="mx-auto" provider="strapi" :src="image.url" />
    </div>
    <div class="col-start-1">
      <p v-if="lead" class="text-xl lg:text-3xl font-playFair mb-0">
        {{ lead }}
      </p>
      <RichText v-if="richText" :content="richText" />
    </div>
  </div>
</template>

<script>
import RichText from '~/components/dynamic/RichText.vue'

export default {
  components: { RichText },

  props: {
    title: {
      type: String,
      default: '',
    },
    lead: {
      type: String,
      default: '',
    },
    image: {
      type: Object,
      default: null,
    },
    richText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
.headline {
  grid-template-rows: min-content minmax(0, 1fr);
}
</style>
