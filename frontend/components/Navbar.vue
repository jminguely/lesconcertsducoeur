<template>
  <div class="fixed top-0 z-40 hidden w-full h-16 max-w-full bg-white left-0 lg:block">
    <div class="lg:ml-96 lg:mr-20">
      <ul class="flex justify-between pt-5 text-2xl">
        <NavbarItem color="red">
          <template #content> Valais </template>
          <template #items>
            <ul class="flex flex-col overflow-hidden">
              <nuxt-link to="/vs/associations">L'association</nuxt-link>
              <nuxt-link to="/vs/our-artists">Nos artistes</nuxt-link>
              <nuxt-link to="/vs/auditions">Auditions</nuxt-link>
            </ul>
          </template>
        </NavbarItem>
        <NavbarItem color="green">
          <template #content> Vaud </template>
          <template #items>
            <ul class="flex flex-col overflow-hidden">
              <nuxt-link to="/vd/associations">L'association</nuxt-link>
              <nuxt-link to="/vd/our-artists">Nos artistes</nuxt-link>
              <nuxt-link to="/vd/auditions">Auditions</nuxt-link>
            </ul>
          </template>
        </NavbarItem>
        <NavbarItem color="yellow">
          <template #content> Genève </template>
          <template #items>
            <ul class="flex flex-col overflow-hidden">
              <nuxt-link to="/ge/associations">L'association</nuxt-link>
              <nuxt-link to="/ge/our-artists">Nos artistes</nuxt-link>
              <nuxt-link to="/ge/auditions">Auditions</nuxt-link>
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
