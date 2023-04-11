<template>
  <div class="grid lg:grid-cols-2 gap-10 mb-20">
    <div
      v-for="testimonial in testimonials"
      :key="testimonial.id"
      class="flex flex-col mb-10"
    >
      <p class="testimonial">
        {{ testimonial.Texte }}
      </p>
      <p
        v-if="testimonial.Author"
        class="font-playFair mt-5 text-right w-1/2 self-end"
      >
        {{ testimonial.Author }}
      </p>
      <p v-if="testimonial.Position" class="text-right w-2/3 self-end">
        {{ testimonial.Position }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonials: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
.testimonial {
  @apply text-lg;

  &::before,
  &::after {
    @apply font-playFair;

    font-size: 1.25em;
  }

  &::before {
    content: '«';
  }

  &::after {
    content: '»';
  }
}
</style>
