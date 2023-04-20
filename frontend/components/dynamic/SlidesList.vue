<template>
  <div class="mt-10 mb-10 lg:mb-20">
    <div v-for="(slide, i) in slides" :key="slide.id">
      <SlideItem
        :bullet="i + 1"
        :rich-text="slide.RichText"
        :image="slide.Image"
      />
    </div>
  </div>
</template>

<script>
import SlideItem from './SlideItem.vue'

export default {
  components: { SlideItem },
  props: {
    slides: {
      type: Array,
      default: () => {},
    },
  },
}
</script>
