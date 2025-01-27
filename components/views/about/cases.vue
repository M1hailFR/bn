<script setup>
import CardImage from '/components/parts/card/card-image'
import { cases } from '/config/project/content-about.js'
</script>

<template>
  <div>
    <section class="container">
      <div class="w-full block">
        <h2 class="">{{ cases.title }}</h2>
        <h5>
          {{ cases.description }}
        </h5>
      </div>
      <div class="w-full lg:grid grid-cols-3 items-start justify-center mb-3">
        <CardImage
          v-for="(card, index) in cases.cards"
          :key="card.title"
          :data="card"
          :index="index + 1"
          class="w-full" />
      </div>
    </section>
  </div>
</template>
