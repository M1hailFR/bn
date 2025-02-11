<script setup>
	import Image from '/components/ui/image/image.vue';
	import Button from '/components/ui/button/button';
	import Video from '/components/ui/video/video';
	import { usePopup } from '/store/popup.js';
	const popupStore = usePopup();

	const props = defineProps({
		type: {
			type: String,
			default: 'primary'
		},
		data: {
			type: Object,
			default: () => {}
		},
		variant: {
			type: String,
			default: ''
		}
	});

	const openForm = () => {
		if (props.data.hash) {
			window.location.href = props.data.hash;
		}
		if (props.data.modal) {
			const payload = {
				transition: 'fade',
				icon: '',
				title: 'Бесплатная консультация',
				logo: true,
				socials: true,
				link: false,
				form: true,
				hideTitle: true,
				hideText: true,
				data: props.data
			};
			popupStore.open('info', payload);
		}
	};
</script>
<template>
	<section class="hero overflow-hidden w-full min-h-full relative">
		<div
			class="section-container gap-8 min-h-[60dvh] flex items-center w-full"
			:class="data.type"
		>
			<div class="container content">
				<div
					class="md:w-2/3 flex flex-col justify-between mr-auto z-[1]"
					:class="variant === 'intro' ? 'sticky top-0 text-white' : 'relative '"
				>
					<div>
						<h2
							:class="
								variant === 'intro'
									? 'font-bold text-white text-[26px] lg:text-6xl max-w-[700px]  text-left font-bold tracking-wide mb-4 leading-[1em]'
									: ''
							"
						>
							{{ data.title }}
						</h2>
						<h3 :class="variant === 'intro' ? 'text-white' : ''">
							{{ data.text }}
						</h3>
					</div>

					<div class="mt-10 flex flex-col xl:flex-row justify-start gap-3">
						<Button v-if="data.consultation" type="primary" size="middle">
							{{ data.consultation }}
						</Button>
						<Button v-if="data.start" type="primary" size="middle" @click="openForm">
							{{ data.start }}
						</Button>
					</div>
				</div>
				<!-- <div
					v-if="!data.video"
					class="absolute top-1 left-1 md:hidden bg-white/50 w-full h-full rounded-lg" /> -->

        <slot name="content"  />

				<Image
					v-if="data.image"
					:src="data.image"
					class="relative block w-full h-full md:h-[620px] xl:h-full rounded-xl overflow-hidden object-cover "
				/>
			</div>
		</div>
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
			class="fullImage absolute top-0 left-0 w-full h-full z-[-1] brightness-[.65] blur-[2px] scale-110"
		>
			<Image :src="data.fullImage" type="hero" class="h-full" />
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
				@apply flex flex-col gap-6 lg:flex-row justify-between overflow-y-scroll h-full lg:max-h-[400px];
			}
		}
	}
</style>
