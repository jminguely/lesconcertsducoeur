<template>
  <div>
    <div class="mb-10 text-2xl ml-7 font-playFair">
      <slot name="title"></slot>
    </div>
    <div class="flex flex-wrap justify-between px-4">
      <a v-for="(item, i) in sponsors" :key="i" target="_blank" :href="item.link">
        <img :src="item.img" />
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
