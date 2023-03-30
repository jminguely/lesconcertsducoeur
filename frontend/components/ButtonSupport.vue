<template>
  <a href="#" class="button-support">Nous soutenir</a>
</template>

<style scoped>
@layer components {
  .button-support {
    display: inline-block;
    color: white;
    animation: background-switch 20s linear infinite;
    padding: 5px 10px 7px;
    border-radius: 15px;
    white-space: nowrap;
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
