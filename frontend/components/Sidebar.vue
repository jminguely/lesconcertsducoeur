<template>
  <div
    class="px-5 py-4 fixed top-0 left-0 z-50 flex flex-col justify-between w-full max-h-screen duration-300 ease-in-out bg-white lg:px-12 lg:py-5 lg:h-screen lg:max-w-xs lg:w-96"
    :class="{
      'h-screen': menu,
      'border-0 border-opacity-0': !stickyHeader,
      'border-b-2 border-opacity-100 lg:border-0': stickyHeader,
      'border-concert-dark': (canton == '' || canton == 'all') && !menu,
      'border-vs': canton == 'vs',
      'border-vd': canton == 'vd',
      'border-ge': canton == 'ge',
    }"
  >
    <div :class="{ 'absolute top-5 left-5 text-xl z-10 overflow-hidden': menu, hidden: !menu }" class="lg:ml-4 lg:block lg:text-xl">
      <nuxt-link :to="switchLocalePath('fr')">fr</nuxt-link> | <nuxt-link :to="switchLocalePath('de')">de</nuxt-link>
    </div>

    <div class="lg:absolute lg:top-36">
      <div class="flex justify-between lg:items-center">
        <nuxt-link :to="localePath('/')">
          <Logo :class="{ 'opacity-0': menu, 'opacity-100': !menu, 'h-9': stickyHeader, 'h-12': !stickyHeader }" class="duration-300 ease-in-out lg:h-16" />
        </nuxt-link>
        <button
          :class="{ opened: menu }"
          :aria-expanded="menu"
          class="flex items-center p-0 bg-transparent border-none cursor-pointer lg:hidden focus:outline-none"
          aria-label="Main Menu"
          @click="toggleMenu()"
        >
          <svg :class="{ hidden: menu, block: !menu }" width="56" height="28" viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="56" y2="1" stroke="#393939" stroke-width="2" />
            <line y1="14" x2="56" y2="14" stroke="#393939" stroke-width="2" />
            <line y1="27" x2="56" y2="27" stroke="#393939" stroke-width="2" />
          </svg>

          <svg :class="{ hidden: !menu, block: menu }" width="56" height="28" viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.42738" y1="1.09593" x2="55.4274" y2="27.0959" stroke="#393939" stroke-width="2" />
            <line x1="0.57262" y1="27.0959" x2="55.5726" y2="1.09593" stroke="#393939" stroke-width="2" />
          </svg>
        </button>
      </div>

      <div id="sidebar" :class="{ hidden: !menu }" class="hidden text-xl lg:mt-8 lg:text-xl lg:block">
        <div class="flex flex-col lg:ml-4">
          <nuxt-link :class="{ 'my-2': menu }" :to="localePath('/')" :exact="true">
            {{ $t('nav').home }}
          </nuxt-link>
          <nuxt-link :class="{ 'my-2': menu }" :to="localePath('mission')">
            {{ $t('nav').mission }}
          </nuxt-link>
          <nuxt-link :class="{ 'my-2': menu }" :to="localePath('concerts')">
            {{ $t('nav').concerts }}
          </nuxt-link>
          <nuxt-link :class="{ 'my-2': menu }" :to="localePath('agenda')">
            {{ $t('nav').agenda }}
          </nuxt-link>
          <nuxt-link :class="{ 'my-2': menu }" :to="localePath('medias')">
            {{ $t('nav').medias }}
          </nuxt-link>
        </div>
      </div>
    </div>

    <div>
      <div :class="{ hidden: !menu }" class="text-xl lg:mt-8 lg:text-xl lg:hidden">
        <div class="flex flex-col lg:ml-4">
          <nuxt-link :class="{ 'my-2': menu }" :to="localePath('/')" :exact="true">
            {{ $t('nav').home }}
          </nuxt-link>
          <nuxt-link :class="{ 'my-2': menu }" :to="localePath('mission')">
            {{ $t('nav').mission }}
          </nuxt-link>
          <nuxt-link :class="{ 'my-2': menu }" :to="localePath('concerts')">
            {{ $t('nav').concerts }}
          </nuxt-link>
          <nuxt-link :class="{ 'my-2': menu }" :to="localePath('agenda')">
            {{ $t('nav').agenda }}
          </nuxt-link>
          <nuxt-link :class="{ 'my-2': menu }" :to="localePath('medias')">
            {{ $t('nav').medias }}
          </nuxt-link>
          <nuxt-link :class="{ 'my-2': menu }" :to="localePath('soutien')"> {{ $t('nav').supportUs }}</nuxt-link>
        </div>
      </div>

      <div id="sidebar" :class="{ visible: menu, hidden: !menu }" class="mt-4">
        <ul class="flex flex-col overflow-hidden">
          <navbar-item v-for="(cantonNav, i) in cantons" :key="'mobile-navbar' + i + cantonNav" :canton="cantonNav" class="mt-2">
            <template #content>{{ $t('canton')[cantonNav] }}</template>
            <template #items>
              <ul class="flex flex-col overflow-hidden text-xl">
                <nuxt-link :to="localePath({ name: 'canton-association', params: { canton: cantonNav } })">{{ $t('nav').association }}</nuxt-link>
                <nuxt-link :to="localePath({ name: 'canton-artistes', params: { canton: cantonNav } })">{{ $t('nav').artists }}</nuxt-link>
                <nuxt-link :to="localePath({ name: 'canton-auditions', params: { canton: cantonNav } })">{{ $t('nav').auditions }}</nuxt-link>
              </ul>
            </template>
          </navbar-item>
        </ul>
      </div>
    </div>

    <donate-button-link class="hidden lg:block relative -bottom-8 left-24" :to="localePath('soutien')">
      {{ $t('nav').supportUs }}
    </donate-button-link>
    <div>
      <div id="sidebar" class="flex flex-col lg:ml-4">
        <div :class="{ 'flex flex-row-reverse justify-between': menu, 'hidden lg:flex': !menu }" class="items-center">
          <div class="lg:mr-2">
            <SocialLink name="facebook" link="https://www.facebook.com/concertsducoeur/" sidebar />
          </div>

          <div :class="{ 'ml-auto mr-4': menu }" class="mr-2">
            <SocialLink name="instagram" link="https://www.instagram.com/lesconcertsducoeur/" sidebar />
          </div>

          <nuxt-link :to="localePath('contact')" class="text-xl font-newsCycle hover:font-bold"> {{ $t('nav').contact }} </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import SocialLink from '@/components/pages/SocialLink.vue'
