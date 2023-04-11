<template>
  <div class="badge" :class="`bg-${color}`">
    <span>
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    color: {
      type: String,
      default: 'gray',
    },
  },
}
</script>

<style scoped lang="postcss">
.badge {
  @apply font-playFair;

  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;

  span {
    color: white;
    display: block;
    margin: auto;
    transform: rotate(-10deg);
    text-decoration: none;
  }
}
</style>
