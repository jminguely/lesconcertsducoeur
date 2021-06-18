<template>
  <div class="w-full max-w-md border-t-2 border-b-2 border-r-2 border-black">
    <span class="block px-2 text-2xl transform -translate-y-5 bg-white w-max font-playFair">
      <slot name="datetime"></slot>
    </span>
    <div class="pb-8 pr-4">
      <slot name="content"></slot>
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
