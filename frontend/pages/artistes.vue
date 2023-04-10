<template>
  <div class="relative">
    <Headline :title="$t('artistes').title" />

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
      </div>
      <div>
        <button
          class="transition-opacity duration-200"
          :class="{
            'opacity-0': cantonFilter == '',
          }"
          @click="resetFilters()"
        >
          <span class="transform rotate-45 inline-block">🞢</span>
          {{ $t('agenda').resetFilters }}
        </button>
      </div>
    </div>

    <template v-if="!$fetchState.pending">
      <template v-if="data != null">
        <div
          class="gap-y-5 sm:gap-x-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5"
          :class="{
            'content-loading': contentLoading,
            'content-loaded': !contentLoading,
          }"
        >
          <ArtistTeaser
            v-for="artist in data"
            :key="artist.id"
            :data="artist"
            @click.native="openPopup(artist)"
          ></ArtistTeaser>
        </div>
        <ArtistPopup
          :class="{ hidden: !popup }"
          :data="data"
          :item.sync="selected"
          :popup.sync="popup"
          @closePopup="closePopup"
        />
      </template>
    </template>
  </div>
</template>

<script>
import Headline from '@/components/dynamic/Headline.vue'

import ArtistTeaser from '@/components/pages/ArtistTeaser.vue'
import ArtistPopup from '@/components/pages/ArtistPopup.vue'

import fetchArtists from '~/graphql/fetchArtists.gql'
import fetchCantons from '~/graphql/fetchCantons.gql'

export default {
  components: {
    Headline,
    ArtistTeaser,
    ArtistPopup,
  },
  data() {
    return {
      data: null,
      bodyClass: '',
      selected: {},
      contentLoading: true,
      popup: false,
      cantonFilter: 0,
      cantons: [],
    }
  },

  async fetch() {
    await this.getArtists()
  },
  head() {
    return {
      bodyAttrs: {
        class: `${this.bodyClass}`,
      },
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

  watch: {
    cantonFilter() {
      this.contentLoading = true
      setTimeout(() => {
        this.getArtists()
      }, 300)
    },
  },

  methods: {
    openPopup(item) {
      this.selected = item
      this.popup = true
      setTimeout(() => {
        this.bodyClass = 'popup-open'
      }, 500)
    },
    closePopup() {
      this.bodyClass = ''
      this.popup = false
    },
    resetFilters() {
      this.cantonFilter = 0
    },
    async getArtists() {
      const locale = this.$i18n.locale + '-CH'

      const where = {}

      if (this.cantonFilter) {
        where.cantons_contains = parseInt(this.cantonFilter)
      }

      const variables = {
        where,
        locale,
      }

      const queryData = await this.$apollo
        .query({ query: fetchArtists, variables })
        .then(({ data }) => {
          // if (process.env.dev) console.log(data)
          this.contentLoading = false
          return data
        })
        .catch((e) => {
          // if (process.env.dev) console.log(e)
        })

      const musicGroups = queryData.musicGroups

      this.data = musicGroups
    },
  },
}
</script>

<style lang="postcss" scoped>
.content-loading {
  opacity: 0;
  transition: opacity 0.3s;
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
</style>
