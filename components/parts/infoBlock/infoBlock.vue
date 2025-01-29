<script setup>
import Card from '/components/parts/card/card'
import Button from '/components/ui/button/button'
import { splitArrayIntoChunks } from '/utils/splitArrayIntoChunks'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  hash: {
    type: String,
    default: '',
  },
})
import { useApp } from '/store/app'
const appStore = useApp()

const columns = computed(() => {
  const count = appStore.windowW >= 1440 ? 3 : 2
  return splitArrayIntoChunks(props.data.cards, count)
})
</script>

<template>
  <div>
    <section class="container mt-6" :id="hash">
      <div
        class="flex flex-col lg:flex-row relative gap-x-8 gap-y-10 items-start"
        :class="reverse ? 'lg:flex-row-reverse' : ''">
        <div class="lg:w-[50%] xl:w-1/3 block lg:sticky top-20 h-full mb-0">
          <h2 v-if="data.title">{{ data.title }}</h2>
          <h5 v-if="data.description">
            {{ data.description }}
          </h5>
          <Button
            v-if="data.button1"
            type="primary"
            size="normal"
            class="mt-4"
            >{{ data.button1 }}</Button
          >
        </div>
        <div
          class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-center gap-4 justify-center">
          <div
            class="flex flex-col gap-4"
            v-for="(column, index) in columns"
            :key="index">
            <Card
              v-for="card in column"
              :key="card.title"
              :type="card.type"
              :data="card"
              class="w-full first:row-start-2 sm:first:row-start-1" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
