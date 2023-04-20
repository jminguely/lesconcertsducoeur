<template>
  <div class="mb-2">
    <a
      v-if="content.File"
      :href="`https://api-new.lesconcertsducoeur.ch${content.File.url}`"
      >{{ content.Title }}</a
    >
    <a v-else :href="content.ExternalLink">{{ content.Title }}</a>
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
