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
.btn {
  @apply font-playFair py-2 px-4 rounded-3xl inline-block text-white whitespace-nowrap text-center no-underline;
}

.btn.bg-multi {
  animation: background-switch 10s linear infinite;
}

@keyframes background-switch {
  0% {
    @apply bg-FR;
  }

  12.5% {
    @apply bg-FR;
  }

  25% {
    @apply bg-VD;
  }

  37.5% {
    @apply bg-VD;
  }

  50% {
    @apply bg-GE;
  }

  62.5% {
    @apply bg-GE;
  }

  75% {
    @apply bg-VS;
  }

  87.5% {
    @apply bg-VS;
  }

  100% {
    @apply bg-FR;
  }
}
</style>
