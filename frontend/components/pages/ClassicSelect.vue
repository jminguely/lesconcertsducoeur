<template>
  <div
    v-clickaway="close"
    :class="{ 'border-2': open, border: !open }"
    class="flex items-center py-2 pr-4 duration-300 ease-in-out bg-white border-black cursor-pointer"
    @click="options.length ? (open = !open) : null"
  >
    <svg
      :class="{ 'transform rotate-90 mb-auto': open, 'my-auto': !open }"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="currentColor"
      class="sticky top-0 mx-4 mr-2 duration-300 ease-in-out bi bi-chevron-right"
      viewBox="0 0 16 16"
    >
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
    </svg>
    <div class="flex items-center">
      <div :class="{ 'mb-auto': open, 'my-auto': !open }" class="sticky top-0 mx-4"><slot name="label"></slot></div>
      <div :class="{ 'h-10 overflow-hidden pointer-events-none hidden': !open, 'overflow-auto max-h-60 ': open }" class="font-newsCycle">
        <div v-for="(item, i) in options" :key="i" class="px-4 cursor-pointer hover:bg-gray-200" @click.stop="selectItem(item)">{{ item }}</div>
      </div>
      <div :class="{ hidden: open }" class="font-newsCycle">
        {{ selectedItem }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      open: false,
      selectedItem: this.options[0],
    }
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item
      this.open = false
    },
    close() {
      this.open = false
    },
  },
}
</script>
