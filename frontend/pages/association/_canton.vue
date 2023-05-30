<template>
  <div v-if="canton">
    <Headline
      :title="canton[0].Headline.Title"
      :image="canton[0].Headline.Image"
      :lead="canton[0].Headline.Lead"
      :rich-text="canton[0].Headline.RichText"
    />
    <DynamicContent :content="canton[0].Content" />
  </div>
</template>

<script>
import Headline from '~/components/dynamic/Headline.vue'
import DynamicContent from '~/components/DynamicContent.vue'
import fetchCanton from '~/graphql/fetchCanton.gql'

export default {
  components: { DynamicContent, Headline },
  head() {
    if (this.canton) {
      return {
        title: `${this.canton[0].Headline.Title} — Les Concerts du Cœur`,
      }
    }
  },
  apollo: {
    canton: {
      query: fetchCanton,
      variables() {
        return {
          where: { abbreviation_contains: this.$route.params.canton },
          locale: `${this.$i18n.locale}-CH`,
        }
      },
      prefetch: true,
    },
  },
}
</script>
