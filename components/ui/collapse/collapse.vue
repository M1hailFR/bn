<script setup>
import vOutside from '/directives/outside.js'
import Icon from '/components/ui/icon/icon.vue'

const props = defineProps({
  openIndicator: {
    type: Boolean,
    default: true,
  },
  cntLng: {
    type: Array,
    default: [],
  },
})

const { classes } = setBasicUiProps(props, 'collapse-component')

const isOpen = ref(false)

const close = () => (isOpen.value = false)
const open = () => (isOpen.value = true)
const toggle = () => {
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}

const beforeEnter = (element) => {
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = '0px'
    }
    element.style.display = null
  })
}
const enter = (element) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = `${element.scrollHeight}px`
    })
  })
}
const afterEnter = (element) => {
  element.style.height = null
}
const beforeLeave = (element) => {
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = `${element.offsetHeight}px`
    }
  })
}
const leave = (element) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = '0px'
    })
  })
}
const afterLeave = (element) => {
  element.style.height = null
}
</script>

<template>
  <div
    v-outside="close"
    :class="classes">
    <div
      class="group flex items-center w-full cursor-pointer"
      tabindex="-1"
      @click="toggle">
      <slot />
      <Icon
        v-if="props.openIndicator && cntLng.length"
        class="text-primary hidden md:block shrink-0 ml-auto group-hover:translate-y-1 lg:transition-transform duration-150"
        :class="{ 'rotate-180': isOpen }"
        name="chevron-down"
        size="normal" />
    </div>
    <transition
      name="collapse"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave">
      <div v-show="isOpen && cntLng.length">
        <div class="collapse-component-wrapper">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.collapse-component {
  @apply py-5 pb-0 last-of-type:pb-6;
  .group {
    @apply mb-2;
  }
  &-wrapper {
    @apply pb-5 max-w-[900px] text-gray-900;
  }
  &::after {
    content: '';
    @apply block w-full h-0.5 bg-primary;
  }
  &:last-child::after {
    @apply hidden;
  }
}
</style>
