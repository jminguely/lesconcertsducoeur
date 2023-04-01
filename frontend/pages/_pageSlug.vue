<template>
  <div v-if="page">
    <div v-for="(item, i) in page.Content" :key="i" class="text-xl mb-4">
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
      </div>
      <div v-if="item.__typename === 'ComponentContentHeadline'">
        <Headline :title="item.Title" :text="item.Text" />
      </div>
      <div v-if="item.__typename === 'ComponentContentRichtext'">
        <RichText :content="item.Text" />
      </div>
      <div v-if="item.__typename === 'ComponentContentAccordion'">
        <Accordion :items="item.accordion_item" />
      </div>
      <div
        v-if="item.__typename === 'ComponentContentGrid'"
        class="grid lg:grid-cols-2 gap-x-10 my-20"
      >
        <div v-for="block in item.Block" :key="block.id">
          <h3 class="mb-0">{{ block.Title }}</h3>
          <RichText :content="block.RichText" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '~/components/pages/Accordion.vue'
import RichText from '~/components/dynamic/RichText.vue'
import Headline from '~/components/dynamic/Headline.vue'
import fetchPage from '~/graphql/fetchPage.gql'

export default {
  components: { Accordion, RichText, Headline },
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
