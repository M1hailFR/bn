<script setup>
import vOutside from '/directives/outside.js'

import Icon from '/components/ui/icon/icon.vue'
import Option from './option.vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'light',
  },
  openIndicator: {
    type: Boolean,
    default: true,
  },
  openOnHover: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['change'])
const { change } = setBasicUiDataBindings(emit)
const { classes } = setBasicUiProps(props, 'dropdown-component')

const isOpen = ref(false)

const mouseover = computed(() => (props.openOnHover ? open : ''))
const mouseleave = computed(() => (props.openOnHover ? close : ''))

const close = () => {
  isOpen.value = false
}
const open = () => {
  isOpen.value = true
}
const toggle = () => {
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}
</script>

<template>
  <div
    v-outside="close"
    class="relative rounded-md"
    :class="[{ 'z-10': isOpen }, classes]"
    @mouseover="mouseover"
    @mouseleave="mouseleave">
    <div
      class="group flex items-center gap-2 w-full h-full cursor-pointer outline-none"
      tabindex="-1"
      @click="toggle">
      <slot />
      <Icon
        v-if="props.openIndicator"
        class="relative ml-auto group-hover:top-0.5 transition"
        :class="{ 'rotate-180': isOpen }"
        name="chevron-down"
        size="micro" />
    </div>
    <div
      v-if="isOpen"
      class="dropdown-component-options"
      :class="[theme]">
      <slot name="options" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-component {
  @apply py-2 rounded-md;
  &-options {
    @apply absolute left-[-12px] p-1 top-[80%] min-w-max w-full rounded-md;
    &.transparent {
      @apply bg-transparent text-white;
    }
    &.light {
      @apply bg-white shadow-md;
    }
    &.dark {
      @apply bg-black shadow-md text-white;
    }
  }
}
</style>
