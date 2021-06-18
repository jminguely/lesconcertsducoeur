<template>
  <div :class="{ 'opacity-100 z-50': popup }" class="fixed top-0 left-0 flex flex-col w-screen h-screen px-10 py-6 duration-300 ease-in-out bg-white border-b-8 border-green-600 opacity-0">
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

    <div class="flex justify-between py-10">
      <div class="flex flex-col w-1/5">
        <button class="flex my-2 text-2xl font-newsCycle focus:outline-none" @click="goBack()">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="17.715" height="33.788" viewBox="0 0 17.715 33.788">
            <g id="Group_1250" data-name="Group 1250" transform="translate(-193.793 -66.793)">
              <line id="Line_21" data-name="Line 21" x2="16.301" y2="16.301" transform="translate(194.5 83.573)" fill="none" stroke="#4d9a70" stroke-width="2" />
              <line id="Line_22" data-name="Line 22" x2="16.301" y2="16.301" transform="translate(210.801 67.5) rotate(90)" fill="none" stroke="#4d9a70" stroke-width="2" />
            </g>
          </svg>
          Quintet qui-vient-avant
        </button>

        <button class="flex my-2 text-2xl font-newsCycle focus:outline-none" @click="next()">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="17.715" height="33.788" viewBox="0 0 17.715 33.788">
            <g id="Group_1251" data-name="Group 1251" transform="translate(0.707 0.707)">
              <line id="Line_21" data-name="Line 21" x1="16.301" y2="16.301" transform="translate(0 16.073)" fill="none" stroke="#4d9a70" stroke-width="2" />
              <line id="Line_22" data-name="Line 22" y1="16.301" x2="16.301" transform="translate(16.301 0) rotate(90)" fill="none" stroke="#4d9a70" stroke-width="2" />
            </g>
          </svg>
          Quatuor suivant
        </button>
      </div>

      <div class="w-2/5 overflow-auto" style="max-height: calc(100vh - 125.83px)">
        <h1 class="text-6xl font-newsCycle">{{ selected.name }}</h1>
        <h3 class="mb-16 text-3xl font-playFair">{{ selected.style }}</h3>

        <div class="prose">
          <p class="prose-lg font-newsCycle">
            Jazzbox trio est … Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
            et accusam et justo duo dolores et ea rebum. Jazzbox trio est … Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </p>

          <p class="text-2xl font-playFair">Répertoire</p>
          <p class="prose-lg font-newsCycle">Jazzy Bazz <br />Cover Django Reinhardt</p>
          <br />
          <p class="text-2xl font-playFair">Formats</p>
          <p class="prose-lg font-newsCycle">Concert classique <br />Itinérant</p>
        </div>
        <p class="my-6 prose-xl font-newsCycle">Vous souhaitez booker ce groupe dans votre établissement?</p>
        <nuxt-link class="prose-xl text-green-500 no-underline" to="/contact">> Contact</nuxt-link>
      </div>

      <div class="w-2/6 overflow-auto" style="max-height: calc(100vh - 125.83px)">
        <div class="ml-auto">
          <img class="object-cover w-120 h-128" :src="selected.image" />
        </div>
        <div class="flex flex-col w-80">
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
    artists: {
      type: Array,
      default() {
        return [
          {
            id: '',
            name: '',
            style: '',
            image: '',
          },
        ]
      },
    },
  },
  data() {
    return {
      selected: this.item,
    }
  },
  watch: {
    item(val) {
      this.selected = val
    },
  },
  methods: {
    goBack() {
      const currentIndex = this.artists.map((e) => e.id).indexOf(this.selected.id)
      const previousIndex = (currentIndex === 0 ? this.artists.length : currentIndex) - 1
      this.selected = this.artists[previousIndex]
    },
    next() {
      const currentIndex = this.artists.map((e) => e.id).indexOf(this.selected.id)
      const nextIndex = currentIndex === this.artists.length - 1 ? 0 : currentIndex + 1
      this.selected = this.artists[nextIndex]
    },
  },
}
</script>
