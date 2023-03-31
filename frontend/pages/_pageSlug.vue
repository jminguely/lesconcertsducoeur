<template>
  <div v-if="page">
    <Headline class="pb-12">
      <template #headline>{{ page.title }}</template>
    </Headline>

    <div v-for="(item, i) in page.content" :key="i" class="text-xl mt-4">
      <div v-if="item.__typename === 'ComponentContentTwoColumnsRichText'">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            v-dompurify-html="$md.render(item.col_left)"
            class="prose prose-xl"
          ></div>
          <div
            v-dompurify-html="$md.render(item.col_right)"
            class="prose prose-xl"
          ></div>
        </div>
        <Spacing />
      </div>

      <div v-if="item.__typename === 'ComponentContentAccordion'">
        <Accordion :items="item.accordion_item" />
        <Spacing />
      </div>
    </div>
  </div>
</template>

<script>
import Headline from '../components/typography/Headline.vue'
import Accordion from '../components/pages/Accordion.vue'
import Spacing from '../components/typography/Spacing.vue'
import fetchPage from '~/graphql/fetchPage.gql'

export default {
  components: { Accordion, Headline, Spacing },
  async asyncData({ app, params, i18n }) {
    const client = app.apolloProvider.defaultClient

    const { pageSlug } = params

    const locale = i18n.locale + '-CH'

    const res = await client.query({
      query: fetchPage,
      variables: {
        locale,
        slug: pageSlug,
      },
    })

    const page = res.data.pageBySlug

    return {
      page,
    }
  },
}
</script>
