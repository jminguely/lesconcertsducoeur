<template>
  <div>
    <Headline>
      <template #headline> {{ $t('medias').title }}</template>
    </Headline>

    <p class="text-xl font-newsCycle">{{ $t('medias').findUsOnSocialMedias }}</p>

    <div class="flex my-5">
      <SocialLink class="mr-2 lg:mr-4" name="facebook" link="https://www.facebook.com/concertsducoeur/" />
      <SocialLink name="instagram" link="https://www.instagram.com/lesconcertsducoeur/" />
    </div>

    <spacing />

    <Headline>
      <template #headline>
        <h1 class="text-4xl lg:text-5xl">Newsletters</h1>
      </template>
    </Headline>

    <div class="text-xl font-newsCycle">
      <p>
        <a
          href="https://lesconcertsducoeur.statslive.info/show-campaign-archived/eyJpdiI6ImxIekUzbzJiSTFFVnJPQkRad3dPMDRCUElwOWlCREVDaHRKVEplTnBnTFk9IiwidmFsdWUiOiJ0bHV5WEEyVVwvOGtweE1YbWJyM3pvZTN3UG1sUnlUWkRya3l6ZUgwc2p5WT0iLCJtYWMiOiI4ZWFkZWI5YjE4ODE0YzI3YmUwNjVkNThlMDVkMDRkODRhZDRkY2FjMTA4MWRiNjE2Y2VmOWY2Zjk0MjBkNzI5In0="
          target="_blank"
        >
          Newsletter No 6 | Rapport d’activité 2019 | 03.2020
        </a>
      </p>
      <p>
        <a
          href="https://lesconcertsducoeur.statslive.info/show-campaign-archived/eyJpdiI6IkZGMUtrYVFpVGowTFI2cXFDbHQrNnJkem1uWU5rOFlhMFh3QmtpUkN2K3M9IiwidmFsdWUiOiJmT1JyeTJIdnlwN1J3N2FLQ3BqekpHTDhzSTdPbGkxd1wvNmd5UlFcL1dMdFk9IiwibWFjIjoiMmRjOWE1NzY2OTNiOTFjN2MxZTBjNDdjMDA5OTE4MTY0NWMyYzQ0ZjhmMzdlYzNkNjlhZGVkYTYyZGI1ODgyZCJ9"
          target="_blank"
        >
          Newsletter No 5 | 11.2019
        </a>
      </p>
      <p>
        <a
          href="https://lesconcertsducoeur.statslive.info/show-campaign-archived/eyJpdiI6IlVYRXd1VzFlQksrMkdSa2hDSWhiS2g5MzNVSHVQMmlVRVNvYWNDWG1vSVE9IiwidmFsdWUiOiJueU5hR21aMUx6MFIxSWZCSFVtRUUyNlljTnNsand3WkhoQU9jYzJDZ2lrPSIsIm1hYyI6ImI2NTI1YjMyNDc4OGFiOTc2NWNmZmQxNjIxNDE0ODgxYzM0MzBjM2ExNDQyMzFjYmFiNzk4M2E0NDgxODI0NGYifQ=="
          target="_blank"
        >
          Newsletter No 4 | Rapport d’activité 2018 | 07.2019
        </a>
      </p>
      <p>
        <a
          href="https://lesconcertsducoeur.statslive.info/show-campaign-archived/eyJpdiI6ImxtSWxBdXRpYzRrdkpNdWt4TWlTMDlXaHNMajlhOGhkcm4yNVdWRGdcL09ZPSIsInZhbHVlIjoia3FCd2Q4RDZWbmV2eHY4Rm1aU0haZlUxcnE5ekk1OTA2NERkeStKU0ZxZz0iLCJtYWMiOiJjNjlmYmRmYWVjMjk3OTlkNjdjYWMzNzJjZGI5ZTg5ODhhNzYwM2Y0MmI3YjQ2ZWJhNzkwOTYzYjg2NGUxMGQ2In0="
          target="_blank"
        >
          Newsletter No 3 | 04.2019
        </a>
      </p>
    </div>

    <spacing />

    <Headline>
      <template #headline>
        <span class="text-4xl lg:text-5xl">Presse</span>
      </template>
    </Headline>

    <div class="grid grid-cols-1 sm:gap-x-10 sm:grid-cols-2 sm:gap-y-5">
      <div v-for="item in links" :key="item.title" class="text-xl">
        <p>
          <a :href="item.link" target="_blank" v-html="item.title"></a><br />
          {{ item.subtitle }} – {{ item.date }}
        </p>
      </div>
    </div>

    <spacing />

    <Headline class="mb-4">
      <template #headline>{{ $t('medias').images }}</template>
    </Headline>

    <div class="">
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
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import Headline from '@/components/typography/Headline.vue'
import SocialLink from '@/components/pages/SocialLink.vue'
import Spacing from '@/components/typography/Spacing.vue'
import Carousel from '@/components/pages/Carousel.vue'

