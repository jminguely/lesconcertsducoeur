<template>
  <div>
    <Headline class="-mt-4 mb-10 lg:mb-24">
      <template #content> <i>Les Concerts du Cœur</i> {{ $t('home').hero.subtitle }} </template>
    </Headline>

    <div class="grid grid-cols-1 gap-5 gap-y-20 sm:grid-cols-3 lg:mb-32">
      <nuxt-link to="/vs/association">
        <Illustration canton="vs">
          <template #image>
            <img class="object-cover" src="~/assets/img/illustrations/home_illu_vs.webp" />
          </template>
          <template #label>{{ $t('canton').VS }}</template>
        </Illustration>
      </nuxt-link>

      <nuxt-link to="/vd/association">
        <Illustration canton="vd">
          <template #image>
            <img src="~/assets/img/illustrations/home_illu_vd.webp" />
          </template>
          <template #label>{{ $t('canton').VD }}</template>
        </Illustration>
      </nuxt-link>

      <nuxt-link to="/ge/association">
        <Illustration canton="ge">
          <template #image>
            <img src="~/assets/img/illustrations/home_illu_ge.webp" />
          </template>
          <template #label>{{ $t('canton').GE }}</template>
        </Illustration>
      </nuxt-link>
    </div>

    <spacing />
    <Headline class="mb-4">
      <template #headline> Témoignages </template>
    </Headline>

    <div class="grid grid-cols-1 gap-y-10 md:gap-10 md:grid-cols-2">
      <testimonial>
        <template #quote>
          {{ $t('home').testimonials[0].quote }}
        </template>

        <template #name>
          {{ $t('home').testimonials[0].name }}
        </template>

        <template #title>
          {{ $t('home').testimonials[0].title }}
        </template>
      </testimonial>

      <testimonial class="hidden sm:block">
        <template #quote>
          {{ $t('home').testimonials[1].quote }}
        </template>

        <template #name>
          {{ $t('home').testimonials[1].name }}
        </template>

        <template #title>
          {{ $t('home').testimonials[1].title }}
        </template>
      </testimonial>
    </div>

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

    <template v-if="newsArticles != null">
      <spacing />

      <Headline class="mb-12">
        <template #headline> Actualités </template>
      </Headline>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
        <InfoBlock v-for="item in newsArticles" :key="item.id" :canton="getCanton(item.canton)">
          <template #date>{{ $dateFns.format(new Date(item.date), 'dd.MM.yyyy') }}</template>
          <template #pretitle></template>
          <template #title>{{ item.title }}</template>
          <template #content>{{ item.content }}</template>
        </InfoBlock>
      </div>
    </template>

    <template v-if="calendars != null">
      <spacing />

      <Headline class="mb-12">
        <template #headline> {{ $t('home').nextConcerts }} </template>
      </Headline>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
        <EventBlock v-for="item in calendars" :key="item.id" :canton="getCanton(item.canton)">
          <template #datetime>{{ $dateFns.format(new Date(item.date_time), 'dd.MM.yyyy' + ' | ' + 'HH:mm') }}</template>
          <template #pretitle>{{ item.location }}</template>
          <template #title>{{ item.title }}</template>
        </EventBlock>
      </div>
    </template>

    <Divider class="my-16" />

    <Headline class="mb-12">
      <template #headline> Souhaitez vous organiser un concert ? </template>
    </Headline>

    <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Sublink canton="vs">
        <template #title>dans le canton du Valais ?</template>
        <template #text>
          <nuxt-link class="underline" :to="localePath({ name: 'canton-artistes', params: { canton: 'vs' } })">> découvrez nos musicien·nes·s</nuxt-link>
        </template>
      </Sublink>

      <Sublink canton="vd">
        <template #title>dans le canton de Vaud ?</template>
        <template #text>
          <nuxt-link class="underline" :to="localePath({ name: 'canton-artistes', params: { canton: 'vd' } })"> > découvrez nos musicien·nes·s </nuxt-link>
        </template>
      </Sublink>

      <Sublink canton="ge">
        <template #title>dans le canton de Genève ?</template>
        <template #text>
          <nuxt-link class="underline" :to="localePath({ name: 'canton-artistes', params: { canton: 'ge' } })"> > découvrez nos musicien·nes·s </nuxt-link>
        </template>
      </Sublink>
    </div>

    <HeadlineLink class="mt-12">
      <template #content>
        <nuxt-link :to="localePath('concerts')">> Découvrez les différents types de concerts</nuxt-link>
      </template>
    </HeadlineLink>

    <Divider class="my-16" />

    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <Headline>
        <template #headline>{{ $t('home').supportUs }}</template>
        <template #content>
          <p class="mb-2 text-xl">> en faisant un don</p>
          <p class="mb-2 text-xl">> en devenant bénévole</p>
          <p class="mb-2 text-xl">> en devenant membre</p>
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
        <logo-cloud v-if="content.partners.length > 0" :logos="content.partners" is-home>
          <template #title> {{ $t('home').partners.title }}</template>
        </logo-cloud>
      </template>

      <spacing />

      <template v-if="content.sponsors != null">
        <logo-cloud v-if="content.sponsors.length > 0" :logos="content.sponsors" is-home>
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
      images: ['/img/home_1.jpg', '/img/home_2.jpg', '/img/home_3.jpg', '/img/home_4.jpg', '/img/home_5'],
      sponsors: [
        { img: require('~/assets/img/partners/Berthy.svg'), link: '' },
        { img: require('~/assets/img/partners/BS.svg'), link: '' },
        { img: require('~/assets/img/partners/Hemu.svg'), link: '' },
        { img: require('~/assets/img/partners/LR.svg'), link: '' },
        { img: require('~/assets/img/partners/M.svg'), link: '' },
        { img: require('~/assets/img/partners/prohelvetia.svg'), link: '' },
        { img: require('~/assets/img/partners/xbox.svg'), link: '' },
      ],
      content: null,
      calendars: null,
      newsArticles: null,
    }
  },

  async fetch() {
    await this.getContent()
    await this.getAgenda()
    await this.getNewsArticles()
  },

  methods: {
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
        query getNewsArticles($locale: String, $where: JSON) {
          newsArticles(sort: "date:asc", limit: 3, locale: $locale, where: $where) {
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
      const where = { date_gte: new Date() }
      const variables = {
        locale: this.$i18n.locale + '-CH',
        where,
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
