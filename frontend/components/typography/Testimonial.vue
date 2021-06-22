<template>
  <div class="w-full max-w-lg font-newsCycle">
    <div class="text-xl lg:text-3xl"><span class="lg:text-5xl">«</span><slot name="quote"></slot><span class="text-3xl lg:text-5xl">»</span></div>
    <div class="mt-5 text-2xl text-right lg:text-4xl lg:mt-0"><slot name="name"></slot></div>
    <div class="text-xl text-right lg:text-3xl"><slot name="title"></slot></div>
  </div>
</template>

<script>
export default {}
</script>
