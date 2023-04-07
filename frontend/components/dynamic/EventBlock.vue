<template>
  <div
    class="border-2 border-l-0 pr-5"
    :class="content.Canton && `border-${content.Canton.abbreviation}`"
  >
    <h3 class="bg-white inline-block relative -top-5 pr-3">
      {{ content.Title }}
    </h3>
    <RichText :content="content.RichText" />
  </div>
</template>

<script>
import RichText from '~/components/dynamic/RichText.vue'

export default {
  components: { RichText },
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
