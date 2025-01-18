<script setup>
	import Image from '/components/ui/image/image.vue';
	import Icon from '/components/ui/icon/icon.vue';

	const props = defineProps({
		data: {
			type: Object,
			default: () => ({})
		},
		type: {
			type: String,
			default: 'primary'
		},
		variant: {
			type: String,
			default: 'variant1'
		}
	});

	const { classes } = setBasicUiProps(props, 'card-component');
</script>

<template>
	<div :class="['card-component', `type-${type}`, classes]">
		<!-- Variant 1 -->
		<div
			v-if="variant === 'variant1'"
			class="content">
			<div class="mb-8 mt-2">
				<h3 class="title">
					<Icon
						v-if="data.icon"
						:class="
							type === 'primary' ? 'text-primary bg-white' : 'text-white bg-primary'
						"
						class="icon"
						:name="data.icon"
						size="large" />

					<div
						v-if="data.index"
						class="index">
						{{ data.index }}
					</div>

					{{ data.title }}
				</h3>
				<h5 class="description">{{ data.text }}</h5>
			</div>
		</div>

		<!-- Variant 2 -->
		<div
			v-if="variant === 'variant2'"
			class="w-max pt-4 pb-4 px-4 sm:px-10 bg-white/10 backdrop-blur-sm rounded-lg flex flex-col items-end">
			<p class="z-10 text-lg font-normal text-white">{{ data.title }}</p>
			<h1
				class="relative z-10 text-4xl sm:text-5xl xl:text-6xl font-semibold text-white flex items-center gap-2">
				{{ data.value }}
				<span
					v-if="data.symbol"
					class="text-3xl xl:text-6xl"
					>{{ data.symbol }}</span
				>
			</h1>
		</div>

		<!-- Variant 3 -->
		<div
			v-if="variant === 'variant3'"
			class="inline-flex items-center gap-2 w-full  p-3 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg">
			<Icon
				:name="data.icon"
				size="large"
				class="cursor-pointer inline-flex bg-gray-500/50 rounded-full" />
			<div>
				<h4 class="inline-flex mb-0 flex-wrap max-w-[220px]">{{ data.title }}</h4>
				<span class="block">{{ data.text }}</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-component {
		@apply relative flex box-border overflow-hidden rounded-xl hover:scale-[1.1] transition duration-300 ease-in-out;

		&.type-primary {
			@apply bg-primary text-white relative z-[3] w-full;

			.content {
				@apply p-4 flex flex-col justify-center items-center leading-normal w-full h-full text-center max-w-[310px] mx-auto;

				.title {
					@apply font-bold text-white flex flex-col items-center gap-2 mb-2;

					.index {
						@apply bg-white rounded-lg text-2xl font-bold text-black min-h-14 min-w-14 flex justify-center items-center;
					}
				}

				.description {
					@apply text-gray-200 text-center;
				}
			}
		}

		&.type-outline {
			@apply border border-gray-200 w-full;

			.content {
				@apply p-4 flex flex-col justify-center items-center leading-normal bg-white/50 relative z-[2] w-full h-full text-center max-w-[310px] mx-auto;

				.title {
					@apply font-bold text-black flex flex-col items-center gap-2 mb-2;

					.index {
						@apply bg-primary rounded-lg text-2xl font-bold text-white min-h-14 min-w-14 flex justify-center items-center;
					}
				}

				.description {
					@apply text-black text-center;
				}
			}
		}
	}
</style>
