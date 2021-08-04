<template>
  <div>
    <Headline class="mb-10 lg:mb-32">
      <template #headline> La musique adoucit le temps qui passe </template>
      <template #content>
        <i>Les Concerts du Cœur</i> proposent des moments de musique aux personnes qui ont difficilement accès aux salles de concerts traditionnelles, qu’il s’agisse de personnes âgées, hospitalisées,
        incarcérées, en situation de handicap ou de précarité.
      </template>
    </Headline>

    <div class="grid grid-cols-3 gap-5 lg:mb-32">
      <nuxt-link to="/vs/association">
        <Illustration>
          <template #image>
            <img class="object-cover" src="~/assets/img/illustrations/illustration1.svg" />
          </template>
          <template #label>{{ $t('canton').VS }}</template>
        </Illustration>
      </nuxt-link>

      <nuxt-link to="/vd/association">
        <Illustration color="green">
          <template #image>
            <img src="~/assets/img/illustrations/illustration2.svg" />
          </template>
          <template #label>{{ $t('canton').VD }}</template>
        </Illustration>
      </nuxt-link>

      <nuxt-link to="/ge/association">
        <Illustration color="yellow">
          <template #image>
            <img src="~/assets/img/illustrations/illustration3.svg" />
          </template>
          <template #label>{{ $t('canton').GE }}</template>
        </Illustration>
      </nuxt-link>
    </div>

    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <Testimonial>
        <template #quote>
          Nous sommes persuadés que les performances des artistes lyriques au sein de nos établissements sauront contribuer à permettre à bon nombre de nos patients de faire mieux face de leur maladie
          notamment en rendant leur séjour hospitalier plus humain. L'Hôpital du Valais soutient donc avec enthousiasme cette magnifique initiative.
        </template>

        <template #name> Eric Bonvin </template>

        <template #title> Directeur des Hôpitaux du Valais </template>
      </Testimonial>

      <Testimonial>
        <template #quote>
          C'est donc avec conviction que j'apporte mon appui à l'Association valaisanne, Les Concerts du Coeur, fondée en janvier pour réaliser ce projet. Je souhaite que nous soyons nombreux à la
          soutenir et à donner ainsi une chance aux personnes âgées, hospitalisées ou dans l'isolement de vivre des moments de plaisirs musicaux de qualité.
        </template>

        <template #name> Pascal Couchepin </template>

        <template #title> Ancien Conseiller fédéral </template>
      </Testimonial>
    </div>

    <div class="my-5 lg:my-28">
      <Carousel
        class="mx-auto"
        :options="{
          rewind: true,
          width: 1164,
          perPage: 1,
          gap: '1rem',
          type: 'fade',
          arrows: false,
        }"
        :images="images"
      />
    </div>

    <!-- <Headline class="mb-16">
      <template #headline> Actualités </template>
    </Headline>

    <div class="flex flex-col items-start justify-between mb-16 space-x-0 space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
      <InfoBlock v-for="item in newsArticles" :key="item.id" :color="getColor(getCanton(item.canton))">
        <template #date>{{ $dateFns.format(new Date(item.date), 'dd.MM.yyyy') }}</template>
        <template #pretitle>{{ $t('canton')[getCanton(item.canton)] }}</template>
        <template #title>{{ item.title }}</template>
        <template #content>{{ item.content }}</template>
      </InfoBlock>
    </div> -->

    <spacing />

    <Headline class="mb-16">
      <template #headline> Prochains concerts </template>
    </Headline>

    <div class="flex flex-col items-start justify-between space-x-0 space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
      <EventBlock v-for="item in calendars" :key="item.id" :color="getColor(getCanton(item.canton))">
        <template #datetime>{{ $dateFns.format(new Date(item.date_time), 'dd.MM.yyyy' + ' | ' + 'HH:mm') }}</template>
        <template #pretitle>{{ item.location }}</template>
        <template #title>{{ item.title }}</template>
      </EventBlock>
    </div>

    <Divider class="my-16" />

    <Headline class="mb-12">
      <template #headline> Vous souhaitez organiser un concert … </template>
    </Headline>

    <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Sublink canton="vs">
        <template #title>… en Valais?</template>
        <template #text>
          <nuxt-link class="underline" :to="localePath({ name: 'canton-artistes', params: { canton: 'vs' } })">> découvrez nos musicien·nes·s</nuxt-link>
        </template>
      </Sublink>

      <Sublink canton="vd">
        <template #title>… sur Vaud?</template>
        <template #text>
          <nuxt-link class="underline" :to="localePath({ name: 'canton-artistes', params: { canton: 'vd' } })"> > découvrez nos musicien·nes·s </nuxt-link>
        </template>
      </Sublink>

      <Sublink canton="ge">
        <template #title>… sur Genève?</template>
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
        <template #headline>Soutenez-nous …</template>
        <template #content>
          <p class="my-8 text-2xl">… en faisant un don</p>
          <p class="my-8 text-2xl">… en devenant bénévole</p>
          <p class="my-8 text-2xl">… en devenant membre</p>
        </template>
      </Headline>
      <div class="w-full">
        <img class="mx-auto" src="~/assets/img/illustrations/illustration4.svg" />
      </div>
    </div>

    <Divider class="my-16" />

    <Partner>
      <template #title> En partenariat avec </template>
      <template #image>
        <img src="~/assets/img/partners/LMN.svg" />
      </template>
    </Partner>

    <spacing />

    <Sponsors :sponsors="sponsors">
      <template #title> Soutiens </template>
    </Sponsors>
  </div>
</template>

<script>
import Illustration from '@/components/pages/Illustration.vue'
import Carousel from '@/components/pages/Carousel.vue'
import Divider from '@/components/pages/Divider.vue'
import Partner from '@/components/pages/Partner.vue'
import Sponsors from '@/components/pages/Sponsors.vue'
import Headline from '@/components/typography/Headline.vue'
import Testimonial from '@/components/typography/Testimonial.vue'
import EventBlock from '@/components/typography/EventBlock.vue'
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
    Divider,
    Sublink,
    HeadlineLink,
    Partner,
    Sponsors,
    Spacing,
  },
  data() {
    return {
      images: ['/img/mission_1.jpeg', '/img/mission_2.jpeg', '/img/mission_3.jpeg', '/img/mission_4.jpeg'],
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
    await this.getAgenda()
    await this.getNewsArticles()
  },

  methods: {
    getColor(canton) {
      if (canton === 'VS') return 'red'
      if (canton === 'VD') return 'green'
      if (canton === 'GE') return 'yellow'
      if (canton === 'ALL') return 'black'
      else return 'black'
    },
    getCanton(canton) {
      return canton == null ? 'ALL' : canton.uid.toUpperCase()
    },
    async getAgenda() {
      const query = gql`
        query getCalendar {
          calendars(limit: 3, locale: "fr-CH") {
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

      this.data = await this.$apollo
        .query({ query })
        .then(({ data }) => {
          if (process.env.dev) console.log(data)
          return data
        })
        .catch((e) => {
          if (process.env.dev) console.log(e)
        })

      this.calendars = this.data.calendars
    },

    async getNewsArticles() {
      const query = gql`
        query getNewsArticles {
          newsArticles(limit: 3, locale: "fr-CH") {
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

      this.newsArticles = await this.$apollo
        .query({ query })
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
            content {
              ... on ComponentContentHeadline {
                __typename
                id
                headline
                text
              }
              ... on ComponentContentTwoColsText {
                __typename
                id
                column_left
                column_right
              }
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
    },
  },
}
</script>
