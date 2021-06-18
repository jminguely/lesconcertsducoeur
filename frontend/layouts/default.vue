<template>
  <div>
    <Sidebar />
    <div class="flex flex-col flex-grow mt-5 ml-auto main lg:ml-96">
      <Navbar />
      <div class="flex flex-col flex-grow p-4 main-content mt-28">
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
