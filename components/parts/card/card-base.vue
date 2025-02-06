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
    payload: {
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
		buttonLink: {
			type: String,
			default: ''
		},
		button: {
			type: Boolean,
			default: false
		},
		image: {
			type: Boolean,
			default: true
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
			'text-white': props.type === 'primary',
			'xl:text-black': props.type === 'outline'
		};
	});

	const iconClasses = computed(() => {
		return {
			icon: true,
			'text-primary': props.type === 'primary',
			'bg-white': props.type === 'primary',
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
			'text-white': props.type === 'primary',
			'text-black': props.type === 'outline'
		};
	});

	const openComment = () => {
		if (props.modal) {
			const payload = {...props.payload, data: props.data, fullImage: true}
			popupStore.open('info', payload);
		}
	};

	const CardWrapper = computed(() => (props.link ? Link : 'div'));
</script>

<template>
	<component
		:is="CardWrapper"
		:class="cardClasses"
		@click="openComment"
		:type="type"
		:href="data.href"
	>
		<div>
			<Image
				v-if="data.image && image"
				class="card-image blur-[1px]"
				:src="data.image"
				:alt="data.title || ''"
			/>
		</div>

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
					<h5 v-if="data.title" :class="titleClasses">
						{{ data.title }}
					</h5>
					<!-- <h4 v-if="data.writtenOff" :class="data.more ? '' : 'text-4xl'">
						Списано {{ data.writtenOff }}
					</h4> -->
				</h5>
				<h5 :class="descriptionClasses">{{ data.text }}</h5>

				<h4 v-if="data.writtenOff">Списано {{ data.writtenOff }}</h4>
				<h4 v-if="data.totalWrittenOff" v-html="data.totalWrittenOff" class="text-4xl"/>
				<h5 v-if="data.city" :class="descriptionClasses">{{ data.city }}</h5>
				<h5 v-if="data.time" :class="descriptionClasses">{{ data.time }}</h5>
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
			<div class="flex gap-2 justify-between">
				<Button
					v-if="button && data.start"
					:type="data.type"
					size="noraml"
					class="w-max px-3 py-2 text-base"
					>{{ data.start }}</Button
				>
				<Link
					v-if="data.more"
					:href="data.href"
					type="secondary"
					sizes="small"
					class="w-max px-3 py-2 text-sm"
					>{{ data.more }}</Link
				>
			</div>
		</div>
	</component>
</template>

<style lang="scss" scoped>
	.card-component {
		@apply w-full overflow-hidden rounded-xl scale-[.98] hover:scale-[1] transition duration-300 ease-in-out h-max;

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
			@apply block relative  max-h-[230px] w-full  flex-none text-center backdrop-blur-lg;
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
