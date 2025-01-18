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
	import { intro, heros, request, steps, infoBlock } from '/config/project/content-index';
	import Request from '/components/views/main/request';
	import InfoBlock from '/components/block/infoBlock';
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
		<Reviews />
		<Request :data="request" />
		<Steps :data="steps" />
		<!-- <Servise /> -->
		<Info />

		<Achievement />
		<Fqa />
		<InfoBlock :data="infoBlock"/>
	</div>
</template>
