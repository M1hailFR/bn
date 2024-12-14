<script setup>
import Intro from "/components/views/about/intro";
import Hero from "/components/parts/hero/hero";
import Card from "/components/ui/card/card-stat";
import Blog from "/components/views/about/blog";
import { heros } from "/config/project/content-index";
import { blog } from "/config/project/content-about";
</script>

<template>
  <div>
    <Intro />
    <Hero :data="heros[2]">
      <template #content>
        <div
          class="flex flex-wrap pt-16 xl:pt-0 lg:w-full gap-3 justify-start lg:justify-end"
        >
          <Card
            v-for="stat in heros[2].stats"
            :key="stat"
            variant="variant2"
            type="default"
            :data="stat"
          />
        </div>
      </template>
    </Hero>
    <Blog :data="blog" />
    <Hero :data="heros[0]" />
  </div>
</template>
