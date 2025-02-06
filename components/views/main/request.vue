<script setup>
import RequestForm from '/components/parts/request/request'
import Image from '/components/ui/image/image'
import Icon from '/components/ui/icon/icon'
import speak from '/components/icons/outline/speak'
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})

const form = reactive({
  name: '',
  phone: '',
  email: '',
  // phone: '',
  // reg: '',
  // flow: 'Общий юридический'
})

const resetForm = () => {
  form.name = ''
  form.phone = ''
  form.email = ''
  // form.phone = '';
  // form.reg = '';
  // form.flow = 'Общий юридический';
}
</script>

<template>
  <section class="request py-0" id="cost">
    <div class="section-container py-0 z-[8] relative max-w-[1440px] m-auto">
      <div class="content container py-0 flex gap-10 justify-end w-full">
        <div
          class="absolute left-20 max-w-[580px] bottom-[-140px]">
          <Image
            :src="data.image"
            class="z-[8] bottom-0 left-20 xl:right-20 brightness-[.85]" />
        </div>

        <div class="flex flex-col text-white relative xl:left-[148px]">
          <div
            class="relative left-0 lg:left-[-148px] xl:left-[-148px] h-full pb-11">
            <h2>{{ data.title }}</h2>
            <h3>{{ data.description }}</h3>
            <speak class="absolute left-[-20px] bottom-0" />
          </div>

          <RequestForm
            :form="form"
            btnTitle="Оставить заявку"
            request-title="Заявка на получение предложения"
            title="Бесплатная консультация"
            class="w-full bg-white/10 max-w-[700px]"
            @change="resetForm" />
        </div>
      </div>
    </div>
    <!-- Фоновые элементы -->
    <div class="request-flash">
      <div class="request-flash-1"></div>
      <div class="request-flash-2"></div>
      <div class="request-flash-3"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.request {
  @apply relative flex items-center justify-end overflow-hidden py-10 xl:min-h-[calc(60dvh-200px)];
  background: linear-gradient(45deg, #bbbbbb 0%, #2a3b4d 100%);

  &::after {
    content: '';
    @apply absolute top-28 right-0 block w-9/12 h-2/5 opacity-50 pointer-events-none bg-gradient-3;
    filter: blur(100px);
  }

  &-flash {
    @apply absolute top-0 left-0 right-0 bottom-0 z-[6] pointer-events-none;

    div {
      @apply absolute block z-0 rounded-full;
    }

    &-1 {
      @apply top-[550px] right-[1000px] w-[600px] h-[600px] opacity-[60%] bg-gradient-4;
      filter: blur(16px);
    }

    &-2 {
      @apply top-[400px] right-[400px] w-[800px] h-[800px] opacity-[60%] bg-gradient-4 brightness-[150%];
      filter: blur(26px);
    }

    &-3 {
      @apply top-[200px] right-[-300px] w-[1000px] h-[1000px] opacity-[60%] bg-gradient-4 brightness-[150%];
      filter: blur(16px);
    }
  }
}
</style>
