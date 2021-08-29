<template>
  <div id="footer" class="mt-32 pt-5 pb-5 font-newsCycle">
    <Divider class="mb-2" />
    <div class="text-lg">
      © 2021 Les Concerts du Coeur | <nuxt-link :to="localePath('about')">Mentions légales</nuxt-link> | <nuxt-link :to="localePath('privacy')">Protection des données</nuxt-link>
    </div>
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
