<script setup>
import Button from '/components/ui/button/button'
import Image from '/components/ui/image/image'
import Card from '/components/parts/card/card-stat'
import RequestForm from '/components/parts/request/request'
import { usePopup } from '/store/popup.js'
const popupStore = usePopup()

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})

const form = reactive({
  name: '',
  phone: '',
  // phone: '',
  // reg: '',
  // flow: 'Общий юридический'
})

const resetForm = () => {
  form.name = ''
  form.phone = ''
  // form.phone = '';
  // form.reg = '';
  // form.flow = 'Общий юридический';
}

const openForm = () => {
  if (props.data.hash) {
    window.location.href = props.data.hash
  }
  if (props.data.modal) {
    const payload = {
      transition: 'fade',
      icon: '',
      title: 'Заявка на получение предложения',
      logo: true,
      socials: true,
      link: true,
      form: true,
      hideTitle: true,
      hideText: true,
      data: props.data,
    }
    popupStore.open('info', payload)
  }
}
</script>

<template>
  <section
    class="intro"
    id="main"
    :class="data.fullh ? 'xl:min-h-[calc(100dvh)]' : 'h-full'">
    <div
      class="container flex flex-col justify-center gap-40 relative z-[11] h-full pt-[72px]">
      <!-- Верхний блок -->
      <div class="flex flex-col">
        <h1
          v-if="data.headline"
          class="font-bold text-white text-[26px] lg:text-6xl max-w-[700px] text-left font-bold tracking-wide mb-4 leading-[1em]">
          {{ data.headline }}
        </h1>
        <h2
          v-if="data.title"
          class="font-semibold mb-0 text-white/80 lg:w-2/3">
          {{ data.title }}
        </h2>
        <h4
          v-if="data.description"
          class="max-w-[400px] text-white/80 mt-2">
          {{ data.description }}
        </h4>
        <div
          v-if="!data.form"
          class="py-6 mt-3 flex flex-col gap-4 md:flex-row w-full text-white">
          <Button
            v-if="data.consultation"
            type="primary"
            size="middle"
            >{{ data.consultation }}</Button
          >
          <Button
            v-if="data.start"
            type="primary"
            size="middle"
            @click="openForm"
            >{{ data.start }}</Button
          >
        </div>
        <!-- форма -->
        <RequestForm
          v-if="data.form"
          class="bg-white/10 lg:w-1/2 w-full"
          :form="form"
          btnTitle="Оставить заявку"
          request-title="Заявка на получение предложения"
          title="Бесплатная консультация"
          @change="resetForm">
        </RequestForm>
        <!-- Нижний блок -->
      </div>

      <div
        v-if="data.stats"
        class="flex flex-wrap w-full gap-3 justify-start text-white">
        <Card
          v-for="stat in data.stats"
          :key="stat"
          variant="variant3"
          type="default"
          :data="stat"
          class="" />
      </div>
    </div>

    <!-- Фоновые элементы -->
    <div class="intro-flash">
      <div class="intro-flash-1"></div>
      <div class="intro-flash-2"></div>
      <div class="intro-flash-3"></div>
    </div>

    <Image
      v-if="data.image"
      :src="data.image"
      class="object-cover z-[8] absolute bottom-0 right-0 xl:right-20 max-w-[720px] max-h-[920px] brightness-[.9]" />

    <Image
      v-if="data.bg"
      :src="data.bg"
      class="object-cover z-[8] absolute inset-0 brightness-[.75]" />
  </section>
</template>

<style lang="scss" scoped>
.intro {
  @apply relative flex items-center overflow-hidden py-10;
  background: linear-gradient(45deg, #00e1ff 0%, #75b1f1 100%);

  &::after {
    content: '';
    @apply absolute top-[-16px] left-0 scale-150 right-0 z-[10] inset-0 block w-full h-[100px] opacity-50 pointer-events-none bg-black;
    filter: blur(50px);
  }

  &-flash {
    @apply absolute top-0 left-0 right-0 bottom-0 z-[6] pointer-events-none;

    div {
      @apply absolute block z-0 rounded-full;
    }

    &-1 {
      @apply top-[550px] right-[1000px] w-[600px] h-[600px] opacity-[60%] bg-gradient-primary;
      filter: blur(16px);
    }

    &-2 {
      @apply top-[400px] right-[400px] w-[800px] h-[800px] opacity-[60%] bg-gradient-primary brightness-[150%];
      filter: blur(26px);
    }

    &-3 {
      @apply top-[200px] right-[-300px] w-[1000px] h-[1000px] opacity-[60%] bg-gradient-primary brightness-[150%];
      filter: blur(16px);
    }
  }
}
</style>
