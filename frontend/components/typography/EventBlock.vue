<template>
  <div class="border-t-2 border-r-2 border-b-2 w-full" :class="{ 'border-concert-dark': canton == '', 'border-vs': canton == 'vs', 'border-vd': canton == 'vd', 'border-ge': canton == 'ge' }">
    <span class="block pr-2 text-xl transform -translate-y-4 bg-white w-max font-playFair">
      <slot name="datetime"></slot>
    </span>
    <div class="pt-1 pb-8 pr-4">
      <h3 class="pb-2 text-xl font-newsCycle" :class="{ 'text-concert-dark': canton == '', 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }">
        <slot name="pretitle"></slot>
      </h3>
      <h1 class="text-3xl font-playFair"><slot name="title"></slot></h1>
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
