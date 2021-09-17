<template>
  <nuxt-link id="link-no-bold" :to="to">
    <donate-button :canton="canton">
      <slot></slot>
    </donate-button>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    canton: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
  },
}
</script>
