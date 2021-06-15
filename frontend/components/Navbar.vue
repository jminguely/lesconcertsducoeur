<template>
  <div class="w-full h-16 max-w-full">
    <div class="ml-64">
      <ul class="flex justify-between px-8 py-4 text-2xl">
        <NavbarItem color="red">
          <template #content> Valais </template>
          <template #items>
            <ul class="overflow-hidden">
              <li>L'association</li>
              <li>Nos artistes</li>
              <li>Auditions</li>
            </ul>
          </template>
        </NavbarItem>
        <NavbarItem color="green">
          <template #content> Valais </template>
          <template #items>
            <ul>
              <li>L'association</li>
              <li>Nos artistes</li>
              <li>Auditions</li>
            </ul>
          </template>
        </NavbarItem>
        <NavbarItem color="yellow">
          <template #content> Valais </template>
          <template #items>
            <ul class="overflow-hidden">
              <li>L'association</li>
              <li>Nos artistes</li>
              <li>Auditions</li>
            </ul>
          </template>
        </NavbarItem>
        <!-- <li class="text-red-600 border-b border-red-600 w-full mx-6">
          + Valais
        </li>
        <li class="text-green-600 border-b border-green-600 w-full mx-6">
          + Vaud
        </li>
        <li class="text-yellow-600 border-b border-yellow-600 w-full mx-6">
          + Geneve
        </li> -->
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
