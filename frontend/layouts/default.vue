<template>
  <div class="antialiased min-h-screen">
    <div class="site-wrapper">
      <div class="site-topbar">
        <img
          class="w-24 object-contain h-auto -ml-3 md:hidden"
          src="/CdC-logo.png"
        />
        <div class="hidden md:flex min-w-0">
          <MarqueeBanner
            :key="settings.id"
            :notifications="settings.Notifications"
          />
        </div>
        <div class="lang-switcher">
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
      <div
        v-if="$route.name.includes('index')"
        class="marquee-mobile"
        aria-hidden="true"
      >
        <MarqueeBanner
          :key="settings.id"
          :notifications="settings.Notifications"
        />
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
  watch: {
    $route() {
      this.menuOpen = false
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
  font-size: 20px;
}

body {
  overscroll-behavior-y: none;

  &.popup-open {
    overflow: hidden;
  }
}

.site-wrapper {
  @apply max-w-7xl mx-auto px-6;

  display: grid;
  grid-template:
    'topbar'
    'marquee'
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
  padding: 10px 20px;
  white-space: nowrap;
}

.marquee-mobile {
  @apply md:hidden min-w-0;

  grid-area: marquee;
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

  @apply md:pl-3;
}

.site-content {
  grid-area: content;
  min-width: 0; /* hotfix to make the splide not overflow the flex layout */

  @apply pt-6 md:pt-24;

  h1,
  .h1 {
    @apply text-4xl lg:text-5xl mb-5 font-sans;
  }

  h2 {
    @apply text-xl lg:text-3xl font-playFair mb-1;
  }

  h3 {
    @apply text-lg lg:text-2xl font-playFair mb-1;

    line-height: 1.25;
  }

  h3 + ul,
  h3 + ol {
    @apply mt-3;
  }

  h4 {
    @apply text-base lg:text-xl font-playFair;
  }

  a:not(.no-underline):not(.btn) {
    text-decoration: underline;
    text-underline-offset: 0.3rem;
    text-decoration-thickness: 1px;
    text-decoration-color: inherit;
    letter-spacing: 0.1rem;

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
