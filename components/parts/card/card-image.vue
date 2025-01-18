<script setup>
	import Button from '/components/ui/button/button';
	import Icon from '/components/ui/icon/icon.vue';
	import Image from '/components/ui/image/image.vue';
	import { usePopup } from '/store/popup.js';
	const popupStore = usePopup();
	const props = defineProps({
		data: {
			type: Object,
			default: () => {}
		}
	});
	const getStarClass = (index, rate) => {
		const fullStars = Math.floor(rate);
		const halfStar = rate - fullStars >= 0.5;

		if (index <= fullStars) {
			return 'bg-primary';
		} else if (index === fullStars + 1 && halfStar) {
			return 'bg-gradient-4';
		} else {
			return 'bg-gray-100';
		}
	};
	// const openComment = () => {
	// 	const payload = {
	// 		transition: 'fade',
	// 		icon: '',
	// 		title: '',
	// 		logo: false,
	// 		socials: false,
	// 		link: false,
	// 		data: props.data
	// 	};
	// 	popupStore.open('info', payload);
	// };
</script>

<template>
	<div class="card">
		<div class="relative transition-all duration-700 overflow-hidden">
			<Image
				v-if="data.image"
				:src="data.image"
				class="image" />
		</div>

		<div class="p-3 pt-2">
			<div>
				<h5 class="whitespace-nowrap font-semibold mb-0">{{ data.title }}</h5>
				<h4 class="whitespace-nowrap font-semibold mb-0">{{ data.writtenOff }}</h4>
				<h5 class="">{{ data.time }}</h5>
				<h5 class="">{{ data.case }}</h5>
				<h5 class="">{{ data.city }}</h5>
			</div>
			<div class="mt-3 flex gap-2">
				<Button
					size="normall"
					class="btn flex items-center text-sm"
					type="">
					{{ data.button1 }}
					<Icon
						name="chevron-down"
						size="normal"
						class="chevron inline-flex rotate-[-90deg]" />
				</Button>
				<Button
					size="normall"
					class="btn flex items-center text-sm"
					type="">
					{{ data.button2 }}
					<Icon
						name="chevron-down"
						size="normal"
						class="chevron inline-flex rotate-[-90deg]" />
				</Button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card {
		@apply bg-white relative rounded-lg line-clamp-3 shadow-md  flex flex-col justify-between transition-all duration-500 scale-[.95];
		.preview {
			@apply pt-2 line-clamp-4;
		}
		.image {
			@apply relative block w-full h-full rounded-t-xl object-cover transition-all duration-300;
		}
		&:hover {
			@apply scale-[1];

			.image {
				@apply scale-[1];
			}			
		}
	}
	.btn {
		@apply text-black;
    &:hover {
      @apply text-gray-400;
			@apply scale-[1];
			.chevron {
				@apply translate-x-[4px];
			}
		}
	}
</style>
