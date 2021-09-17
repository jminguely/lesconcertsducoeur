<template>
  <div
    class="
      font-playFair
      duration-500
      ease-in-out
      hover:scale-105
      w-14
      h-14
      text-sm
      sm:w-28 sm:h-28
      rounded-full
      text-white
      flex
      items-center
      justify-center
      text-center
      transform
      -rotate-25
      sm:text-xl
      absolute
      -bottom-10
      m-auto
      left-0
      right-0
    "
    :class="{ 'bg-vs': canton == 'vs', 'bg-vd': canton == 'vd', 'bg-ge': canton == 'ge', 'bg-concert-dark': canton == '' }"
  >
    <slot></slot>
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
