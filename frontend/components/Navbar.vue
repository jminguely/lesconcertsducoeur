<template>
  <div class="fixed top-0 z-10 z-50 w-full h-16 max-w-full bg-white left-5">
    <div class="lg:ml-64">
      <ul class="flex justify-between px-8 py-4 text-2xl">
        <NavbarItem color="red">
          <template #content> Valais </template>
          <template #items>
            <ul class="flex flex-col overflow-hidden">
              <nuxt-link to="/valais/associations">L'association</nuxt-link>
              <nuxt-link to="/valais/our-artists">Nos artistes</nuxt-link>
              <nuxt-link to="/valais/auditions">Auditions</nuxt-link>
            </ul>
          </template>
        </NavbarItem>
        <NavbarItem color="green">
          <template #content> Vaud </template>
          <template #items>
            <ul class="flex flex-col overflow-hidden">
              <nuxt-link to="/vaud/associations">L'association</nuxt-link>
              <nuxt-link to="/vaud/our-artists">Nos artistes</nuxt-link>
              <nuxt-link to="/vaud/auditions">Auditions</nuxt-link>
            </ul>
          </template>
        </NavbarItem>
        <NavbarItem color="yellow">
          <template #content> Genève </template>
          <template #items>
            <ul class="flex flex-col overflow-hidden">
              <nuxt-link to="/geneva/associations">L'association</nuxt-link>
              <nuxt-link to="/geneva/our-artists">Nos artistes</nuxt-link>
              <nuxt-link to="/geneva/auditions">Auditions</nuxt-link>
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
