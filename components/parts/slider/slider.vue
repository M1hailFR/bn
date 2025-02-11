<script setup>
import Button from '/components/ui/button/button'
import Icon from '/components/ui/icon/icon.vue'
import CardComment from '/components/parts/card/card-comment'
import CardVideoComment from '/components/parts/card/card-video-comment'
import CardTeam from '/components/parts/card/card-team'

const props = defineProps({
  itemsPerPage: {
    type: Number,
    default: 1, // Сколько карточек видно одновременно
  },
  data: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: '',
  },
  wrapper: {
    type: String,
    default: 'flex-none px-4', // Дополнительные классы для карточек
  },
  btn: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  navBottom: {
    type: Boolean,
    default: false,
  },
})

const currentSlide = ref(0)

// Рассчитываем общее количество слайдов (по одной карточке за раз)
const totalSlides = computed(() => props.data.length)

// Рассчитываем стиль для слайдера
const sliderStyle = computed(() => {
  return {
    transform: `translateX(-${currentSlide.value * (100 / props.itemsPerPage)}%)`,
  }
})

// Переключение вперёд
const nextSlide = () => {
  currentSlide.value = Math.min(
    currentSlide.value + 1,
    totalSlides.value - props.itemsPerPage,
  )
}

// Переключение назад
const prevSlide = () => {
  currentSlide.value = Math.max(currentSlide.value - 1, 0)
}

const componentMap = {
  comments: CardComment,
  video: CardVideoComment,
  team: CardTeam,
}

const getComponent = computed(() => {
  return componentMap[props.type] || CardComment
})
</script>

<template>
  <div
    class="slider relative overflow-hidden content flex flex-col"
    :class="{ 'flex-col-reverse': navBottom }">
    <!-- Заголовок и кнопки управления -->
    <div
      class="flex justify-between items-center w-full relative z-10 my-2 translate-x-[8px]">
      <h5 class="hidden sm:block max-w-[200px] leading-[1.4em]">{{ title }}</h5>
      <div class="flex gap-2 pr-4">
        <Button
          v-if="btn"
          class="shadow-md p-0 h-8  md:h-10 text-sm px-2"
          size=""
          type="primary"
          >
          {{ btn }}
        </Button>
        <Button
          class="shadow-md p-0 h-8 w-8 md:h-10 md:w-10"
          @click="prevSlide"
          size=""
          type="primary"
          :disabled="currentSlide === 0">
          <Icon
            name="chevron-down"
            size=""
            class="w-6 md:w-8 inline-flex rotate-[90deg]" />
        </Button>
        <Button
          class="shadow-md p-0 h-8 w-8 md:h-10 md:w-10"
          @click="nextSlide"
          size="normall"
          type="primary"
          :disabled="currentSlide >= totalSlides - props.itemsPerPage">
          <Icon
            name="chevron-down"
            size=""
            class="w-6 md:w-8 inline-flex rotate-[-90deg]" />
        </Button>
      </div>
    </div>

    <!-- Слайды -->
    <div class="relative overflow-hidden">
      <div
        class="flex transition-transform duration-700 ease-in-out"
        :style="sliderStyle">
        <div
          v-for="(item, index) in data"
          :key="index"
          :class="[wrapper, `w-${100 / props.itemsPerPage}%`]">
          <component
            :is="getComponent"
            :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider {
  width: 100%;
  overflow: hidden;
}
</style>
