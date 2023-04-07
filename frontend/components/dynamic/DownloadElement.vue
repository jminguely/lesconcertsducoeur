<template>
  <div class="mb-2">
    <a href="">
      {{ content.Title }}
    </a>
    <span v-if="content.Infos" class="ml-2">{{ content.Infos }}</span>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
