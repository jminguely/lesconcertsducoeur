<template>
  <div class="w-full max-w-lg font-newsCycle">
    <div class="text-xl lg:text-2xl">
      <span class="font-playFair leading-3 text-3xl">«</span>
      <slot name="quote"></slot>
      <span class="font-playFair leading-3 text-3xl">»</span>
    </div>
    <div class="font-playFair mt-5 text-2xl text-right lg:text-3xl"><slot name="name"></slot></div>
    <div class="text-xl text-right lg:text-2xl"><slot name="title"></slot></div>
  </div>
</template>

<script>
export default {}
</script>
