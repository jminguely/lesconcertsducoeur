<template>
  <div class="mb-10 lg:mb-20 lg:grid grid-cols-2 gap-10">
    <nuxt-img
      v-if="image"
      class="mx-auto mb-10 lg:md-10"
      provider="strapi"
      :src="image.url"
    />
    <RichText
      :content="richText"
      :class="{
        'col-start-1 row-start-1': imagePosition == 'right',
      }"
    />
  </div>
</template>

<script>
import RichText from './RichText.vue'
export default {
  components: { RichText },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    richText: {
      type: String,
      default: '',
    },
    imagePosition: {
      type: String,
      default: '',
    },
  },
}
</script>
