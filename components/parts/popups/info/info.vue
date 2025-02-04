<script setup>
	import Link from '/components/ui/link/link.vue';
	import Icon from '/components/ui/icon/icon.vue';
	import Image from '/components/ui/image/image.vue';
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
		<div>
			<div
				v-if="data.image && !data.videoUrl"
				class="relative transition-all rounded-xl duration-700 overflow-hidden mt-2"
			>
				<Image
					:src="data.image"
					class="relative block w-full h-full object-cover transition-all duration-300 max-h-[450px]"
				/>
			</div>
			<div v-if="data.videoUrl" class="w-full h-full rounded-lg overflow-hidden">
				<iframe
					:src="data.videoUrl"
					width="836"
					height="480"
					allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
					frameborder="0"
					allowfullscreen
				></iframe>
			</div>
      <h4
				v-if="data.title"
				class="whitespace-nowrap font-semibold mt-4">
				{{ data.title }}
			</h4>


			<h5 v-if="data.position" class="font-semibold leading-[1.4em]">
				{{ data.position }}
			</h5>
			<h5 v-if="data.text" class="pt-1 pb-2">
				{{ data.text }}
			</h5>
			<h5 v-if="data.description" class="pt-2">
				{{ data.description }}
			</h5>

      <div class="flex items-center" v-if="data.rate">
				<span class="text-sm font-semibold">Оценка: </span>
				<div class="flex">
					<div
						v-for="(n, index) in 5"
						:key="index"
						class="text-transparent bg-clip-text text-sm pb-1"
						:class="getStarClass(index + 1, data.rate)"
					>
						⭐
					</div>
				</div>

				<span class="ml-1 text-sm font-bold">{{ data.rate }}</span>
			</div>

			<div
				class="text-sm whitespace-nowrap font-semibold pb-1"
				v-if="data.author"
			>
				Автор: {{ data.author }}
			</div>

      <div
				class="text-sm whitespace-nowrap font-semibold pb-1"
				v-if="data.discard"
			>
				Списано: {{ data.discard }}
			</div>

      <div
				class="text-sm whitespace-nowrap font-semibold pb-1"
				v-if="data.case"
			>
				Дело: {{ data.case }}
			</div>

			<Link v-if="data.href" :href="data.href" type="default" class="link mt-2">
				<h6
					class="text-[14px] xl:text-[16px] max-w-[200px] leading-[1em] font-semibold"
				>
					{{ data.btnPopup }}
				</h6>
				<Icon
					name="chevron-down"
					size="normal"
					class="chevron inline-flex rotate-[-90deg]"
				/>
			</Link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.link {
		@apply flex items-center;
		&:hover {
			.chevron {
				@apply translate-x-[8px];
			}
		}
	}
</style>
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
