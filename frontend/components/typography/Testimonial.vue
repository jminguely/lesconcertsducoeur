<template>
  <div class="w-full max-w-lg font-newsCycle">
    <div class="text-3xl"><span class="text-5xl">«</span><slot name="quote"></slot><span class="text-5xl">»</span></div>
    <div class="text-4xl text-right"><slot name="name"></slot></div>
    <div class="text-3xl text-right"><slot name="title"></slot></div>
  </div>
</template>

<script>
export default {}
</script>
