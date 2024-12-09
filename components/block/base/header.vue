<script setup>
	import Icon from '/components/ui/icon/icon';
	import Image from '/components/ui/image/image';
	import Link from '/components/ui/link/link';

	import { header, socials } from '/config/project/content-nav.js';

	import { usePopup } from '/store/popup.js';
	const popupStore = usePopup();

	const props = defineProps({
		theme: {
			type: String,
			default: 'light'
		},
		lang: {
			type: String,
			default: 'en'
		},
		type: {
			type: String,
			default: 'static'
		}
	});
	const scroll = ref(0);
	const windowWidth = ref();

	const isShow = computed(() => scroll.value === 0 || windowWidth.value <= 990);

	onMounted(() => {
		window.addEventListener('scroll', () => {
			scroll.value = window.scrollY;
		});
		window.addEventListener('resize', () => {
			windowWidth.value = window.innerWidth;
		});
	});
	const openMenu = () => {
		const payload = {
			classes: 'popup-menu',
			transition: 'slide-left',
			icon: 'menu',
			title: 'Меню',
			logo: true,
			socials: true,
			link: true
		};
		popupStore.open('menu', payload);
	};
</script>

<template>
	<header
		ref="el"
		:class="[theme, type]">
		<div
			v-if="isShow"
			class="container flex items-center lg:items-start justify-between gap-6 px-4 py-2 lg:p-4">
			<div class="flex gap-4 items-start translate-x-[-8px]">
				<Link
					href="/"
					class="flex items-center gap-2">
					<Icon
						:name="header.logo"
						size="large"
						class="cursor-pointer ml-auto inline-flex">
					</Icon>
					<h2
						class="mb-0 leading-[.9em] text-[22px] sm:text-[28px] lg:text-[36px]"
						v-html="header.logoText" />
				</Link>
				<h6
					class="hidden md:flex leading-[1em] mt-1 border-l pl-4"
					v-html="header.type" />
			</div>
			<div class="hidden lg:flex gap-4 items-center justify-center">
				<h6 class="flex items-center border-r h-[32px] pr-4">
					<Icon
						name="chat"
						size="normal"
						class="cursor-pointer ml-auto inline-flex" />
					{{ header.phone }}
				</h6>
				<Link
					size="normal"
					type="primary"
					essence="block"
					:href="header.href">
					{{ header.text }}
				</Link>
			</div>
			<Icon
				name="menu"
				size="normal"
				class="cursor-pointer ml-auto flex lg:hidden"
				@click="openMenu" />
		</div>
		<div class="hidden container lg:flex items-center gap-6">
			<div
				v-if="!isShow"
				class="transition-transform duration-500 opacity-1"
				:class="{
					'translate-x-0 ': !isShow,
					'translate-x-[-300px] opacity-0': isShow
				}">
				<Link href="/">
					<div class="inline-flex items-center gap-2">
						<Icon
							name="fire"
							size="large"
							class="cursor-pointer ml-auto inline-flex">
						</Icon>
						<h4
							class="mb-0 leading-[.9em]"
							v-html="header.logoText" />
					</div>
				</Link>
			</div>

			<div
				class="flex items-start justify-between gap-6 flex-1 transition-transform duration-500"
				:class="{
					'translate-x-3 pr-3': !isShow,
					'translate-x-1': isShow
				}">
				<slot />

				<div class="flex items-center justify-end">
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
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
	header {
		@apply top-0 z-50 w-full py-3 lg:transition-all;
		&.light {
			@apply bg-gray-100/70 backdrop-blur-lg;
		}
		&.transparent {
			@apply bg-transparent text-white md:pt-4 lg:pt-8;
		}
		&.dark {
			@apply bg-black/50 text-white backdrop-blur-lg;
		}
	}
</style>
