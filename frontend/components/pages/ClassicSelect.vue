<template>
  <div
    v-clickaway="close"
    class="flex items-center py-2 pr-4 bg-white border-1 border-concert-dark cursor-pointer"
    :class="{ 'h-auto': !open, 'max-h-96': open, 'border-2': selectedItem != '' }"
    @click="options.length ? (open = !open) : null"
  >
    <svg
      :class="{ 'transform rotate-90 mb-auto': open, 'my-auto': !open }"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="currentColor"
      class="sticky top-0 ml-2 duration-300 ease-in-out bi bi-chevron-right"
      viewBox="0 0 16 16"
    >
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
    </svg>
    <div class="ml-2 flex items-center">
      <div :class="{ 'mb-auto': open, 'my-auto': !open }" class="sticky top-0"><slot name="label"></slot></div>
      <div :class="{ 'pointer-events-none hidden': !open }" class="ml-4 font-newsCycle">
        <div v-for="(item, i) in options" :key="i" class="cursor-pointer hover:bg-gray-200" @click.stop="selectItem(item)">{{ item }}</div>
      </div>
      <div :class="{ hidden: open }" class="ml-4 font-newsCycle">
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
    selectedItem: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    selectItem(item) {
      console.log(item)
      this.$emit('update:selectedItem', item)
      this.open = false
    },
    close() {
      this.open = false
    },
  },
}
</script>
