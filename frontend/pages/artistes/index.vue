<template>
  <div class="relative">
    <Headline :title="$t('artistes').title" />

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
      </div>
      <div>
        <button
          class="transition-opacity duration-200"
          :class="{
            'opacity-0': !cantonFilter,
          }"
          @click="resetFilters()"
        >
          <span class="inline-block">✕</span>
          {{ $t('agenda').resetFilters }}
        </button>
      </div>
    </div>

    <template v-if="!$fetchState.pending">
      <template v-if="musicGroups">
        <div
          class="gap-y-5 sm:gap-x-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:gap-5"
          :class="{
            'content-loading': contentLoading,
            'content-loaded': !contentLoading,
          }"
        >
          <ArtistTeaser
            v-for="artist in musicGroups"
            :key="artist.id"
            :data="artist"
          ></ArtistTeaser>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import Headline from '@/components/dynamic/Headline.vue'

import ArtistTeaser from '@/components/pages/ArtistTeaser.vue'

import fetchArtists from '~/graphql/fetchArtists.gql'
import fetchCantons from '~/graphql/fetchCantons.gql'

export default {
  components: {
    Headline,
    ArtistTeaser,
  },
  data() {
    return {
      musicGroups: [],
      contentLoading: true,
      popup: false,
      cantons: [],
    }
  },

  async fetch() {
    await this.getArtists()
  },
  head() {
    return {
      title: `${this.$t('artistes').title} — Les Concerts du Cœur`,
    }
  },
  computed: {
    cantonFilter: {
      get() {
        return this.$store.state.cantonFilter
      },
      set(value) {
        this.setCantonFilter(value)
      },
    },
    musicGroupSlugs: {
      get() {
        return this.$store.state.musicGroupSlugs
      },
      set(value) {
        this.setMusicGroupSlugs(value)
      },
    },
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
    cantonFilter(newFilter) {
      this.contentLoading = true
      this.getArtists(newFilter)
    },
  },
  mounted() {
    this.getArtists(this.cantonFilter)
  },

  methods: {
    ...mapMutations({
      setCantonFilter: 'setCantonFilter',
      setMusicGroupSlugs: 'setMusicGroupSlugs',
    }),
    resetFilters() {
      this.cantonFilter = 0
    },
    clickFilterCanton(canton) {
      if (this.cantonFilter !== canton) {
        this.cantonFilter = canton
        this.$store.commit('setCantonFilter', canton)
      } else {
        this.$store.commit('setCantonFilter', 0)
      }
    },
    getArtists(cantonFilter) {
      const locale = this.$i18n.locale + '-CH'

      const where = {
        archive: false,
      }

      if (cantonFilter) {
        where.cantons_contains = parseInt(cantonFilter)
      }

      const variables = {
        where,
        locale,
      }

      this.$apollo
        .query({ query: fetchArtists, variables })
        .then(({ data }) => {
          this.contentLoading = false
          this.musicGroups = data.musicGroups
          this.musicGroupSlugs = this.musicGroups.map((group) => {
            return { slug: group.slug, name: group.name }
          })
          this.$store.commit('setMusicGroupSlugs', this.musicGroupSlugs)
        })
        .catch((e) => {
          // handle error
        })
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
