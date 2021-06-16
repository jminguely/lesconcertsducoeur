<template>
  <div>
    <Sidebar />
    <Navbar />
    <div class="w-full mt-5 ml-auto max-w-screen-2xl">
      <div class="mt-24 px-9">
        <Nuxt />
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
}
</script>
