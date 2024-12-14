<script setup>
import { steps } from "/config/project/content-index.js";
import Card from "/components/ui/card/card";
</script>
<template>
  <section>
    <div class="section-container">
      <h2>{{ steps.title }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
        <Card
          v-for="card in steps.cards"
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
