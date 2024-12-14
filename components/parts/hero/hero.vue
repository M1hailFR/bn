<script setup>
import Image from "/components/ui/image/image.vue";
import Button from "/components/ui/button/button";
import Video from "/components/ui/video/video";
import { intro } from "/config/project/content-index.js";
const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  data: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <section class="hero overflow-hidden w-full min-h-full">
    <div class="section-container gap-8" :class="data.type">
      <div class="md:w-2/3 lg:w-full relative z-[1] flex flex-col justify-between mr-auto">
        <h2>{{ data.title }}</h2>
        <h3>
          {{ data.text }}
        </h3>

        <div class="mt-10 flex flex-col xl:flex-row justify-start gap-3">
          <Button type="primary" size="middle">
            {{ intro.consultation }}
          </Button>
          <Button type="outline" size="middle" class="">
            {{ intro.start }}
          </Button>
        </div>
      </div>
      <div v-if="!data.video" class="absolute top-0 left-0 md:hidden bg-white/50 w-full h-full" />

      <slot name="content"  />

      <Image
        v-if="data.image"
        :src="data.image"
        class="z-[-1] blur-[2px] backdrop-blur-lg md:blur-0 absolute top-0 left-0 md:relative block w-full h-full md:h-[620px] xl:h-full rounded-xl overflow-hidden object-cover"
      />
      <div
        v-if="data.video"
        class="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden z-[-1]"
      >
        <Video
          :videoSrc="data.video"
          autoplay="true"
          loop="true"
          muted="true"
          type="hero"
          class="h-full"
        >
        </Video>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  .default {
    @apply flex flex-col gap-6 md:flex-row items-center relative bg-white/50 w-full h-full;
  }
  .primary {
    @apply flex flex-col gap-6 md:flex-row items-center relative md:flex-row-reverse bg-gray-200/50;
  }
  .video {
    @apply flex flex-col gap-6 lg:flex-row items-center relative  lg:flex-row justify-between text-white min-h-[70dvh];
  }
}
</style>
