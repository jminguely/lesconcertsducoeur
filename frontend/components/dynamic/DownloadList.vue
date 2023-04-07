<template>
  <div class="mb-20">
    <h3 class="mb-1">{{ title }}</h3>
    <DownloadElement v-for="item in items" :key="item.id" :content="item" />
  </div>
</template>
<script>
import DownloadElement from './DownloadElement.vue'
export default {
  components: { DownloadElement },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
