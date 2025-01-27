<script setup>
import Icon from '/components/ui/icon/icon'
import Link from '/components/ui/link/link'
import { socials } from '/config/project/content-nav.js'
</script>

<template>
  <div class="fixed left-2 bottom-5 z-20 text-black">
    <Link
      v-for="(social, index) in socials"
      :key="index"
      :href="social">
      <Icon
        :name="index"
        size="middle"
        class="cursor-pointer">
      </Icon>
    </Link>
  </div>
</template>
