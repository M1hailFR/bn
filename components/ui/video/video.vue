<script setup>
	defineProps({
		videoSrc: {
			type: String,
			required: true
		},
		autoplay: {
			type: Boolean,
			default: false
		},
		loop: {
			type: Boolean,
			default: false
		},
		muted: {
			type: Boolean,
			default: false
		}
	});
</script>

<template>
	<div class="video-container">
		<video
			:src="videoSrc"
			controls
			class="w-full h-screen sm:max-h-dvh  object-cover rounded-b-lg absolute top-0 letf-0 blur-4 z-[-1]"
			:autoplay="autoplay"
			:loop="loop"
			:muted="muted" />
	</div>
</template>

<style lang="scss" scoped>
	.video-container {
		max-width: 100%;
		position: relative;
		video {
			filter: blur(4px) brightness(.5);
			transform: scale(1.06);
		}
	}
</style>
