<template>
  <div class="mb-10 lg:mb-20 lg:grid grid-cols-2 gap-10">
    <div class="embed-container mb-10 md:mt-2" v-html="content"></div>
    <RichText
      :content="richText"
      class="mt-3 md:my-0"
      :class="{
        'col-start-1 row-start-1': embedPosition == 'right',
      }"
    />
  </div>
</template>

<script>
import RichText from './RichText.vue'

export default {
  components: { RichText },
  props: {
    content: {
      type: String,
      default: '',
    },
    richText: {
      type: String,
      default: '',
    },
    embedPosition: {
      type: String,
      default: '',
    },
  },
}
</script>
