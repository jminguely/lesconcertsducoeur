<template>
  <div
    class="mb-10 headline"
    :class="{ 'grid lg:grid-cols-2 gap-x-10': image }"
  >
    <h1 class="text-4xl lg:text-5xl mb-5">{{ title }}</h1>
    <div v-if="image" class="lg:col-start-2 lg:row-start-1 lg:row-span-2">
      <nuxt-img class="mx-auto" provider="strapi" :src="image.url" />
    </div>
    <div class="col-start-1">
      <p v-if="lead" class="lead">
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

.lead {
  @apply font-playFair mb-5 whitespace-pre-line;

  line-height: 1.5;
}
</style>
