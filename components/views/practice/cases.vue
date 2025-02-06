<script setup>
import CardBase from '/components/parts/card/card-base'
import { cases } from '/config/project/content-practice.js'
</script>

<template>
  <div>
    <section class="container">
      <div class="w-full block mb-4">
        <h2 class="">{{ cases.title }}</h2>
        <h5>
          {{ cases.description }}
        </h5>
      </div>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full lg:grid-cols-4 items-start gap-4 justify-center ">
        <CardBase
          v-for="(card, index) in cases.cards"
          :key="card.title"
          :data="card"
          :index="index + 1"
          :button="true"
          :buttonLink="card.href"
          type="outline"
          class="w-full last:col-span-2" />
      </div>
    </section>
  </div>
</template>
