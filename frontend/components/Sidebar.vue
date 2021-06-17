<template>
  <div class="fixed top-0 left-0 z-20 flex flex-col justify-between h-screen max-w-xs px-12 py-4 bg-white">
    <div>fr|de</div>

    <div>
      <div class="flex flex-col my-8 pointer-events-none font-playFair">
        <h6 class="ml-5 text-2xl leading-4">les concerts du</h6>
        <h2 class="leading-8 text-7xl">:<span class="relative inline-block transform rotate-180 top-6">c</span>oeur</h2>
      </div>

      <div>
        <div class="flex flex-col ml-4">
          <nuxt-link v-for="(item, i) in links" :key="i" :to="item.link">{{ item.name }}</nuxt-link>
        </div>
      </div>

      <nuxt-link class="relative flex items-center justify-center w-20 h-20 leading-5 text-center text-white transform bg-gray-700 rounded-full -rotate-25 left-24 top-20 font-playFair" to="support">
        Nous soutenir!
      </nuxt-link>
    </div>
    <div class="flex flex-col">
      <div class="flex items-center">
        <div class="mr-2">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 svg-inline--fa fa-facebook fa-w-16 fa-7x"
          >
            <path
              fill="currentColor"
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              class=""
            ></path>
          </svg>
        </div>

        <div class="mr-2">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="instagram"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="w-5 svg-inline--fa fa-instagram fa-w-14 fa-7x"
          >
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              class=""
            ></path>
          </svg>
        </div>

        <span class="font-bold"> Contact </span>
      </div>
      <div class="mt-4">
        <input class="px-2 border-2 border-gray-800" placeholder="s'abonner a la newsletter" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Accueil', link: 'home' },
        { name: 'Notre mission', link: 'our-mission' },
        { name: 'Les concerts', link: 'concerts' },
        { name: 'Agenda', link: 'agenda' },
        { name: 'Media', link: 'media' },
      ],
    }
  },
}
</script>
