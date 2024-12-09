<script setup>
const { classes } = setBasicUiProps({}, 'dropdown-option')
</script>

<template>
  <div :class="[classes]">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-option {
  @apply flex justify-between items-center py-1 px-2 cursor-pointer;
  &.state-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
