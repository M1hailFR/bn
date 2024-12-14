<script setup>
	const props = defineProps({
		type: {
			type: String,
			default: 'primary'
		},
		size: {
			type: String,
			default: 'normal'
		},
		nativeType: {
			type: String,
			default: 'button'
		},
		disabled: {
			type: Boolean,
			default: false
		}
	});

	const emit = defineEmits(['click']);
	const { classes } = setBasicUiProps(props, 'button-component');
</script>

<template>
	<button
		:type="nativeType"
		:class="classes"
		@click="emit('click')">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
	.button-component {
		@apply transition-all duration-150 hover:opacity-90;
		&.type {
			&-primary {
				@apply border-2 border-primary/80 bg-primary font-semibold text-white rounded-lg transition-all hover:bg-primary/80;
			}
			&-outline {
				@apply border-2 border-white/80 md:border-gray-100/80 font-semibold rounded-lg transition-all hover:bg-gray-100/80 hover:text-black;
			}
		}
		&.size {
			&-small {
				@apply text-sm py-2 px-2;
			}
			&-normal {
				@apply py-3 px-10;
			}
			&-middle {
				@apply text-sm w-max px-3 md:text-lg md:px-7 py-3;
			}
		}
		&.state-disabled {
			@apply opacity-80 cursor-not-allowed;
		}
	}
</style>
