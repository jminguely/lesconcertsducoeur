<template>
  <div class="border-t-1 border-concert-dark">
    <template v-for="(item, i) in items">
      <accordion-item :key="i + $i18n.locale" :open="i == activeItem" :no-image="item.noImage">
        <template #chevron>
          <svg
            :class="{ 'transform rotate-90': i == activeItem }"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="flex-shrink-0 mr-4 duration-500 ease-in-out bi bi-chevron-right"
            viewBox="0 0 16 16"
            @click="setActiveItem(i)"
          >
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
          </svg>
        </template>
        <template #label
          ><h2 class="text-2xl lg:text-3xl font-newsCycle" @click="setActiveItem(i)">{{ item.title }}</h2></template
        >
        <template #content><p v-html="item.text"></p></template>
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
