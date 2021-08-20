<template>
  <div class="flex flex-col justify-between lg:flex-row">
    <div class="w-full text-xl pr-10">
      <div class="border-t-2 border-b-2 border-r-2 border-black">
        <div class="pr-4 text-lg transform -translate-y-5 bg-white font-playFair w-max lg:text-xl">
          <slot name="title"></slot>
        </div>
        <div class="pb-8">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <div class="w-full my-6 lg:my-0">
      <slot name="image"></slot>
    </div>
  </div>
</template>
