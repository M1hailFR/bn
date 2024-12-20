<script setup>
	import Link from '/components/ui/link/link.vue';
	import Icon from '/components/ui/icon/icon.vue';
	import MenuItem from '~/components/parts/menu/menu-item.vue';
	import Button from '/components/ui/button/button';
	import { navigation } from '/config/project/content-nav.js';

	const props = defineProps({
		theme: {
			type: String,
			default: 'light'
		}
	});

	const styleTopLevel = computed(() =>
		props.theme === 'light' ? 'primary' : 'secondary'
	);
</script>

<template>
	<menu class="flex items-center gap-4">
		<li
			v-for="(item, index) of navigation"
			:key="index"
			class="level-item relative"
			:class="`i-${theme}`">
			<Link
				:href="item.href"
				type="default">
				<p>{{ item.title }}</p>
			</Link>
			<div
				v-if="item.childs"
				class="sub-level"
				:class="`i-${theme}`">
				<div class="sub-level-container flex flex-col gap-y-1 pl-2 pr-6">
					<MenuItem
						v-for="(child, index) of item.childs"
						:key="index"
						:data="child"
						:theme="theme" />
				</div>
			</div>
			<div
				v-if="item.chls"
				class="sub-level"
				:class="`i-${theme}`">
				<div class="sub-level-container">
					<div class="flex w-full divide-x">
						<div
							v-for="(chls, index) of item.chls"
							:key="index"
							class="flex flex-col px-5">
							<Link
								:href="chls.href"
								class="flex items-center justify-start gap-0.5 my-2"
								type="default">
								<Icon
									v-if="chls.icon"
									:name="chls.icon"
									size="normal" />
								<h5 class="font-bold">
									{{ chls.title }}
								</h5>
							</Link>

							<div class="flex flex-1 flex-col gap-y-2">
								<MenuItem
									v-for="chl in chls.childs"
									:key="chl"
									:data="chl"
									:theme="theme" />
							</div>

							<Link
								v-if="chls.buttonTitle"
								:href="chls.buttonHref"
								class="flex items-center justify-start gap-0.5 mt-10 mr-auto py-1"
                :class="chls.buttonIcon ? 'pr-4' :'px-4'"
								type="primary">
								<Icon
									v-if="chls.buttonIcon"
									:name="chls.buttonIcon"
									size="small" 
                  class="cursor-pointer ml-1 inline-flex"/>
								<h6 class="font-bold mb-0 ">
									{{ chls.buttonTitle }}
								</h6>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</li>
	</menu>
</template>

<style lang="scss" scoped>
	.level-item {
		// & > * {
		// 	@apply text-[14px];
		// }
		@apply transition-all duration-200;
		p {
			@apply text-[14px] xl:text-[16px] px-1 xl:px-2 py-2 pt-[5px] xl:pt-[4px] font-bold first:pl-0;
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
		&.i-dark {
			@apply w-max;
		}
		&.i-light {
			@apply w-max;
		}
		&.i-transparent {
			@apply w-max;
		}
		.sub-level-container {
			@apply w-max py-4;
		}
	}
</style>
