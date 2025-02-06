<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  {{ loading }}
  <div

    v-if="loading"
    class="relative w-[148px] h-[44px]">
    <div class="gooey">
      <span class="gooey-dot"></span>
      <div class="gooey-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <transition
    name="fade"
    v-else>
    <slot />
  </transition>
</template>

<style lang="scss" scoped>
.gooey {
  @apply absolute top-1/2 left-1/2 w-[142px] h-[40px] bg-white filter contrast-[5];
  margin: -20px 0 0 -71px;
  &-dot {
    @apply absolute w-[16px] h-[16px] top-[12px] left-[15px] bg-black rounded-full blur-[4px] transform translate-x-0;
    animation: dot 2.8s infinite;
  }
  &-dots {
    @apply transform translate-x-0 mt-[12px] ml-[31px] flex;
    animation: dots 2.8s infinite;
    span {
      @apply block w-[16px] h-[16px] bg-black rounded-full blur-[4px] ml-[16px];
    }
  }
  @keyframes dot {
    50% {
      transform: translateX(96px);
    }
  }
  @keyframes dots {
    50% {
      transform: translateX(-31px);
    }
  }
}
</style>
