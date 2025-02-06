<script setup>
	import Intro from '/components/parts/intro/intro';
	import Hero from '/components/parts/hero/hero';
	import Card from '/components/parts/card/card-stat';
	import Team from '/components/views/about/team';
	import Patterns from '/components/views/about/patterns';
	import Cases from '/components/views/practice/cases';
	import { heros } from '/config/project/content-practice';
	import Differences from '/components/views/main/differences';
	import InfoBlock from '/components/parts/infoBlock/infoBlock';
	import { achievement } from '/config/project/content-index';
</script>

<template>
	<div>
		<Hero :data="heros[0]" variant="intro" class="text-white">
			<template #content>
				<div
					class="flex flex-wrap text-white lg:w-full gap-1 justify-start lg:justify-end"
				>
					<Card
						v-for="stat in heros[0].stats"
						:key="stat"
						variant="variant3"
						type="default"
						:data="stat"
            class=""
					/>
				</div>
			</template>
		</Hero>
		<!-- <Differences /> -->
		<Cases />
    <!-- <InfoBlock :data="achievement" hash="achievement" /> -->
		<!-- <Intro :data="intro" />

    <Patterns />
     -->
	</div>
</template>
