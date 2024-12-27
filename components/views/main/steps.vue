<script setup>
	import Card from '/components/parts/card/card';
	import CardSteps from '/components/parts/card/card-steps';
	import Button from '/components/ui/button/button';
	import { steps } from '/config/project/content-index.js';
	import { splitArrayIntoChunks } from '/utils/splitArrayIntoChunks';

	import { useApp } from '/store/app';
	const appStore = useApp();

	const columns = computed(() => {
		const count = appStore.windowW >= 1440 ? 3 : 2;
		return splitArrayIntoChunks(steps.cards, count);
	});
	const columnst = computed(() => {
		const count = appStore.windowW >= 990 ? 2 : 1;
		return splitArrayIntoChunks(steps.cards, count);
	});
</script>

<template>
	<div>
		<section class="container mt-6">
			<div class="flex flex-col lg:flex-row relative gap-x-8 gap-y-10 items-start">
				<div class="lg:w-[50%] xl:w-1/3 block lg:sticky top-20 h-full mb-0">
					<h2>{{ steps.title }}</h2>
					<h5>
						{{ steps.description }}
					</h5>
					<Button
						type="primary"
						size="normal"
						class="mt-4"
						>{{ steps.button1 }}</Button
					>
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
		<section class="container">
			<div class="lg:w-[50%] xl:w-1/3 block">
				<h2>{{ steps.title }}</h2>
			</div>
			<div
				class="w-full lg:grid grid-cols-2 items-start justify-center mt-8">
				<div
					class=" w-full"
					v-for="(column, index) in columnst"
					:key="index">
					<CardSteps
						v-for="(card, index) in column"
						:key="card.title"
						:data="card"
						:index="index + 1"
						class="first:mt-[0px] mt-[-56px] w-full" />
				</div>
			</div>
		</section>
	</div>
</template>
