<script setup>
	import Card from '/components/parts/card/card';
	import Button from '/components/ui/button/button';
	import { patterns } from '/config/project/content-about.js';
	import { splitArrayIntoChunks } from '/utils/splitArrayIntoChunks';

	import { useApp } from '/store/app';
	const appStore = useApp();

	const columns = computed(() => {
		const count = appStore.windowW >= 1440 ? 3 : 2;
		return splitArrayIntoChunks(patterns.cards, count);
	});
</script>
<template>
	<section class="container mt-6">
		<div class="flex flex-col lg:flex-row relative gap-x-8 gap-y-10 items-start">
			<div class="lg:w-[50%] xl:w-1/3 block lg:sticky top-20 h-full mb-0">
				<h2>{{ patterns.title }}</h2>
				<h5>
					{{ patterns.description }}
				</h5>
			</div>
			<div
				class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-start gap-4 justify-center">
				<div
					class="flex flex-col gap-4"
					v-for="(column, index) in columns"
					:key="index">
					<Card
						v-for="card in column"
						:key="card.title"
						:type="card.type"
						:data="card"
						class="w-full first:row-start-2 sm:first:row-start-1" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped></style>
