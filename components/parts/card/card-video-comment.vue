<script setup>
import Button from '/components/ui/button/button'
import Icon from '/components/ui/icon/icon.vue'
import Image from '/components/ui/image/image.vue'
import { usePopup } from '/store/popup.js'
const popupStore = usePopup()
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})
const getStarClass = (index, rate) => {
  const fullStars = Math.floor(rate)
  const halfStar = rate - fullStars >= 0.5

  if (index <= fullStars) {
    return 'bg-[#ffeb3b]'
  } else if (index === fullStars + 1 && halfStar) {
    return 'bg-gradient-6'
  } else {
    return 'bg-gray-100'
  }
}
const openComment = () => {
  const payload = {
    classes: 'popup-video',
    transition: 'fade',
    icon: '',
    title: 'Видеоотзывы наших клиентов',
    logo: false,
    socials: false,
    link: false,
    hideTitle: false,
    data: props.data,
  }
  popupStore.open('info', payload)
}
</script>
<template>
  <div
    class="card"
    @click="openComment">
    <div class="relative transition-all duration-700 overflow-hidden">
      <Image
        v-if="data.image"
        :src="data.image"
        class="image" />
      <Button
        @click="nextSlide"
        size=""
        class="btn-play"
        type="">
        <Icon
          name="chevron-down"
          size="large"
          class="rotate-[-90deg]" />
      </Button>
    </div>

    <div class="p-3 pt-1">
      <div>
        <h5 class="font-semibold mt-2">{{ data.title }}</h5>
        <h5 class="preview">{{ data.text }}</h5>
        <div class="flex my-2">
          <div
            v-for="(n, index) in 5"
            :key="index"
            class="text-transparent bg-clip-text text-sm"
            :class="getStarClass(index + 1, data.rate)">
            ⭐
          </div>
        </div>
        <div class="flex items-center pb-1">
          <span class="text-sm">Клиент</span>
          <span class="text-sm whitespace-nowrap ml-auto font-bold">{{
            data.author
          }}</span>
        </div>
        <div class="flex items-center pb-2">
          <span class="text-sm">Списано</span>
          <span class="text-sm whitespace-nowrap ml-auto font-bold">{{
            data.discard
          }}</span>
        </div>
        <div class="flex items-center pb-2">
          <span class="text-sm">Дело</span>
          <span class="text-sm whitespace-nowrap ml-auto font-bold">{{
            data.case
          }}</span>
        </div>
      </div>
      <div class="mt-3">
        <Button
          @click="nextSlide"
          size="normall"
          class="btn flex items-center text-sm"
          type="">
          {{ data.btn }}
          <Icon
            name="chevron-down"
            size="normal"
            class="chevron inline-flex rotate-[-90deg]" />
        </Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply bg-white relative rounded-lg line-clamp-3 shadow-md  flex flex-col justify-between transition-all duration-500 scale-[.94];
  .preview {
    @apply pt-2 line-clamp-3;
  }
  .image {
    @apply relative block w-full h-full rounded-t-xl object-cover transition-all duration-300;
  }
  .btn-play {
    @apply absolute text-white/90 bottom-4 left-4 bg-gray-200/60 w-12 h-12 rounded-full z-10 flex justify-center;
  }
  &:hover {
    @apply scale-[1] shadow-none;

    .btn {
      @apply text-gray-400;
    }
    .btn-play {
      @apply text-primary/90 scale-[0.9] bg-gray-200/90;
    }
    .image {
      @apply scale-[1.3];
    }
    .chevron {
      @apply translate-x-[16px];
    }
  }
}
</style>
