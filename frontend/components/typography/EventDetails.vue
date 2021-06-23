<template>
  <div class="flex flex-col border-b border-gray-800 pb-9 lg:pb-20 lg:flex-row">
    <div class="flex flex-col lg:max-w-sm lg:mr-60">
      <div :class="`font-playFair text-${color}-600 text-xl lg:text-3xl mb-5`">
        <slot name="due"></slot>
      </div>
      <div class="mb-6 text-3xl lg:text-6xl font-newsCycle lg:mb-0">
        <slot name="title"></slot>
      </div>
    </div>

    <div class="flex flex-col prose lg:px-10">
      <div class="w-full h-full"></div>
      <div :class="`font-playFair text-${color}-600 lg:text-2xl text-lg`">
        <slot name="details"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'red',
    },
  },
}
</script>
