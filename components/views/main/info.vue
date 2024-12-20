<script setup>
import Card from "/components/parts/card/card";
import { info } from "/config/project/content-index.js";
</script>
<template>
  <section class="container mt-6">
    <div class=" flex flex-col justify-center">
      <h2>{{ info.title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Card
          v-for="card in info.cards"
          :key="card.title"
          :type="card.type"
          :data="card"
          class="w-full first:row-start-2 sm:first:row-start-1"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
