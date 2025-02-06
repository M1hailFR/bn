<script setup>
import Intro from '/components/parts/intro/intro'
import Hero from '/components/parts/hero/hero'
import Card from '/components/parts/card/card-stat'
import Blog from '/components/views/about/blog'
import Team from '/components/views/about/team'
import Patterns from '/components/views/about/patterns'
import Cases from '/components/views/about/cases'
import { heros } from '/config/project/content-index'
import { blog, intro } from '/config/project/content-about'
</script>

<template>
  <div>
    <Intro :data="intro" />
    <!-- <Hero :data="heros[2]" class="">
      <template #content>
        <div
          class="flex flex-wrap pt-16 xl:pt-0 lg:w-full gap-3 justify-start lg:justify-end"
        >
          <Card
            v-for="stat in heros[2].stats"
            :key="stat"
            variant="variant3"
            type="default"
            :data="stat"
          />
        </div>
      </template>
    </Hero> -->
    <Team />
    <Patterns />
    <Cases />
    <!-- <Blog :data="blog" /> -->
    <Hero :data="heros[1]" />
  </div>
</template>
