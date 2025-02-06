<script setup>
	import Intro from '/components/parts/intro/intro';
	import Hero from '/components/parts/hero/hero';
	import Card from '/components/parts/card/card-stat';
	import Team from '/components/views/about/team';
	import Patterns from '/components/views/about/patterns';
	import Cases from '/components/views/practice/cases';
	import { heros } from '/config/project/content-practice';
	import { intro } from '/config/project/content-practice';
	import Differences from '/components/views/main/differences';
</script>

<template>
	<div>
		<Intro :data="intro" />

		<Differences />
		<Hero :data="heros[2]">
			<template #content>
				<div
					class="flex flex-wrap lg:w-full gap-3 justify-start lg:justify-end"
				>
					<Card
						v-for="stat in heros[2].stats"
						:key="stat"
						variant="variant3"
						type="default"
						:data="stat"
					/>
				</div>
			</template>
		</Hero>
		<Cases />

		<!-- <Intro :data="intro" />

    <Patterns />
     -->
	</div>
</template>
