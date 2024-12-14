<script setup>
import Icon from "/components/ui/icon/icon";
import Menu from "/components/parts/popups/mobile-menu/menu";
import Link from "/components/ui/link/link";

import { usePopup } from "/store/popup.js";
const popupStore = usePopup();

import { header, socials } from "/config/project/content-nav.js";
const { classes, transition, icon, title, logo } = popupStore.payload;

const components = {
  menu: Menu,
};

const close = () => {
  popupStore.close();
};
</script>

<template>
  <div>
    <transition name="fade">
      <!-- Popup overlay -->
      <div
        v-if="popupStore.type && components[popupStore.type]"
        class="bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-50 cursor-pointer"
        @click="close"
      />
    </transition>
    <transition :name="transition || 'fade'">
      <div
        v-if="popupStore.type && components[popupStore.type]"
        :class="popupStore.payload.classes || 'popup-default'"
      >
        <!-- Popup header -->
        <h4
          v-if="popupStore.payload.title"
          class="flex items-center ml-[-8px] text-white font-bold text-left text-2xl"
          :class="popupStore.payload.logo ? 'mt-10' : 'mt-4'"
        >
          <Icon
            :name="popupStore.payload.icon"
            size="small"
            class="cursor-pointer inline-flex"
          />
          {{ popupStore.payload.title }}
        </h4>

        <!-- logo -->
        <Link
          v-if="popupStore.payload.logo"
          href="/"
          class="flex items-center absolute top-2 left-2 text-white"
        >
          <Icon
            :name="header.logo"
            size="middle"
            class="cursor-pointer ml-auto inline-flex"
          >
          </Icon>
          <h6 class="mb-0 leading-[1em] font-bold" v-html="header.logoText" />
        </Link>

        <Icon
          class="absolute top-2 right-2 w-[14px] h-[14px] text-white cursor-pointer"
          name="fire"
          size="normal"
          @click="close"
        />

        <!-- Popup component -->
        <component class="w-full h-full" :is="components[popupStore.type]" />

        <!-- Popup link консультация -->
        <Link
          v-if="popupStore.payload.link"
          size="normal"
          type="primary"
          essence="block"
          :href="header.href"
          class="my-2"
        >
          {{ header.text }}
        </Link>

        <!-- Popup socials -->
        <div
          v-if="popupStore.payload.socials"
          class="flex justify-between text-white items-center mt-2 border-t pt-2"
        >
          <h6 class="flex items-center ml-[-8px]">
            <Icon
              name="chat"
              size="normal"
              class="cursor-pointer ml-auto inline-flex"
            />
            {{ header.phone }}
          </h6>
          <div class="flex items-center justify-end mr-[-8px]">
            <Link
              v-for="(social, index) in socials"
              :key="index"
              :href="social"
            >
              <Icon :name="index" size="normal" class="cursor-pointer"> </Icon>
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
    @apply fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col max-w-[600px]  max-h-screen shadow-md px-4 pt-12 pb-4 bg-black sm:rounded-lg z-50 w-full h-full sm:h-auto;
  }
  &-menu {
    @apply fixed top-0 right-0 flex flex-col h-dvh px-4 pt-12 pb-4 bg-black sm:rounded-l z-50 w-full h-full sm:max-w-[400px] overflow-auto;
  }
}
</style>
