<script setup>
import Button from "/components/ui/button/button";
import { intro } from "/config/project/content-index.js";
</script>

<template>
  <section class="flex flex-col">
    <div class="flex flex-col justify-center lg:flex-auto flex-none mt-[10dvh]">
      <h2 class="font-semibold mb-4 text-gray-400">{{ intro.headline }}</h2>
      <h1 class="max-w-[800px] mb-6 md:mt-2 font-bold text-white/90">
        {{ intro.title }}
      </h1>
      <h4 class="max-w-[600px] text-gray-300">{{ intro.description }}</h4>
      <div class="mt-5 flex flex-col gap-4 md:flex-row w-full text-white">
        <Button type="primary" size="middle">
          {{ intro.consultation }}
        </Button>
        <Button type="outline" size="middle">
          {{ intro.start }}
        </Button>
      </div>
    </div>

    <div class="mt-12 md:mt-[140px]">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="stat in intro.stats"
          :key="stat"
          class="relative pt-10 pb-2 px-6 bg-white/10 backdrop-blur-sm rounded-lg flex flex-col text-left sm:text-center items-start sm:items-center"
        >
          <h1
            class="relative z-10 text-4xl sm:text-6xl xl:text-8xl font-semibold text-white flex items-center gap-2"
          >
            {{ stat.value }}
            <span v-if="stat.symbol" class="text-3xl xl:text-6xl"
              >{{ stat.symbol }}
            </span>
          </h1>
          <p class="absolute top-[8%] z-10 text-lg font-normal text-white">
            {{ stat.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
