<template>
  <div class="border-t-1 border-concert-dark">
    <div v-for="(item, i) in items" :key="i" class="py-5 border-b border-black">
      <div class="flex cursor-pointer select-none items-center">
        <svg
          :class="{ 'transform rotate-90': i == activeItem }"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="flex-shrink-0 mr-4 duration-300 ease-in-out bi bi-chevron-right"
          viewBox="0 0 16 16"
          @click="setActiveItem(i)"
        >
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
        </svg>
        <h2 class="text-2xl lg:text-3xl" @click="setActiveItem(i)">{{ item.title }}</h2>
      </div>
      <div
        class="min-h-0 max-h-0 flex flex-col lg:flex-row justify-between"
        :class="{ 'opacity-0 overflow-hidden max-h-0': i != activeItem, 'opacity-1 h-full max-h-full overflow-hidden pt-4': i == activeItem }"
      >
        <div class="w-full pr-5 text-xl">
          <p v-dompurify-html="item.text"></p>
        </div>
        <div v-if="item.image" class="w-full my-4 lg:my-0 max-h-144">
          <nuxt-img class="mx-auto" provider="strapi" :src="item.image.url" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    items: {
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
