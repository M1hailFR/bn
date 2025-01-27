<script setup>
import Post from '/components/parts/post/post'
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div
    v-for="post in data"
    :key="post.title">
    <Post :data="post" />
  </div>
</template>

<style lang="scss" scoped></style>
