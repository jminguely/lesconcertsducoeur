<template>
  <div>
    <div v-for="(item, i) in items" :key="i" class="flex flex-col justify-between mb-8 lg:mb-24 lg:flex-row">
      <div class="text-5xl transform lg:-translate-y-9 pr-2 font-playFair">{{ i + 1 }}.</div>
      <div class="w-full p-5 mr-16 text-xl border-t-2 border-black font-newsCycle">
        {{ item.description }}
      </div>
      <div class="w-full">
        <img :src="item.img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            description: '',
            img: '',
          },
        ]
      },
    },
  },
}
</script>
