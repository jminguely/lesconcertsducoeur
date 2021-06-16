<template>
  <div :class="`border-t-2 border-r-2 border-b-2 border-${color}-600 w-80`">
    <span class="block w-24 text-2xl transform -translate-y-5 bg-white font-playFair"><slot name="date"></slot></span>
    <div class="pb-8 pr-4">
      <h3 :class="`text-2xl font-newsCycle text-${color}-500`"><slot name="pretitle"></slot></h3>
      <h1 class="text-3xl font-playFair"><slot name="title"></slot></h1>
      <p :class="`text-2xl font-newsCycle border-b border-${color}-600`"><slot name="content"></slot></p>
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
  },
}
</script>
