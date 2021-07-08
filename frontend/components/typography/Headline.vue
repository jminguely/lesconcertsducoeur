<template>
  <div class="text-concert-dark">
    <h4 class="font-bold text-2xl lg:text-6xl font-newsCycle">
      <slot name="headline"></slot>
    </h4>
    <p class="my-4 text-xl lg:text-3xl font-playFair">
      <slot name="content"></slot>
    </p>
  </div>
</template>

<script>
export default {}
</script>
