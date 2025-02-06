<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'normal',
  },
  nativeType: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])
const { classes } = setBasicUiProps(props, 'button-component')
</script>

<template>
  <button
    :type="nativeType"
    :class="[classes, disabled ? 'opacity-50 z-[-1]' : '']"
    :disabled="disabled"
    @click="emit('click')">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button-component {
  @apply font-semibold transition-colors duration-150;
  &.type {
    &-primary {
      @apply rounded-lg bg-primary text-white hover:bg-gradient-primary;
    }
    &-outline {
      @apply rounded-lg border-white/80 md:border-gray-100 border hover:bg-gray-400 hover:text-black hover:border-gray-400;
    }
    &-secondary {
      @apply relative text-white rounded-lg overflow-hidden hover:bg-gradient-primary hover:text-white;
      &::after {
        content: '';
        @apply absolute top-0 left-0 block w-full h-full border-2 border-primary rounded-lg  hover:border-none;
      }
    }
  }
  &.size {
    &-small {
      @apply text-sm py-2 px-2;
    }
    &-normal {
      @apply py-3 px-10;
    }
    &-middle {
      @apply text-sm w-max px-3 md:text-lg md:px-7 py-3;
    }
  }
  // &.state-disabled {
  // 	@apply opacity-50;
  // }
}
</style>
