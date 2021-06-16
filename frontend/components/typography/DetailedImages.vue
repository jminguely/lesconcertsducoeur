<template>
  <div>
    <div v-for="(item, i) in items" :key="i" class="flex justify-between my-24">
      <div class="text-6xl transform -translate-x-4 -translate-y-10 font-playFair">{{ i + 1 }}.</div>
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
