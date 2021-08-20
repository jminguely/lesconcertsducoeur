<template>
  <div>
    <h2 class="text-3xl font-playFair">
      <slot name="title"></slot>
    </h2>
    <h4 class="pt-2 text-xl" :class="{ 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }">
      <slot name="text"></slot>
    </h4>
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
