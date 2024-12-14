<script setup>
defineProps({
  videoSrc: {
    type: String,
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  muted: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="video-container">
    <video
      :src="videoSrc"
      controls
      :class="type"
      :autoplay="autoplay"
      :loop="loop"
      :muted="muted"
    />
  </div>
</template>

<style lang="scss" scoped>
.video-container {
  max-width: 100%;
  position: relative;
  video {
    transform: scale(1.06);
    filter: blur(2px) brightness(0.5);
  }
  .full {
    @apply w-full h-screen sm:max-h-dvh object-cover rounded-b-lg absolute top-0 left-0 z-[-1];
  }
  .hero {
    @apply w-full h-full object-cover relative z-[-1];
  }
}
</style>
