<script setup>
	import Image from '/components/ui/image/image.vue';
	import Icon from '/components/ui/icon/icon.vue';
	import Link from '/components/ui/link/link.vue';
	import { usePopup } from '/store/popup.js';
	import Button from '/components/ui/button/button';
	const popupStore = usePopup();
	const props = defineProps({
		data: {
			type: Object,
			default: () => ({})
		},
		type: {
			type: String,
			default: 'primary'
		},
		modal: {
			type: Boolean,
			default: false
		},
		link: {
			type: Boolean,
			default: false
		},
		button: {
			type: Boolean,
			default: false
		}
	});

	const { classes } = setBasicUiProps(props, 'card-component');

	const cardClasses = computed(() => {
		return ['card-component', `type-${props.type}`, classes];
	});

	const contentClasses = computed(() => {
		return {
			content: true,
			'p-4': true,
			flex: true,
			'flex-col': true,
			'justify-between': true,
			'leading-normal': props.type === 'primary',
			'bg-white/50': props.type === 'outline',
			relative: props.type === 'outline',
			'z-[2]': props.type === 'outline',
			'w-full': props.type === 'outline',
			'h-full': props.type === 'outline'
		};
	});

	const titleClasses = computed(() => {
		return {
			title: true,
			'leading-[1.4em]': true,
			'max-w-[400px]': true,
			'font-bold': true,
			flex: true,
			'items-center': true,
			'gap-2': true,
			'mb-2': true,
			'text-white': props.type === 'primary',
			'xl:text-black': props.type === 'outline'
		};
	});

	const iconClasses = computed(() => {
		return {
			icon: true,
			'text-primary': props.type === 'primary',
			'bg-primary': props.type === 'primary',
			'text-white': props.type === 'outline',
			'bg-primary': props.type === 'outline'
		};
	});

	const indexClasses = computed(() => {
		return {
			index: true,
			'rounded-lg': true,
			'text-2xl': true,
			'font-bold': true,
			'min-h-14': true,
			'min-w-14': true,
			flex: true,
			'justify-center': true,
			'bg-white': props.type === 'primary',
			'text-black': props.type === 'primary',
			'bg-primary': props.type === 'outline' || props.type === 'default',
			'text-white': props.type === 'outline' || props.type === 'default',
			'items-center': true
		};
	});

	const descriptionClasses = computed(() => {
		return {
			description: true,
			'text-gray-200': props.type === 'primary',
			'text-black': props.type === 'outline'
		};
	});

	const openComment = () => {
		if (props.modal) {
			const payload = {
				transition: 'fade',
				icon: '',
				title: 'Что отличает нас от конкурентов',
				logo: false,
				socials: false,
				link: false,
				data: props.data
			};
			popupStore.open('info', payload);
		}
	};

	const CardWrapper = computed(() => (props.link ? Link : 'div'));
</script>

<template>
	<component :is="CardWrapper" :class="cardClasses" @click="openComment" :type="type" :href="data.href">
		<Image
			v-if="data.image"
			class="card-image"
			:src="data.image"
			:alt="data.title || ''"
		/>

		<div :class="contentClasses">
			<div class="my-2">
				<h5 :class="titleClasses">
					<Icon
						v-if="data.icon"
						:class="iconClasses"
						:name="data.icon"
						size="middle"
					/>

					<div v-if="data.index" :class="indexClasses">
						{{ data.index }}
					</div>

					{{ data.title }}
				</h5>
				<h5 :class="descriptionClasses">{{ data.text }}</h5>
			</div>
			<div v-if="data.name" class="user-info">
				<img
					v-if="data.userImage"
					class="user-image"
					:src="data.userImage"
					alt="Avatar"
				/>
				<div class="user-details">
					<p class="user-name">{{ data.name }}</p>
					<p class="user-date">{{ data.date }}</p>
				</div>
			</div>
			<Button v-if="button && data.start" type="outline" size="noraml" class="w-max px-2 py-1">{{
				data.start
			}}</Button>
		</div>
	</component>
</template>

<style lang="scss" scoped>
	.card-component {
		@apply w-full h-max relative lg:max-w-full xl:flex box-border overflow-hidden rounded-xl hover:scale-[1.04] transition duration-300 ease-in-out;

		&.type-primary {
			@apply bg-primary text-white relative z-[3] border-none;
		}

		&.type-default {
			@apply bg-transparent text-black relative z-[3] border-none;
		}

		&.type-outline {
			@apply border border-gray-200 bg-white;
		}

		.card-image {
			@apply block h-[128px] relative xl:h-full w-full xl:w-48 flex-none text-center;
		}

		.user-info {
			@apply flex items-center gap-4 mt-4;
			.user-image {
				@apply w-10 h-10 rounded-full;
			}
			.user-details {
				@apply text-sm;
				.user-name {
					@apply font-bold leading-none;
				}
			}
		}
	}
</style>
