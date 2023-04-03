<template>
  <div v-dompurify-html="content" class="rich-text mb-10"></div>
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
.rich-text {
  ul {
    padding-left: 1.7rem;
    margin-bottom: 2rem;
    counter-reset: list-counter;

    li::before {
      content: '—';
      padding-right: 0.5rem;
      margin-left: -1.7rem;
    }
  }

  ol {
    list-style-type: decimal;
    padding-left: 1.7rem;
    margin-bottom: 2rem;
  }

  mark {
    @apply font-playFair py-2 px-4 rounded-3xl inline-block text-white whitespace-nowrap;
  }
}
</style>
