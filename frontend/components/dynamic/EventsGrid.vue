<template>
  <div class="grid lg:grid-cols-2 gap-10 mb-10 lg:mb-20">
    <div v-for="eventBlock in eventBlocks" :key="eventBlock.id">
      <EventBlock :content="eventBlock" />
    </div>
  </div>
</template>

<script>
import EventBlock from './EventBlock.vue'
export default {
  components: { EventBlock },
  props: {
    eventBlocks: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
