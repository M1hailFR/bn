<script setup>
	const props = defineProps({
		modelValue: {
			type: [String, Number],
			default: ''
		},
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
			default: 'text'
		},
		placeholder: {
			type: String,
			default: 'Type here...'
		},
		readonly: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		error: {
			type: Boolean,
			default: false
		}
	});

	const emit = defineEmits(['update:modelValue', 'change']);

	const { change } = setBasicUiDataBindings(emit);
	const { classes } = setBasicUiProps(props, 'input-component');
</script>

<template>
	<input
		:type="nativeType"
		:value="modelValue"
		:class="[classes, {'error': error}]"
		class="h-full w-full"
		:placeholder="placeholder"
		@change="change"
		@input="change"
		v-mask />
		
</template>

<style lang="scss" scoped>
	.input-component {
		@apply cursor-pointer outline-none transition-all duration-150 hover:opacity-70;
		&.type {
			&-primary {
				@apply text-white bg-primary rounded-lg border-2 border-primary;
				&::placeholder {
					@apply text-white/70;
				}
			}
			&-secondary {
				@apply text-white bg-transparent border-2 border-white rounded-lg;
				&::placeholder {
					@apply text-white/70;
				}
			}
		}
		&.size {
			&-normal {
				@apply text-base px-4 py-3;
			}
		}
		&.error {
			@apply border-red-600;
			&::placeholder {
					@apply text-red-400;
				}
		}
	}
</style>
