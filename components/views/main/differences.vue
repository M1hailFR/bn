<script setup>
	import { differences } from '/config/project/content-index.js';
	import Card from '/components/parts/card/card-base';
	import { splitArrayIntoChunks } from '/utils/splitArrayIntoChunks';

	const props = defineProps({
		data: {
			type: Object,
			default: () => ({})
		}
	});

	import { useApp } from '/store/app';
	const appStore = useApp();

	const columns = computed(() => {
		const count = appStore.windowW >= 990 ? 3 : 2;
		return splitArrayIntoChunks(differences.cards, count);
	});

	const payload = {
		transition: 'fade',
		icon: '',
		title: 'Что отличает нас от конкурентов',
		logo: false,
		socials: false,
		link: false,
		hideTitle: true,
		hideText: true,
		
	};
</script>

<template>
	<div>
		<section class="container">
			<div class="relative w-full h-auto"></div>
			<h2 class="block">{{ differences.title }}</h2>
			<div class="section-container bg-gray-100/60 rounded-xl">
				<div
					class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-start gap-4 justify-center"
				>
					<div
						class="flex flex-col gap-4"
						v-for="(column, index) in columns"
						:key="index"
					>
						<Card
							v-for="card in column"
							:key="card.title"
							type="outline"
							:data="card"
							:modal="true"
							:payload="payload"
							class="w-full first:row-start-2 sm:first:row-start-1"
						/>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
