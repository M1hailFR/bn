<script setup>
	import { team } from '/config/project/content-about.js';
	import Slider from '/components/parts/slider/slider';
	import { useApp } from '/store/app';
	const appStore = useApp();
	const itemsPerPage = computed(() =>
		appStore.windowW < 768
			? 1
			: appStore.windowW < 992
				? 2
				: appStore.windowW < 1440
					? 3
					: 4
	);
</script>
<template>
	<div>
		<section class="container">
			<div class="relative w-full h-auto"></div>
			<h2 class="block">{{ team.title }}</h2>
			<div class="section-container bg-gray-100/60 rounded-xl">
				<Slider
					:data="team.cards"
					type="team"
					wrapper="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
					:itemsPerPage="itemsPerPage"
					navBottom="true">
				</Slider>
			</div>
		</section>
	</div>
</template>
