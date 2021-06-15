<template>
  <div class="relative flex flex-col font-playFair w-80">
    <div>
      <slot name="image"></slot>
    </div>
    <div :class="`w-28 h-28 rounded-full bg-${color}-500 text-white flex items-center justify-center transform -rotate-25 text-2xl absolute -bottom-10 m-auto left-0 right-0`">
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
