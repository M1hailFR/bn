<script setup>
import Icon from "/components/ui/icon/icon.vue";
import Image from "/components/ui/image/image.vue";
import Link from "/components/ui/link/link.vue";
import Collapse from "/components/ui/collapse/collapse";
import { navigation } from "/config/project/content-nav.js";
// import Logotype from '/components/parts/main/logo.vue'

// import config from '/config/env'
// // import { info, menu } from '/config/project'
// import { usePopup } from '/store/off-canvas'

// const { close } = usePopup()
</script>

<template>
  <nav class="flex flex-col items-left text-white">
    <!-- {{ navigation }} -->
    <Collapse
      v-for="(nav, index) of navigation"
      :key="nav"
      :cntLng="nav.childs || nav.chls"
    >
      <Link :href="nav.href">
        <h4 class="flex items-center ml-[-8px]">
          <Icon
            :name="nav.icon"
            size="small"
            class="cursor-pointer ml-auto inline-flex"
          />
          {{ nav.title }}
        </h4>
      </Link>

      <template #content>
        <div v-if="nav?.childs">
          <Link
            v-for="link in nav?.childs"
            :key="link"
            class="flex felx-col mb-3"
          >
            {{ link.title }}
          </Link>
        </div>

        <div v-if="nav?.chls">
          <Collapse
            v-for="(nav, index) of nav.chls"
            :key="nav"
            :cntLng="nav.childs"
          >
            <Link :href="nav.href">
              <h4 class="flex items-center ml-[-8px]">
                <Icon
                  :name="nav.icon"
                  size="small"
                  class="cursor-pointer ml-auto inline-flex"
                />
                {{ nav.title }}
              </h4>
            </Link>
            <template #content>
              <Link
                v-for="link in nav.childs"
                :key="link"
                class="flex felx-col mb-3"
              >
                {{ link.title }}
              </Link>
            </template>
          </Collapse>
        </div>
      </template>
    </Collapse>

    <!-- <div class="flex flex-col items-center gap-4">
      <Link
        v-for="(item, index) of menu"
        :key="index"
        :href="item.href"
        :anchor="item.anchor"
        @click="close">
        {{ item.text }}
      </Link>
    </div>

    <div class="flex flex-col sm:flex-row gap-4">
      <Link
        class="text-center"
        :href="config.web"
        essence="block"
        type="green-rose-inline">
        Для веб-мастеров
      </Link>
      <Link
        class="text-center"
        :href="config.login"
        essence="block"
        type="green-rose-inline">
        Личный кабинет
      </Link>
    </div>

    <div
      class="flex flex-col sm:flex-row gap-4 w-full text-sm text-center mt-auto">
      <Link
        v-for="(item, index) of info.filter((e) => e.href)"
        :key="index"
        :href="item.href"
        class="flex flex-col items-center gap-2 w-full">
        <Image :src="item.image" />
        {{ item.text }}
      </Link>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 w-full text-sm text-center">
      <div
        v-for="(item, index) of info.filter((e) => !e.href)"
        :key="index"
        class="flex flex-col items-center gap-2 w-full">
        <Image :src="item.image" />
        <div
          v-html="item.text"
          class="content" />
      </div>
    </div> -->
  </nav>
</template>
