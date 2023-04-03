<template>
  <div class="antialiased min-h-screen">
    <div class="site-wrapper px-12">
      <div class="site-topbar">
        <MarqueeBanner />
        <div class="lang-switcher hidden md:block">
          <nuxt-link :to="switchLocalePath('fr')">fr</nuxt-link> |
          <nuxt-link :to="switchLocalePath('de')">de</nuxt-link>
        </div>
        <div class="hidden md:block">
          <Btn
            color="multi"
            :text="$t('nav').nousSoutenir"
            :link="localePath('soutien')"
          />
        </div>
        <div class="md:hidden">
          <MenuToggle :menu-open="menuOpen" @toggleMenu="toggleMenu" />
        </div>
      </div>
      <Sidebar :menu-open="menuOpen" />
      <Nuxt id="content" class="site-content" />
    </div>
    <Footer />
  </div>
</template>
<script>
import MenuToggle from '~/components/MenuToggle.vue'

export default {
  components: { MenuToggle },
  data() {
    return {
      menuOpen: false,
    }
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
}

.site-wrapper {
  display: grid;
  grid-template:
    'topbar'
    'sidebar'
    'content';
  gap: 0 100px;

  @screen md {
    grid-template:
      'topbar topbar'
      'sidebar content' 200px auto;
  }
}

.lang-switcher {
  padding: 6px 20px;
  white-space: nowrap;
}

.site-topbar {
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: row;
  justify-content: space-between;
  grid-area: topbar;
  border-bottom: 1px solid #828282;
  background: white;
  z-index: 20;
  padding: 10px 0;
  min-width: 0; /* hotfix to make the splide not overflow the flex layout */
}

.site-sidebar {
  grid-area: sidebar;
}

.site-content {
  @apply pt-24;

  grid-area: content;

  h2 {
    @apply text-xl lg:text-3xl font-playFair;
    @apply mt-10;
  }

  h2:first-of-type {
    @apply mt-0;
  }

  h3 {
    @apply text-lg lg:text-2xl font-playFair;
    @apply mt-10;
  }

  h4 {
    @apply text-base lg:text-xl font-playFair;
    @apply mt-10;
  }

  p {
    @apply text-xl mt-4;
  }

  &.ge {
    blockquote {
      @apply text-GE;
    }
  }

  &.vs {
    blockquote {
      @apply text-VS;
    }
  }

  &.vd {
    blockquote {
      @apply text-VD;
    }
  }
}

.splide ul > li::before {
  content: '' !important;
}
</style>
