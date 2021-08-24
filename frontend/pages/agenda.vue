<template>
  <div>
    <Headline class="pb-12">
      <template #headline>Agenda</template>
    </Headline>

    <div class="flex flex-col justify-items-start font-playFair items-start text-xl lg:flex-row lg:space-x-8 lg:mb-16">
      <!-- <ClassicSelect :options="years">
        <template #label> à venir </template>
      </ClassicSelect>

      <ClassicSelect :options="['Sélection']">
        <template #label> Filtre </template>
      </ClassicSelect> -->

      <ClassicSelect :options="['Valais', 'Vaud', 'Genève']">
        <template #label> Région </template>
      </ClassicSelect>
      <ClassicSelect :options="years">
        <template #label>Concerts passés </template>
      </ClassicSelect>
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
          <template v-if="item.artists != null">
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
    }
  },

  async fetch() {
    await this.getAgenda()
  },

  computed: {
    years() {
      return [2016, 2017, 2018, 2019, 2020, 2021]
    },
  },

  mounted() {},

  methods: {
    getColor(canton) {
      if (canton === 'VS') return 'vs'
      if (canton === 'VD') return 'vd'
      if (canton === 'GE') return 'ge'
      if (canton === 'ALL') return 'all'
    },
    getCanton(canton) {
      return canton == null ? 'ALL' : canton.uid
    },
    async getAgenda() {
      const query = gql`
        query getCalendar($locale: String, $date_time: DateTime) {
          calendars(sort: "date_time:asc", locale: $locale, where: { date_time_gte: $date_time }) {
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
          }
        }
      `
      const locale = this.$i18n.locale + '-CH'

      const variables = {
        date_time: this.$dateFns.formatISO(new Date()),
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
