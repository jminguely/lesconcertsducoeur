<template>
  <div class="border-t-1 border-concert-dark">
    <accordion-item v-for="(item, i) in items" :key="i" @click="test()">
      <template #label>{{ item.title }}</template>
      <template #content><div v-html="item.text"></div></template>
      <template #image><img class="mx-auto" :src="images[i]" /></template>
    </accordion-item>
  </div>
</template>
<script>
import AccordionItem from '@/components/pages/AccordionItem.vue'

export default {
  components: {
    AccordionItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    test() {
      console.log('test')
    },
  },
}
</script>
