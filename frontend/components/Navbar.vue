<template>
  <div id="navbar" class="fixed top-0 z-40 hidden w-full h-14 max-w-full bg-white left-0 lg:block">
    <div class="pt-4 lg:ml-96 lg:pr-20">
      <ul class="grid grid-cols-3 gap-x-5 text-xl">
        <navbar-item v-for="(canton, i) in cantons" :key="'navbar-' + i + canton" :canton="canton">
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
  </div>
</template>

<script>
import NavbarItem from '@/components/NavbarItem.vue'

export default {
  components: {
    NavbarItem,
  },
  data() {
    return {
      cantons: ['vs', 'vd', 'ge'],
    }
  },
}
</script>
