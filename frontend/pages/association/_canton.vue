<template>
  <div v-if="canton">
    <DynamicContent :content="canton.Content" />
  </div>
</template>

<script>
import DynamicContent from '~/components/DynamicContent.vue'
import fetchCanton from '~/graphql/fetchCanton.gql'

export default {
  components: { DynamicContent },
  apollo: {
    canton: {
      query: fetchCanton,
      variables() {
        return {
          abbreviation: this.$route.params.canton,
          locale: `${this.$i18n.locale}-CH`,
        }
      },
      prefetch: true,
    },
  },
}
</script>
