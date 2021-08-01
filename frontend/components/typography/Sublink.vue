<template>
  <div>
    <h2 class="text-3xl font-playFair">
      <slot name="title"></slot>
    </h2>
    <h4 :class="`pt-2 text-2xl text-${color}-500`">
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
  },
}
</script>
