<template>
  <div>
    <Headline class="mb-10 lg:mb-32">
      <template #headline> La musique adoucit le temps qui passe </template>
      <template #content>
        <i>Les Concerts du Cœur</i> proposent des moments de musique aux personnes qui ont difficilement accès aux salles de concerts traditionnelles, qu’il s’agisse de personnes âgées, hospitalisées,
        incarcérées, en situation de handicap ou de précarité.
      </template>
    </Headline>

    <div class="flex justify-between lg:mb-32">
      <Illustration class="w-1/3 pr-8">
        <template #image>
          <nuxt-link to="/vs/association">
            <img src="~/assets/img/illustrations/illustration1.svg" />
          </nuxt-link>
        </template>
        <template #label>{{ $t('canton').VS }}</template>
      </Illustration>

      <Illustration class="w-1/3 pr-8" color="green">
        <template #image>
          <nuxt-link to="/vd/association">
            <img src="~/assets/img/illustrations/illustration2.png" />
          </nuxt-link>
        </template>
        <template #label>{{ $t('canton').VD }}</template>
      </Illustration>

      <Illustration class="w-1/3" color="yellow">
        <template #image>
          <nuxt-link to="/ge/association">
            <img src="~/assets/img/illustrations/illustration3.svg" />
          </nuxt-link>
        </template>
        <template #label>{{ $t('canton').GE }}</template>
      </Illustration>
    </div>

    <div class="flex flex-col justify-between lg:flex-row">
      <Testimonial class="mb-10 lg:mr-20">
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

    <Headline class="mb-16">
      <template #headline> Actualités </template>
    </Headline>

    <div class="flex flex-col items-start justify-between mb-16 space-x-0 space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
      <InfoBlock v-for="item in newsArticles" :key="item.id" :color="getColor(item.canton_switch.canton)">
        <template #date>{{ $dateFns.format(new Date(item.date), 'dd.MM.yyyy') }}</template>
        <template #pretitle>{{ item.canton_switch.canton }}</template>
        <template #title>{{ item.title }}</template>
        <template #content>{{ item.content }}</template>
      </InfoBlock>
    </div>

    <Headline class="mb-16">
      <template #headline> Prochains concerts </template>
    </Headline>

    <div class="flex flex-col items-start justify-between space-x-0 space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
      <EventBlock v-for="item in calendars" :key="item.id" :color="getColor(item.canton_switch.canton)">
        <template #datetime>{{ $dateFns.format(new Date(item.date_time), 'dd.MM.yyyy' + ' | ' + 'HH:mm') }}</template>
        <template #pretitle>{{ item.location }}</template>
        <template #title>{{ item.title }} {{ getColor(item.canton_switch.canton) }}</template>
      </EventBlock>
    </div>

    <Divider class="my-16" />

    <Headline class="mb-8">
      <template #headline> Vous souhaitez organiser un concert … </template>
    </Headline>

    <div class="flex flex-col justify-between mb-12 lg:flex-row">
      <Sublink class="my-2 lg:my-0">
        <template #title>… en Valais?</template>
        <template #text>
          <nuxt-link to="/vs/artists/">découvrez nos musicien·nes·s</nuxt-link>
        </template>
      </Sublink>

      <Sublink class="my-2 lg:my-0" color="green">
        <template #title>… sur Vaud?</template>
        <template #text>> découvrez nos musicien·nes·s</template>
      </Sublink>

      <Sublink class="my-2 lg:my-0" color="yellow">
        <template #title>… sur Genève?</template>
        <template #text>> découvrez nos musicien·nes·s</template>
      </Sublink>
    </div>

    <HeadlineLink>
      <template #content>
        <a href="https://google.com">> Découvrez les différents types de concerts</a>
      </template>
    </HeadlineLink>

    <Divider class="my-16" />

    <div class="flex flex-col justify-between lg:flex-row">
      <div class="w-full">
        <Headline>
          <template #headline>Soutenez-nous …</template>
          <template #content>
            <p class="my-8 text-2xl">… en faisant un don</p>
            <p class="my-8 text-2xl">… en devenant bénévole</p>
            <p class="my-8 text-2xl">… en devenant membre</p>
          </template>
        </Headline>
      </div>
      <div class="w-full">
        <img class="mx-auto" src="~/assets/img/illustrations/illustration4.svg" />
      </div>
    </div>

    <Divider class="my-16" />

    <Partner class="mb-32">
      <template #title> En partenariat avec </template>
      <template #image>
        <img src="~/assets/img/partners/LMN.svg" />
      </template>
    </Partner>

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
import InfoBlock from '@/components/typography/InfoBlock.vue'
import EventBlock from '@/components/typography/EventBlock.vue'
import Sublink from '@/components/typography/Sublink.vue'
import HeadlineLink from '@/components/typography/HeadlineLink.vue'

import { gql } from 'graphql-tag'

export default {
  components: {
    Headline,
    Illustration,
    Testimonial,
    Carousel,
    InfoBlock,
    EventBlock,
    Divider,
    Sublink,
    HeadlineLink,
    Partner,
    Sponsors,
  },
  data() {
    return {
      images: ['https://placeimg.com/1920/1080/animals', 'https://placeimg.com/1920/1080/people', 'https://placeimg.com/1920/1080/architecture'],
      sponsors: [
        { img: require('~/assets/img/partners/Berthy.svg'), link: 'https://google.com' },
        { img: require('~/assets/img/partners/BS.svg'), link: 'https://google.com' },
        { img: require('~/assets/img/partners/Hemu.svg'), link: 'https://google.com' },
        { img: require('~/assets/img/partners/LR.svg'), link: 'https://google.com' },
        { img: require('~/assets/img/partners/M.svg'), link: 'https://google.com' },
        { img: require('~/assets/img/partners/prohelvetia.svg'), link: 'https://google.com' },
        { img: require('~/assets/img/partners/xbox.svg'), link: 'https://google.com' },
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
    },
    async getAgenda() {
      const query = gql`
        query getCalendar {
          calendars(limit: 3, locale: "de-CH") {
            id
            canton_switch {
              id
              canton
            }
            date_time
            title
            location
            details
            artist {
              id
              artists_list {
                id
                first_name
                last_name
                instrument
                website_link
              }
            }
          }
        }
      `

      this.calendars = await this.$apollo
        .query({ query })
        .then(({ data }) => {
          if (process.env.dev) console.log(data)
          return data
        })
        .catch((e) => {
          if (process.env.dev) console.log(e)
        })

      this.calendars = this.calendars.calendars
    },

    async getNewsArticles() {
      const query = gql`
        query getNewsArticles {
          newsArticles(limit: 3, locale: "de-CH") {
            id
            title
            date
            content
            canton_switch {
              id
              canton
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
          if (process.env.dev) window.console.log(data)
          return data
        })
        .catch((e) => {
          if (process.env.dev) window.console.log(e)
        })
    },
  },
}
</script>
