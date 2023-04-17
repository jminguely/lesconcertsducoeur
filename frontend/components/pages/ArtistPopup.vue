<template>
  <div :class="{ 'popup-open': popup }" class="popup">
    <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row">
      <div class="z-10 flex justify-between lg:block lg:w-1/5">
        <div
          class="popup-sidebar lg:flex-shrink flex items-center lg:block lg:w-full lg:flex-col lg:static lg:mt-4"
        >
          <button class="flex my-2 focus:outline-none" @click="closePopup()">
            <span class="inline-block">✕</span>
          </button>
          <button
            class="flex my-2 mr-4 focus:outline-none lg:mr-0"
            @click="goBack()"
          >
            <span class="font-bold">‹</span>
            <template v-if="data[previousIndex] != null">
              <span class="pl-2 hidden text-left lg:block">
                <template
                  v-if="
                    data[previousIndex].first_name != null &&
                    data[previousIndex].last_name
                  "
                >
                  {{ data[previousIndex].first_name }}
                  {{ data[previousIndex].last_name }}
                </template>
                <template v-if="data[previousIndex].name != null">
                  {{ data[previousIndex].name }}
                </template>
              </span>
            </template>
          </button>

          <button class="flex my-2 focus:outline-none" @click="next()">
            <span class="font-bold">›</span>
            <template v-if="data[nextIndex] != null">
              <span class="pl-2 hidden text-left lg:block">
                <template
                  v-if="
                    data[nextIndex].first_name != null &&
                    data[nextIndex].last_name
                  "
                >
                  {{ data[nextIndex].first_name }}
                  {{ data[nextIndex].last_name }}
                </template>
                <template v-if="data[nextIndex].name != null">
                  {{ data[nextIndex].name }}
                </template>
              </span>
            </template>
          </button>
        </div>
      </div>

      <div
        class="popup-content lg:flex-shrink flex flex-col justify-between py-10 lg:flex-row lg:w-4/5 lg:gap-10"
      >
        <div class="mb-6 lg:w-3/5 lg:mb-0">
          <h1 class="mb-6 text-4xl lg:text-5xl mb-5">
            <template
              v-if="selected.first_name != null && selected.last_name != null"
            >
              {{ selected.first_name }} {{ selected.last_name }}
            </template>
            <template v-if="selected.name != null">
              {{ selected.name }}
            </template>
          </h1>
          <h3
            v-if="
              (selected.instrument != null && selected.instrument != '') ||
              (selected.music_genre != null && selected.music_genre != '')
            "
            class="mb-4 text-3xl font-playFair"
          >
            <template v-if="selected.instrument != null">
              {{ selected.instrument }}
            </template>
            <template v-if="selected.music_genre != null">
              {{ selected.music_genre }}
            </template>
          </h3>

          <div>
            <div
              v-if="selected.description"
              v-dompurify-html="selected.description"
              class="rich-text mb-5"
            ></div>

            <div
              v-if="selected.repertoire != null && selected.repertoire != ''"
            >
              <div class="mb-4 text-3xl font-playFair">
                {{ $t('artistes').repertoire }}
              </div>
              <div
                v-dompurify-html="selected.repertoire"
                class="rich-text"
              ></div>
            </div>

            <div v-if="selected.formats != null && selected.formats != ''">
              <div class="mb-4 text-3xl font-playFair">
                {{ $t('artistes').formats }}
              </div>
              <div
                v-if="selected.formats != null"
                v-dompurify-html="selected.formats"
                class="rich-text"
              ></div>
            </div>
          </div>
        </div>

        <div class="flex-grow lg:w-2/5">
          <div class="ml-auto">
            <template v-if="selected.cover != null">
              <nuxt-img
                loading="lazy"
                class="object-cover h-full lg:w-120 lg:h-full w-96"
                provider="strapi"
                :src="selected.cover.url"
              />
            </template>
          </div>

          <div v-if="selected.artists != null" class="mt-4 flex flex-col">
            <div>
              <p>
                <span
                  v-for="artist in selected.artists"
                  :key="artist.id"
                  class="font-playFair"
                >
                  {{ artist.first_name }} {{ artist.last_name }}
                  <span class="text-lg font-sans">{{ artist.instrument }} </span
                  ><br />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
    popup: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selected: this.item,
    }
  },
  computed: {
    currentIndex() {
      return this.data.map((e) => e.id).indexOf(this.selected.id) || 0
    },
    previousIndex() {
      return (
        (this.currentIndex === 0 ? this.data.length : this.currentIndex) - 1
      )
    },
    nextIndex() {
      return this.currentIndex === this.data.length - 1
        ? 0
        : this.currentIndex + 1
    },
  },
  watch: {
    item(val) {
      this.selected = val
    },
  },
  methods: {
    goBack() {
      this.selected = this.data[this.previousIndex]
    },
    next() {
      this.selected = this.data[this.nextIndex]
    },
    closePopup() {
      this.$emit('closePopup')
    },
  },
}
</script>

<style lang="postcss" scoped>
.popup-sidebar,
.popup-content {
  @apply opacity-0;

  transition: opacity 0.4s 0s;
}

.popup {
  @apply p-5 lg:gap-x-5 lg:flex-row lg:p-10 lg:pb-20 bg-white opacity-0 pointer-events-none;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  z-index: 50;
  transition: opacity 0.5s 0.4s;

  &.popup-open {
    @apply opacity-100 pointer-events-auto;

    transition: opacity 0.5s 0.1s;

    .popup-content {
      @apply opacity-100;

      transition: opacity 1s 0.5s;
    }

    .popup-sidebar {
      @apply opacity-100;

      transition: opacity 1s 1s;
    }
  }
}
</style>
