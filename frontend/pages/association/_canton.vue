<template>
  <div v-if="currentCanton">
    <Headline
      :title="headline.Title"
      :image="headline.Image"
      :lead="headline.Lead"
      :rich-text="headline.RichText"
    />
    <DynamicContent :content="currentCanton.Content || []" />
  </div>
</template>

<script>
import Headline from '~/components/dynamic/Headline.vue'
import DynamicContent from '~/components/DynamicContent.vue'
import fetchCanton from '~/graphql/fetchCanton.gql'

export default {
  components: { DynamicContent, Headline },
  computed: {
    currentCanton() {
      return Array.isArray(this.canton) && this.canton.length > 0
        ? this.canton[0]
        : null
    },
    headline() {
      const cantonHeadline =
        this.currentCanton && this.currentCanton.Headline
          ? this.currentCanton.Headline
          : {}

      return {
        Title: cantonHeadline.Title || '',
        Image: cantonHeadline.Image || null,
        Lead: cantonHeadline.Lead || '',
        RichText: cantonHeadline.RichText || '',
      }
    },
  },
  head() {
    if (this.headline.Title) {
      return {
        title: `${this.headline.Title} — Les Concerts du Cœur`,
      }
    }

    return {
      title: 'Association — Les Concerts du Cœur',
    }
  },
  apollo: {
    canton: {
      query: fetchCanton,
      variables() {
        const canton = this.$route.params.canton

        return {
          locale: `${this.$i18n.locale}-CH`,
          ...(canton ? { where: { abbreviation_contains: canton } } : {}),
        }
      },
      prefetch: true,
    },
  },
}
</script>
