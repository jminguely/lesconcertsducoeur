<template>
  <div>
    <Sidebar />
    <Navbar />
    <Nuxt />
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
