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
        <span v-if="!link.link">{{ link.name }}</span>
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
          name: this.$t('nav').mission,
          link: `/${this.$i18n.locale}/mission`,
        },
        {
          name: this.$t('nav').association,
          open: false,
          subLinks: [
            {
              name: this.$t('canton').vs,
              link: this.localePath('/association/VS'),
            },
            {
              name: this.$t('canton').vd,
              link: this.localePath('/association/VD'),
            },
            {
              name: this.$t('canton').ge,
              link: this.localePath('/association/GE'),
            },
            {
              name: this.$t('canton').fr,
              link: this.localePath('/association/FR'),
            },
          ],
        },
        { name: this.$t('nav').agenda, link: this.localePath('agenda') },
        { name: this.$t('nav').artistes, link: this.localePath('artistes') },
        { name: this.$t('nav').offre, link: `/${this.$i18n.locale}/offre` },
        {
          name: this.$t('nav').auditions,
          link: `/${this.$i18n.locale}/auditions`,
        },
        { name: this.$t('nav').medias, link: `/${this.$i18n.locale}/medias` },
        {
          name: this.$t('nav').remerciements,
          link: `/${this.$i18n.locale}/remerciements`,
        },
        {
          name: this.$t('nav').contact,
          link: `/${this.$i18n.locale}/contact`,
        },
      ]
    },
  },
}
</script>

<style lang="postcss" scoped>
.site-navigation {
  line-height: 1.3;

  a {
    text-decoration: none;
  }
}

.sub-navigation li::before {
  content: '—';
  padding-right: 0.3rem;
}
</style>
