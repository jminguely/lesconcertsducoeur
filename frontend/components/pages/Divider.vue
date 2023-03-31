<template>
  <div :class="`w-full border-gray border-b-1`"></div>
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
