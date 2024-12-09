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
		}
	});

	const { classes } = setBasicUiProps(props, 'card-component');
</script>

<template>
	<div :class="['card-component', `type-${type}`, classes]">
		<Image
			v-if="data.image"
			class="card-image"
			:src="data.image"
			:alt="data.title || ''" />

		<div class="content">
			<div class="mb-8">
				<h3 class="title">
					<Icon
						v-if="data.icon"
						:class="
							type === 'primary' ? 'text-primary bg-white' : 'text-white bg-primary'
						"
						class="icon"
						:name="data.icon"
						size="middle" />
					{{ data.title }}
				</h3>
				<h5 class="description">{{ data.text }}</h5>
			</div>
			<div
				v-if="data.name"
				class="user-info">
				<img
					v-if="data.userImage"
					class="user-image"
					:src="data.userImage"
					alt="Avatar" />
				<div class="user-details">
					<p class="user-name">{{ data.name }}</p>
					<p class="user-date">{{ data.date }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.card-component {
		@apply w-full relative lg:max-w-full lg:flex box-border overflow-hidden rounded-xl;

		&.type-primary {
			@apply bg-primary text-white relative z-[1];
			.content {
				@apply p-4 flex flex-col justify-between leading-normal;
				.title {
					@apply font-bold text-white flex items-center gap-2 mb-2;
				}
				.description {
					@apply text-gray-200;
				}
			}
		}

		&.type-outline {
			@apply xl:border border-gray-200 bg-white/50 relative z-[1];
			.content {
				@apply p-4 flex flex-col justify-between leading-normal;
				.title {
					@apply text-white font-bold xl:text-black flex items-center gap-2 mb-2;
				}
				.description {
					@apply text-gray-200 xl:text-black;
				}
			}
		}

		.card-image {
			@apply h-full w-full z-[-1] blur-[2px] brightness-[0.4] xl:brightness-[1] xl:blur-0 absolute top-0 left-0 xl:relative xl:h-auto xl:w-48 flex-none text-center;
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
