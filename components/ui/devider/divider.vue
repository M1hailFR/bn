<template>
  <div class="divider-companent" :class="theme" />
</template>

<script setup>
const props = defineProps({
  theme: {
    type: String,
    default: "light",
  },
});
</script>

<style lang="scss" scoped>
.divider-companent {
  @apply w-full h-[1px];
}
.light {
  @apply bg-gray-900/50;
}
.transparent {
  @apply bg-gray-100/50;
}
.dark {
    @apply bg-gray-100/50;
  }
</style>
