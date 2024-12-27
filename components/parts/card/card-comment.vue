<script setup>
	import Button from '/components/ui/button/button';
	import Icon from '/components/ui/icon/icon.vue';
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
	const openComment = () => {
		const payload = {
			transition: 'fade',
			icon: '',
			title: 'Отзывы клиентов о БанкротствеNet',
			logo: false,
			socials: false,
			link: false,
			data: props.data
		};
		popupStore.open('info', payload);
	};
</script>
<template>
	<div
		class="card"
		@click="openComment">
		<div>
			<div class=" md:flex items-center border-b pb-2">
				<div class="flex pb-1 md:pb-0">
					<div
						v-for="(n, index) in 5"
						:key="index"
						class="text-transparent bg-clip-text text-sm"
						:class="getStarClass(index + 1, data.rate)">
						⭐
					</div>
				</div>

				<span class="hidden md:block text-sm font-bold">{{ data.rate }}</span>
				<span class="text-sm whitespace-nowrap ml-auto">{{
					data.author
				}}</span>
			</div>

			<h5 class="preview">{{ data.text }}</h5>
		</div>
		<div class="mt-3">
			<Button
				@click="nextSlide"
				size="normall"
				class="btn flex items-center text-sm"
				type="">
				{{ data.btn }}
				<Icon
					name="chevron-down"
					size="normal"
					class="chevron inline-flex rotate-[-90deg]" />
			</Button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card {
		@apply bg-white p-3 rounded-lg line-clamp-3 shadow-md h-[180px] flex flex-col justify-between transition duration-300 scale-[.94];
		.preview {
			@apply pt-2 line-clamp-3;
		}
		&:hover {
			@apply scale-[1];

			.btn {
				@apply text-gray-400;
			}
			.chevron {
				@apply translate-x-[16px];
			}
		}
	}
</style>
