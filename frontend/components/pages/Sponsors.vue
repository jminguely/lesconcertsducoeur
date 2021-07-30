<template>
  <div>
    <div class="mb-10 text-3xl font-playFair">
      <slot name="title"></slot>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <a v-for="(item, i) in sponsors" :key="i" target="_blank" :href="item.link">
        <img class="w-full h-full object-contain" :src="item.img" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sponsors: {
      type: Array,
      default() {
        return [
          {
            img: '',
            link: '',
          },
        ]
      },
    },
  },
}
</script>
