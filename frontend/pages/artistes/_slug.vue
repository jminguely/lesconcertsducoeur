<template>
  <div v-if="group && group[0]">
    <nuxt-link class="mb-8 inline-block" :to="localePath('/artistes')"
      >← Retours aux artistes</nuxt-link
    >
    <h1 class="mb-6 text-4xl lg:text-5xl">
      <template
        v-if="group[0].first_name != null && group[0].last_name != null"
      >
        {{ group[0].first_name }} {{ group[0].last_name }}
      </template>
      <template v-if="group[0].name != null">
        {{ group[0].name }}
      </template>
    </h1>
    <div
      class="lg:flex-shrink py-10 lg:py-0 flex flex-col justify-between lg:flex-row lg:w-4/5 lg:gap-10"
    >
      <div class="mb-6 lg:w-3/5 lg:mb-0">
        <h3
          v-if="
            (group[0].instrument != null && group[0].instrument != '') ||
            (group[0].music_genre != null && group[0].music_genre != '')
          "
          class="mb-4 text-3xl font-playFair"
        >
          <template v-if="group[0].instrument != null">
            {{ group[0].instrument }}
          </template>
          <template v-if="group[0].music_genre != null">
            {{ group[0].music_genre }}
          </template>
        </h3>

        <div>
          <div
            v-if="group[0].description"
            v-dompurify-html="group[0].description"
            class="rich-text mb-5"
          ></div>

          <div v-if="group[0].repertoire != null && group[0].repertoire != ''">
            <div class="mb-4 text-3xl font-playFair">
              {{ $t('artistes').repertoire }}
            </div>
            <div v-dompurify-html="group[0].repertoire" class="rich-text"></div>
          </div>

          <div v-if="group[0].formats != null && group[0].formats != ''">
            <div class="mb-4 text-3xl font-playFair">
              {{ $t('artistes').formats }}
            </div>
            <div
              v-if="group[0].formats != null"
              v-dompurify-html="group[0].formats"
              class="rich-text"
            ></div>
          </div>
        </div>
      </div>

      <div class="flex-grow lg:w-2/5">
        <div class="ml-auto">
          <template v-if="group[0].cover != null">
            <nuxt-img
              loading="lazy"
              class="object-cover h-full lg:w-120 lg:h-full w-96"
              provider="strapi"
              :src="group[0].cover.url"
            />
          </template>
        </div>

        <div v-if="group[0].artists != null" class="mt-4 flex flex-col">
          <div>
            <p v-for="artist in group[0].artists" :key="artist.id" class="mb-0">
              <span class="font-sans"
                >{{ artist.first_name }} {{ artist.last_name }}</span
              >
              <span class="font-playFair">{{ artist.instrument }} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetchArtists from '~/graphql/fetchArtist.gql'

export default {
  head() {
    if (this.page?.title) {
      return {
        title: `${this.page?.title} — Les Concerts du Cœur`,
      }
    }
  },
  apollo: {
    group: {
      query: fetchArtists,
      variables() {
        return {
          locale: `${this.$i18n.locale}-CH`,
          where: { slug: this.$route.params.slug },
        }
      },
      prefetch: true,
    },
  },
}
</script>