export default {
  components: {
    Headline,
    Carousel,
    SocialLink,
    Spacing,
  },
  data() {
    return {
      content: null,
      links: [
        {
          title: 'Les Concerts du Cœur: La musique pour tous et toutes',
          subtitle: "L'Agenda, édition 97",
          date: 'juillet-août 2022',
          link: 'https://api.lesconcertsducoeur.ch/uploads/L_Agenda_97_Concerts_du_coeur_5431529437.pdf/',
        },
        {
          title: 'Singen und meinen Körper fühlen: Im Gespräch mit der Sopranistin Laure Barras',
          subtitle: 'Kanal9',
          date: '31 mai 2022',
          link: 'https://canal9.ch/de/singen-und-meinen-korper-fuhlen-im-gesprach-mit-der-sopranistin-laure-barras/',
        },
        {
          title: 'Les Concerts du Coeur fêtent leur cinq centième',
          subtitle: 'Radio RTS',
          date: '16 avril 2022',
          link: 'https://www.rts.ch/audio-podcast/2022/audio/les-concerts-du-coeur-fetent-leur-cinq-centieme-25816624.html',
        },
        {
          title: 'Les Concerts du Cœur: la musique à portée de tous',
          subtitle: 'Léman Bleu',
          date: '1 avril 2022',
          link: 'https://www.lemanbleu.ch/fr/Actualites/Geneve/2022040193277-Les-Concerts-du-Coeur-la-musique-a-portee-de-tous.html',
        },
        {
          title: '550e Concert du cœur, une success story valaisanne',
          subtitle: 'Le Nouvelliste',
          date: '1 avril 2022',
          link: 'https://api.lesconcertsducoeur.ch/uploads/Nouvelliste_2022_d003ea20d6.pdf',
        },
        {
          title: 'La musique adoucit la vie',
          subtitle: 'Journal de Sierre',
          date: '27 janvier 2017',
          link: 'https://api.lesconcertsducoeur.ch/uploads/Cd_C_JDS_270117_1_a63027ba80.pdf',
        },
        {
          title: 'La musique adoucit le temps qui passe',
          subtitle: 'Le Nouvelliste',
          date: '14 février 2017',
          link: 'https://api.lesconcertsducoeur.ch/uploads/Cd_C_Nouvelliste_140217_1_40d4e255b2.pdf',
        },
        {
          title: 'Les notes à la rencontre des isolés',
          subtitle: 'Le Nouvelliste: Supplément Culture',
          date: '5 octobre 2017',
          link: 'https://api.lesconcertsducoeur.ch/uploads/Cd_C_Le_Nouvelliste_supplement_Culture_05102017_81a3ec5f09.pdf',
        },
        {
          title: 'L’univers de la chanteuse lyrique valaisanne Laure Barras',
          subtitle: "RTS, La Puce à l'Oreille",
          date: '14 décembre 2017',
          link: 'https://www.rts.ch/play/tv/la-puce-a-loreille/video/lunivers-de-la-chanteuse-lyrique-valaisanne-laure-barras?id=9175995&station=a83f29dee7a5d0d3f9fccdb9c92161b1afb512db',
        },
        {
          title: 'Présentation des <i>Concerts du Cœur</i>',
          subtitle: 'Canal9',
          date: '15 décembre 2017',
          link: 'http://canal9.ch/les-concerts-du-coeur-la-soprano-valaisanne-laure-barras-amene-la-musique-classique-dans-les-ems-et-les-hopitaux/',
        },
        {
          title: 'L’art lyrique en partage',
          subtitle: 'Espace 2, Nectar',
          date: '11 janvier 2018',
          link: 'https://www.rts.ch/play/radio/nectar/audio/lart-lyrique-en-partage?id=9206125&station=a83f29dee7a5d0d3f9fccdb9c92161b1afb512db',
        },
        {
          title: 'Nez à nez avec Laure Barras',
          subtitle: 'Espace 2',
          date: '13 janvier 2018',
          link: 'https://www.rts.ch/play/radio/nez-a-nez/audio/nez-a-nez-avec-laure-barras?id=9210314&station=a83f29dee7a5d0d3f9fccdb9c92161b1afb512db',
        },
        {
          title: 'La musique pour les défavorisés',
          subtitle: 'Le Temps: Spécial Forum des 100',
          date: '24 mai 2018',
          link: 'https://api.lesconcertsducoeur.ch/uploads/CDC_article_Le_TEMPS_100_Forum_116a5bd52d.pdf',
        },
        {
          title: 'Des concerts pour un peu de baume au cœur',
          subtitle: 'Contact Magazine, Hôpital du Valais',
          date: '15 juillet 2018',
          link: 'https://api.lesconcertsducoeur.ch/uploads/CDC_article_contact_magazine_hoptital_valais_084c493fb5.pdf',
        },
        {
          title: '<i>Les Concerts du Cœur</i>',
          subtitle: 'Journal La Source',
          date: '5 octobre 2018',
          link: 'https://api.lesconcertsducoeur.ch/uploads/CDC_article_journal_la_source_82c3453d57.pdf',
        },
        {
          title: 'La musique adoucit les soins',
          subtitle: 'Le Nouvelliste',
          date: '29 janvier 2019',
          link: 'https://api.lesconcertsducoeur.ch/uploads/Cd_C_Le_Nouvelliste_La_musique_adoucit_les_soins_29012019_compressed_komprimiert_c5601fe81c.pdf',
        },
        {
          title: '<i>Les Concerts du Cœur</i>: Laure Barras et ses musiciens amènent la musique auprès de ceux qui ne peuvent se rendre aux concerts',
          subtitle: 'Canal9',
          date: '6 février 2019',
          link: 'http://canal9.ch/concerts-du-coeur-laure-barras-et-ses-musiciens-amenent-la-musique-aupres-de-ceux-qui-ne-peuvent-se-rendre-aux-concerts/',
        },
        {
          title: '<i>Les Concerts du Cœur</i>',
          subtitle: 'Die Falte',
          date: 'Février 2021',
          link: 'https://api.lesconcertsducoeur.ch/uploads/die_falte_article_1ddbb8311a.pdf',
        },
        {
          title: '<i>Les Concerts du Cœur</i>',
          subtitle: 'Bénévolat-Vaud (publication Facebook)',
          date: '2 décembre 2019',
          link: 'https://www.facebook.com/benevolatvaud/videos/541329486721330/',
        },
        {
          title: 'La Puce au cœur… de Cœur à Cœur à Sion',
          subtitle: 'RTS, La Puce à l’Oreille',
          date: '19 décembre 2019',
          link: 'https://www.rts.ch/play/tv/la-puce-a-loreille/video/la-puce-au-cur----de-cur-a-cur-a-sion?id=10959223&startTime=2335',
        },
        {
          title: '<i>Les Concerts du Cœur</i> en Valais',
          subtitle: 'Paris Match',
          date: '17 février 2020',
          link: 'https://api.lesconcertsducoeur.ch/uploads/CDC_presse_paris_Match_02172020_compressed_988ac1a0df.pdf',
        },
        {
          title: 'Coronavirus: les aînés apprécient des concerts privés sur un iPad',
          subtitle: 'Le Nouvelliste',
          date: '6 mai 2020',
          link: 'https://api.lesconcertsducoeur.ch/uploads/Cd_C_Le_Nouvelliste_coronavirs_07052020_compressed_da2af00cf0.pdf',
        },
        {
          title: 'Les Concerts du Coeur Vaudois avec Mary Rose',
          subtitle: 'LFM',
          date: '16 décembre 2020',
          link: 'https://www.lfm.ch/podcasts/morax-dans-la-radio-faites-nous-rever-16122020-0655/',
        },
        {
          title: 'Des notes pour réconforter les cœurs à Monthey',
          subtitle: 'Le Nouvelliste',
          date: '24 décembre 2020',
          link: 'https://api.lesconcertsducoeur.ch/uploads/article_castalie_25a7ba189f.pdf',
        },
        {
          title: 'Présentation des <i>Concerts du Cœur Genevois</i>',
          subtitle: 'Radio Cité Genève',
          date: '22 mars 2021',
          link: 'https://www.podcastics.com/player/playlist/904/?s=15',
        },
        {
          title: 'Présentation des Concerts du Cœur',
          subtitle: 'Rhône FM',
          date: '24 mars 2021',
          link: 'https://www.culturevalais.ch/fr/offre-culturelle/emission-rhone-fm-/les-concerts-du-coeur-999',
        },
        {
          title: 'Lancement de l’association genevoise des <i>Concerts du Cœur</i>',
          subtitle: 'Le Lancéen',
          date: 'Avril 2021',
          link: 'https://www.lancy.ch/sites/default/files/arborescence/AUTRES/Le%20Lanc%C3%A9en/238-le-lanceen-avril-21_web_sans_pages_pub.pdf',
        },
      ],
    }
  },

  fetchOnServer: false,

  async fetch() {
    await this.getContent()
  },
  methods: {
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
