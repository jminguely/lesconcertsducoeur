<template>
  <div class="py-5 border-b border-black">
    <div class="flex cursor-pointer select-none">
      <svg
        :class="{ 'transform rotate-90': open }"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        class="flex-shrink-0 mt-2 mr-4 duration-500 ease-in-out bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
      </svg>
      <h2 class="text-xl lg:text-4xl font-newsCycle"><slot name="label"></slot></h2>
    </div>
    <div
      class="duration-500 ease-in-out min-h-0 max-h-0 flex flex-col lg:flex-row justify-between"
      :class="{ 'opacity-0 overflow-hidden max-h-0 font-newsCycle': !open, 'opacity-1 h-full max-h-120 overflow-hidden pt-4': open }"
    >
      <div class="w-full pr-5 text-xl">
        <slot name="content"></slot>
      </div>
      <div class="w-full my-4 lg:my-0 max-h-144">
        <slot name="image"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitState() {
      this.$emit('state', this.open)
    },
  },
}
</script>
