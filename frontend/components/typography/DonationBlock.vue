<template>
  <div id="component__donation">
    <div class="text-3xl font-playFair mb-4">
      <slot name="title"></slot>
    </div>
    <div class="flex items-center flex-row justify-between">
      <div
        class="text-lg lg:text-xl lg:mr-48"
        :class="{
          'text-VS': canton == 'vs',
          'text-VD': canton == 'vd',
          'text-GE': canton == 'ge',
        }"
      >
        <slot name="details"></slot>
      </div>
      <div v-if="circle" id="donation-circle" class="ml-auto lg:m-0">
        <nuxt-link
          :to="localePath({ name: 'canton-don', params: { canton } })"
          class="no-underline"
        >
          <div
            class="font-normal duration-500 ease-in-out hover:scale-105 flex items-center justify-center w-28 h-28 text-xl px-4 leading-6 text-center text-white transform rounded-full -rotate-25 font-playFair"
            :class="{
              'bg-VS': canton == 'vs',
              'bg-VD': canton == 'vd',
              'bg-GE': canton == 'ge',
            }"
          >
            {{ $t('association').donate }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    canton: {
      type: String,
      default: '',
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
