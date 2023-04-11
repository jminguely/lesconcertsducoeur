<template>
  <div class="antialiased min-h-screen">
    <div class="site-wrapper">
      <div class="site-topbar">
        <MarqueeBanner
          :key="settings.id"
          :notifications="settings.Notifications"
        />
        <div class="lang-switcher hidden md:block">
          <nuxt-link :to="switchLocalePath('fr')">fr</nuxt-link> |
          <nuxt-link :to="switchLocalePath('de')">de</nuxt-link>
        </div>
        <div class="hidden md:block">
          <Btn
            color="multi"
            class="whitespace-nowrap"
            :text="$t('nav').nousSoutenir"
            :link="`/${$i18n.locale}/soutien`"
          />
        </div>
        <div class="md:hidden">
          <MenuToggle :menu-open="menuOpen" @toggleMenu="toggleMenu" />
        </div>
      </div>
      <Sidebar :menu-open="menuOpen" />
      <Nuxt id="content" class="site-content" />
    </div>
    <Footer :key="settings.id" :logos="settings.Logos" />
  </div>
</template>
<script>
import fetchSettings from '~/graphql/fetchSettings.gql'

import MenuToggle from '~/components/MenuToggle.vue'

export default {
  components: { MenuToggle },
  data() {
    return {
      menuOpen: false,
      settings: {},
    }
  },
  apollo: {
    settings: {
      query: fetchSettings,
      variables() {
        return {
          locale: `${this.$i18n.locale}-CH`,
        }
      },
      prefetch: true,
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen

      if (this.menuOpen) window.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="postcss">
html {
  scroll-behavior: smooth;
}

body {
  overscroll-behavior-y: none;

  &.popup-open {
    overflow: hidden;
  }
}

.site-wrapper {
  @apply max-w-7xl mx-auto px-12;

  display: grid;
  grid-template:
    'topbar'
    'sidebar'
    'content';
  gap: 0 100px;

  @screen md {
    grid-template:
      'topbar topbar'
      'sidebar content' min-content / 200px 1fr;
  }
}

.lang-switcher {
  padding: 6px 20px;
  white-space: nowrap;
}

.site-topbar {
  @apply pl-3 py-2;

  display: flex;
  position: sticky;
  top: 0;
  flex-direction: row;
  justify-content: space-between;
  grid-area: topbar;
  border-bottom: 1px solid #828282;
  background: white;
  z-index: 20;
  min-width: 0; /* hotfix to make the splide not overflow the flex layout */
}

.site-sidebar {
  grid-area: sidebar;

  @apply pl-3;
}

.site-content {
  grid-area: content;
  min-width: 0; /* hotfix to make the splide not overflow the flex layout */

  @apply pt-24;

  h1,
  .h1 {
    @apply text-4xl lg:text-5xl mb-5 font-sans;
  }

  h2 {
    @apply text-xl lg:text-3xl font-playFair;
  }

  h3 {
    @apply text-lg lg:text-2xl font-playFair;
  }

  h4 {
    @apply text-base lg:text-xl font-playFair;
  }

  a {
    text-decoration: underline;
    text-underline-offset: 0.3rem;
    text-decoration-thickness: 1px;
    text-decoration-color: inherit;

    &:has(span) {
      text-decoration: none;
    }

    span {
      text-decoration: underline;
      text-underline-offset: 0.3rem;
      text-decoration-thickness: 1px;
      text-decoration-color: inherit;
    }
  }
}

.nuxt-link-active {
  font-weight: 600;
}

.aspect-square {
  aspect-ratio: 1 / 1;
}

.aspect-logo {
  aspect-ratio: 4 / 3;
}

.aspect-video {
  aspect-ratio: 16 / 9;
}
</style>
