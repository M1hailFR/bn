<script setup>
	import Icon from '/components/ui/icon/icon.vue';
	import Image from '/components/ui/image/image.vue';
	import Link from '/components/ui/link/link.vue';
	import Menu from '/components/parts/menu/menu';
	import Map from '/components/parts/map/map.vue';
	import { header, socials } from '/config/project/content-nav.js';
	import { regions } from '/config/project/sources';

	const version = '1.0.0';

	const el = ref(null);
</script>

<template>
	<footer class="footer" ref="el">
		<div class="container z-10">
			<div class="flex justify-between w-full gap-14">
				<div class="max-w-[350px]">
					<Link href="/">
						<div class="inline-flex items-center gap-2">
							<Icon
								name="fire"
								size="large"
								class="cursor-pointer ml-auto inline-flex"
							>
							</Icon>
							<h4 class="mb-0 leading-[.9em] text-4xl" v-html="header.logoText" />
						</div>
					</Link>

					<h5 class="mt-2 py-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum,
						quibusdam dolor facilis excepturi tempora expedita quia in maiores
						voluptates optio esse, rem hic nesciunt fuga aperiam alias necessitatibus
						eum.
					</h5>
					<div class="flex flex-row gap-4 justify-between mt-6	">
						<slot />
						<div>
							<div class="flex flex-col gap-1 items-start py-2">
								<Link
									v-for="item in header.info"
									:key="item"
									size="small"
									:type="item.linkType"
									essence="block"
									:href="item.href"
									class="flex items-center text-[15px] font-medium"
								>
									<Icon
										v-if="item.icon"
										:name="item.icon"
										:size="item.iconSize"
										class="cursor-pointer inline-flex"
									/>
									{{ item.title }}
								</Link>
							</div>
							<div class="flex">
								<Link v-for="(social, index) in socials" :key="index" :href="social">
									<Icon :name="index" size="normal" class="cursor-pointer"> </Icon>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div class="flex gap-10 w-full">
					<div class="w-full max-h-[400px]">
						<Map />
					</div>

					<!-- <slot /> -->
				</div>
			</div>
			<!-- <div class="flex gap-10 w-full mt-10">
				<div class="w-full max-h-[400px]">
					<Map />
				</div>
			</div> -->
			<div class="text-sm font-medium md:w-9/12 mt-20">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum,
				quibusdam dolor facilis excepturi tempora expedita quia in maiores
				voluptates optio esse, rem hic nesciunt fuga aperiam alias necessitatibus
				eum.
			</div>
			<div class="text-sm md:w-9/12 mt-4">
				&#169; {{ new Date().getFullYear() }} Pro Списание
			</div>
		</div>

		<!-- Фоновые элементы -->
		<div class="footer-flash">
			<div class="footer-flash-1"></div>
			<div class="footer-flash-2"></div>
			<div class="footer-flash-3"></div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
	.footer {
		@apply relative flex items-center overflow-hidden pt-20 pb-10 text-white;
		background: linear-gradient(45deg, #bbbbbb 0%, #2a3b4d 100%);

		&::after {
			content: '';
			@apply absolute top-28 right-0 block w-9/12 h-2/5 opacity-50 pointer-events-none bg-gradient-3;
			filter: blur(100px);
		}

		&-flash {
			@apply absolute top-0 left-0 right-0 bottom-0 z-[6] pointer-events-none;

			div {
				@apply absolute block z-0 rounded-full;
			}

			&-1 {
				@apply top-[250px] right-[1000px] w-[600px] h-[600px] opacity-[60%] bg-gradient-4;
				filter: blur(16px);
			}

			&-2 {
				@apply top-[200px] right-[400px] w-[800px] h-[800px] opacity-[60%] bg-gradient-4 brightness-[150%];
				filter: blur(26px);
			}

			&-3 {
				@apply top-[100px] right-[-350px] w-[1000px] h-[1000px] opacity-[60%] bg-gradient-4 brightness-[150%];
				filter: blur(16px);
			}
		}
	}
</style>
