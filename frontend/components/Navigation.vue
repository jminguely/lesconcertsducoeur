<template>
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
</template>

<script>
export default {
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
}
</script>

<style lang="postcss" scoped>
.main-nav {
  line-height: 1.3;
}

.sub-navigation li:before {
  content: '—';
  padding-right: 0.3rem;
}
</style>
