<script setup>
	const props = defineProps({
		type: {
			type: String,
			default: 'default'
		},
		size: {
			type: String,
			default: 'normal'
		},
		href: {
			type: String,
			default: '/'
		},
		activeClass: {
			type: String,
			default: ''
		},
		essence: {
			type: String,
			default: 'inline'
		},
		anchor: {
			type: Boolean,
			default: false
		}
	});
	const { classes } = setBasicUiProps(props, 'link-component');
	const isExternal =
		props.href.startsWith('http') ||
		props.href.trim().startsWith('mailto') ||
		props.href.trim().startsWith('tel');
</script>

<template>
	<a
		v-if="isExternal || anchor"
		:class="[classes, essence]"
		:href="href"
		:target="isExternal ? '_blank' : null">
		<slot />
	</a>
	<router-link
		v-else
		:class="[classes, essence]"
		:to="{ path: href }"
		:active-class="activeClass">
		<slot />
	</router-link>
</template>

<style lang="scss" scoped>
	.link-component {
		@apply transition-all duration-150 ;

		&.type {
			&-default {
				@apply hover:text-secondary;
			}
			&-primary {
				@apply text-white bg-primary rounded-lg hover:bg-gradient-primary pl-2 pr-3 py-0.5;
			}
			&-secondary {
				@apply relative text-primary rounded-lg overflow-hidden hover:bg-gradient-primary py-0.5 hover:opacity-50 hover:text-white;
				&::after {
					content: '';
					@apply absolute top-0 left-0 block w-full h-full border-2 border-primary rounded-lg;
				}
			}
		}
		&:is(.block).size {
			&-normal {
				@apply text-base font-bold px-4 pt-3 pb-2.5;
			}
			&-middle {
				@apply text-lg font-bold px-7 pt-3 pb-2.5;
			}
			&-large {
				@apply text-xl font-bold px-10 pt-3 pb-2.5;
			}
		}
		&:is(.inline).size {
			&-small {
				@apply text-sm;
			}
			&-normal {
				@apply text-base;
			}
			&-middle {
				@apply text-lg;
			}
			&-large {
				@apply text-xl;
			}
		}
	}
</style>
