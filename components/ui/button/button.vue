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
		@apply  rounded-lg font-semibold border-2 transition-colors duration-700 ;
		&.type {
			&-primary {
				@apply border-primary bg-primary text-white hover:bg-gray-400 hover:text-black hover:border-gray-400 ;
			}
			&-outline {
				@apply border-white/80 md:border-gray-100 hover:bg-gray-400 hover:text-black hover:border-gray-400;
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
