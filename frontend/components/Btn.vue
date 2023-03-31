<template>
  <a :href="link" class="btn" :class="`bg-${color}`">{{ text }}</a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    link: {
      type: String,
      default: '#',
    },
    color: {
      type: String,
      default: 'gray',
    },
  },
}
</script>

<style scoped lang="postcss">
@layer components {
  .btn {
    @apply font-playFair py-2 px-4 rounded-3xl inline-block text-white whitespace-nowrap;
  }

  .btn.bg-multi {
    animation: background-switch 20s linear infinite;
  }

  @keyframes background-switch {
    0% {
      @apply bg-fr;
    }

    25% {
      @apply bg-vd;
    }

    50% {
      @apply bg-ge;
    }

    75% {
      @apply bg-vs;
    }

    100% {
      @apply bg-fr;
    }
  }
}
</style>
