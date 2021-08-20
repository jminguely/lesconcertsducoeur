<template>
  <div
    :class="{ 'opacity-100 z-50': popup }"
    class="fixed top-0 left-0 flex flex-col w-screen h-screen p-5 lg:flex-row lg:p-10 overflow-auto duration-300 ease-in-out bg-white opacity-0 lg:overflow-hidden"
  >
    <div class="lg:w-1/5">
      <button class="focus:outline-none" @click="$emit('update:popup', false)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31.839"
          height="31.839"
          viewBox="0 0 31.839 31.839"
          class="stroke-current"
          :class="{ 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }"
        >
          <g id="Group_1249" data-name="Group 1249" transform="translate(-193.793 -96.793)">
            <line id="Line_21" data-name="Line 21" x2="30.425" y2="30.425" transform="translate(194.5 97.5)" fill="none" stroke-width="2" />
            <line id="Line_22" data-name="Line 22" x2="30.425" y2="30.425" transform="translate(224.925 97.5) rotate(90)" fill="none" stroke-width="2" />
          </g>
        </svg>
      </button>

      <div class="absolute flex w-1/5 lg:block lg:w-full right-5 lg:flex-col lg:static top-4">
        <button class="flex my-2 mr-6 text-xl font-newsCycle focus:outline-none lg:mr-0" @click="goBack()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2 stroke-current"
            width="17.715"
            height="33.788"
            viewBox="0 0 17.715 33.788"
            :class="{ 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }"
          >
            <g id="Group_1250" data-name="Group 1250" transform="translate(-193.793 -66.793)">
              <line id="Line_21" data-name="Line 21" x2="16.301" y2="16.301" transform="translate(194.5 83.573)" fill="none" stroke-width="2" />
              <line id="Line_22" data-name="Line 22" x2="16.301" y2="16.301" transform="translate(210.801 67.5) rotate(90)" fill="none" stroke-width="2" />
            </g>
          </svg>
          <template v-if="data[previousIndex] != null">
            <span class="pl-3 hidden lg:block hover:text-gray-500">
              <template v-if="data[previousIndex].first_name != null && data[previousIndex].last_name"> {{ data[previousIndex].first_name }} {{ data[previousIndex].last_name }} </template>
              <template v-if="data[previousIndex].name != null"> {{ data[previousIndex].name }} </template>
            </span>
          </template>
        </button>

        <button class="flex my-2 text-xl font-newsCycle focus:outline-none" @click="next()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2 stroke-current"
            :class="{ 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }"
            width="17.715"
            height="33.788"
            viewBox="0 0 17.715 33.788"
          >
            <g id="Group_1251" data-name="Group 1251" transform="translate(0.707 0.707)">
              <line id="Line_21" data-name="Line 21" x1="16.301" y2="16.301" transform="translate(0 16.073)" fill="none" stroke-width="2" />
              <line id="Line_22" data-name="Line 22" y1="16.301" x2="16.301" transform="translate(16.301 0) rotate(90)" fill="none" stroke-width="2" />
            </g>
          </svg>
          <template v-if="data[nextIndex] != null">
            <span class="pl-3 hidden lg:block hover:text-gray-500">
              <template v-if="data[nextIndex].first_name != null && data[nextIndex].last_name"> {{ data[nextIndex].first_name }} {{ data[nextIndex].last_name }} </template>
              <template v-if="data[nextIndex].name != null"> {{ data[nextIndex].name }} </template>
            </span>
          </template>
        </button>
      </div>
    </div>

    <div class="flex flex-col justify-between py-10 lg:flex-row lg:w-4/5">
      <div class="mb-6 lg:w-3/5 lg:mb-0">
        <h1 class="pb-4 text-6xl font-newsCycle">
          <template v-if="selected.first_name != null && selected.last_name != null"> {{ selected.first_name }} {{ selected.last_name }} </template>
          <template v-if="selected.name != null"> {{ selected.name }} </template>
        </h1>
        <h3 class="mb-12 text-3xl font-playFair">
          <template v-if="selected.instrument != null"> {{ selected.instrument }} </template>
          <template v-if="selected.music_genre != null"> {{ selected.music_genre }} </template>
        </h3>

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
        <!-- <p class="my-6 prose-xl font-newsCycle">Vous souhaitez booker ce musicien·nne dans votre établissement?</p>
        <nuxt-link class="prose-xl text-green-500 no-underline" to="/contact">> Contact</nuxt-link> -->
      </div>

      <div class="lg:ml-5 lg:w-2/5">
        <div class="ml-auto">
          <template v-if="selected.picture != null">
            <img class="object-cover h-64 lg:w-120 lg:h-128 w-96" :src="'https://api.lesconcertsducoeur.ch' + selected.picture.url" />
          </template>
          <template v-if="selected.cover != null">
            <img class="object-cover h-64 lg:w-120 lg:h-128 w-96" :src="'https://api.lesconcertsducoeur.ch' + selected.cover.url" />
          </template>
        </div>

        <div v-if="selected.artists != null" class="mt-4 flex flex-col w-80">
          <div v-for="artist in selected.artists" :key="artist.id" class="flex my-2">
            <p class="mr-6 text-xl font-playFair">{{ artist.first_name }} {{ artist.last_name }}</p>
            <span class="text-lg font-newsCycle">{{ artist.instrument }} </span>
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
    canton: {
      type: String,
      default: '',
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
      return (this.currentIndex === 0 ? this.data.length : this.currentIndex) - 1
    },
    nextIndex() {
      return this.currentIndex === this.data.length - 1 ? 0 : this.currentIndex + 1
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
  },
}
</script>
