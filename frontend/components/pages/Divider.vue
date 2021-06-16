<template>
  <div :class="`w-full border-${color} border`"></div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'black',
    },
  },
}
</script>
