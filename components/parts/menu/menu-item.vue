<script setup>
	import Link from '/components/ui/link/link.vue';
	import Icon from '/components/ui/icon/icon.vue';
	const props = defineProps({
		data: {
			type: Object,
			required: true
		},
		theme: {
			type: String,
			default: ''
		}
	});

	const styleLinkByTheme = computed(() =>
		!props.theme || props.theme === 'light' ? 'primary' : 'secondary'
	);
</script>
<template>
	<Link
		class="menu-item"
		:class="[theme]"
		:href="data.href"
		type="default">
		<Icon
			v-if="data.icon"
			:name="data.icon"
			size="normal" 
			class="rounded-full bg-gray-100"/>
			<h6 class="text-[14px] xl:text-[16px] max-w-[200px] leading-[1em] font-medium">{{ data.title }}</h6>
	</Link>
</template>

<style lang="scss" scoped>
	.menu-item {
		@apply flex items-center justify-start gap-2 text-left ;
		&.light {
			@apply px-0;
		}
		&.transparent,
		&.dark {
			@apply px-0;
		}
	}
</style>
