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

    <DateDivider>
      <template #date>2021</template>
    </DateDivider>

    <!-- {{ calendars }} -->
    <template v-if="calendars != null">
      <EventDetails v-for="item in calendars.calendars" :key="item.id + item.title" class="py-12" :color="getColor(item.canton_switch.canton)">
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
      calendars: null,
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

      // this.calendars = this.calendars.calendars
    },
  },
}
</script>
