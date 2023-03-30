<template>
  <div
    :class="{ 'opacity-100 z-50': popup }"
    class="fixed top-0 left-0 flex flex-col w-screen h-screen p-5 lg:gap-x-5 lg:flex-row lg:p-10 lg:pb-20 overflow-auto duration-300 ease-in-out bg-white opacity-0"
  >
    <div class="z-10 flex justify-between lg:block lg:w-1/5">
      <button class="focus:outline-none" @click="$emit('update:popup', false)">
        <nav-cross :canton="canton" />
      </button>

      <div class="lg:flex-shrink flex items-center lg:block lg:w-full lg:flex-col lg:static lg:mt-4">
        <button class="flex my-2 mr-4 text-xl font-newsCycle focus:outline-none lg:mr-0" @click="goBack()">
          <span :canton="canton" class="flex-shrink-0">←</span>
          <template v-if="data[previousIndex] != null">
            <span class="pl-2 hidden text-left lg:block" :class="{ 'hover:text-vs': canton == 'vs', 'hover:text-vd': canton == 'vd', 'hover:text-ge': canton == 'ge' }">
              <template v-if="data[previousIndex].first_name != null && data[previousIndex].last_name"> {{ data[previousIndex].first_name }} {{ data[previousIndex].last_name }} </template>
              <template v-if="data[previousIndex].name != null"> {{ data[previousIndex].name }} </template>
            </span>
          </template>
        </button>

        <button class="flex my-2 text-xl font-newsCycle focus:outline-none" @click="next()">
          <span :canton="canton" class="flex-shrink-0">→</span>
          <template v-if="data[nextIndex] != null">
            <span class="pl-2 hidden text-left lg:block" :class="{ 'hover:text-vs': canton == 'vs', 'hover:text-vd': canton == 'vd', 'hover:text-ge': canton == 'ge' }">
              <template v-if="data[nextIndex].first_name != null && data[nextIndex].last_name"> {{ data[nextIndex].first_name }} {{ data[nextIndex].last_name }} </template>
              <template v-if="data[nextIndex].name != null"> {{ data[nextIndex].name }} </template>
            </span>
          </template>
        </button>
      </div>
    </div>

    <div class="lg:flex-shrink flex flex-col justify-between py-10 lg:flex-row lg:w-4/5 lg:gap-x-10">
      <div class="mb-6 lg:w-3/5 lg:mb-0">
        <h1 class="mb-6 text-4xl lg:text-5xl font-newsCycle">
          <template v-if="selected.first_name != null && selected.last_name != null"> {{ selected.first_name }} {{ selected.last_name }} </template>
          <template v-if="selected.name != null"> {{ selected.name }} </template>
        </h1>
        <h3 v-if="(selected.instrument != null && selected.instrument != '') || (selected.music_genre != null && selected.music_genre != '')" class="mb-12 text-3xl font-playFair">
          <template v-if="selected.instrument != null"> {{ selected.instrument }} </template>
          <template v-if="selected.music_genre != null"> {{ selected.music_genre }} </template>
        </h3>

        <div class="prose">
          <p class="prose-xl font-newsCycle">
            {{ selected.description }}
          </p>

          <div v-if="selected.repertoire != null && selected.repertoire != ''">
            <div class="mb-4 text-3xl font-playFair">{{ $t('artistes').repertoire }}</div>
            <div v-if="selected.repertoire != null" class="prose prose-xl" v-dompurify-html="$md.render(selected.repertoire)"></div>
          </div>

          <div v-if="selected.formats != null && selected.formats != ''">
            <div class="mb-4 text-3xl font-playFair">{{ $t('artistes').formats }}</div>
            <div v-if="selected.formats != null" class="prose prose-xl" v-dompurify-html="$md.render(selected.formats)"></div>
          </div>
        </div>
        <!-- <p class="my-6 prose-xl font-newsCycle">Vous souhaitez booker ce musicien·nne dans votre établissement ?</p>
        <nuxt-link class="prose-xl text-green-500 no-underline" to="/contact">> Contact</nuxt-link> -->
      </div>

      <div class="flex-grow lg:w-2/5">
        <div class="ml-auto">
          <template v-if="selected.picture != null">
            <img class="object-cover h-full lg:w-120 lg:h-full w-96" :src="'https://api-new.lesconcertsducoeur.ch' + selected.picture.url" />
          </template>
          <template v-if="selected.cover != null">
            <img class="object-cover h-full lg:w-120 lg:h-full w-96" :src="'https://api-new.lesconcertsducoeur.ch' + selected.cover.url" />
          </template>
        </div>

        <div v-if="selected.artists != null" class="mt-4 flex flex-col">
          <div v-for="artist in selected.artists" :key="artist.id">
            <p class="mr-6 text-xl font-playFair">
              {{ artist.first_name }} {{ artist.last_name }}
              <span class="text-lg font-newsCycle">{{ artist.instrument }} </span>
            </p>
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
