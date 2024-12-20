<script setup>
	import Info from '/components/views/main/info';
	import Intro from '/components/views/main/intro';
	import Fqa from '/components/views/main/fqa';
	import Steps from '/components/views/main/steps';
	import Servise from '/components/views/main/servise';
	import Reviews from '/components/views/main/reviews';
	import Hero from '/components/parts/hero/hero';
	import Card from '/components/parts/card/card-stat';
	import Achievement from '/components/views/main/achievement';
	import { heros } from '/config/project/content-index';

	onMounted(() => {
		window.addEventListener('load', (event) => {
			console.log('Страница готова!', event);
		});
	});
</script>

<template>
	<div>
		<Intro />
		<Info />

		<Hero :data="heros[0]" />
		<Steps />
		<Hero :data="heros[1]" />
		<Servise />
		<Hero :data="heros[2]">
			<template #content>
				<div
					class="flex flex-wrap pt-16 xl:pt-0 lg:w-full gap-3 justify-start lg:justify-end">
					<Card
						v-for="stat in heros[2].stats"
						:key="stat"
						variant="variant2"
						type="default"
						:data="stat" />
				</div>
			</template>
		</Hero>
		<Achievement />
		<!-- <Reviews /> -->
		<Fqa />
	</div>
</template>
