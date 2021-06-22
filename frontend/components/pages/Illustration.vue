<template>
  <div class="relative flex flex-col px-4 font-playFair w-80 lg:px-0">
    <div>
      <slot name="image"></slot>
    </div>
    <div
      :class="`w-14 h-14 lg:w-28 lg:h-28 rounded-full bg-${color}-500 text-white flex items-center justify-center transform -rotate-25 text-sm lg:text-2xl absolute -bottom-10 m-auto left-0 right-0`"
    >
      <slot name="label"></slot>
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
