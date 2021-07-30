<template>
  <div class="fixed top-0 z-40 hidden w-full h-16 max-w-full bg-white left-0 lg:block">
    <div class="pt-5 lg:ml-96 lg:pr-20">
      <ul class="grid grid-cols-3 gap-5 text-2xl">
        <NavbarItem color="red">
          <template #content>{{ $t('canton').VS }}</template>
          <template #items>
            <ul class="flex flex-col overflow-hidden">
              <nuxt-link :to="localePath({ name: 'canton-association', params: { canton: 'vs' } })">L'association</nuxt-link>
              <nuxt-link :to="localePath({ name: 'canton-artistes', params: { canton: 'vs' } })">Nos artistes</nuxt-link>
              <nuxt-link :to="localePath({ name: 'canton-auditions', params: { canton: 'vs' } })">Auditions</nuxt-link>
            </ul>
          </template>
        </NavbarItem>
        <NavbarItem color="green">
          <template #content>{{ $t('canton').VD }}</template>
          <template #items>
            <ul class="flex flex-col overflow-hidden">
              <nuxt-link :to="localePath({ name: 'canton-association', params: { canton: 'vd' } })">L'association</nuxt-link>
              <nuxt-link :to="localePath({ name: 'canton-artistes', params: { canton: 'vd' } })">Nos artistes</nuxt-link>
              <nuxt-link :to="localePath({ name: 'canton-auditions', params: { canton: 'vd' } })">Auditions</nuxt-link>
            </ul>
          </template>
        </NavbarItem>
        <NavbarItem color="yellow">
          <template #content>{{ $t('canton.GE') }}</template>
          <template #items>
            <ul class="flex flex-col overflow-hidden">
              <nuxt-link :to="localePath({ name: 'canton-association', params: { canton: 'ge' } })">L'association</nuxt-link>
              <nuxt-link :to="localePath({ name: 'canton-artistes', params: { canton: 'ge' } })">Nos artistes</nuxt-link>
              <nuxt-link :to="localePath({ name: 'canton-auditions', params: { canton: 'ge' } })">Auditions</nuxt-link>
            </ul>
          </template>
        </NavbarItem>
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
}
</script>
