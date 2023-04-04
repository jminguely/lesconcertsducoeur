<template>
  <div v-if="page">
    <div v-for="(item, i) in page.Content" :key="i" class="text-xl mb-4">
      <div v-if="item.__typename === 'ComponentContentHeadline'">
        <Headline
          :title="item.Title"
          :lead="item.Lead"
          :image="item.Image"
          :rich-text="item.RichText"
        />
      </div>

      <div v-if="item.__typename === 'ComponentContentRichtext'" class="mb-20">
        <RichText :content="item.Text" />
      </div>

      <div v-if="item.__typename === 'ComponentContentAccordion'">
        <Accordion :items="item.accordion_item" />
      </div>

      <Grid
        v-if="item.__typename === 'ComponentContentGrid'"
        :blocks="item.Block"
      />

      <EventsGrid
        v-if="item.__typename === 'ComponentContentEventsGrid'"
        :event-blocks="item.EventBlocks"
      />

      <div v-if="item.__typename === 'ComponentContentLogos'">
        <Logos :images="item.Images" :title="item.Title" />
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '~/components/dynamic/Accordion.vue'
import RichText from '~/components/dynamic/RichText.vue'
import Logos from '~/components/dynamic/Logos.vue'
import Grid from '~/components/dynamic/Grid.vue'
import Headline from '~/components/dynamic/Headline.vue'

import fetchPage from '~/graphql/fetchPage.gql'
import EventsGrid from '~/components/dynamic/EventsGrid.vue'

export default {
  components: { Accordion, RichText, Logos, Grid, Headline, EventsGrid },
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
