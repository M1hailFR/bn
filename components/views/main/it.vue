<script setup>
	import { it } from '/config/project/content-index.js';
	import Card from '/components/parts/card/card-base';

	import Link from '/components/ui/link/link.vue';
	import Image from '/components/ui/image/image.vue';
	const props = defineProps({
		data: {
			type: Object,
			default: () => ({})
		}
	});
</script>

<template>
	<div>
		<section class="container">
			<div class="relative w-full h-auto"></div>
			<h2 class="block">{{ it.title }}</h2>
			<h5 class="lg:w-[60%]" v-if="it.description">
				{{ it.description }}
			</h5>
			<div class=" md:flex gap-10 mt-6 w-full items-center">
				<div class="flex flex-col items-start gap-4 justify-center md:w-1/2 mb-10 md:mb-0">
					<Card
						v-for="card in it.cards"
						:key="card.title"
						:type="card.type"
						:data="card"
						:link="true"
						:button="true"
						class="w-full first:row-start-2 sm:first:row-start-1"
					/>
				</div>
				<Image
					:src="it.image"
					alt="it"
					class="w-1/2 h-full object-contain"
				/>
			</div>
		</section>
	</div>
</template>
