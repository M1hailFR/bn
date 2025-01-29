<script setup>
import CardSteps from '/components/parts/card/card-steps'
import Button from '/components/ui/button/button'
import { splitArrayIntoChunks } from '/utils/splitArrayIntoChunks'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})

import { useApp } from '/store/app'
const appStore = useApp()

const columnst = computed(() => {
  const count = appStore.windowW >= 990 ? 2 : 1
  return splitArrayIntoChunks(props.data.cards, count)
})
</script>

<template>
  <section class="container" id="steps">
    <div class="lg:w-[50%] xl:w-1/3 block">
      <h2>{{ data.title }}</h2>
    </div>
    <div class="w-full lg:grid grid-cols-2 items-start justify-center mt-8">
      <div
        class="w-full"
        v-for="(column, index) in columnst"
        :key="index">
        <CardSteps
          v-for="(card, index) in column"
          :key="card.title"
          :data="card"
          :index="index + 1"
          class="first:mt-[0px] mt-[-56px] w-full" />
      </div>
    </div>
  </section>
</template>
