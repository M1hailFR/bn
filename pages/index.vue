<script setup>
	import Info from '/components/views/main/info';
	import Intro from '/components/parts/intro/intro';
	import Fqa from '/components/views/main/fqa';
	import Steps from '/components/views/main/steps';
	import Servise from '/components/views/main/servise';
	import Reviews from '/components/views/main/reviews';
	import Fit from '/components/views/main/fit';
	import Hero from '/components/parts/hero/hero';
	import Card from '/components/parts/card/card-stat';
	import Achievement from '/components/views/main/achievement';
	import { heros } from '/config/project/content-index';
	import { intro } from '/config/project/content-index';
	onMounted(() => {
		window.addEventListener('load', (event) => {
			console.log('Страница готова!', event);
		});
	});
</script>

<template>
	<div>
		<Intro :data="intro" />
		<Fit />
		<Hero :data="heros[2]">
			<template #content>
				<div
					class="flex flex-wrap pt-16 xl:pt-0 lg:w-full gap-x-6 gap-y-6 justify-start lg:justify-end">
					<Card
						v-for="stat in heros[2].stats"
						:key="stat"
						variant="variant3"
						type="default"
						:data="stat" />
				</div>
			</template>
		</Hero>
		<Reviews />
		<Steps />
		<!-- <Servise /> -->
		<Info />

		<Hero :data="heros[0]" />
		<Achievement />
		<Hero :data="heros[1]" />

		
		<Fqa />
	</div>
</template>
