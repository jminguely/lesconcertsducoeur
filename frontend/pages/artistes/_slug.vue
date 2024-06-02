<template>
  <div v-if="group && group[0]">
    <div class="grid lg:grid-cols-2 gap-5 lg:gap-x-10">
      <div>
        <div class="lg:mb-12">
          <h1 class="artiste-title">
            <template
              v-if="group[0].first_name != null && group[0].last_name != null"
            >
              {{ group[0].first_name }} {{ group[0].last_name }}
            </template>
            <template v-if="group[0].name != null">
              {{ group[0].name }}
            </template>
          </h1>
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
        </div>

        <div>
          <div
            v-if="group[0].description"
            v-dompurify-html="group[0].description"
            class="rich-text mb-5"
          ></div>
        </div>
      </div>

      <div>
        <template v-if="group[0].cover?.formats?.medium?.url != null">
          <nuxt-img
            loading="lazy"
            class="w-full h-auto"
            provider="strapi"
            :src="group[0].cover.formats?.medium?.url"
          />
        </template>
      </div>

      <div
        v-if="
          (group[0].repertoire != null && group[0].repertoire != '') ||
          (group[0].formats != null && group[0].formats != '')
        "
      >
        <div v-if="group[0].repertoire != null && group[0].repertoire != ''">
          <div class="text-xl font-playFair">
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

      <div v-if="group[0].artists != null">
        <div class="text-xl font-playFair">
          {{ $t('artistes').musiciens }}
        </div>

        <div>
          <p v-for="artist in group[0].artists" :key="artist.id" class="mb-0">
            <span class="font-sans"
              >{{ artist.first_name }} {{ artist.last_name }}</span
            >
            <span class="font-playFair">{{ artist.instrument }} </span>
          </p>
        </div>
      </div>

      <div>
        <div
          v-if="concerts?.length > 0"
          class="border-1 border-l-0 relative pt-4 mt-4"
        >
          <p class="text-md font-playFair bg-white pr-2 absolute -top-4 left-0">
            Prochains concerts
          </p>
          <div>
            <div v-for="concert in concerts" :key="concert.id" class="mb-2">
              <div
                class="font-playFair"
                :class="concert.canton && `text-${concert.canton.abbreviation}`"
              >
                <div>
                  {{
                    $dateFns.format(
                      new Date(concert.date_time),
                      'dd.MM.yyyy' + ' | ' + 'HH:mm'
                    )
                  }}
                  <span
                    v-if="
                      concert.time_end && concert.time_end != '00:00:00.000'
                    "
                    >— {{ concert.time_end.slice(0, 5) }}</span
                  >
                </div>
                <div>{{ concert.location }}</div>
              </div>
              <p v-if="concert.title" class="text-xl">
                {{ concert.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>Liens</div>
    </div>
    <div
      v-if="musicGroupSlugs.length"
      class="mt-8 border-t-1 flex justify-between"
    >
      <nuxt-link
        v-if="musicGroupSlugs[currentMusicGroupSlugIndex - 1] != null"
        class="flex my-2 mr-4 focus:outline-none lg:mr-0 no-underline"
        :to="
          localePath(
            `/artistes/${musicGroupSlugs[currentMusicGroupSlugIndex - 1].slug}`
          )
        "
      >
        <span class="font-bold">←</span>
        <span class="pl-2 hidden text-left lg:block">
          {{ musicGroupSlugs[currentMusicGroupSlugIndex - 1].name }}
        </span>
      </nuxt-link>

      <nuxt-link
        v-if="musicGroupSlugs[currentMusicGroupSlugIndex + 1] != null"
        class="flex my-2 mr-4 focus:outline-none lg:mr-0 no-underline ml-auto"
        :to="
          localePath(
            `/artistes/${musicGroupSlugs[currentMusicGroupSlugIndex + 1].slug}`
          )
        "
      >
        <span class="pr-2 hidden text-left lg:block">
          {{ musicGroupSlugs[currentMusicGroupSlugIndex + 1].name }}
        </span>
        <span class="font-bold">→</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import fetchArtist from '~/graphql/fetchArtist.gql'

export default {
  head() {
    if (this.page?.title) {
      return {
        title: `${this.page?.title} — Les Concerts du Cœur`,
      }
    }
  },
  computed: {
    musicGroupSlugs: {
      get() {
        return this.$store.state.musicGroupSlugs
      },
    },
    currentMusicGroupSlugIndex: {
      get() {
        return this.musicGroupSlugs.findIndex(
          (group) => group.slug === this.$route.params.slug
        )
      },
    },
  },
  apollo: {
    group: {
      query: fetchArtist,
      variables() {
        return {
          locale: `${this.$i18n.locale}-CH`,
          where: { slug: this.$route.params.slug },
        }
      },
      prefetch: true,
    },
    concerts: {
      query: fetchArtist,
      variables() {
        return {
          locale: `${this.$i18n.locale}-CH`,
          whereConcerts: {
            date_time_gte: new Date(),
            music_group: { slug: this.$route.params.slug },
          },
        }
      },
      prefetch: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.artiste-title {
  @apply text-4xl lg:text-5xl;

  margin-bottom: 0 !important;
}
</style>
