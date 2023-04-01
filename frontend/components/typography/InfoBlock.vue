<template>
  <div
    class="border-t-2 border-r-2 border-b-2 w-full"
    :class="{
      'border-gray': canton == '' || canton == 'all',
      'border-VS': canton == 'vs',
      'border-VD': canton == 'vd',
      'border-GE': canton == 'ge',
    }"
  >
    <!-- Date -->
    <!-- <span class="block w-32 text-xl transform -translate-y-5 bg-white font-playFair">
      <slot name="date"></slot>
    </span> -->
    <div class="pt-5 pb-5 pr-4">
      <!-- Pretitle -->
      <h3
        class="text-xl"
        :class="{
          'text-gray': canton == '' || canton == 'all',
          'text-VS': canton == 'vs',
          'text-VD': canton == 'vd',
          'text-GE': canton == 'ge',
        }"
      >
        <slot name="pretitle"></slot>
      </h3>
      <!-- Title -->
      <h1 class="text-2xl font-playFair">
        <slot name="title"></slot>
      </h1>
      <!-- Content -->
      <p class="text-xl">
        <slot name="content"></slot>
      </p>
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
