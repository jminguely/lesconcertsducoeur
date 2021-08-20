<template>
  <div :class="`w-full border-concert-dark border-b-1`"></div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'concert-dark',
    },
  },
}
</script>
