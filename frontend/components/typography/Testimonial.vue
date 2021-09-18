<template>
  <div class="w-full font-newsCycle">
    <div class="text-lg lg:text-xl">
      <span class="font-playFair text-2xl lg:text-3xl" style="line-height: 0 !important">«</span>
      <slot name="quote"></slot>
      <span class="font-playFair text-2xl lg:text-3xl" style="line-height: 0 !important">»</span>
    </div>
    <div class="font-playFair mt-5 text-xl text-right lg:text-xl"><slot name="name"></slot></div>
    <div class="text-lg text-right lg:text-xl"><slot name="title"></slot></div>
  </div>
</template>

<script>
export default {}
</script>
