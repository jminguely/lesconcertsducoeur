<template>
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="stroke-current"
    :class="{ 'text-vs': canton == 'vs', 'text-vd': canton == 'vd', 'text-ge': canton == 'ge' }"
  >
    <g clip-path="url(#clip0)">
      <path d="M9 16L24 1" stroke-width="2" stroke-linecap="round" />
      <path d="M9 16L24 31" stroke-width="2" stroke-linecap="round" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="32" height="32" fill="white" transform="matrix(1 0 0 -1 0 32)" />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  props: {
    canton: {
      type: String,
      default: '',
    },
  },
}
</script>
