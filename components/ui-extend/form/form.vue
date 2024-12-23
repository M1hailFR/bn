<script setup>
import Button from '/components/ui/button/button.vue'

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['submit'])
</script>

<template>
  <form
    class="flex flex-col items-center gap-3 rounded-md"
    @submit.prevent>
    <slot />
    <Button
      class="w-full"
      
      @click="emit('submit')">
      <slot name="message"> Оставить заявку </slot>
    </Button>
    <p>Нажимая на кнопку вы даете согласие на обработку своих персональных данных</p>
  </form>
</template>
