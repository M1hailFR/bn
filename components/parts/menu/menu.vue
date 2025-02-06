<script setup>
	import Link from '/components/ui/link/link.vue';
	import Icon from '/components/ui/icon/icon.vue';
	import MenuItem from '/components/parts/menu/menu-item';
	import Button from '/components/ui/button/button';
	import { useApp } from '/store/app';

	const appStore = useApp();
	const router = useRoute();

	const props = defineProps({
		navigation: { type: Array, default: [] },
		theme: { type: String, default: 'light' },
		type: { type: String, default: 'header' }
	});

	const arr = ref({ title: 'Навигация', childs: [] });
	const activeSection = ref('');

	const footerNavigation = computed(() => {
		return props.navigation.reduce((acc, item) => {
			item.chls ? acc.push(...item.chls) : arr.value.childs.push(item);
			return acc;
		}, []);
	});

	const styleTopLevel = computed(() =>
		props.theme === 'light' ? 'primary' : 'secondary'
	);

	const handleScroll = () => {
		if (router.path !== '/') {
			activeSection.value = '';
			return;
		}

		props.navigation.forEach((link) => {
			const section = document.getElementById(link.hash?.replace('#', ''));
			if (!section) return;

			const rect = section.getBoundingClientRect();
			if (rect.top <= 150 && rect.bottom >= 150) {
				activeSection.value = section.id;
			}
		});
	};

	watch(() => appStore.windowS, handleScroll);
	watch(
		() => router.path,
		() => (activeSection.value = '')
	);

	onMounted(handleScroll);
</script>

<template>
	<div>
		<menu class="flex items-center gap-4" v-if="type === 'header'">
			<li
				v-for="(item, index) of navigation"
				:key="index"
				class="level-item relative"
				:class="`i-${theme}`"
			>
				<Link
					:href="item.href"
					:hash="item.hash"
					type="default"
					:activeClass="item.hash ? '' : 'text-secondary scale-[1.2] mt-[-2px]'"
				>
					<p
						class=""
						:class="{
							'text-secondary scale-[1.2] mt-[-2px]':
								(item.hash && activeSection === item.hash?.replace('#', '')) ||
								(!item.hash && $route.path === item.href)
						}"
					>
						{{ item.title }}
					</p>
				</Link>
				<div v-if="item.childs" class="sub-level" :class="`i-${theme}`">
					<div class="sub-level-container flex flex-col gap-y-1 pl-2 pr-6">
						<MenuItem
							v-for="(child, index) of item.childs"
							:key="index"
							:data="child"
							:theme="theme"
						/>
					</div>
				</div>
				<div v-if="item.chls" class="sub-level" :class="`i-${theme}`">
					<div class="sub-level-container">
						<div class="flex w-full divide-x">
							<div
								v-for="(chls, index) of item.chls"
								:key="index"
								class="flex flex-col px-5"
							>
								<Link
									:href="chls.href"
									class="flex items-center justify-start gap-0.5 my-2"
									type="default"
								>
									<Icon v-if="chls.icon" :name="chls.icon" size="normal" />
									<h5 class="font-bold">{{ chls.title }}</h5>
								</Link>
								<div class="flex flex-1 flex-col gap-y-2">
									<MenuItem
										v-for="chl in chls.childs"
										:key="chl"
										:data="chl"
										:theme="theme"
									/>
								</div>
								<Link
									v-if="chls.buttonTitle"
									:href="chls.buttonHref"
									class="flex items-center justify-start gap-0.5 mt-10 mr-auto py-1"
									:class="chls.buttonIcon ? 'pr-4' : 'px-4'"
									type="primary"
								>
									<Icon
										v-if="chls.buttonIcon"
										:name="chls.buttonIcon"
										size="small"
										class="cursor-pointer ml-1 inline-flex"
									/>
									<h6 class="font-medium mb-0">{{ chls.buttonTitle }}</h6>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
		</menu>
		<menu class="flex" v-if="type === 'footer'">
			<li
				v-for="(item, index) of footerNavigation.concat(arr)"
				:key="index"
				class="relative"
				:class="`i-${theme}`"
			>
				<div class="flex flex-col gap-y-1">
					<h4 class="font-bold mb-2">{{ item.title }}</h4>
					<div v-if="item.childs" class="" :class="`i-${theme}`">
						<div class="gap-y-[16px] flex flex-col">
							<MenuItem
								v-for="(child, index) of item.childs"
								:key="index"
								:data="child"
								:theme="theme"
								:icon="false"
								:type="type"
								:hash="child.hash"
							/>
						</div>
					</div>
				</div>
			</li>
		</menu>
	</div>
</template>

<style lang="scss" scoped>
	.level-item {
		@apply transition-all duration-200;
		p {
			@apply text-[14px] xl:text-[16px] py-2 first:pl-0;
		}
		&:hover {
			@apply text-secondary;
			.sub-level {
				@apply visible opacity-100 bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)];
			}
		}
	}
	.sub-level {
		@apply absolute w-max left-[-8px] w-full invisible opacity-0 transition-all rounded-lg text-black;
		&.i-dark,
		&.i-light,
		&.i-transparent {
			@apply w-max;
		}
		.sub-level-container {
			@apply w-max py-4;
		}
	}
</style>
