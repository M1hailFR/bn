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
  <nav class="flex flex-col items-left">
    <Collapse
      v-for="(nav, index) of navigation"
      :key="nav"
      :cntLng="nav.childs || nav.chls"
    >
      <Link :href="nav.href">
        <h4 class="flex items-center ">
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
            :href="link.href"
            class="flex felx-col mb-1 pl-[8px]"
          >
            {{ link.title }}
          </Link>
        </div>

        <div v-if="nav?.chls">
          <Collapse
            v-for="(nav, index) of nav.chls"
            :key="nav"
            :cntLng="nav.childs"
            class=""
          >
            <Link :href="nav.href">
              <h4 class="flex items-center  pl-[8px]">
                <!-- <Icon
                  :name="nav.icon"
                  size="small"
                  class="cursor-pointer ml-auto inline-flex"
                /> -->
                {{ nav.title }}
              </h4>
            </Link>
            <template #content>
              <Link
                v-for="link in nav.childs"
                :key="link"
                class="flex felx-col mb-1 pl-[8px]"
              >
                {{ link.title }}
              </Link>
            </template>
          </Collapse>
        </div>
      </template>
    </Collapse>
  </nav>
</template>
