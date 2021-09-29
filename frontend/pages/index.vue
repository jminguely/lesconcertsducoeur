<template>
  <div>
    <Headline class="-mt-6 mb-6 lg:mb-16">
      <template #content> <i>Les Concerts du Cœur</i> {{ $t('home').hero.subtitle }} </template>
    </Headline>

    <div class="grid grid-cols-3 gap-5 gap-y-20 sm:grid-cols-3 lg:mb-32">
      <nuxt-link to="/vs/association">
        <Illustration canton="vs">
          <template #image>
            <img class="object-cover" src="~/assets/img/illustrations/home_illu_vs.jpg" width="2048" height="1683" />
          </template>
          <template #label>{{ $t('canton').VS }}</template>
        </Illustration>
      </nuxt-link>

      <nuxt-link to="/vd/association">
        <Illustration canton="vd">
          <template #image>
            <img src="~/assets/img/illustrations/home_illu_vd.jpg" width="2048" height="1683" />
          </template>
          <template #label>{{ $t('canton').VD }}</template>
        </Illustration>
      </nuxt-link>

      <nuxt-link to="/ge/association">
        <Illustration canton="ge">
          <template #image>
            <img src="~/assets/img/illustrations/home_illu_ge.jpg" width="2048" height="1683" />
          </template>
          <template #label>{{ $t('canton').GE }}</template>
        </Illustration>
      </nuxt-link>
    </div>

    <template v-if="newsArticles != null">
      <Headline class="mt-20">
        <template #headline> {{ $t('home').news.title }}</template>
      </Headline>

      <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
        <InfoBlock v-for="item in newsArticles" :key="item.id" :canton="getCanton(item.canton)">
          <template #date>
            {{ $t('canton')[item.canton.uid.toLowerCase()] }}
          </template>
          <template #pretitle></template>
          <template #title><span v-html="$md.render(item.title)"></span></template>
          <template #content>{{ item.content }}</template>
        </InfoBlock>
      </div>
    </template>

    <template v-if="calendars != null">
      <spacing />

      <Headline>
        <template #headline> {{ $t('home').nextConcerts }} </template>
      </Headline>

      <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
        <EventBlock v-for="item in calendars" :key="item.id" :canton="getCanton(item.canton)">
          <template #datetime>{{ $dateFns.format(new Date(item.date_time), 'dd.MM.yyyy' + ' | ' + 'HH:mm') }}</template>
          <template #pretitle>{{ item.location }}</template>
          <template #title>{{ item.title }}</template>
        </EventBlock>
      </div>
    </template>

    <spacing />

    <div class="my-5 lg:my-28">
      <template v-if="content != null">
        <template v-if="content.carousel != null">
          <template v-if="content.carousel.images != null">
            <Carousel
              class="mx-auto"
              :options="{
                rewind: true,
                perPage: 1,
                gap: '1rem',
                type: 'fade',
                arrows: true,
                autoplay: true,
                interval: 3000,
              }"
              :images="content.carousel.images"
            />
          </template>
        </template>
      </template>
    </div>

    <div class="grid grid-cols-1 gap-y-10 md:gap-10 md:grid-cols-2">
      <testimonial>
        <template #quote>
          <span v-html="firstTestimonial.quote"></span>
        </template>

        <template #name>
          {{ firstTestimonial.name }}
        </template>

        <template #title>
          {{ firstTestimonial.title }}
        </template>
      </testimonial>

      <testimonial class="hidden sm:block">
        <template #quote>
          <span v-html="secondTestimonial.quote"></span>
        </template>

        <template #name>
          {{ secondTestimonial.name }}
        </template>

        <template #title>
          {{ secondTestimonial.title }}
        </template>
      </testimonial>
    </div>

    <Divider class="my-12" />

    <Headline>
      <template #headline> {{ $t('home').organizeConcert.title }} </template>
    </Headline>

    <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Sublink canton="vs">
        <template #title>
          <span v-html="$t('home').organizeConcert.vs"></span>
        </template>
        <template #text>
          <nuxt-link class="underline" :to="localePath({ name: 'canton-artistes', params: { canton: 'vs' } })">
            {{ $t('home').organizeConcert.discover }}
          </nuxt-link>
        </template>
      </Sublink>

      <Sublink canton="vd">
        <template #title>
          <span v-html="$t('home').organizeConcert.vd"></span>
        </template>
        <template #text>
          <nuxt-link class="underline" :to="localePath({ name: 'canton-artistes', params: { canton: 'vd' } })">
            {{ $t('home').organizeConcert.discover }}
          </nuxt-link>
        </template>
      </Sublink>

      <Sublink canton="ge">
        <template #title>
          <span v-html="$t('home').organizeConcert.ge"></span>
        </template>
        <template #text>
          <nuxt-link class="underline" :to="localePath({ name: 'canton-artistes', params: { canton: 'ge' } })">
            {{ $t('home').organizeConcert.discover }}
          </nuxt-link>
        </template>
      </Sublink>
    </div>

    <HeadlineLink class="mt-12">
      <template #content>
        <nuxt-link :to="localePath('concerts')">
          {{ $t('home').organizeConcert.differentTypes }}
        </nuxt-link>
      </template>
    </HeadlineLink>

    <Divider class="my-16" />

    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <Headline>
        <template #headline>{{ $t('home').supportUs.title }}</template>
        <template #content>
          <p class="mb-2 text-xl">
            <nuxt-link :to="localePath('soutien')">
              {{ $t('home').supportUs.donate }}
            </nuxt-link>
          </p>
          <p class="mb-2 text-xl">
            <nuxt-link :to="localePath('soutien') + '#devenir-membre'">
              {{ $t('home').supportUs.help }}
            </nuxt-link>
          </p>
          <p class="mb-2 text-xl">
            <nuxt-link :to="localePath('soutien') + '#devenir-membre'">
              {{ $t('home').supportUs.member }}
            </nuxt-link>
          </p>
        </template>
      </Headline>
      <div class="w-full">
        <img class="mx-auto" src="~/assets/img/illustrations/illustration4.svg" />
      </div>
    </div>

    <Divider class="my-16" />

    <spacing />

    <template v-if="content != null">
      <template v-if="content.partners != null">
        <logo-cloud v-if="content.partners.length > 0" :logos="content.partners" is-partner>
          <template #title> {{ $t('home').partners.title }}</template>
        </logo-cloud>
      </template>

      <spacing />

      <template v-if="content.sponsors != null">
        <logo-cloud v-if="content.sponsors.length > 0" :logos="content.sponsors">
          <template #title> {{ $t('home').sponsors.title }}</template>
        </logo-cloud>
      </template>
    </template>
  </div>
