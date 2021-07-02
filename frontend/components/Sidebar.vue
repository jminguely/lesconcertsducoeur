<template>
  <div
    :class="{ 'h-full': menu }"
    class="fixed top-0 left-0 z-50 flex flex-col justify-between w-full max-h-screen p-4 pb-8 duration-300 ease-in-out bg-white lg:pb-4 lg:px-12 lg:py-4 lg:h-screen lg:max-w-xs lg:w-96"
  >
    <div :class="{ 'absolute top-5 left-5 text-2xl': menu, hidden: !menu }" class="lg:block">fr | de</div>

    <div>
      <div class="flex justify-between">
        <div :class="{ 'opacity-0': menu, 'opacity-100': !menu }" class="flex flex-col my-2 duration-300 ease-in-out pointer-events-none lg:my-8 font-playFair">
          <h6 class="ml-5 text-2xl lg:leading-4">les concerts du</h6>
          <h2 class="leading-8 text-7xl">:<span class="relative inline-block transform rotate-180 top-6">c</span>oeur</h2>
        </div>
        <button
          :class="{ opened: menu }"
          :aria-expanded="menu"
          class="flex w-16 h-16 p-0 bg-transparent border-none cursor-pointer lg:hidden focus:outline-none"
          aria-label="Main Menu"
          @click="toggleMenu()"
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path
              class="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path class="line line2" d="M 20,50 H 80" />
            <path
              class="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>

      <div :class="{ hidden: !menu }" class="text-3xl lg:text-base lg:block">
        <div class="flex flex-col ml-4">
          <nuxt-link v-for="(item, i) in links" :key="i" :class="{ 'my-2': menu }" :to="item.link" :exact="item.exact">
            {{ item.name }}
          </nuxt-link>
        </div>
      </div>

      <nuxt-link
        class="relative flex-col items-center justify-center hidden w-20 h-20 leading-5 text-center text-white transform bg-gray-700 rounded-full lg:flex -rotate-25 left-24 top-20 font-playFair"
        to="support"
      >
        Nous soutenir!
      </nuxt-link>
    </div>

    <div :class="{ visible: menu, hidden: !menu }">
      <ul class="flex flex-col mt-5 overflow-hidden">
        <NavbarItem class="border-t" black color="red">
          <template #content> Valais </template>
          <template #items>
            <ul class="flex flex-col overflow-hidden">
              <nuxt-link class="font-newsCycle" to="/valais/associations">L'association</nuxt-link>
              <nuxt-link to="/valais/our-artists">Nos artistes</nuxt-link>
              <nuxt-link to="/valais/auditions">Auditions</nuxt-link>
            </ul>
          </template>
        </NavbarItem>
        <NavbarItem black color="green">
          <template #content> Vaud </template>
          <template #items>
            <ul class="flex flex-col overflow-hidden">
              <nuxt-link to="/vaud/associations">L'association</nuxt-link>
              <nuxt-link to="/vaud/our-artists">Nos artistes</nuxt-link>
              <nuxt-link to="/vaud/auditions">Auditions</nuxt-link>
            </ul>
          </template>
        </NavbarItem>
        <NavbarItem black color="yellow">
          <template #content> Genève </template>
          <template #items>
            <ul class="flex flex-col overflow-hidden">
              <nuxt-link to="/geneva/associations">L'association</nuxt-link>
              <nuxt-link to="/geneva/our-artists">Nos artistes</nuxt-link>
              <nuxt-link to="/geneva/auditions">Auditions</nuxt-link>
            </ul>
          </template>
        </NavbarItem>
      </ul>
    </div>

    <div class="flex flex-col">
      <div :class="{ 'flex flex-row-reverse justify-between text-2xl': menu, 'hidden lg:flex': !menu }" class="items-center">
        <div class="mr-2">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-8 lg:w-5 svg-inline--fa fa-facebook fa-w-16 fa-7x"
          >
            <path
              fill="currentColor"
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              class=""
            ></path>
          </svg>
        </div>

        <div :class="{ 'ml-auto': menu }" class="mr-2">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="instagram"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="w-8 mr-4 lg:mr-0 lg:w-5 svg-inline--fa fa-instagram fa-w-14 fa-7x"
          >
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              class=""
            ></path>
          </svg>
        </div>

        <nuxt-link to="/contact" class="font-bold font-newsCycle"> Contact </nuxt-link>
      </div>
      <div class="hidden mt-4 lg:block">
        <input class="px-2 border-2 border-gray-800" placeholder="s'abonner a la newsletter" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Accueil', link: '/', exact: true },
        { name: 'Notre mission', link: '/our-mission' },
        { name: 'Les concerts', link: '/concerts' },
        { name: 'Agenda', link: '/agenda' },
        { name: 'Media', link: '/media' },
      ],
      menu: false,
    }
  },
  watch: {
    $route(val) {
      this.menu = false
    },
  },
  methods: {
    openMenu() {
      this.menu = true
    },
    toggleMenu() {
      this.menu = !this.menu
    },
    closeMenu() {
      this.menu = false
    },
  },
}
</script>
<style>
.line {
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
</style>
