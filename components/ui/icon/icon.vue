<script setup>
	import components from '/components/ui/icon/icons-components.js';

	const props = defineProps({
		name: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'default'
		},
		size: {
			type: String,
			default: 'normal'
		}
	});

	const { classes } = setBasicUiProps(props, 'icon-component');
</script>

<template>
	<div :class="classes">
		<component
			class="block flex-shrink-0 w-full h-full"
			:is="components[name]" />
	</div>
</template>

<style lang="scss" scoped>
	.icon-component {
		@apply shrink-0 transition-all duration-150 hover:opacity-50 ;
		&.fill > * {
			fill: inherit;
		}
		&.type {
			&-default {
				@apply p-1 rounded-xl mb-0.5 ;
			}
			&-primary {
				@apply p-1 text-white bg-primary  rounded-lg mb-0.5 ;
			}
			&-secondary {
				@apply p-1 text-primary border-2 border-primary  rounded-lg mb-0.5 ;
			}
		}
		&.size {
			&-small {
				@apply w-6 h-6;
			}
			&-normal {
				@apply w-8 h-8;
			}
			&-middle {
				@apply w-10 h-10;
			}
			&-large {
				@apply w-12 h-12;
			}
		}
	}
</style>
