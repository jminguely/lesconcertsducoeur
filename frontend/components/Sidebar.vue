<template>
  <div class="sidebar">
    <button
      :class="{ opened: menu }"
      :aria-expanded="menu"
      class="flex md:hidden fixed z-20 top-3 right-5 items-center p-0 bg-transparent border-none cursor-pointer focus:outline-none"
      aria-label="Main Menu"
      @click="toggleMenu()"
    >
      <svg
        :class="{ hidden: menu, block: !menu }"
        width="56"
        height="28"
        viewBox="0 0 56 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="1" x2="56" y2="1" stroke="#393939" stroke-width="2" />
        <line y1="14" x2="56" y2="14" stroke="#393939" stroke-width="2" />
        <line y1="27" x2="56" y2="27" stroke="#393939" stroke-width="2" />
      </svg>

      <svg
        :class="{ hidden: !menu, block: menu }"
        width="56"
        height="28"
        viewBox="0 0 56 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.42738"
          y1="1.09593"
          x2="55.4274"
          y2="27.0959"
          stroke="#393939"
          stroke-width="2"
        />
        <line
          x1="0.57262"
          y1="27.0959"
          x2="55.5726"
          y2="1.09593"
          stroke="#393939"
          stroke-width="2"
        />
      </svg>
    </button>

    <div
      class="main-nav fixed top-0 p-5 md:p-0 md:block md:sticky bg-white w-full z-10"
      :class="{ hidden: !menu }"
    >
      <nuxt-link :to="localePath('/')">
        <img class="w-full h-auto" src="/CdC-logo.png" />
      </nuxt-link>
      <a
        href="https://www.livemusicnow.org.uk/"
        target="_blank"
        rel="noreferrer"
      >
        <img class="w-1/2 h-auto mb-5" src="/LMN-logo.png" />
      </a>
      <nav class="site-navigation">
        <ul>
          <li v-for="(link, i) in links" :key="i">
            <nuxt-link
              v-if="link.link"
              :to="link.link"
              :exact="link.exactActiveClass"
              >{{ link.name }}</nuxt-link
            >
            <span v-if="!link.link"> {{ link.name }} 🞡 </span>
            <ul v-if="link.subLinks" class="sub-navigation">
              <li v-for="(subLink, j) in link.subLinks" :key="j">
                <nuxt-link v-if="subLink.link" :to="subLink.link">
                  {{ subLink.name }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menu: false,
    }
  },
  computed: {
    links() {
      return [
        {
          name: this.$t('nav').home,
          link: this.localePath('/'),
          exactActiveClass: true,
        },
        {
          name: this.$t('nav').association,
          open: false,
          subLinks: [
            {
              name: this.$t('canton').vs,
              link: this.localePath('/association/vs'),
            },
            {
              name: this.$t('canton').vd,
              link: this.localePath('/association/vd'),
            },
            {
              name: this.$t('canton').ge,
              link: this.localePath('/association/ge'),
            },
            {
              name: this.$t('canton').fr,
              link: this.localePath('/association/fr'),
            },
          ],
        },
        { name: this.$t('nav').agenda, link: this.localePath('agenda') },
        { name: this.$t('nav').artistes, link: this.localePath('artistes') },
        { name: this.$t('nav').offre, link: this.localePath('offre') },
        { name: this.$t('nav').auditions, link: this.localePath('auditions') },
        { name: this.$t('nav').medias, link: this.localePath('medias') },
        {
          name: this.$t('nav').remerciements,
          link: this.localePath('remerciements'),
        },
        { name: this.$t('nav').contact, link: this.localePath('contact') },
      ]
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

<style lang="postcss" scoped>
.main-nav {
  padding-top: 100px;
  line-height: 1.3;
}

.sub-navigation li:before {
  content: '—';
  padding-right: 0.3rem;
}
</style>
