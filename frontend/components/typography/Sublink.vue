<template>
  <div>
    <h2 class="text-2xl lg:text-3xl font-playFair">
      <slot name="title"></slot>
    </h2>
    <h4 class="pt-2 text-xl border-0" :class="{ 'border-vs text-vs': canton == 'vs', 'border-vd text-vd': canton == 'vd', 'border-ge text-ge': canton == 'ge' }">
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
