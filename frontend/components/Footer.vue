<template>
  <div class="my-12 font-newsCycle">
    <Divider />
    <nuxt-link to="/about" class="mt-6 text-lg text-gray-800">© 2021 Les Concerts du Coeur | Impressum | protection des données</nuxt-link>
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
