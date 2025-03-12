<script setup>
	import Header from '/components/block/base/header';
	import Menu from '/components/parts/menu/menu';
	import Popup from '/components/parts/popups/popup';
	import Footer from '/components/block/base/footer.vue';
	import { navigation } from '/config/project/content-nav.js';
	import { useApp } from '/store/app';
	import Socials from '/components/parts/socials/socials';
	import Loader from '/components/ui/loader/modal';
	import Map from '/components/parts/map/map.vue';

	const appStore = useApp();
	const router = useRoute();
	const route = useRoute();

	const loading = ref(true);
	const isShow = ref(false);

	const theme = ref(route.name.startsWith('index') ? 'transparent' : 'light');
	const header = ref(null);
	const screenY = ref(0);
	const footer = ref(null);
	const footerScrollTop = ref(0);

	onMounted(() => {
		appStore.initializeWindowState();
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
		appStore.destroyWindowStateListeners();
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
		handleScrollHeaderUpdate();
		// if (route.name.startsWith('index') || route.name.startsWith('about')) {
		// 	handleScrollHeaderUpdate();
		// } else {
		// 	handleScrollHeaderFooter();
		// }
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
	<Loader :loading="loading" classes="h-dvh w-full">
		<transition name="fade" mode="in-out">
			<div class="relative overflow-visible w-full h-full" v-show="isShow">
				<Header ref="header" :theme="theme">
					<Menu :theme="theme" :navigation="navigation" type="header" />
				</Header>

				<main class="transition-all duration-700">
					<NuxtPage />
				</main>
				<div class="w-full h-full mt-10">
					<Map />
				</div>
				<Footer id="footer">
					<Menu :theme="theme" :navigation="navigation" type="footer" />
				</Footer>

				<Popup />
				<Socials class="hidden sm:block" />
			</div>
		</transition>
	</Loader>
</template>

<style lang="scss" scoped></style>
