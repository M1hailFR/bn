<script setup>
	import Collapse from '/components/ui/collapse/collapse';
	import Button from '/components/ui/button/button';
	import { fqa } from '/config/project/content-index.js';
	import Chat from '/components/parts/chat/chat.vue';
</script>

<template>
	<section class="container" id="fqa">
		<div class="flex flex-col md:flex-row relative gap-x-8 gap-y-10 items-start">
			<div class="lg:w-[50%] xl:w-1/3 block lg:sticky top-20 h-full mb-0">
				<h2>{{ fqa.title }}</h2>
				<h5 class="max-w-[300px]">
					{{ fqa.description }}
				</h5>
				<Chat />
				<Button v-if="fqa.button1" type="primary" size="normal" class="mt-4">{{
					fqa.button1
				}}</Button>
			</div>
			<div class="w-full">
				<Collapse
					v-for="(question, index) of fqa.questions"
					:key="question.title"
					:cntLng="question.text"
				>
					<h4 class="text-left">{{ index + 1 }}. {{ question.title }}</h4>
					<template #content>
						<h5 v-html="question.text" class="block question"></h5>
					</template>
				</Collapse>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.question {
		p {
			@apply block font-bold;
		}
	}
</style>
