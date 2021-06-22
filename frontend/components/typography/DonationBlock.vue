<template>
  <div>
    <div class="text-3xl font-playFair">
      <slot name="title"></slot>
    </div>
    <div class="flex flex-col items-center ml-16 lg:ml-56 justify-items-start lg:flex-row">
      <div :class="`text-${color}-500 font-newsCycle text-lg lg:text-2xl lg:mr-48`">
        <slot name="details"></slot>
      </div>
      <div v-if="circle" class="ml-auto lg:m-0">
        <div :class="`flex items-center justify-center w-28 h-28 text-2xl px-4 leading-5 text-center text-white transform bg-${color}-500 rounded-full -rotate-25 font-playFair`">Faire un don</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'red',
    },
    circle: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
