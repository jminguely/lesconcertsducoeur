<template>
  <div>
    {{ content }}
    <Headline class="mb-10 lg:mb-36">
      <template #headline> La musique adoucit le temps qui passe </template>
      <template #content>
        L’association Les Concerts du Coeur souhaite inscrire la musique dans le quotidien des personnes âgées, des personnes hospitalisées, incarcérées ou défavorisées afin d’essayer de rompre
        quelque peu leur isolement en partageant de l’émotion, par le biais d'ateliers musicaux, de concerts de qualité et d’une interaction avec les artistes.
      </template>
    </Headline>

    <div class="flex justify-between">
      <Illustration class="w-1/3 pr-8">
        <template #image>
          <nuxt-link to="/vs/association">
            <img src="~/assets/img/illustrations/illustration1.svg" />
          </nuxt-link>
        </template>
        <template #label>Valais</template>
      </Illustration>

      <Illustration class="w-1/3 pr-8" color="green">
        <template #image>
          <nuxt-link to="/vd/association">
            <img src="~/assets/img/illustrations/illustration2.png" />
          </nuxt-link>
        </template>
        <template #label>Vaud</template>
      </Illustration>

      <Illustration class="w-1/3" color="yellow">
        <template #image>
          <nuxt-link to="/ge/association">
            <img src="~/assets/img/illustrations/illustration3.svg" />
          </nuxt-link>
        </template>
        <template #label>Genève</template>
      </Illustration>
    </div>

    <div class="flex flex-col justify-between mt-24 lg:flex-row">
      <Testimonial class="lg:mr-20">
        <template #quote>
          Nous sommes persuadés que les performances des artistes lyriques au sein de nos établissements sauront contribuer à permettre à bon nombre de nos patients de faire mieux face de leur maladie
          notamment en rendant leur séjour hospitalier plus humain. L'Hôpital du Valais soutient donc avec enthousiasme cette magnifique initiative.
        </template>

        <template #name> Eric Bonvin </template>

        <template #title> Directeur des Hôpitaux du Valais </template>
      </Testimonial>

      <Testimonial class="mb-5 lg:mb-0">
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

    <div class="flex flex-col items-start justify-between mb-16 lg:flex-row">
      <InfoBlock class="mb-5 lg:mb-0 lg:w-1/3 lg:mr-8" color="black">
        <template #date>23.03.20</template>
        <template #pretitle>général</template>
        <template #title>Concerts virtuels en temps de pandémie</template>
        <template #content>Nous vous proposons un nouveau type de concert pour contrer les restrictions de la pandémie.</template>
      </InfoBlock>

      <InfoBlock class="mb-5 lg:mb-0 lg:w-1/3 lg:mr-8" color="yellow">
        <template #date>11.02.21</template>
        <template #pretitle>Genève</template>
        <template #title>Bienvenue aux Genvois!</template>
        <template #content>Nous sommes ravis d’accueillir Genève en tant que nouvelle région parmi nos rangs.</template>
      </InfoBlock>

      <InfoBlock color="green" class="lg:w-1/3">
        <template #date>24.12.20</template>
        <template #pretitle>Vaud</template>
        <template #title>«Des notes pour réconforter les cœurs à Monthey»</template>
        <template #content>Article du 24.12.20 paru dans Le Nouvelliste.</template>
      </InfoBlock>
    </div>

    <Headline class="mb-16">
      <template #headline> Prochains concerts </template>
    </Headline>

    <div class="flex flex-col items-start justify-between lg:flex-row">
      <EventBlock class="mb-5 lg:mb-0 lg:w-1/3 lg:mr-8">
        <template #datetime>15.04.20 | 15:00 </template>
        <template #pretitle>Clinique Bernoise, Crans-Montana</template>
        <template #title>Récital de violon et violoncelle</template>
      </EventBlock>

      <EventBlock class="mb-5 lg:mb-0 lg:w-1/3 lg:mr-8" color="green">
        <template #datetime>15.04.20 | 15:00 </template>
        <template #pretitle>Home Salem, St-Légier</template>
        <template #title>Quintette FECIMEO</template>
      </EventBlock>

      <EventBlock color="yellow" class="lg:w-1/3">
        <template #datetime>15.04.20 | 15:00 </template>
        <template #pretitle>EMS La Rozavère, Lausanne</template>
        <template #title>Jazzbox</template>
      </EventBlock>
    </div>

    <Divider class="mb-10 mt-36" />

    <div>
      <Headline class="mb-24">
        <template #headline> Vous souhaitez organiser un concert … </template>
      </Headline>
    </div>

    <div class="flex flex-col justify-between mb-20 lg:flex-row">
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

    <HeadlineLink class="mb-14">
      <template #content>
        <a href="https://google.com">> Découvrez les différents types de concerts</a>
      </template>
    </HeadlineLink>

    <Divider class="mb-10" />

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

    <Divider class="mt-10 mb-36" />

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
    }
  },
  async fetch() {
    const getHomePageQuery = gql`
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
            ... on ComponentContentTwoColumnsRichText {
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
      .query({ query: getHomePageQuery })
      .then(({ data }) => {
        if (process.env.dev) window.console.log(data)
        return data
      })
      .catch((e) => {
        if (process.env.dev) window.console.log(e)
      })
  },
}
</script>
