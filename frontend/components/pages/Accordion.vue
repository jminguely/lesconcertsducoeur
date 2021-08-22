<template>
  <div class="border-t-1 border-concert-dark">
    <template v-for="(item, i) in items">
      <accordion-item :key="i" :open="i == activeItem" @click.native="setActiveItem(i)">
        <template #label>{{ item.title }}</template>
        <template #content><div v-html="item.text"></div></template>
        <template #image><img class="mx-auto" :src="images[i]" /></template>
      </accordion-item>
    </template>
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
  data() {
    return {
      activeItem: this.items.length,
    }
  },
  methods: {
    setActiveItem(i) {
      if (this.activeItem !== i) this.activeItem = i
      else this.activeItem = this.items.length
    },
  },
}
</script>
