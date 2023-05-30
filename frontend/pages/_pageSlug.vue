<template>
  <div v-if="page">
    <DynamicContent :content="page.Content" />
  </div>
</template>

<script>
import DynamicContent from '~/components/DynamicContent.vue'
import fetchPage from '~/graphql/fetchPage.gql'

export default {
  components: { DynamicContent },
  head() {
    if (this.page?.title) {
      return {
        title: `${this.page?.title} — Les Concerts du Cœur`,
      }
    }
  },
  apollo: {
    page: {
      query: fetchPage,
      variables() {
        return {
          slug: this.$route.params.pageSlug,
          locale: `${this.$i18n.locale}-CH`,
        }
      },
      prefetch: true,
    },
  },
}
</script>
