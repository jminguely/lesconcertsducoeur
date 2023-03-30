<template>
  <div class="relative flex flex-col font-playFair w-full h-full">
    <div>
      <slot name="image"></slot>
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
