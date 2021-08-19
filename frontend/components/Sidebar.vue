<template>
  <div
    :class="{ 'h-full': menu }"
    class="fixed top-0 left-0 z-50 flex flex-col justify-between w-full max-h-screen p-4 py-2 duration-300 ease-in-out bg-white lg:pb-4 lg:px-12 lg:py-4 lg:h-screen lg:max-w-xs lg:w-96"
  >
    <div :class="{ 'absolute top-5 left-5 text-xl z-10': menu, hidden: !menu }" class="ml-3 lg:block lg:text-xl">
      <nuxt-link :to="switchLocalePath('fr')">fr</nuxt-link> | <nuxt-link :to="switchLocalePath('de')">de</nuxt-link>
    </div>

    <div class="lg:absolute lg:top-36">
      <div class="flex justify-between items-center">
        <nuxt-link :to="localePath('/')">
          <Logo :class="{ 'opacity-0': menu, 'opacity-100': !menu }" class="h-12 lg:h-16" />
        </nuxt-link>
        <button
          :class="{ opened: menu }"
          :aria-expanded="menu"
          class="flex w-16 h-16 p-0 bg-transparent border-none cursor-pointer lg:hidden focus:outline-none"
          aria-label="Main Menu"
          @click="toggleMenu()"
        >
          <svg class="w-16 h-16" viewBox="0 0 100 100">
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

      <div :class="{ hidden: !menu }" class="mt-8 text-2xl lg:text-xl lg:block">
        <div class="flex flex-col ml-4">
          <nuxt-link v-for="(item, i) in links" :key="item.name + i" :class="{ 'my-2': menu }" :to="item.link" :exact="item.exact">
            {{ item.name }}
          </nuxt-link>
        </div>
      </div>

      <!-- <nuxt-link
        class="relative flex-col items-center justify-center hidden w-30 h-30 leading-5 text-center text-white transform bg-gray-700 rounded-full lg:flex -rotate-25 left-24 top-20 font-playFair"
        :to="localePath('soutien')"
      >
        {{ $t('home').nousSoutenir }} !
      </nuxt-link> -->
    </div>

    <div :class="{ visible: menu, hidden: !menu }" class="px-4">
      <ul class="flex flex-col mt-5 overflow-hidden">
        <navbar-item v-for="(canton, i) in cantons" :key="'mobile-navbar' + i + canton" :canton="canton" class="mb-4">
          <template #content>{{ $t('canton')[canton] }}</template>
          <template #items>
            <ul class="flex flex-col overflow-hidden">
              <nuxt-link :to="localePath({ name: 'canton-association', params: { canton: canton } })">{{ $t('nav').association }}</nuxt-link>
              <nuxt-link :to="localePath({ name: 'canton-artistes', params: { canton: canton } })">{{ $t('nav').artists }}</nuxt-link>
              <nuxt-link :to="localePath({ name: 'canton-auditions', params: { canton: canton } })">{{ $t('nav').auditions }}</nuxt-link>
            </ul>
          </template>
        </navbar-item>
      </ul>
    </div>

    <div class="flex flex-col">
      <div :class="{ 'flex flex-row-reverse justify-between': menu, 'hidden lg:flex': !menu }" class="items-center">
        <div class="mr-2">
          <a href="https://www.facebook.com/concertsducoeur/">
            <facebook-logo />
          </a>
        </div>

        <div :class="{ 'ml-auto': menu }" class="mr-2">
          <a href="https://www.instagram.com/lesconcertsducoeur/">
            <instagram-logo />
          </a>
        </div>

        <nuxt-link :to="localePath('contact')" class="text-lg font-bold font-newsCycle"> {{ $t('nav').contact }} </nuxt-link>
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
        { name: this.$t('nav').home, link: this.localePath('/'), exact: true },
        { name: this.$t('nav').mission, link: this.localePath('mission') },
        { name: this.$t('nav').concerts, link: this.localePath('concerts') },
        { name: this.$t('nav').agenda, link: this.localePath('agenda') },
        { name: this.$t('nav').medias, link: this.localePath('medias') },
      ],
      menu: false,
      cantons: ['vs', 'vd', 'ge'],
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
