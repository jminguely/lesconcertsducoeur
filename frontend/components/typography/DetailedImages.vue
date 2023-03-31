<template>
  <div>
    <div
      v-for="(item, i) in items"
      :key="i"
      class="flex flex-col justify-between mb-8 lg:mb-24 lg:flex-row"
    >
      <div
        class="w-10 bg-white text-4xl lg:text-5xl transform translate-y-4 lg:-translate-y-9 pr-2 font-playFair"
      >
        {{ i + 1 }}.
      </div>
      <div
        class="w-full pb-5 pt-5 text-xl border-t-2 border-gray lg:pt-5 lg:mr-10"
      >
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
