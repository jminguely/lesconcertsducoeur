<template>
  <li :class="classObj">
    <div v-clickaway="closeDropdown" class="flex items-center text-xl lg:text-base" @click="toggleDropdown()">
      <svg
        id="Capa_1"
        :class="{ 'rotate-45': dropdown }"
        class="w-5 h-5 mr-2 duration-200 ease-in-out transform"
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
              :fill="detemineColor()"
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

      <slot name="content"></slot>
    </div>

    <div class="z-10 overflow-hidden text-lg text-gray-800 duration-300 ease-in-out bg-white" :class="{ 'h-0': !dropdown, 'h-32': dropdown, 'pointer-events-none': !dropdown }">
      <slot name="items"></slot>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'red',
    },
    black: {
      type: Boolean,
      default: false,
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

      statements[0] = `text-${this.color}-600 bg-white duration-300 ease-in-out flex flex-col  border-b  w-full lg:mx-6 cursor-pointer select-none`

      if (this.black) {
        statements[0] += ' border-black'
      } else {
        statements[0] += ` border-${this.color}-600`
      }

      statements[1] = 'h-10'

      statements[2] = 'h-32'

      const conditions = [true, !this.dropdown, this.dropdown, this.topBorder]

      for (let i = 0; i < statements.length; i++) {
        obj[statements[i]] = conditions[i]
      }

      return obj
    },
  },
  methods: {
    detemineColor() {
      if (this.color) {
        if (this.color.toLowerCase() === 'red') {
          return '#dc2626'
        } else if (this.color.toLowerCase() === 'green') {
          return '#059669'
        } else if (this.color.toLowerCase() === 'yellow') {
          return '#d97706'
        } else {
          return '#dc2626'
        }
      }
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
    closeDropdown() {
      this.dropdown = false
    },
  },
}
</script>
