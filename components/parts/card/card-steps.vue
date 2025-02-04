<script setup>
import Image from '/components/ui/image/image.vue'
import Icon from '/components/ui/icon/icon.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
  type: {
    type: String,
    default: 'default',
  },
  index: {
    type: Number,
    default: 1,
  },
})

const { classes } = setBasicUiProps(props, 'card-component')
</script>

<template>
  <div :class="['card-component', `type-${type}`, classes]">
    <Image
      v-if="data.image"
      class="card-image"
      :src="data.image"
      :alt="data.title || ''" />

    <div class="flex flex-row w-full">
      <div
        class="content"
        :class="
          index % 2 === 0 && data.devider
            ? 'mr-24 sm:mx-32 lg:mr-32 xl:mx-32'
            : 'ml-24 sm:mx-32 lg:ml-32 xl:mx-32'
        ">
        <div class="my-2">
          <h5 class="title leading-[1.4em]">
            <div
              v-if="data.index"
              class="index">
              {{ data.index }}
            </div>

            {{ data.title }}
          </h5>
          <h5 class="description">{{ data.text }}</h5>
        </div>
      </div>
    </div>
    <Icon
      v-if="data.devider"
      class="icon h-[292px] absolute top-0 z-10 text-gray-100"
      :class="
        index % 2 === 0
          ? 'rotate-[90deg] right-0 translate-x-[70px] sm:translate-x-[30px]'
          : 'rotate-[-90deg] left-0 translate-x-[-48px] xl:translate-x-[-36px]'
      "
      :name="data.devider.icon"
      size="" />
  </div>
</template>
<style lang="scss" scoped>
.card-component {
  @apply w-full h-[290px] relative lg:max-w-full flex box-border  rounded-xl;

  &.type-default {
    .content {
      @apply p-4 flex flex-col justify-center items-center relative z-[2] w-full h-full;
      &::before {
        content: '';
        @apply lg:hidden xl:block absolute top-[20px] left-[23%] w-[140px] sm:w-[220px] rounded-xl h-[18px]  bg-gray-100;
      }
      .title {
        @apply font-bold xl:text-black flex items-center gap-2 mb-2 ;
        .index {
          @apply bg-primary rounded-lg text-2xl font-bold text-white min-h-14 min-w-14 items-center flex justify-center;
        }
      }
      .description {
        @apply text-black line-clamp-4;
      }
    }
  }
}
</style>
