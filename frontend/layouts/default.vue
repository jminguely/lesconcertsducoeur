<template>
  <div>
    <Sidebar />
    <div class="flex flex-col flex-grow mt-5 ml-auto lg:ml-96">
      <Navbar />
      <div class="px-5 flex flex-col flex-grow mt-28 lg:pl-0 lg:pr-20">
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
