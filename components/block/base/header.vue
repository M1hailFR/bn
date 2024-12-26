<script setup>
	import Icon from '/components/ui/icon/icon';
	import Image from '/components/ui/image/image';
	import Link from '/components/ui/link/link';
	import Divider from '/components/ui/devider/divider.vue';
	import Dropdown from '/components/ui/dropdown/dropdown.vue';
	import DropdownOption from '/components/ui/dropdown/option.vue';
	import Card from '/components/parts/card/card-stat';

	import { header, socials } from '/config/project/content-nav.js';
	import { regions } from '/config/project/sources';

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
	const region = ref({ city: 'Москва', region: '77' });
	const isShow = computed(() => scroll.value === 0 || windowWidth.value <= 990);

	onMounted(() => {
		windowWidth.value = window.innerWidth;
		scroll.value = window.scrollY;
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
			transition: 'fade',
			icon: '',
			title: 'Меню',
			logo: false,
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
			class="container relative z-[2] flex items-center justify-between py-4 max-h-[64px] drop-shadow-md">
			<div class="flex gap-4 translate-x-[-8px]">
				<div class="flex items-center">
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
					<Dropdown
						class="translate-x-[14px] px-4 bg-gray-100/50 rounded-lg hover:bg-white/10"
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
			</div>
			<div class="hidden lg:flex gap-3 items-center justify-center text-black">
				<Link
					v-for="item in header.info.slice(0, -1)"
					:key="item"
					size="small"
					:type="item.linkType"
					essence="block"
					:href="item.href"
					class="flex items-center text-[15px]  font-medium">
					<Icon
						v-if="item.icon"
						:name="item.icon"
						:size="item.iconSize"
						class="cursor-pointer inline-flex" />
					{{ item.title }}
				</Link>
			</div>
			<Icon
				name="menu"
				size="normal"
				class="cursor-pointer ml-auto flex lg:hidden"
				@click="openMenu" />
		</div>
		<Divider
			v-if="!scroll"
			:theme="theme"
			class="hidden lg:flex" />
		<div class="hidden container relative z-[1] lg:flex items-center gap-6 py-1">
			<div
				v-if="!isShow"
				class="transition-transform duration-500 opacity-1"
				:class="{
					'translate-x-[-8px] ': !isShow,
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
				class="flex items-center justify-between gap-6 flex-1 transition-transform duration-500"
				:class="{
					'translate-x-3 pr-3': !isShow,
					'translate-x-1 py-2': isShow
				}">
				<slot />

				<div class="flex items-center justify-end">
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
					<Link
						size="small"
						type="primary"
						essence="block"
						href=""
						class="flex items-center text-[14px] font-medium ml-2">
						<Icon
							name="fire"
							size="small"
							class="cursor-pointer inline-flex" />
						Войти
					</Link>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
	header {
		@apply top-0 z-50 w-full transition drop-shadow-md;
		&.light {
			@apply bg-white pt-1 text-black lg:translate-y-[-64px];
		}
		&.transparent {
			@apply bg-white pt-1 text-black;
		}
		&.dark {
			@apply bg-black/50 text-white backdrop-blur-lg border-gray-100/10 pt-1 translate-y-[-64px];
		}
	}
</style>
