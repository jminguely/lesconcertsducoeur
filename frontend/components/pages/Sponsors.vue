<template>
  <div>
    <div class="mb-10 text-2xl ml-7 font-playFair">
      <slot name="title"></slot>
    </div>
    <div class="flex flex-col flex-wrap px-4 lg:flex-row">
      <a v-for="(item, i) in sponsors" :key="i" class="my-5 mr-10 lg:my-0" target="_blank" :href="item.link">
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
