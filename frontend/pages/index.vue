<template>
  <div v-if="page">
    <section>
      <h1 class="text-4xl lg:text-5xl mb-5">{{ page.Title }}</h1>
      <div
        v-if="page.Lead"
        v-dompurify-html="page.Lead"
        class="lg:text-3xl font-playFair mb-10"
      ></div>
      <div>
        <div
          v-if="sortedCantons"
          class="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-20"
        >
          <nuxt-link
            v-for="canton in sortedCantons"
            :key="canton.id"
            :to="`/${$i18n.locale}/association/${canton.abbreviation}`"
            class="flex flex-col items-center no-underline"
          >
            <nuxt-img
              class="aspect-logo object-contain"
              provider="strapi"
              :src="canton.Headline.Image.url"
            />
            <Badge
              :color="canton.abbreviation"
              :text="canton.name"
              class="-mt-8 no-underline"
            />
          </nuxt-link>
        </div>
      </div>
    </section>
    <section v-if="filteredConcerts">
      <h2 class="h1 mb-10">{{ $t('home').nextConcerts }}</h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
        <div v-for="(concert, i) in filteredConcerts" :key="i">
          <div
            v-if="concert != undefined"
            class="border-2 border-l-0 pr-5 pb-5 h-full"
            :class="concert.canton && `border-${concert.canton.abbreviation}`"
          >
            <p
              class="bg-white inline-block relative -top-4 pr-3 font-playFair text-md"
            >
              {{
                $dateFns.format(
                  new Date(concert.date_time),
                  'dd.MM.yy' + ' | ' + 'HH:mm'
                )
              }}
            </p>
            <p
              class="mb-0"
              :class="concert.canton && `text-${concert.canton.abbreviation}`"
            >
              {{ concert.canton.name }}
              {{ concert.location }}
            </p>
            <p class="text-lg font-playFair">
              {{ concert.title }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section v-if="page.Carousel">
      <client-only>
        <Carousel :images="page.Carousel" />
      </client-only>
    </section>
    <section v-if="page.Testimonials" class="border-b-1 mb-20 pb-20">
      <Testimonials :testimonials="page.Testimonials" />
    </section>
    <section v-if="randomizedMusicGroups.length" class="border-b-1 mb-20 pb-20">
      <h2 class="h1 mb-10">{{ $t('home').ourArtists }}</h2>
      <ArtistsSlider
        :key="randomizedMusicGroups[0].id"
        :artists="randomizedMusicGroups"
      />
    </section>
    <section class="border-b-1 mb-20">
      <h2 class="h1 mb-10">{{ $t('home').organizeConcert.title }}</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
        <div class="flex flex-col h-100">
          <h3 class="mb-2">{{ $t('home').organizeConcert.ge }}</h3>
          <a class="text-GE mt-auto" :href="`/${$i18n.locale}/contact`"
            >> {{ $t('nav').contact }}</a
          >
        </div>
        <div class="flex flex-col h-100">
          <h3 class="mb-2">{{ $t('home').organizeConcert.fr }}</h3>
          <a class="text-FR mt-auto" :href="`/${$i18n.locale}/contact`"
            >> {{ $t('nav').contact }}</a
          >
        </div>
        <div class="flex flex-col h-100">
          <h3 class="mb-2">{{ $t('home').organizeConcert.vs }}</h3>
          <a class="text-VS mt-auto" :href="`/${$i18n.locale}/contact`"
            >> {{ $t('nav').contact }}</a
          >
        </div>
        <div class="flex flex-col h-100">
          <h3 class="mb-2">{{ $t('home').organizeConcert.vd }}</h3>
          <a class="text-VD mt-auto" :href="`/${$i18n.locale}/contact`"
            >> {{ $t('nav').contact }}</a
          >
        </div>
      </div>
    </section>
    <section>
      <div class="grid md:grid-cols-2 gap-10">
        <div>
          <h2 class="h1 mb-10">{{ $t('home').supportUs.title }}</h2>
          <div class="font-playFair">
            <p class="my-5">
              {{ $t('home').supportUs.donate }}
            </p>
            <p class="my-5">{{ $t('home').supportUs.help }}</p>
            <p class="my-5">
              {{ $t('home').supportUs.member }}
            </p>
            <p>
              <Btn
                color="multi"
                class="mt-2 mb-5"
                :text="$t('nav').nousSoutenir"
                :link="`/${$i18n.locale}/soutien`"
              />
            </p>
          </div>
        </div>
        <div>
          <img src="/img/illustration4.webp" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import fetchHome from '~/graphql/fetchHome.gql'
import fetchArtists from '~/graphql/fetchArtists.gql'
import fetchCantons from '~/graphql/fetchCantons.gql'
import fetchFutureConcerts from '~/graphql/fetchFutureConcerts.gql'

import Btn from '~/components/Btn.vue'
import Badge from '~/components/Badge.vue'
import ArtistsSlider from '~/components/pages/ArtistsSlider.vue'
import Carousel from '~/components/dynamic/Carousel.vue'
import Testimonials from '~/components/dynamic/Testimonials.vue'

export default {
  components: { Btn, Badge, ArtistsSlider, Carousel, Testimonials },
  data() {
    return {
      cantons: [],
      musicGroups: [],
      concerts: [],
    }
  },
  computed: {
    sortedCantons() {
      const cantons = [...this.cantons]
      return cantons.sort((a, b) => a.name - b.name)
    },
    randomizedMusicGroups() {
      const musicGroups = [...this.musicGroups]

      const shuffled = [...musicGroups].sort(() => 0.5 - Math.random())
      return shuffled.slice(0, 20)
    },
    filteredConcerts() {
      const filteredConcerts = []

      this.sortedCantons.forEach((canton) => {
        filteredConcerts.push(
          [...this.concerts].find((concert) => concert.canton.id === canton.id)
        )
      })

      return filteredConcerts
    },
  },
  apollo: {
    page: {
      query: fetchHome,
      variables() {
        return {
          locale: `${this.$i18n.locale}-CH`,
        }
      },
      prefetch: true,
    },
    musicGroups: {
      query: fetchArtists,
      variables() {
        return {
          locale: `${this.$i18n.locale}-CH`,
          where: {},
        }
      },
      prefetch: true,
    },
    cantons: {
      query: fetchCantons,
      variables() {
        return {
          locale: `${this.$i18n.locale}-CH`,
        }
      },
      prefetch: true,
    },
    concerts: {
      query: fetchFutureConcerts,
      variables() {
        return {
          locale: `${this.$i18n.locale}-CH`,
          where: { date_time_gte: new Date(), canton_contains: null },
        }
      },
      prefetch: true,
    },
  },
}
</script>
