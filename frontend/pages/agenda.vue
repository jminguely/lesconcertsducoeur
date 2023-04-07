<template>
  <div>
    <Headline title="Agenda" />

    <div class="flex flex-row justify-between items-end mb-20">
      <div>
        <div v-if="cantons" class="mb-3">
          <button
            v-for="canton in cantons"
            :key="canton.id"
            class="radio-button"
            :class="cantonFilter === canton.id && 'active'"
            @click="cantonFilter = canton.id"
          >
            <span class="bullet"></span>
            {{ canton.name }}
          </button>
        </div>
        <div v-if="years">
          <button
            v-for="year in years"
            :key="year"
            class="radio-button"
            :class="yearFilter === year && 'active'"
            @click="yearFilter = year"
          >
            <span class="bullet"></span>
            {{ year }}
          </button>
        </div>
      </div>
      <div>
        <button
          class="transition-opacity duration-200"
          :class="{
            'opacity-0':
              yearFilter == new Date().getFullYear() && cantonFilter == '',
          }"
          @click="resetFilters()"
        >
          <span class="transform rotate-45 inline-block">🞢</span>
          {{ $t('agenda').resetFilters }}
        </button>
      </div>
    </div>

    <div class="py-4 text-4xl border-t border-b border-gray-600 font-playFair">
      {{ yearFilter }}
    </div>

    <template v-if="data != null">
      <EventDetails
        v-for="event in data.calendars"
        :key="event.id"
        class="py-6"
        :event="event"
      >
      </EventDetails>
    </template>
  </div>
</template>

<script>
import Headline from '~/components/dynamic/Headline.vue'
import EventDetails from '@/components/typography/EventDetails.vue'

import fetchConcerts from '~/graphql/fetchConcerts.gql'
import fetchCantons from '~/graphql/fetchCantons.gql'

export default {
  components: {
    Headline,
    EventDetails,
  },
  apollo: {
    cantons: {
      query: fetchCantons,
      prefetch: true,
    },
  },
  data() {
    return {
      data: null,
      yearFilter: new Date().getFullYear(),
      cantonFilter: '',
      cantons: [],
    }
  },

  fetchOnServer: false,
  async fetch() {
    await this.getAgenda()
  },

  computed: {
    years() {
      const currentYear = new Date().getFullYear()
      return [currentYear, currentYear - 1, currentYear - 2, 'Archives']
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

  methods: {
    resetFilters() {
      this.yearFilter = new Date().getFullYear()
      this.cantonFilter = ''
    },

    async getAgenda() {
      const locale = this.$i18n.locale + '-CH'
      const canton = this.cantonFilter

      let where = {}
      if (this.cantonFilter === '')
        where =
          this.yearFilter === ''
            ? { date_time_gte: new Date() }
            : {
                date_time_gte: `${this.yearFilter}-01-01`,
                date_time_lte: `${this.yearFilter}-12-31`,
              }
      else
        where =
          this.yearFilter === ''
            ? { date_time_gte: new Date(), canton }
            : {
                date_time_gte: `${this.yearFilter}-01-01`,
                date_time_lte: `${this.yearFilter}-12-31`,
                canton,
              }

      const variables = {
        where,
        locale,
      }

      this.data = await this.$apollo
        .query({ query: fetchConcerts, variables })
        .then(({ data }) => {
          // if (process.env.dev) console.log(data)
          return data
        })
        .catch((e) => {
          // if (process.env.dev) console.log(e)
        })
    },
  },
}
</script>

<style lang="postcss" scoped>
.radio-button {
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;

  &.active::after {
    transform: translateY(-40%) scale(1);
  }

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-40%);
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 0.5rem;
  }

  &::before {
    border: 1px solid black;
  }

  &::after {
    border: 0;
    background: black;
    transform: translateY(-40%) scale(0);
    transition: transform 0.2s ease;
  }
}
</style>
