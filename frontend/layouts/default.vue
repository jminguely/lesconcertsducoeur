<template>
  <div class="antialiased h-screen">
    <Sidebar />
    <div class="h-full flex flex-col flex-grow mt-5 ml-auto lg:ml-96">
      <Navbar />
      <div class="px-5 flex flex-col justify-between flex-grow mt-20 lg:mt-28 lg:pl-0 lg:pr-20">
        <Nuxt id="content" />
        <Footer />
      </div>
    </div>
    <div class="z-50 fixed w-full h-2 bottom-0 left-0" :class="{ 'bg-vs': canton == 'vs', 'bg-vd': canton == 'vd', 'bg-ge': canton == 'ge' }"></div>
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
  data() {
    return { canton: '' }
  },
  watch: {
    $route(newRoute) {
      if (newRoute.params) this.canton = newRoute.params.canton
    },
  },
  mounted() {
    if (this.$route.params) this.canton = this.$route.params.canton
  },
}
</script>
