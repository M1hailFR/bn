<script setup>
import Collapse from "/components/ui/collapse/collapse";
import { fqa } from "/config/project/content-index.js";
</script>

<template>
  <section class="container">
    <div class="">
      <div>
        <h2>{{ fqa.title }}</h2>
        <h4 class="max-w-[800px] text-gray-900">{{ fqa.description }}</h4>
      </div>
      <Collapse
        v-for="(question, index) of fqa.questions"
        :key="question.title"
        :cntLng="question.text"
      >
        <h4 class="text-left">{{ index + 1 }}. {{ question.title }}</h4>
        <template #content>
          <p>{{ question.text }}</p>
        </template>
      </Collapse>
    </div>
  </section>
</template>
