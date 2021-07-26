<template>
  <div>
    <Headline class="pb-12">
      <template #headline> Agenda </template>
    </Headline>

    <!-- <div class="flex flex-col justify-items-start font-playFair items-start text-2xl lg:flex-row lg:space-x-8 lg:mb-16">
      <ClassicSelect :options="years">
        <template #label> à venir </template>
      </ClassicSelect>

      <ClassicSelect :options="['Sélection']">
        <template #label> Filtre </template>
      </ClassicSelect>

      <ClassicSelect :options="['Valais', 'Vaud', 'Genève']">
        <template #label> région </template>
      </ClassicSelect>
      <ClassicSelect :options="years">
        <template #label> à venir passés </template>
      </ClassicSelect>
    </div> -->
    <!-- {{ wpPosts[2] }} -->
    <!-- {{ wpPosts[2].data }} -->
    <!-- {{ agendaPosts }} -->
    {{ fromHex('454d53206c6120436861726d6169652c20436f6c6c6f6d626579') }}
    <!-- Get Hex from meta_value that can then be piped to "fromHex" -->
    {{ wpPostmeta[2].data[1].meta_value.substr(2) }}
    {{ meta_posts[300] }}
    <!-- {{ agendaPostmeta }} -->
    <!-- {{ wpPostmeta[2].data }} -->
    <!-- <div v-for="(event, i) in agendaPosts" :key="`post-${i}`" class="py-2">
      {{ event }}
    </div> -->
    <DateDivider>
      <template #date>2021</template>
    </DateDivider>

    <template v-if="data != null">
      <EventDetails v-for="item in data.calendars" :key="item.id + item.title" class="py-12" :color="getColor(getCanton(item.canton))">
        <template #date>{{ $dateFns.format(new Date(item.date_time), 'dd.MM.yyyy' + ' | ' + 'HH:mm') }}</template>
        <template #location>{{ item.location }}</template>
        <template #title>{{ item.title }} </template>
        <template #artists>
          <template v-if="item.artist != null">
            <div v-for="artist in item.artist.artists_list" :key="artist.id + artist.first_name">
              <span>{{ artist.first_name }} {{ artist.last_name }}</span>
              <span>|</span>
              <span>{{ artist.instrument }}</span>
            </div>
          </template>
        </template>
        <template #details>
          {{ item.details }}
        </template>
      </EventDetails>
    </template>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import DateDivider from '@/components/typography/DateDivider.vue'
import EventDetails from '@/components/typography/EventDetails.vue'
import wpPosts from '@/assets/wp_posts.json'
import wpPostmeta from '@/assets/wp_postmeta.json'
// import ClassicSelect from '@/components/pages/ClassicSelect.vue'

import { gql } from 'graphql-tag'

export default {
  components: {
    Headline,
    // ClassicSelect,
    DateDivider,
    EventDetails,
  },
  data() {
    return {
      wpPosts,
      wpPostmeta,
      data: null,
      meta_posts: [],
    }
  },

  async fetch() {
    await this.getAgenda()
  },

  computed: {
    years() {
      return [2016, 2017, 2018, 2019, 2020, 2021]
    },
    agendaPosts() {
      return this.wpPosts[2].data.filter((el) => el.post_type === 'agenda')
    },
    agendaPostsID() {
      return this.wpPosts[2].data.filter((el) => el.post_type === 'agenda').map((el) => el.ID)
    },
    agendaPostmeta() {
      const agendaPostmeta = []
      for (const item of this.wpPostmeta[2].data) {
        console.log(item)
        if (this.agendaPostsID.includes(item.post_id)) {
          item.meta_value = item.meta_value.substr(2, item.meta_value.length)
          item.meta_value = this.fromHex(item.meta_value)
          agendaPostmeta.push(item)
        }
      }
      return agendaPostmeta
    },
  },

  mounted() {
    this.regroupMetaPosts(this.wpPostmeta[2].data)
  },

  methods: {
    regroupMetaPosts(posts) {
      let j = 0
      this.meta_posts.push([])
      for (let i = 0; i < posts.length; i++) {
        posts[i].meta_value = this.fromHex(posts[i].meta_value.substr(2))
        if (i + 1 < posts.length) {
          if (posts[i].post_id !== posts[i + 1].post_id) {
            this.meta_posts.push([])
            j++
          } else {
            this.meta_posts[j].push(posts[i])
          }
        } else {
          this.meta_posts[j].push(posts[i])
        }
      }
    },
    fromHex(h) {
      let s = ''
      for (let i = 0; i < h.length; i += 2) {
        s += String.fromCharCode(parseInt(h.substr(i, 2), 16))
      }
      return decodeURIComponent(escape(s))
    },
    getColor(canton) {
      if (canton === 'VS') return 'red'
      if (canton === 'VD') return 'green'
      if (canton === 'GE') return 'yellow'
      if (canton === 'ALL') return 'black'
    },
    getCanton(canton) {
      return canton == null ? 'ALL' : canton.uid
    },
    async getAgenda() {
      const query = gql`
        query getCalendar($locale: String) {
          calendars(locale: $locale) {
            id
            canton {
              uid
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
      const locale = this.$i18n.locale + '-CH'

      const variables = {
        locale,
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
    },
  },
}
</script>
