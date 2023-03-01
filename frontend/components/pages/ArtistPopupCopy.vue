<template>
  <div :class="{ 'opacity-100 z-50': popup }" class="fixed top-0 left-0 flex flex-col w-screen h-screen px-10 py-10 overflow-auto duration-300 ease-in-out bg-white opacity-0 lg:overflow-hidden">
    <div>
      <button class="focus:outline-none" @click="$emit('update:popup', false)">
        <svg xmlns="http://www.w3.org/2000/svg" width="31.839" height="31.839" viewBox="0 0 31.839 31.839">
          <g id="Group_1249" data-name="Group 1249" transform="translate(-193.793 -96.793)">
            <line id="Line_21" data-name="Line 21" x2="30.425" y2="30.425" transform="translate(194.5 97.5)" fill="none" stroke="#4d9a70" stroke-width="2" />
            <line id="Line_22" data-name="Line 22" x2="30.425" y2="30.425" transform="translate(224.925 97.5) rotate(90)" fill="none" stroke="#4d9a70" stroke-width="2" />
          </g>
        </svg>
      </button>
    </div>

    <div class="flex flex-col justify-between py-10 lg:flex-row">
      <div class="absolute flex w-1/5 right-5 lg:flex-col lg:static top-4">
        <button class="flex my-2 mr-6 text-xl font-newsCycle focus:outline-none lg:mr-0" @click="goBack()">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="17.715" height="33.788" viewBox="0 0 17.715 33.788">
            <g id="Group_1250" data-name="Group 1250" transform="translate(-193.793 -66.793)">
              <line id="Line_21" data-name="Line 21" x2="16.301" y2="16.301" transform="translate(194.5 83.573)" fill="none" stroke="#4d9a70" stroke-width="2" />
              <line id="Line_22" data-name="Line 22" x2="16.301" y2="16.301" transform="translate(210.801 67.5) rotate(90)" fill="none" stroke="#4d9a70" stroke-width="2" />
            </g>
          </svg>
          <template v-if="artists[previousIndex] != null">
            <span class="pl-3 hidden lg:block hover:text-gray-500"> {{ artists[previousIndex].first_name }} {{ artists[previousIndex].last_name }} </span>
          </template>
        </button>

        <button class="flex my-2 text-xl font-newsCycle focus:outline-none" @click="next()">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="17.715" height="33.788" viewBox="0 0 17.715 33.788">
            <g id="Group_1251" data-name="Group 1251" transform="translate(0.707 0.707)">
              <line id="Line_21" data-name="Line 21" x1="16.301" y2="16.301" transform="translate(0 16.073)" fill="none" stroke="#4d9a70" stroke-width="2" />
              <line id="Line_22" data-name="Line 22" y1="16.301" x2="16.301" transform="translate(16.301 0) rotate(90)" fill="none" stroke="#4d9a70" stroke-width="2" />
            </g>
          </svg>
          <template v-if="artists[previousIndex] != null">
            <span class="pl-3 hidden lg:block hover:text-gray-500"> {{ artists[nextIndex].first_name }} {{ artists[nextIndex].last_name }} </span>
          </template>
        </button>
      </div>

      <div class="mb-6 overflow-auto lg:w-2/5 lg:mb-0" style="max-height: calc(100vh - 125.83px)">
        <h1 class="pb-4 text-6xl font-newsCycle">{{ selected.first_name }} {{ selected.last_name }}</h1>
        <h3 class="mb-12 text-3xl font-playFair">{{ selected.instrument }}</h3>

        <div class="prose">
          <p class="prose-lg font-newsCycle">
            {{ selected.description }}
          </p>

          <div v-if="selected.repertoire != null">
            <p class="block text-xl font-playFair">Répertoire</p>
            <p class="prose-lg font-newsCycle">{{ selected.repertoire }}</p>
          </div>

          <div v-if="selected.formats != null">
            <p class="text-xl font-playFair">Formats</p>
            <p class="prose-lg font-newsCycle">{{ selected.formats }}</p>
          </div>
        </div>
        <p class="my-6 prose-xl font-newsCycle">Vous souhaitez booker ce musicien·nne dans votre établissement?</p>
        <nuxt-link class="prose-xl text-green-500 no-underline" to="/contact">> Contact</nuxt-link>
      </div>

      <div class="lg:overflow-auto lg:w-2/6" style="max-height: calc(100vh - 125.83px)">
        <div class="ml-auto">
          <template v-if="selected.picture != null">
            <img class="object-cover h-64 lg:w-120 lg:h-128 w-96" :src="'https://api-new.lesconcertsducoeur.ch' + selected.picture.url" />
          </template>
        </div>

        <!-- <div class="flex flex-col w-80">
          <div class="flex mt-8 mb-2">
            <p class="mr-6 text-xl font-playFair">Prénom Nom</p>
            <span class="text-lg font-newsCycle">Instrument</span>
          </div>
          <div class="flex my-2">
            <p class="mr-6 text-xl font-playFair">Prénom Nom</p>
            <span class="text-lg font-newsCycle">Instrument</span>
          </div>
          <div class="flex my-2">
            <p class="mr-6 text-xl font-playFair">Prénom Nom</p>
            <span class="text-lg font-newsCycle">Instrument</span>
          </div>
        </div> -->
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
    artists: {
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
      return this.artists.map((e) => e.id).indexOf(this.selected.id) || 0
    },
    previousIndex() {
      return (this.currentIndex === 0 ? this.artists.length : this.currentIndex) - 1
    },
    nextIndex() {
      return this.currentIndex === this.artists.length - 1 ? 0 : this.currentIndex + 1
    },
  },
  watch: {
    item(val) {
      this.selected = val
    },
  },
  methods: {
    goBack() {
      this.selected = this.artists[this.previousIndex]
    },
    next() {
      this.selected = this.artists[this.nextIndex]
    },
  },
}
</script>
