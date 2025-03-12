<script setup>
import Icon from '/components/ui/icon/icon'
import Image from '/components/ui/image/image'
import Link from '/components/ui/link/link'
import Divider from '/components/ui/devider/divider.vue'
import Dropdown from '/components/ui/dropdown/dropdown.vue'
import DropdownOption from '/components/ui/dropdown/option.vue'
import Card from '/components/parts/card/card-stat'
import { useApp } from '/store/app'
import { header, socials } from '/config/project/content-nav.js'
import { regions } from '/config/project/sources'

import { usePopup } from '/store/popup.js'

const popupStore = usePopup()
const appStore = useApp()
const props = defineProps({
  theme: {
    type: String,
    default: 'light',
  },
  lang: {
    type: String,
    default: 'en',
  },
  type: {
    type: String,
    default: 'static',
  },
})

const region = ref({ city: 'Москва', region: '77' })
const isShow = computed(() => appStore.windowS === 0 || appStore.windowW <= 990)

const currentlogo = computed(() => {
  return appStore.windowS !== 0 ? `${header.logo}.png` : `${header.logo}-white.png`
})

const openMenu = () => {
  const payload = {
    classes: 'popup-menu',
    transition: 'fade',
    icon: '',
    title: 'Меню',
    logo: false,
    socials: true,
    link: true,
  }
  popupStore.open('menu', payload)
}
</script>

<template>
  <header
    ref="el"
    :class="[theme, type]">
    <div class="container relative z-[1] flex items-center gap-6 py-1">
      <div class="flex items-center gap-2 transition-transform duration-500 opacity-1">
        <Link href="/">
          <div
            v-if="header.icon"
            class="inline-flex items-center gap-2">
            <Icon
              name="fire"
              size="middle"
              class="cursor-pointer ml-auto inline-flex">
            </Icon>
            <h4
              class="mb-0 leading-[.9em]"
              v-html="header.logoText" />
          </div>
          <div
            v-if="header.logo"
            class="inline-flex items-center gap-2">
            <Image
              :src="currentlogo"
              class="h-10" />
          </div>
        </Link>
        <Dropdown
          class="hidden lg:block translate-x-[14px] px-4 bg-gray-100/30 rounded-lg hover:bg-white/10"
          icon="geo">
          {{ region.city }}
          <template #options>
            <DropdownOption
              v-for="(item, index) of regions"
              :key="index"
              @click="region = item">
              {{ item.city }}
            </DropdownOption>
          </template>
        </Dropdown>
      </div>

      <div
        class="hidden lg:flex items-center justify-between lg:flex-1 transition-transform duration-500">
        <div class="flex-1 flex justify-center">
          <slot />
        </div>

        <div class="flex items-center justify-end">
          <div class="flex items-center justify-center gap-4">
            <div class="hidden xl:flex flex-col items-start justify-center">
              <Link
                v-for="item in header.info"
                :key="item"
                size="small"
                :type="item.linkType"
                essence="block"
                :href="item.href"
                class="flex items-center text-[12px] font-medium first:text-[16px] first:mt-1 mt-[-4px]">
                <Icon
                  v-if="item.icon"
                  :name="item.icon"
                  :size="item.iconSize"
                  class="cursor-pointer inline-flex" />
                {{ item.title }}
              </Link>
            </div>

            <Link
              :size="header.btns[0].iconSize"
              :type="header.btns[0].linkType"
              essence="block"
              :href="header.btns[0].href"
              class="flex items-center font-medium text-[16px] pl-2 pr-3 py-2">
              <Icon
                v-if="header.btns[0].icon"
                :name="header.btns[0].icon"
                :size="header.btns[0].iconSize"
                class="cursor-pointer inline-flex" />
              {{ header.btns[0].title }}
            </Link>
          </div>
        </div>
      </div>
      <Icon
        name="menu"
        size="normal"
        class="cursor-pointer ml-auto flex lg:hidden"
        @click="openMenu" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  @apply top-0 z-50 w-full drop-shadow-md py-1 lg:transition-all;
  &.light {
    @apply bg-white lg:pt-1 text-black fixed;
  }
  &.transparent {
    @apply bg-transparent pt-1 text-white fixed md:pt-8 w-full;
  }
  // &.dark {
  // 	@apply bg-black/50 text-white backdrop-blur-lg border-gray-100/10 pt-1;
  // }
}
</style>
