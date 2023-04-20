<template>
  <div class="grid lg:grid-cols-2 gap-x-10 gap-y-5 mb-10 lg:mb-20">
    <div v-for="block in blocks" :key="block.id">
      <h3 class="mb-2">{{ block.Title }}</h3>
      <RichText :content="block.RichText" />
    </div>
  </div>
</template>

<script>
import RichText from '~/components/dynamic/RichText.vue'

export default {
  components: { RichText },
  props: {
    blocks: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
