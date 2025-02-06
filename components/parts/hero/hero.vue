<script setup>
	import Image from '/components/ui/image/image.vue';
	import Button from '/components/ui/button/button';
	import Video from '/components/ui/video/video';
	import { intro } from '/config/project/content-index.js';
	const props = defineProps({
		type: {
			type: String,
			default: 'primary'
		},
		data: {
			type: Object,
			default: () => {}
		}
	});
</script>
<template>
	<section class="hero overflow-hidden w-full min-h-full">
		<div
			class="section-container gap-8 min-h-[60dvh] flex items-center w-full"
			:class="data.type"
		>
			<div class="container content">
				<div
					class="md:w-2/3 lg:w-full relative z-[1] flex flex-col justify-between mr-auto"
				>
					<h2>{{ data.title }}</h2>
					<h3>
						{{ data.text }}
					</h3>

					<div class="mt-10 flex flex-col xl:flex-row justify-start gap-3">
						<Button v-if="intro.consultation" type="primary" size="middle">
							{{ intro.consultation }}
						</Button>
						<Button v-if="intro.start" type="outline" size="middle" class="">
							{{ intro.start }}
						</Button>
					</div>
				</div>
				<!-- <div
					v-if="!data.video"
					class="absolute top-1 left-1 md:hidden bg-white/50 w-full h-full rounded-lg" /> -->

				<slot name="content" />

				<Image
					v-if="data.image"
					:src="data.image"
					class="relative block w-full h-full md:h-[620px] xl:h-full rounded-xl overflow-hidden object-cover"
				/>
				<div
					v-if="data.video"
					class="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]"
				>
					<Video
						:videoSrc="data.video"
						autoplay="true"
						loop="true"
						muted="true"
						type="hero"
						class="h-full"
					>
					</Video>
				</div>
				<div
					v-if="data.fullImage"
					class="fullImage absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]"
				>
					<Image
						:src="data.fullImage"
						type="hero"
						class="h-full "
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.hero {
		.default {
			@apply bg-white;
			.content {
				@apply flex flex-col gap-6 md:flex-row items-center relative;
			}
		}
		.primary {
			@apply bg-primary/60 text-white;
			.content {
				@apply flex flex-col gap-6 md:flex-row items-center relative md:flex-row-reverse;
			}
		}
		.video {
			@apply text-white;
			.content {
				@apply flex flex-col gap-6 lg:flex-row items-center justify-between;
			}
		}
    .fullImage {
      @apply text-black;
			.content {
				@apply flex flex-col gap-6 lg:flex-row items-center justify-between max-h-[400px] overflow-y-scroll mt-20;
			}
    }
	}
</style>
