<template>
  <div>
    <h2 class="text-3xl font-playFair">
      <slot name="title"></slot>
    </h2>
    <h4 :class="`pt-2 pl-8 text-2xl text-${color}-500 w-${width}`">
      <slot name="text"></slot>
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'red',
    },
    width: {
      type: String,
      default: '48',
    },
  },
}
</script>
