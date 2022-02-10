<template>
  <li :class="classObj">
    <div v-clickaway="closeDropdown" class="flex items-center text-xl lg:text-base" @click="toggleDropdown()">
      <div class="h-5 w-5">
        <svg
          id="Capa_1"
          :class="{ 'rotate-45': dropdown, 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }"
          class="fill-current w-5 h-5 duration-200 ease-in-out transform"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
      <span class="pl-2 text-xl" :class="{ 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }">
        <slot name="content"></slot>
      </span>
    </div>

    <div
      class="mt-px border-b-2 py-1 pl-7 z-10 overflow-hidden text-xl text-gray-800 duration-300 ease-in-out bg-white"
      :class="{
        'border-vs': canton == 'vs',
        'border-vd': canton == 'vd',
        'border-ge': canton == 'ge',
        'h-0': !dropdown,
        'h-24': dropdown,
        'pointer-events-none': !dropdown,
      }"
    >
      <slot name="items"></slot>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    canton: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      dropdown: false,
    }
  },
  computed: {
    classObj() {
      const obj = {}
      const statements = []

      statements[0] = 'bg-white duration-300 ease-in-out flex flex-col w-full cursor-pointer select-none'

      statements[1] = 'h-9'

      // statements[2] = this.canton === 'vd' ? 'h-36' : 'h-32'

      const conditions = [true, !this.dropdown, this.dropdown]

      for (let i = 0; i < statements.length; i++) {
        obj[statements[i]] = conditions[i]
      }

      return obj
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
    closeDropdown() {
      this.dropdown = false
    },
  },
}
</script>
