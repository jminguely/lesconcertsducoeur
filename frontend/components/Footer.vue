<template>
  <div class="pt-5 pb-5 font-newsCycle">
    <Divider class="mb-2" />
    <nuxt-link to="/about" class="text-lg text-gray-800">© 2021 Les Concerts du Coeur | Impressum | protection des données</nuxt-link>
  </div>
</template>
<script>
import Divider from '@/components/pages/Divider.vue'

export default {
  components: {
    Divider,
  },
}
</script>
