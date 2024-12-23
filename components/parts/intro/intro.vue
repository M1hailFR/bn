<script setup>
	import Button from '/components/ui/button/button';
	import Image from '/components/ui/image/image';
	import Card from '/components/parts/card/card-stat';
	import RequestForm from '/components/parts/request/request';

	const props = defineProps({
		data: {
			type: Object,
			default: () => ({})
		}
	});

	const form = reactive({
		name: '',
		phone: ''
		// phone: '',
		// reg: '',
		// flow: 'Общий юридический'
	});

	const resetForm = () => {
		form.name = '';
		form.phone = '';
		// form.phone = '';
		// form.reg = '';
		// form.flow = 'Общий юридический';
	};
</script>

<template>
	<section class="intro">
		<div class="container flex flex-col justify-center gap-20 z-10 h-full">
			<!-- Верхний блок -->
			<div class="flex flex-col">
				<h2 v-if="data.headline" class="font-semibold mb-0 text-white/80">{{ data.headline }}</h2>
				<h1 v-if="data.title" class="max-w-[800px] font-bold text-white">{{ data.title }}</h1>
				<h4 v-if="data.description" class="max-w-[600px] text-white/80">
					{{ data.description }}
				</h4>
				<div
					v-if="!data.form"
					class="mt-5 flex flex-col gap-4 md:flex-row w-full text-white">
					<Button
						type="primary"
						size="middle"
						>{{ data.consultation }}</Button
					>
					<Button
						type="outline"
						size="middle"
						>{{ data.start }}</Button
					>
				</div>
				<!-- форма -->
				<RequestForm
					v-if="data.form"
					class="bg-white/10"
					:form="form"
					btnTitle="Оставить заявку"
					request-title="Заявка на получение предложения"
					title="Бесплатная консультация"
					@change="resetForm">
					
				</RequestForm>
				<!-- Нижний блок -->
			</div>

			<div
				v-if="data.stats"
				class="flex flex-wrap w-full gap-6 justify-start text-white">
				<Card
					v-for="stat in data.stats"
					:key="stat"
					variant="variant3"
					type="default"
					:data="stat" />
			</div>
		</div>

		<!-- Фоновые элементы -->
		<div class="intro-flash">
			<div class="intro-flash-1"></div>
			<div class="intro-flash-2"></div>
			<div class="intro-flash-3"></div>
		</div>

		<Image
			:src="data.image"
			class="object-cover z-[8] absolute bottom-0 right-0 xl:right-20 w-auto max-h-[860px] brightness-[.75]" />
	</section>
</template>

<style lang="scss" scoped>
	.intro {
		@apply relative flex items-center overflow-hidden py-10 min-h-[calc(100dvh-135px)] xl:min-h-[calc(100dvh-68px)];
		// height: calc(100dvh - 68px);
		background: linear-gradient(45deg, #bbbbbb 0%, #2a3b4d 100%);

		// @media screen and (min-width: 990px) {
		// 	min-height: calc(100dvh - 135px);
		// }

		&::after {
			content: '';
			@apply absolute top-28 right-0 block w-9/12 h-2/5 opacity-50 pointer-events-none bg-gradient-3;
			filter: blur(100px);
		}

		&-flash {
			@apply absolute top-0 left-0 right-0 bottom-0 z-[6] pointer-events-none;

			div {
				@apply absolute block z-0 rounded-full;
			}

			&-1 {
				@apply top-[750px] right-[1000px] w-[600px] h-[600px] opacity-[60%] bg-gradient-4;
				filter: blur(16px);
			}

			&-2 {
				@apply top-[600px] right-[400px] w-[800px] h-[800px] opacity-[60%] bg-gradient-4 brightness-[150%];
				filter: blur(26px);
			}

			&-3 {
				@apply top-[400px] right-[-300px] w-[1000px] h-[1000px] opacity-[60%] bg-gradient-4 brightness-[150%];
				filter: blur(16px);
			}
		}
	}
</style>
