<template>
  <div>
    <Headline class="pb-12">
      <template #headline>Agenda</template>
    </Headline>

    <div class="flex flex-col justify-items-start font-playFair text-xl items-start space-y-4 mb-16 lg:space-y-0 lg:flex-row lg:space-x-8">
      <ClassicSelect :options="cantons" :selected-item.sync="cantonFilter">
        <template #label>Région</template>
      </ClassicSelect>
      <ClassicSelect :options="years" :selected-item.sync="yearFilter">
        <template #label>Concerts passés </template>
      </ClassicSelect>
      <a class="cursor-pointer" @click="resetFilters()">Réinitialiser Filtre</a>
    </div>

    <DateDivider>
      <template #date>2021</template>
    </DateDivider>

    <template v-if="data != null">
      <EventDetails v-for="item in data.calendars" :key="item.id + item.title" class="py-6" :canton="getColor(getCanton(item.canton))">
        <template #date>{{ $dateFns.format(new Date(item.date_time), 'dd.MM.yyyy' + ' | ' + 'HH:mm') }}</template>
        <template #location>{{ item.location }}</template>
        <template #title>{{ item.title }} </template>
        <template #artists>
          <template v-if="item.music_group != null">
            <div v-for="artist in item.music_group.artists" :key="artist.id + artist.first_name">
              <span>{{ artist.first_name }} {{ artist.last_name }}</span>
              <span>|</span>
              <span>{{ artist.instrument }}</span>
            </div>
          </template>
          <template v-else>
            <div v-for="artist in item.artists" :key="artist.id + artist.first_name">
              <span>{{ artist.first_name }} {{ artist.last_name }}</span>
              <span>|</span>
              <span>{{ artist.instrument }}</span>
            </div>
          </template>
        </template>
        <template #details>
          <!-- {{ item.details }} -->
        </template>
      </EventDetails>
    </template>
  </div>
</template>

<script>
import Headline from '@/components/typography/Headline.vue'
import DateDivider from '@/components/typography/DateDivider.vue'
import EventDetails from '@/components/typography/EventDetails.vue'
import ClassicSelect from '@/components/pages/ClassicSelect.vue'

import { gql } from 'graphql-tag'

export default {
  components: {
    Headline,
    DateDivider,
    EventDetails,
    ClassicSelect,
  },
  data() {
    return {
      data: null,
      yearFilter: '',
      cantonFilter: '',
    }
  },

  async fetch() {
    await this.getAgenda()
  },

  computed: {
    years() {
      return ['2021', '2020', '2019', '2018', '2017', '2016']
    },
    cantons() {
      return ['VS', 'VD', 'GE']
    },
  },

  watch: {
    async yearFilter() {
      await this.getAgenda()
    },
    async cantonFilter() {
      await this.getAgenda()
    },
  },

  mounted() {},

  methods: {
    resetFilters() {
      this.yearFilter = ''
      this.cantonFilter = ''
    },
    handleYears(el) {
      console.log(el)
    },
    getColor(canton) {
      if (canton === 'VS') return 'vs'
      if (canton === 'VD') return 'vd'
      if (canton === 'GE') return 'ge'
      if (canton === 'ALL') return 'all'
    },
    getCanton(canton) {
      return canton == null ? 'ALL' : canton.uid
    },
    getCantonID(canton) {
      if (canton === 'ALL') return 1
      if (canton === 'VS') return 2
      if (canton === 'VD') return 3
      if (canton === 'GE') return 4
    },
    async getAgenda() {
      const query = gql`
        query getCalendar($locale: String, $where: JSON) {
          calendars(sort: "date_time:asc", locale: $locale, where: $where) {
            id
            canton {
              uid
            }
            date_time
            title
            location
            details
            artists {
              first_name
              last_name
              instrument
            }
            music_group {
              id
              artists {
                id
                first_name
                last_name
                instrument
              }
            }
          }
        }
      `
      const locale = this.$i18n.locale + '-CH'
      const canton = this.getCantonID(this.cantonFilter)

      let where = {}
      if (this.cantonFilter === '') where = this.yearFilter === '' ? { date_time_gte: new Date() } : { date_time_gte: `${this.yearFilter}-01-01`, date_time_lte: `${this.yearFilter}-12-31` }
      else where = this.yearFilter === '' ? { date_time_gte: new Date(), canton } : { date_time_gte: `${this.yearFilter}-01-01`, date_time_lte: `${this.yearFilter}-12-31`, canton }

      const variables = {
        // date_time: this.$dateFns.formatISO(new Date()),
        where,
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
