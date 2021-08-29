<template>
  <div :class="{ 'w-8 h-8': !sidebar, 'w-6 h-6': sidebar }" class="hover:opacity-75 duration-300 ease-in-out">
    <a :target="newWindow ? '_blank' : '_self'" :href="link">
      <img v-if="name === 'facebook'" src="~/assets/img/social/facebook.svg" />
      <img v-else-if="name === 'instagram'" src="~/assets/img/social/instagram.svg" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    sidebar: {
      type: Boolean,
      default: false,
    },
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
