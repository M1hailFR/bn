<script setup>
	import Card from '/components/ui/card/card';
	import { info } from '/config/project/content-index.js';
</script>
<template>
	<section
		class="p-6 md:px-10 md:pb-11 bg-gray-200/50 backdrop-blur-sm rounded-xl flex flex-col justify-center">
		<div>
			<h2>{{ info.title }}</h2>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
			<Card
				v-for="card in info.cards"
				:key="card.title"
				:type="card.type"
				:data="card"
				class="w-full first:row-start-2 sm:first:row-start-1" />
		</div>
	</section>
</template>

<style lang="scss" scoped></style>