// import NavChevronRight from '@/components/NavChevronRight.vue'
export default {
  components: {
    SocialLink,
    // NavChevronRight,
  },
  data() {
    return {
      stickyHeader: false,
      links: [
        { name: this.$t('nav').home, link: this.localePath('/'), exact: true },
        { name: this.$t('nav').mission, link: this.localePath('mission') },
        { name: this.$t('nav').concerts, link: this.localePath('concerts') },
        { name: this.$t('nav').agenda, link: this.localePath('agenda') },
        { name: this.$t('nav').medias, link: this.localePath('medias') },
      ],
      menu: false,
      cantons: ['vs', 'vd', 'ge'],
      canton: '',
      email: '',
      isSent: false,
      hasError: false,
    }
  },
  watch: {
    $route(newRoute) {
      if (newRoute.params) {
        if (newRoute.params.canton != null) this.canton = newRoute.params.canton
        else this.canton = ''
      }
      this.menu = false
    },
  },
  mounted() {
    if (this.$route.params) {
      if (this.$route.params.canton != null) this.canton = this.$route.params.canton
      else this.canton = ''
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    async subscribeNewsletter() {
      if (this.validateEmail(this.email)) {
        const mutation = gql`
          mutation CreateNewsletter($input: createNewsletterInput!) {
            createNewsletter(input: $input) {
              newsletter {
                id
                email
              }
            }
          }
        `
        const variables = {
          input: {
            data: {
              email: this.email,
            },
          },
        }
        await this.$apollo
          .mutate({
            mutation,
            variables,
          })
          .then(({ data }) => {
            if (process.env.dev) console.log(data)
            this.isSent = true
            this.hasError = false
            setTimeout(() => {
              this.isSent = false
            }, 3000)
          })
          .catch((e) => {
            if (process.env.dev) console.log(e)
            this.hasError = true
          })
      } else {
        this.hasError = true
        setTimeout(() => {
          this.hasError = false
        }, 1500)
      }
    },
    handleScroll() {
      // Your scroll handling here
      // console.log(window.scrollY)
      if (!this.menu) {
        if (window.scrollY > 10) this.stickyHeader = true
        else this.stickyHeader = false
      }
    },
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
