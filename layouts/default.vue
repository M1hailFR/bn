<script setup>
import Header from "/components/block/base/header";
import Menu from "/components/parts/menu/menu";
import Popup from "/components/parts/popups/popup";
// import FixedHeader from '/components/block/base/fixedHeader.vue'
// import Popup from '/components/parts/popups/popup.vue'
// import OffCanvas from '/components/parts/off-canvas/off-canvas.vue'
// import Loader from '/components/parts/main/loader'
// import Footer from '/components/block/base/footer.vue'
// import Up from '/components/parts/up.vue'
// import Icon from '/components/ui/icon/icon.vue'
// import Link from '/components/ui/link/link.vue'
import Image from "/components/ui/image/image";
import Video from "/components/ui/video/video";
import Loader from "/components/ui/loader/modal";
const loading = ref(true);
const isShow = ref(false);
const showScrolling = ref(false);
const mobileViewport = ref(false);
const router = useRoute();
const showVideo = computed(() => router.path === "/");
const route = useRoute();
const SCROLL_LINE = 500;

const theme = ref(route.name.startsWith("index") ? "transparent" : "light");
const header = ref(null);
const screenY = ref(0);
const footer = ref(null);
const footerScrollTop = ref(0);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 4000);
  setTimeout(() => {
    isShow.value = true;
  }, 4200);
  window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      handleScrollHeader();
    });
  });
  handleScrollHeader();
});
onUnmounted(() => {
  window.removeEventListener("scroll", () => {
    requestAnimationFrame(() => {
      handleScrollHeader();
    });
  });
});

watch(
  () => route.name,
  () => handleScrollHeader()
);

const handleScrollHeader = () => {
  getFooterScrollTop();
  screenY.value = window.scrollY;
  if (route.name.startsWith("index") || route.name.startsWith("about")) {
    handleScrollHeaderUpdate();
  } else {
    handleScrollHeaderFooter();
  }
};

const handleScrollHeaderUpdate = () => {
  if (!window.scrollY) {
    theme.value = "transparent";
  } else if (window.innerHeight < window.scrollY && footerScrollTop.value > 0) {
    theme.value = "light";
  } else {
    theme.value = "dark";
  }
};
const handleScrollHeaderFooter = () => {
  if (footerScrollTop.value < 0) {
    theme.value = "dark";
  } else {
    theme.value = "light";
  }
};
const getFooterScrollTop = () => {
  if (footer.value?.el) {
    footerScrollTop.value = footer.value.el.getBoundingClientRect().top;
  } else {
    footerScrollTop.value = window.scrollY;
  }
};

const pageToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <Loader :loading="loading" classes="h-dvh w-dvh">
    <transition name="fade" mode="in-out">
      <div class="relative overflow-visible" v-if="isShow">
        <Header ref="header" :theme="theme" type="fixed">
          <Menu :theme="theme" />
        </Header>
        <Video
          v-show="showVideo"
          videoSrc="/videos/intro2.mp4"
          autoplay="true"
          loop="true"
          muted="true"
          type="full"
        />
        <Image
          v-if="!showVideo"
          src="/images/main/intro.jpg"
          class="im w-full h-screen sm:max-h-dvh object-cover rounded-b-lg absolute top-0 left-0 z-[-1] blur-[2px] brightness-50 scale-[1.05]"
        />
        <main class="relative pt-8 pb-2 rounded-xl container">
          <NuxtPage />
        </main>

        <footer class="p-8 bg-teal-500 rounded-xl">footer</footer>
        <Popup />
      </div>
    </transition>
  </Loader>
</template>

<style lang="scss" scoped>

</style>
