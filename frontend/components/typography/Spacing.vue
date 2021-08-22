<template>
  <div :class="{ 'my-12 lg:my-16': size == '16' }"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '16',
    },
  },
}
</script>
