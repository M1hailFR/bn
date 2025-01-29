<script setup>
import Info from '/components/views/main/info'
import Intro from '/components/parts/intro/intro'
import Differences from '/components/views/main/differences'
import Fqa from '/components/views/main/fqa'
import Steps from '/components/views/main/steps'
import Servise from '/components/views/main/servise'
import Reviews from '/components/views/main/reviews'
import Hero from '/components/parts/hero/hero'
import Card from '/components/parts/card/card-stat'
import It from '/components/views/main/it'
import Team from '/components/views/about/team'
import Patterns from '/components/views/about/patterns'
import {
  intro,
  heros,
  request,
  steps,
  infoBlock,
  bankruptcy,
  settlement,
  reviews,
  achievement,
} from '/config/project/content-index'
import Request from '/components/views/main/request'
import InfoBlock from '/components/parts/infoBlock/infoBlock'
onMounted(() => {
  window.addEventListener('load', (event) => {
    console.log('Страница готова!', event)
  })
})
</script>

<template>
  <div>
    <Intro :data="intro" />
    <Differences />
    <!-- <Hero :data="heros[2]">
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
    <InfoBlock :data="bankruptcy" />
    <InfoBlock :data="settlement" />
    <Reviews />

    <Request :data="request" />
    <Steps :data="steps" />
    <It />
    <!-- <Servise /> -->
    <!-- <Info /> -->

    <InfoBlock :data="achievement" hash="achievement" />
    <Team />
    <Patterns />
    <Fqa />
    <!-- <InfoBlock :data="infoBlock" /> -->
  </div>
</template>
