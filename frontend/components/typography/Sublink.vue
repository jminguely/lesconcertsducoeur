<template>
  <div>
    <h2 class="text-2xl lg:text-3xl font-playFair">
      <slot name="title"></slot>
    </h2>
    <h4
      class="pt-2 text-xl border-0"
      :class="{
        'border-VS text-VS': canton == 'vs',
        'border-VD text-VD': canton == 'vd',
        'border-GE text-GE': canton == 'ge',
      }"
    >
      <slot name="text"></slot>
    </h4>
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
