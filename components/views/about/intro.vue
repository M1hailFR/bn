<script setup>
import Button from "/components/ui/button/button";
import { intro } from "/config/project/content-about.js";
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
  </section>
</template>
