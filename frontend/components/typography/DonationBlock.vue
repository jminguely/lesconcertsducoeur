<template>
  <div id="component__donation">
    <div class="text-3xl font-playFair mb-4">
      <slot name="title"></slot>
    </div>
    <div class="flex items-center flex-row justify-between">
      <div class="font-newsCycle text-lg lg:text-xl lg:mr-48" :class="{ 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }">
        <slot name="details"></slot>
      </div>
      <div v-if="circle" id="donation-circle" class="ml-auto lg:m-0">
        <nuxt-link :to="localePath('soutien')" class="no-underline">
          <div
            class="
              font-normal
              duration-500
              ease-in-out
              hover:scale-105
              flex
              items-center
              justify-center
              w-28
              h-28
              text-xl
              px-4
              leading-6
              text-center text-white
              transform
              rounded-full
              -rotate-25
              font-playFair
            "
            :class="{ 'bg-vs': canton == 'vs', 'bg-vd': canton == 'vd', 'bg-ge': canton == 'ge' }"
          >
            Faire un don
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    canton: {
      type: String,
      default: '',
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
