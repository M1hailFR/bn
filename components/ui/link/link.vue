<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'normal',
  },
  href: {
    type: String,
    default: '',
  },
  hash: {
    type: String,
    default: '',
  },
  activeClass: {
    type: String,
    default: '',
  },
  essence: {
    type: String,
    default: 'inline',
  },
  anchor: {
    type: Boolean,
    default: false,
  },
})
const { classes } = setBasicUiProps(props, 'link-component')
const isExternal =
  props.href.startsWith('http') ||
  props.href.trim().startsWith('mailto') ||
  props.href.trim().startsWith('tel') ||
  props.href.includes('documents')
</script>

<template>
  <a
    v-if="isExternal || anchor"
    :class="[classes, essence]"
    :href="href"
    :target="isExternal ? '_blank' : null">
    <slot />
  </a>
  <router-link
    v-else
    :class="[classes, essence]"
    :to="{ path: href, hash: hash }"
    :active-class="activeClass">
    <slot />
  </router-link>
</template>

<style lang="scss" scoped>
.link-component {
  @apply transition-all duration-150;

  &.type {
    &-default {
      @apply hover:text-primary;
    }
    &-primary {
      @apply text-white bg-primary rounded-lg hover:bg-gradient-primary;
    }
    &-secondary {
      @apply relative text-primary rounded-lg overflow-hidden hover:bg-gradient-primary hover:text-white;
      &::after {
        content: '';
        @apply absolute top-0 left-0 block w-full h-full border-2 border-primary rounded-lg  hover:border-none;
      }
    }
  }
  &:is(.block).size {
    &-normal {
      @apply text-xs font-medium px-4 pt-3 pb-2.5;
    }
    &-middle {
      @apply text-lg font-medium px-7 pt-3 pb-2.5;
    }
    &-large {
      @apply text-xl font-medium px-10 pt-3 pb-2.5;
    }
  }
  &:is(.inline).size {
    &-small {
      @apply text-sm;
    }
    &-normal {
      @apply text-base;
    }
    &-middle {
      @apply text-lg;
    }
    &-large {
      @apply text-xl;
    }
  }
}
</style>
