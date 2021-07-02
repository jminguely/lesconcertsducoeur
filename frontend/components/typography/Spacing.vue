<template>
  <div :class="`my-${size}`"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '20',
    },
  },
}
</script>
