<script setup>
	import vOutside from '/directives/outside.js';

	import Icon from '/components/ui/icon/icon.vue';
	import Option from './option.vue';

	const props = defineProps({
		theme: {
			type: String,
			default: 'light'
		},
		openIndicator: {
			type: Boolean,
			default: true
		},
		openOnHover: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String,
			default: 'fire'
		},
	});

	const emit = defineEmits(['change']);
	const { change } = setBasicUiDataBindings(emit);
	const { classes } = setBasicUiProps(props, 'dropdown-component');

	const isOpen = ref(false);

	const mouseover = computed(() => (props.openOnHover ? open : ''));
	const mouseleave = computed(() => (props.openOnHover ? close : ''));

	const close = () => {
		isOpen.value = false;
    
	};
	const open = () => {
		isOpen.value = true;
	};
	const toggle = () => {
		if (isOpen.value) {
			close();
		} else {
			open();
		}
	};
</script>

<template>
	<div
		v-outside="close"
		:class="[classes]">
		<div
			class="dropdown-component-content"
			@click="toggle">
			<Icon
				class=""
				:name="icon"
				size="small" />
			<slot />
			<Icon
				v-if="props.openIndicator"
				class="chevron translate-x-[-4px] mt-1"
				name="chevron-down"
				size="normal" />
		</div>
		<div
			class="sub-level"
			:class="theme">
			<div class="sub-level-container flex flex-col gap-y-1 pl-2 pr-6">
				<div
					class="options"
					:class="[theme]">
					<slot name="options" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.dropdown-component {
		@apply relative ;
		&-content {
			@apply transition-all duration-200 flex items-center text-[14px] xl:text-[16px] font-medium;
		}
		&:hover {
			@apply text-secondary visible;
			.sub-level {
				@apply visible opacity-100 bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)];
			}
			.chevron {
				@apply rotate-180;
			}
		}
	}
	.sub-level {
		@apply absolute py-3 w-max left-[0px] w-full invisible opacity-0 transition-all rounded-lg text-black;
		&.dark {
			@apply w-max;
		}
		&.light {
			@apply w-max bg-gray-500;
		}
		&.transparent {
			@apply w-max;
		}
		.sub-level-container {
			@apply w-max  max-h-[290px] overflow-auto;
		}
	}
</style>
