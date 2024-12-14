<script setup>
import { achievement } from "/config/project/content-index.js";
import Card from "/components/ui/card/card-stat";
import Icon from "/components/ui/icon/icon.vue";
import Image from "/components/ui/image/image.vue";
</script>
<template>
  <section>
    <div class="section-container">
      <h2>
        {{ achievement.title }}
      </h2>
      <div
        class="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-x-8 gap-y-10 justify-center"
      >
        <Card
          v-for="card in achievement.cards"
          :key="card.title"
          :type="card.type"
          :data="card"
          class="h-full w-full object-contain flex items-center jusitfy-center"
        />
        <div
          class="row-start-1 col-start-1 lg:row-start-2 lg:col-start-2 h-full flex relative items-center jusitfy-center rounded-lg overflow-hidden"
        >
          <Image
            v-if="achievement.image"
            class="z-[-1] blur-[1px] backdrop-blur-lg absolute top-0 left-0 w-full h-full"
            :src="achievement.image"
            :alt="achievement.title || ''"
          />
          <h3 class="w-full text-center mb-0 relative z-10 py-4 px-2">
            {{ achievement.text }}
          </h3>
          <div class="absolute top-0 left-0 bg-white/50 w-full h-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
