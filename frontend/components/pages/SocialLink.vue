<template>
  <div class="w-10 h-10">
    <a :target="newWindow ? '_blank' : '_self'" :href="link">
      <img v-if="name === 'facebook'" src="~/assets/img/social/facebook.svg" />
      <img v-else-if="name === 'instagram'" src="~/assets/img/social/instagram.svg" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default() {
        return ''
      },
    },
    newWindow: {
      type: Boolean,
      default: true,
    },
    link: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>
