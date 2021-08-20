<template>
  <div class="text-concert-dark">
    <h4 class="text-4xl lg:text-5xl font-newsCycle">
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
