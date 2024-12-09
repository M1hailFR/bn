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
		@apply shrink-0 transition-all duration-150 hover:opacity-50;;
		&.fill > * {
			fill: inherit;
		}
		&.type {
      &-default {
        @apply p-2 rounded-xl;
      }
			&-primary {
				@apply text-white bg-primary p-1 rounded-lg;
			}
			&-secondary {
				@apply text-primary border-2 border-primary p-1 rounded-lg;
			}
		}
		&.size {
			&-small {
				@apply w-8 h-8;
			}
			&-normal {
				@apply w-10 h-10;
			}
			&-middle {
				@apply w-12 h-12;
			}
			&-large {
				@apply w-14 h-14;
			}
		}
	}
</style>
