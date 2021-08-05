<template>
  <div>
    <div class="text-3xl font-playFair mb-4">
      <slot name="title"></slot>
    </div>
    <div class="flex flex-col items-center lg:flex-row">
      <div :class="`text-${canton} font-newsCycle text-lg lg:text-2xl lg:mr-48`">
        <slot name="details"></slot>
      </div>
      <div v-if="circle" class="ml-auto lg:m-0">
        <nuxt-link :to="localePath('soutien')">
          <div :class="`flex items-center justify-center w-28 h-28 text-2xl px-4 leading-6 text-center text-white transform bg-${canton} rounded-full -rotate-25 font-playFair`">Faire un don</div>
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
