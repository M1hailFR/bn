<script setup>
import Icon from '/components/ui/icon/icon.vue'
import Image from '/components/ui/image/image.vue'
import Link from '/components/ui/link/link.vue'
import Menu from '/components/parts/menu/menu'
import { header, socials } from '/config/project/content-nav.js'
import { regions } from '/config/project/sources'

const version = '1.0.0'

const el = ref(null)
</script>

<template>
  <footer
    class="footer"
    ref="el">
    <div
      class="container relative mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 z-10">
      <div class="flex flex-col gap-10 xl:justify-between xl:h-[332px]">
        <Link
          href="/"
          class="flex flex-col">
          <div
            v-if="header.logo"
            class="inline-flex items-center gap-2">
            <Image
              :src="`${header.logo}-white.png`"
              class="h-30" />
          </div>
        </Link>

        <div class="text-sm">
          ИНН: {{ header.inn }}<br />
          ОГРН: {{ header.ogrn }}
          <div class="text-sm md:w-9/12">
            &#169; {{ new Date().getFullYear() }} Pro.Списание
          </div>
        </div>
      </div>

      <slot />

      <div class="flex flex-col gap-2">
        <h4 class="">Контакты</h4>
        <Link
          v-for="item in header.footerInfo"
          :key="item"
          size="small"
          :type="item.linkType"
          essence="block"
          :href="item.href"
          :hash="item.hash"
          :class="item.class">
          <Icon
            v-if="item.icon"
            :name="item.icon"
            :size="item.iconSize"
            class="cursor-pointer inline-flex" />
          {{ item.title }} {{ item.text }}
        </Link>
      </div>

      <div class="flex flex-col order-last">
        <h4 class="">Мессенджеры</h4>
        <div class="flex">
          <Link
            v-for="(social, index) in socials"
            :key="index"
            :href="social">
            <Icon
              :name="index"
              size="large"
              class="cursor-pointer">
            </Icon>
          </Link>
        </div>
      </div>
    </div>
    <!-- Фоновые элементы -->
    <div class="footer-flash">
      <div class="footer-flash-1"></div>
      <div class="footer-flash-2"></div>
      <div class="footer-flash-3"></div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply text-white;
  background: linear-gradient(45deg, #bbbbbb 0%, #2a3b4d 100%);

  &::after {
    content: '';
    @apply absolute top-28 right-0 block w-9/12 h-2/5 opacity-50 pointer-events-none bg-gradient-3;
    filter: blur(100px);
  }

  &-flash {
    @apply absolute top-0 left-0 right-0 bottom-0 z-[6] pointer-events-none;

    div {
      @apply absolute block z-0 rounded-full;
    }

    &-1 {
      @apply top-[250px] right-[1000px] w-[600px] h-[600px] opacity-[60%] bg-gradient-4;
      filter: blur(16px);
    }

    &-2 {
      @apply top-[200px] right-[400px] w-[800px] h-[800px] opacity-[60%] bg-gradient-4 brightness-[150%];
      filter: blur(26px);
    }

    &-3 {
      @apply top-[100px] right-[-350px] w-[1000px] h-[1000px] opacity-[60%] bg-gradient-4 brightness-[150%];
      filter: blur(16px);
    }
  }
}
</style>