</template>

<script>
import Illustration from '@/components/pages/Illustration.vue'
import Carousel from '@/components/pages/Carousel.vue'
import Divider from '@/components/pages/Divider.vue'
import Headline from '@/components/typography/Headline.vue'
import Testimonial from '@/components/typography/Testimonial.vue'
import EventBlock from '@/components/typography/EventBlock.vue'
import InfoBlock from '@/components/typography/InfoBlock.vue'
import Sublink from '@/components/typography/Sublink.vue'
import HeadlineLink from '@/components/typography/HeadlineLink.vue'
import Spacing from '@/components/typography/Spacing.vue'

import { gql } from 'graphql-tag'

export default {
  components: {
    Headline,
    Illustration,
    Testimonial,
    Carousel,
    EventBlock,
    InfoBlock,
    Divider,
    Sublink,
    HeadlineLink,
    Spacing,
  },
  data() {
    return {
      content: null,
      calendars: null,
      newsArticles: null,
      currentIndex: 0,
      timer: null,
    }
  },

  fetchOnServer: false,

  async fetch() {
    await this.getContent()
    await this.getAgenda()
    await this.getNewsArticles()
  },

  computed: {
    firstTestimonial() {
      return this.$t('home').testimonials[Math.abs(this.currentIndex) % this.$t('home').testimonials.length]
    },
    secondTestimonial() {
      return this.$t('home').testimonials[Math.abs(this.currentIndex + 1) % this.$t('home').testimonials.length]
    },
  },

  mounted() {
    this.startSlide()
  },

  methods: {
    startSlide() {
      this.timer = setInterval(() => this.next(), 12000)
    },
    next() {
      this.currentIndex += 2
    },
    getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    },
    getCanton(canton) {
      return canton == null ? 'all' : canton.uid.toLowerCase()
    },
    async getAgenda() {
      const query = gql`
        query getCalendar($locale: String, $where: JSON) {
          calendars(sort: "date_time:asc", limit: 3, locale: $locale, where: $where) {
            id
            canton {
              uid
            }
            date_time
            title
            location
          }
        }
      `

      const where = { date_time_gte: new Date() }
      const variables = {
        locale: this.$i18n.locale + '-CH',
        where,
      }

      this.data = await this.$apollo
        .query({ query, variables })
        .then(({ data }) => {
          if (process.env.dev) console.log(data)
          return data
        })
        .catch((e) => {
          if (process.env.dev) console.log(e)
        })

      if (this.data != null) this.calendars = this.data.calendars
    },

    async getNewsArticles() {
      const query = gql`
        query getNewsArticles($locale: String) {
          newsArticles(sort: "date:asc", limit: 3, locale: $locale) {
            id
            title
            date
            content
            canton {
              uid
            }
          }
        }
      `

      // const where = { date_gte: new Date() }
      const variables = {
        locale: this.$i18n.locale + '-CH',
        // where,
      }

      this.newsArticles = await this.$apollo
        .query({ query, variables })
        .then(({ data }) => {
          if (process.env.dev) console.log(data)
          return data
        })
        .catch((e) => {
          if (process.env.dev) console.log(e)
        })

      this.newsArticles = this.newsArticles.newsArticles
    },

    async getContent() {
      const query = gql`
        query getHome {
          home {
            id
            carousel {
              id
              images {
                id
                url
              }
            }
            sponsors {
              id
              url
            }
            partners {
              id
              url
            }
          }
        }
      `

      this.content = await this.$apollo
        .query({ query })
        .then(({ data }) => {
          if (process.env.dev) console.log(data)
          return data
        })
        .catch((e) => {
          if (process.env.dev) console.log(e)
        })
      this.content = this.content.home
    },
  },
}
</script>
