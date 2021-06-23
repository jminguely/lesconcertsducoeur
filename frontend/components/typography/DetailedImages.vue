<template>
  <div>
    <div v-for="(item, i) in items" :key="i" class="flex flex-col justify-between my-8 lg:flex-row lg:my-24">
      <div class="text-6xl transform lg:-translate-x-4 lg:-translate-y-10 font-playFair">{{ i + 1 }}.</div>
      <div class="w-full p-5 mr-16 text-2xl border-t-2 border-black font-newsCycle">
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
