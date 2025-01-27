<script setup>
import Intro from '/components/parts/intro/intro'
import { intro } from '/config/project/content-pressCenter'
</script>

<template>
  <div>
    <Intro :data="intro" />
  </div>
</template>
