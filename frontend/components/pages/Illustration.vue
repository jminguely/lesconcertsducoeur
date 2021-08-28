<template>
  <div class="relative flex flex-col font-playFair w-full h-full">
    <div>
      <slot name="image"></slot>
    </div>
    <div
      class="duration-500 ease-in-out hover:scale-105 w-28 h-28 rounded-full text-white flex items-center justify-center transform -rotate-25 text-xl absolute -bottom-10 m-auto left-0 right-0"
      :class="{ 'bg-vs': canton == 'vs', 'bg-vd': canton == 'vd', 'bg-ge': canton == 'ge' }"
    >
      <slot name="label"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    canton: {
      type: String,
      default: '',
    },
  },
}
</script>
