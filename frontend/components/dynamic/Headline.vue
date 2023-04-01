<template>
  <div>
    <h1 class="mb-6 text-4xl lg:text-5xl">{{ title }}</h1>
    <p class="text-xl lg:text-3xl font-playFair mb-10">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
