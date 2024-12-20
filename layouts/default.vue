<script setup>
	import Header from '/components/block/base/header';
	import Menu from '/components/parts/menu/menu';
	import Popup from '/components/parts/popups/popup';
	// import FixedHeader from '/components/block/base/fixedHeader.vue'
	// import Popup from '/components/parts/popups/popup.vue'
	// import OffCanvas from '/components/parts/off-canvas/off-canvas.vue'
	// import Loader from '/components/parts/main/loader'
	// import Footer from '/components/block/base/footer.vue'
	// import Up from '/components/parts/up.vue'
	// import Icon from '/components/ui/icon/icon.vue'
	// import Link from '/components/ui/link/link.vue'
	import Image from '/components/ui/image/image';
	import Video from '/components/ui/video/video';
	import Loader from '/components/ui/loader/modal';

	const router = useRoute();
	const route = useRoute();

	const loading = ref(true);
	const isShow = ref(false);
	const showScrolling = ref(false);
	const mobileViewport = ref(false);
	const SCROLL_LINE = 500;

	const showVideo = computed(() => router.path === '/');

	const theme = ref(route.name.startsWith('index') ? 'transparent' : 'light');
	const header = ref(null);
	const screenY = ref(0);
	const footer = ref(null);
	const footerScrollTop = ref(0);

	onMounted(() => {
		document.readyState === 'complete'
			? startTransition()
			: window.addEventListener('load', startTransition);

		window.addEventListener('scroll', () => {
			requestAnimationFrame(() => {
				handleScrollHeader();
			});
		});
		handleScrollHeader();
	});

	onUnmounted(() => {
		window.removeEventListener('scroll', () => {
			requestAnimationFrame(() => {
				handleScrollHeader();
			});
		});
	});

	watch(
		() => route.name,
		() => handleScrollHeader()
	);

	const startTransition = () => {
		setTimeout(() => {
			loading.value = false;
		}, 3000);
		setTimeout(() => {
			isShow.value = true;
		}, 3200);

		window.removeEventListener('load', startTransition);
	};

	const handleScrollHeader = () => {
		getFooterScrollTop();
		screenY.value = window.scrollY;
		if (route.name.startsWith('index') || route.name.startsWith('about')) {
			handleScrollHeaderUpdate();
		} else {
			handleScrollHeaderFooter();
		}
	};

	const handleScrollHeaderUpdate = () => {
		if (!window.scrollY) {
			theme.value = 'transparent';
		} else if (window.innerHeight < window.scrollY && footerScrollTop.value > 0) {
			theme.value = 'light';
		} else {
			theme.value = 'light';
		}
	};

	const handleScrollHeaderFooter = () => {
		if (footerScrollTop.value < 0) {
			theme.value = 'light';
		} else {
			theme.value = 'light';
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
			behavior: 'smooth'
		});
	};
</script>

<template>
	<Loader
		:loading="loading"
		classes="h-dvh w-dvh">
		<transition
			name="fade"
			mode="in-out">
			<div
				class="relative overflow-visible"
				v-show="isShow">
				<Header
					ref="header"
					:theme="theme"
					:type="theme === 'transparent' ? 'relative' : 'fixed'">
					<Menu :theme="theme" />
				</Header>

				<main
					class="relative transition-all duration-700"
					
					>
					
					<NuxtPage />
				</main>
				<footer class="p-8 bg-teal-500 rounded-xl">footer</footer>
				<Popup />
			</div>
		</transition>
	</Loader>
</template>

<style lang="scss" scoped></style>
