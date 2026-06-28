<template>
  <div>
    <Headline :title="$t('agenda').title" />

    <div class="md:flex flex-row justify-between items-end mb-5">
      <div>
        <div v-if="cantons" class="mb-3">
          <button
            v-for="canton in cantons"
            :key="canton.id"
            class="radio-button"
            :class="cantonFilter === canton.id && 'active'"
            @click="clickFilterCanton(canton.id)"
          >
            <span class="bullet"></span>
            {{ canton.name }}
          </button>
        </div>
        <div v-if="years" class="mb-3">
          <button
            v-for="year in years"
            :key="year"
            class="radio-button"
            :class="yearFilter === year && 'active'"
            @click="clickFilterYear(year)"
          >
            <span class="bullet"></span>
            <template v-if="year == 'archive'">
              {{ $t('agenda').archive }}
            </template>
            <template v-else>{{ year }}</template>
          </button>
        </div>
      </div>
      <div>
        <button
          class="transition-opacity duration-200"
          :class="{
            'opacity-0': yearFilter == '' && cantonFilter == '',
          }"
          @click="resetFilters()"
        >
          <span class="inline-block">✕</span>
          {{ $t('agenda').resetFilters }}
        </button>
      </div>
    </div>

    <div
      :class="{
        'content-loading': contentLoading,
        'content-loaded': !contentLoading,
      }"
    >
      <div
        class="py-4 text-4xl border-t border-b border-gray-600 font-playFair"
      >
        <template v-if="yearFilter == 'archive'">{{
          $t('agenda').archive
        }}</template>
        <template v-else-if="yearFilter">{{ yearFilter }}</template>
        <template v-else>{{ $t('agenda').nextConcerts }}</template>
      </div>

      <template v-if="data != null">
        <EventTeaser
          v-for="event in data.calendars"
          :key="event.id"
          class="py-6"
          :event="event"
        >
        </EventTeaser>
      </template>

      <nav
        v-if="totalPages > 1"
        class="flex items-center justify-start gap-1 py-8"
        aria-label="Pagination"
      >
        <button
          class="pagination-btn"
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
        >
          ‹
        </button>

        <button
          v-if="pageNumbers[0] > 1"
          class="pagination-btn"
          @click="goToPage(1)"
        >
          1
        </button>
        <span v-if="pageNumbers[0] > 2" class="px-1">…</span>

        <button
          v-for="page in pageNumbers"
          :key="page"
          class="pagination-btn"
          :class="{ active: page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>

        <span
          v-if="pageNumbers[pageNumbers.length - 1] < totalPages - 1"
          class="px-1"
          >…</span
        >
        <button
          v-if="pageNumbers[pageNumbers.length - 1] < totalPages"
          class="pagination-btn"
          @click="goToPage(totalPages)"
        >
          {{ totalPages }}
        </button>

        <button
          class="pagination-btn"
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
        >
          ›
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
import Headline from '~/components/dynamic/Headline.vue'
import EventTeaser from '@/components/pages/EventTeaser.vue'

import fetchConcerts from '~/graphql/fetchConcerts.gql'
import fetchCantons from '~/graphql/fetchCantons.gql'

export default {
  components: {
    Headline,
    EventTeaser,
  },
  data() {
    return {
      data: null,
      contentLoading: true,
      yearFilter: '',
      cantonFilter: 0,
      cantons: [],
      currentPage: 1,
      totalCount: 0,
      perPage: 100,
    }
  },
  async fetch() {
    await this.getAgenda()
  },
  head() {
    return {
      title: `${this.$t('agenda').title} — Les Concerts du Cœur`,
    }
  },
  apollo: {
    cantons: {
      variables() {
        return {
          locale: `${this.$i18n.locale}-CH`,
        }
      },
      query: fetchCantons,
      prefetch: true,
    },
  },

  fetchOnServer: false,

  computed: {
    years() {
      const currentYear = new Date().getFullYear()
      return [
        currentYear,
        currentYear - 1,
        currentYear - 2,
        currentYear - 3,
        'archive',
      ]
    },
    totalPages() {
      return Math.ceil(this.totalCount / this.perPage)
    },
    pageNumbers() {
      const pages = []
      const delta = 2
      for (
        let i = Math.max(1, this.currentPage - delta);
        i <= Math.min(this.totalPages, this.currentPage + delta);
        i++
      ) {
        pages.push(i)
      }
      return pages
    },
  },

  watch: {
    yearFilter() {
      this.currentPage = 1
      this.contentLoading = true
      setTimeout(() => {
        this.getAgenda()
      }, 300)
    },
    cantonFilter() {
      this.currentPage = 1
      this.contentLoading = true
      setTimeout(() => {
        this.getAgenda()
      }, 300)
    },
  },

  methods: {
    resetFilters() {
      this.yearFilter = ''
      this.cantonFilter = 0
      this.currentPage = 1
    },

    goToPage(page) {
      if (page < 1 || page > this.totalPages) return
      this.currentPage = page
      this.contentLoading = true
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setTimeout(() => {
        this.getAgenda()
      }, 300)
    },

    clickFilterCanton(canton) {
      if (this.cantonFilter !== canton) {
        this.cantonFilter = canton
      } else {
        this.cantonFilter = 0
      }
    },

    clickFilterYear(year) {
      if (this.yearFilter !== year) {
        this.yearFilter = year
      } else {
        this.yearFilter = ''
      }
    },

    async getAgenda() {
      const locale = this.$i18n.locale + '-CH'

      let sort = 'date_time:asc'

      const where = {}

      if (this.cantonFilter) {
        where.canton = parseInt(this.cantonFilter)
      }

      if (this.yearFilter) {
        if (this.yearFilter === 'archive') {
          sort = 'date_time:desc'
          where.date_time_lte = `${new Date().getFullYear() - 4}-12-31`
        } else {
          where.date_time_gte = `${this.yearFilter}-01-01`
          where.date_time_lte = `${this.yearFilter}-12-31`
        }
      } else {
        where.date_time_gte = new Date()
      }

      const variables = {
        sort,
        where: { ...where, locale, published_at_null: false },
        locale,
        limit: this.perPage,
        start: (this.currentPage - 1) * this.perPage,
      }

      this.data = await this.$apollo
        .query({ query: fetchConcerts, variables })
        .then(({ data }) => {
          this.totalCount = data.calendarsConnection?.aggregate?.count || 0
          this.contentLoading = false
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
.content-loading {
  opacity: 0;
  transition: opacity 0s;
}

.content-loaded {
  opacity: 1;
  transition: opacity 0.3s;
}

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

.pagination-btn {
  min-width: 2rem;
  height: 2rem;
  padding: 0 0.4rem;
  border: 1px solid black;
  font-size: 0.875rem;
  line-height: 1;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  &:hover:not(:disabled) {
    background-color: black;
    color: white;
  }

  &.active {
    background-color: black;
    color: white;
  }
}
</style>
