<template>
  <div class="embed-container" v-html="content"></div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss">
.embed-container {
  aspect-ratio: 16/9;

  object,
  iframe {
    @apply w-full h-full object-cover;
  }
}
</style>
