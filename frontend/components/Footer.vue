<template>
  <div id="footer" class="mt-32 pt-5 pb-5 font-newsCycle">
    <Divider class="mb-2" />
    <div class="text-lg">
      © 2021 Les Concerts du Coeur | <nuxt-link :to="localePath('impressum')"> {{ $t('impressum').title }} </nuxt-link> | <nuxt-link :to="localePath('privacy')">{{ $t('privacy').title }}</nuxt-link>
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
