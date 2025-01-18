<script setup>
	import Image from '/components/ui/image/image.vue';
	const props = defineProps({
		type: {
			type: String,
			default: 'default'
		},
		data: {
			type: Object,
			default: () => {}
		}
	});
</script>

<template>
	<section class="post">
		<div
			class="section-container gap-8"
			:class="data.type">
			<div class="container content">
				<div class="w-full relative z-[1] flex flex-col justify-between mr-auto">
					<h2 class="block lg:hidden">{{ data.title }}</h2>
					<h3
						class="indent-8 font-medium mb-8"
						v-for="item in data.text"
						:key="item">
						{{ item }}
					</h3>

					<!-- <div class="mt-10 flex     flex-col xl:flex-row justify-start gap-3">
          <Button type="primary" size="middle">
            {{ intro.consultation }}
          </Button>
          <Button type="outline" size="middle" class="">
            {{ intro.start }}
          </Button>
        </div> -->
				</div>
				<div class="sticky top-32 w-full h-fit">
					<h2 class="hidden lg:block lg:max-w-[700px]">{{ data.title }}</h2>
					<Image
						v-if="data.image"
						:src="data.image"
						class="rounded-xl w-full md:h-[300px] lg:h-[500px] block overflow-hidden object-cover" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.post {
		@apply min-h-full;
		.default {
			@apply bg-white/50;
			.content {
				@apply flex flex-col gap-6 lg:flex-row relative w-full h-full;
			}
		}
		.primary {
			@apply bg-primary;
			.content {
				@apply flex flex-col gap-6 lg:flex-row relative w-full h-full flex-row-reverse text-gray-100;
			}
		}
	}
</style>
