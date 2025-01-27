<script setup>
import Menu from '/components/parts/popups/mobile-menu/menu'
import Info from '/components/parts/popups/info/info'
import Link from '/components/ui/link/link'
import Icon from '/components/ui/icon/icon'
import { usePopup } from '/store/popup.js'
const popupStore = usePopup()

import { header, socials } from '/config/project/content-nav.js'
const { classes, transition, icon, title, logo, link } = popupStore.payload

const components = {
  menu: Menu,
  info: Info,
}

const close = () => {
  popupStore.close()
}
</script>

<template>
  <div>
    <transition name="fade">
      <!-- Popup overlay -->
      <div
        v-if="popupStore.type && components[popupStore.type]"
        class="bg-gray-900/50 fixed top-0 left-0 right-0 bottom-0 z-50 cursor-pointer"
        @click="close" />
    </transition>
    <transition :name="transition || 'fade'">
      <div
        v-if="popupStore.type && components[popupStore.type]"
        :class="popupStore.payload.classes || 'popup-default'">
        <!-- Popup header -->
        <h2
          v-if="popupStore.payload.title"
          class="flex items-center font-bold text-left mb-0"
          :class="popupStore.payload.logo ? 'mt-8' : 'mt-2'">
          <Icon
            v-if="popupStore.payload.icon"
            :name="popupStore.payload.icon"
            size="small"
            class="cursor-pointer inline-flex" />
          {{ popupStore.payload.title }}
        </h2>

        <!-- logo -->
        <div>
          <Link
            v-if="popupStore.payload.logo"
            href="/"
            class="flex items-center absolute top-2 left-2">
            <Icon
              :name="header.logo"
              size="middle"
              class="cursor-pointer ml-auto inline-flex">
            </Icon>
            <h6
              class="mb-0 leading-[1em] font-bold"
              v-html="header.logoText" />
          </Link>
        </div>

        <Icon
          class="absolute top-0 right-0 w-[20px] h-[20px] cursor-pointer"
          name="close"
          size="normal"
          @click="close" />

        <!-- Popup component -->
        <component
          class="w-full h-full"
          :is="components[popupStore.type]"
          :data="popupStore.payload.data" />

        <!-- Popup link консультация -->
        <div
          v-if="popupStore.payload.link"
          class="flex gap-2">
          <Link
            v-for="(item, index) of header.btns"
            :key="index"
            size="normal"
            type="primary"
            essence="block"
            :href="item.href"
            class="w-full whitespace-nowrap">
            {{ item.title }}
          </Link>
        </div>

        <!-- Popup socials -->
        <div
          v-if="popupStore.payload.socials"
          class="flex justify-between items-center mt-2 border-t pt-2">
          <h6 class="flex items-center ml-[-8px]">
            <Icon
              name="chat"
              size="normal"
              class="cursor-pointer ml-auto inline-flex" />
            {{ header.info[0].title }}
          </h6>
          <div class="flex items-center justify-end mr-[-8px]">
            <Link
              v-for="(social, index) in socials"
              :key="index"
              :href="social">
              <Icon
                :name="index"
                size="normal"
                class="cursor-pointer">
              </Icon>
            </Link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  &-default {
    @apply fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col max-w-[500px] max-h-screen shadow-sm border border-white px-8 pt-4 pb-8 bg-white sm:rounded-lg z-50 w-full h-full sm:h-auto;
  }
  &-menu {
    @apply text-black fixed top-0 right-0 flex flex-col h-dvh px-6 pt-4 pb-4 bg-white sm:rounded-l z-50 w-full h-full sm:max-w-[400px] overflow-auto;
  }
  &-video {
    @apply fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col max-w-[900px] max-h-screen shadow-sm border border-white p-8 bg-white sm:rounded-lg z-50 w-full h-full sm:h-auto;
  }
}
</style>
