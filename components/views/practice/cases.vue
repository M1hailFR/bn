<script setup>
	import CardBase from '/components/parts/card/card-base';
	import { cases } from '/config/project/content-practice.js';
  import Image from '/components/ui/image/image.vue';
</script>

<template>
	<section class="relative">
		<div class="section-container container gap-8 rounded-xl w-full">
			<div class="w-full block mb-4">
				<h2 class="">{{ cases.title }}</h2>
				<h5>
					{{ cases.description }}
				</h5>
			</div>
			<div
				class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-4 justify-center"
			>
				<CardBase
					v-for="(card, index) in cases.cards"
					:key="card.title"
					:data="card"
					:index="index + 1"
					:button="true"
					:buttonLink="card.href"
					type="outline"
					class="w-full last:col-span-2"
				/>
			</div>
		</div>
    <!-- <div

			class="fullImage absolute top-0 left-0 w-full h-full z-[-1] brightness-[.65] blur-[0px]"
		>
			<Image src="/images/intro/stena.jpg" type="hero" class="h-full" />
		</div> -->
	</section>
</template>
