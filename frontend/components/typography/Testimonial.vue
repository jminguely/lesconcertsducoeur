<template>
  <div class="w-full font-newsCycle">
    <div class="text-lg lg:text-xl">
      <span class="font-playFair leading-tight text-3xl">«</span>
      <slot name="quote"></slot>
      <span class="font-playFair leading-tight text-3xl">»</span>
    </div>
    <div class="font-playFair mt-5 text-xl text-right lg:text-xl"><slot name="name"></slot></div>
    <div class="text-lg text-right lg:text-xl"><slot name="title"></slot></div>
  </div>
</template>

<script>
export default {}
</script>
