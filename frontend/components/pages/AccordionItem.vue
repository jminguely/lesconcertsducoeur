<template>
  <div class="border-t border-b border-black">
    <div class="flex items-center cursor-pointer select-none" @click="open = !open">
      <svg
        :class="{ 'transform rotate-90': open }"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        class="mr-2 duration-300 ease-in-out bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
      </svg>
      <h2 class="text-4xl font-newsCycle"><slot name="label"></slot></h2>
    </div>
    <div :class="{ 'duration-300 ease-in-out min-h-0 max-h-0 flex justify-between': true, 'overflow-hidden max-h-0 font-newsCycle': !open, 'max-h-144 overflow-auto pt-4': open }">
      <div class="w-full px-5">
        <slot name="content"></slot>
      </div>
      <div class="w-full">
        <slot name="image"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>
