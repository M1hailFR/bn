<script setup>
import Card from '/components/parts/card/card'
import Icon from '/components/ui/icon/icon.vue'
import Link from '/components/ui/link/link.vue'
import { info } from '/config/project/content-index.js'

// Разделяем карты на две части для оптимизации
const halfIndex = Math.ceil(info.cards.length / 2)
const firstHalf = info.cards.slice(0, halfIndex)
const secondHalf = info.cards.slice(halfIndex)
</script>

<template>
  <section class="container mt-6">
    <div class="flex flex-col justify-center">
      <Link
        href="/"
        class="flex felx-col gap-2 items-center px-0 mb-8">
        <h2 class="mb-0">{{ info.title }}</h2>
        <Icon
          name="chevron-down"
          size="middle"
          class="cursor-pointer mt-1 inline-flex rotate-[-90deg]" />
      </Link>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
        <!-- Первая колонка -->
        <div class="flex flex-col gap-4">
          <Card
            v-for="card in firstHalf"
            :key="card.title"
            :type="card.type"
            :data="card"
            class="w-full first:row-start-2 sm:first:row-start-1" />
        </div>
        <!-- Вторая колонка -->
        <div class="flex flex-col gap-4">
          <Card
            v-for="card in secondHalf"
            :key="card.title"
            :type="card.type"
            :data="card"
            class="w-full first:row-start-2 sm:first:row-start-1" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
