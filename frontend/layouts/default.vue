<template>
  <div>
    <Sidebar />
    <Navbar />
    <div class="w-full mt-5 ml-auto max-w-screen-2xl">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Sidebar,
    Navbar,
  },
}
</script>
