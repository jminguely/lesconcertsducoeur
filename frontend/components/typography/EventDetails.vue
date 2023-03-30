<template>
  <div class="flex flex-col justify-between border-b border-gray-800 lg:grid lg:grid-cols-2 lg:gap-x-10">
    <div class="flex flex-col lg:max-w-xl">
      <div class="mb-2 font-playFair text-2xl lg:text-3xl" :class="{ 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }">
        <div><slot name="date"></slot></div>
        <div><slot name="location"></slot></div>
      </div>
      <div class="text-4xl lg:text-5xl lg:mb-0 text-concert-dark">
        <slot name="title"></slot>
      </div>
    </div>

    <div class="flex flex-col justify-end">
      <div class="font-playFair text-xl lg:text-2xl" :class="{ 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }">
        <slot name="artists"></slot>
      </div>
      <div class="font-playFair text-xl lg:text-2xl" :class="{ 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }">
        <slot name="details"> </slot>
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
  },
}
</script>
