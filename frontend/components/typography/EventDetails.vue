<template>
  <div class="flex pb-20 border-b border-gray-800">
    <div class="flex flex-col max-w-sm mr-60">
      <div :class="`font-playFair text-${color}-600 text-3xl mb-5`">
        <slot name="due"></slot>
      </div>
      <div class="text-6xl font-newsCycle">
        <slot name="title"></slot>
      </div>
    </div>

    <div class="flex flex-col px-10 prose">
      <div class="w-full h-full"></div>
      <div :class="`font-playFair text-${color}-600 text-2xl`">
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
