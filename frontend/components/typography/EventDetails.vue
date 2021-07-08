<template>
  <div class="flex flex-col justify-between border-b border-gray-800 lg:grid lg:grid-cols-2">
    <div class="flex flex-col lg:max-w-xl">
      <div :class="`font-playFair text-${color}-600 text-xl lg:text-3xl`">
        <div><slot name="date"></slot></div>
        <div><slot name="location"></slot></div>
      </div>
      <div class="mb-6 text-3xl lg:text-6xl font-newsCycle lg:mb-0">
        <slot name="title"></slot>
      </div>
    </div>

    <div class="flex flex-col prose lg:pl-10">
      <div class="w-full h-full"></div>
      <div class="pb-4" :class="`font-playFair text-${color}-600 lg:text-2xl text-lg`">
        <slot name="artists"></slot>
      </div>
      <div :class="`font-playFair text-${color}-600 lg:text-2xl text-lg`">
        <slot name="details"> </slot>
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
