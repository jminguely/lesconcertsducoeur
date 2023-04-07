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

      <div v-if="item.__typename === 'ComponentContentSubtitle'">
        <h2 class="h1">{{ item.Text }}</h2>
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

      <div v-if="item.__typename === 'ComponentContentDownloadList'">
        <DownloadList :title="item.Title" :items="item.DownloadElements" />
      </div>
      <div v-if="item.__typename === 'ComponentContentFigure'">
        <Figure
          :image="item.Image"
          :rich-text="item.RichText"
          :image-position="item.ImagePosition"
        />
      </div>

      <div v-if="item.__typename === 'ComponentContentSlidesList'">
        <SlidesList :slides="item.Slides" />
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
import EventsGrid from '~/components/dynamic/EventsGrid.vue'
import DownloadList from '~/components/dynamic/DownloadList.vue'
import Figure from '~/components/dynamic/Figure.vue'
import SlidesList from '~/components/dynamic/SlidesList.vue'

import fetchPage from '~/graphql/fetchPage.gql'

export default {
  components: {
    Accordion,
    RichText,
    Logos,
    Grid,
    Headline,
    EventsGrid,
    DownloadList,
    Figure,
    SlidesList,
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
