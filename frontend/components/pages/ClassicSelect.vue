<template>
  <div
    v-clickaway="close"
    class="w-full sm:w-auto duration-300 ease-in-out flex items-start py-2 pr-4 bg-white border-1 border-gray cursor-pointer"
    :class="{
      'h-auto': !open,
      'max-h-96': open,
      'border-2': selectedItem != '',
    }"
    @click="options.length ? (open = !open) : null"
  >
    <svg
      :class="{ 'transform rotate-90': open }"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="mb-auto sticky top-0 ml-2 transition-transform duration-300 ease-in-out bi bi-chevron-right"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      ></path>
    </svg>

    <div
      class="ml-2 w-full flex justify-between sm:justify-start sm:w-auto items-start"
    >
      <div class="mb-auto sticky top-0"><slot name="label"></slot></div>
      <div :class="{ 'pointer-events-none hidden': !open }" class="ml-4">
        <div
          v-for="(item, i) in options"
          :key="i"
          class="cursor-pointer hover:font-bold"
          @click.stop="selectItem(item)"
        >
          {{ item }}
        </div>
      </div>
      <div :class="{ hidden: open }" class="ml-4">
        <template v-if="selectedItem != ''">
          {{ selectedItem }}
        </template>
        <template v-else>
          <span class="invisible"> {{ defaultItem }}</span>
        </template>
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
    defaultItem: {
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
