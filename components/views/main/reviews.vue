<script setup>
import { reviews } from '/config/project/content-index.js'
import Slider from '/components/parts/slider/slider'
import { useApp } from '/store/app'
const appStore = useApp()
const itemsPerPage = computed(() =>
  appStore.windowW < 768
    ? 1
    : appStore.windowW < 992
      ? 2
      : appStore.windowW < 1440
        ? 3
        : 4,
)
</script>
<template>
  <div id="reviews">
    <section class="container">
      <div class="relative w-full h-auto"></div>
      <h2 class="block">{{ reviews.title }}</h2>
      <div class="section-container bg-gray-100/60 rounded-xl">
        <Slider
          :data="reviews.comments"
          :title="reviews.sliderTitle"
          type="comments"
          wrapper="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
          :itemsPerPage="itemsPerPage"
          :btn="reviews.btn">
        </Slider>
      </div>
    </section>
    <section class="container pt-0">
      <div class="relative w-full h-auto"></div>
      <h2 class="block">{{ reviews.title2 }}</h2>
      <div class="section-container bg-gray-100/60 rounded-xl">
        <Slider
          :data="reviews.videoComments"
          type="video"
          wrapper="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
          :itemsPerPage="itemsPerPage"
          navBottom="true"
          :btn="reviews.btnVideo">
        </Slider>
      </div>
    </section>
  </div>
</template>
