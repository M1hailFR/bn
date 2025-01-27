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
    <InfoBlock :data="bankruptcy" />
    <InfoBlock :data="settlement" />
    <Reviews />
    <Request :data="request" />
    <Steps :data="steps" />
    <!-- <Servise /> -->
    <Info />

    <InfoBlock :data="achievement" />
    <Fqa />
    <InfoBlock :data="infoBlock" />
  </div>
</template>
