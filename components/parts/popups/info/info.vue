<script setup>
	const props = defineProps({
		data: {
			type: Object,
			default: () => {}
		}
	});
	const getStarClass = (index, rate) => {
		const fullStars = Math.floor(rate);
		const halfStar = rate - fullStars >= 0.5;

		if (index <= fullStars) {
			return 'bg-primary';
		} else if (index === fullStars + 1 && halfStar) {
			return 'bg-gradient-4';
		} else {
			return 'bg-gray-100';
		}
	};
</script>

<template>
	<div>
		<div v-if="!data.videoUrl">
			<div class="flex items-start flex-col border-y py-2 my-3 gap-1">
				<div class="flex items-center">
					<span class="text-sm font-semibold">Оценка:</span>
					<div class="flex">
						<div
							v-for="(n, index) in 5"
							:key="index"
							class="text-transparent bg-clip-text text-sm"
							:class="getStarClass(index + 1, data.rate)">
							⭐
						</div>
					</div>

					<span class="ml-1 text-sm font-bold">{{ data.rate }}</span>
				</div>

				<span class="text-sm whitespace-nowrap font-semibold"
					>Автор:{{ data.author }}</span
				>
			</div>

			<h5 class="pt-2">{{ data.text }}</h5>
		</div>
		<div
			v-else
			class="w-full h-full rounded-lg overflow-hidden">
			<iframe
				:src="data.videoUrl"
				width="836"
				height="480"
				allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
				frameborder="0"
				allowfullscreen></iframe>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
<!-- <iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/watch?v=P-nJcLvQI9Q&list=RDP-nJcLvQI9Q&start_radio=1"
					srcdoc="<style>*{padding:0;margin:0;overflow:hidden}
    html,body{height:100%}
    img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
    span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
    </style>
    <a href=https://www.youtube.com/embed/watch?v=P-nJcLvQI9Q&list=RDP-nJcLvQI9Q&start_radio=1>
    <img src=https://img.youtube.com/vi/li_9PBrcOcQ/hqdefault.jpg alt='Demo video'>
    <span>▶</span>
    </a>"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					title="Demo video">
				</iframe> -->
