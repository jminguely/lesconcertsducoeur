<template>
  <div class="flex justify-between">
    <div class="w-full text-2xl">
      <div class="border-t-2 border-b-2 border-r-2 border-black">
        <div class="pr-4 transform -translate-y-5 bg-white font-playFair w-max">
          <slot name="title"></slot>
        </div>
        <div class="pb-8">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <div class="w-full">
      <slot name="image"></slot>
    </div>
  </div>
</template>
