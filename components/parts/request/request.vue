<script setup>
import Form from '/components/ui-extend/form/form.vue'
import Input from '/components/ui/input/input.vue'
import Select from '/components/ui/select/select.vue'
import Loader from '/components/ui/loader/modal.vue'
import { regions } from '/config/project/sources'
import { usePopup } from '/store/popup.js';

const popupStore = usePopup();

const props = defineProps({
  form: {
    type: Object,
    default: {},
  },
  title: {
    type: String,
    default: '',
  },
  requestTitle: {
    type: String,
    default: 'Заявка с сайта для покупателей',
  },
  additionalData: {
    type: Array,
    default: [],
  },
  btnTitle: {
    type: String,
    default: 'Оставить заявку',
  },
  btnRequestTitle: {
    type: String,
    default: 'Ваша заявка в обработке!',
  },
})

const schema = reactive({
  name: {
    type: 'text',
    placeholder: 'Ваше имя',
    require: true,
    inputType: 'secondary',
    error: '',
  },
  phone: {
    type: 'tel',
    placeholder: 'Телефон',
    require: true,
    inputType: 'secondary',
    error: '',
  },
  email: {
    type: 'email',
    placeholder: 'Ваша почта',
    inputType: 'secondary',
    error: '',
  },
  reg: {
    type: 'options',
    placeholder: 'Желаемый регион',
    searchable: true,
    options: regions.map((e) => ({
      value: e.value,
      label: e.city,
    })),
  },
  flow: {
    type: 'options',
    placeholder: 'Поток',
    options: [
      {
        value: 'Общий юридический',
        label: 'Общий юридический',
      },
      {
        value: 'Банкротство',
        label: 'Банкротство',
      },
    ],
  },
})

const emit = defineEmits(['change'])
const { change } = setBasicUiDataBindings(emit)

const loading = ref(false)
const formRequested = ref(false)

const { validate, hasErrors } = setBasicUiValidation(props.form, schema)

const clearForm = () => {
  Object.keys(props.form).forEach(key => {
    props.form[key] = ''
  })
  console.log(props.form)
}

const submit = async () => {
  await validate()
  if (hasErrors.value) return

  loading.value = true
  try {
    const response = await fetch('https://b24-dw0k7p.bitrix24.ru/rest/1/5mh3ta16zfcfhp1a/crm.lead.add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          TITLE: props.requestTitle ? props.requestTitle : 'Заявка с сайта для покупателей',
          NAME: props.form.name,
          PHONE: [{
            VALUE: props.form.phone,
            VALUE_TYPE: 'WORK'
          }],
          EMAIL: [{
            VALUE: props.form.email || '',
            VALUE_TYPE: 'WORK'
          }],
          UF_CRM_REGION: props.form.reg || '',
          UF_CRM_FLOW: props.form.flow || ''
        }
      })
    })

    const result = await response.json()

    if (result.result > 0) {
      formRequested.value = true

      clearForm()
      popupStore.close();

    } else {
      throw new Error('Ошибка при отправке данных')
    }
  } catch (error) {

  } finally {
    loading.value = false
  }

  change('')
}
watch(() => {})
</script>

<template>
  <Form
    class="rounded-xl backdrop-blur-sm p-6 my-5 bg-primary/80"
    :loading="loading"
    @submit="submit">
    <h2
      v-if="title"
      class="text-left leading-[1em] mb-0">
      {{ title }}
    </h2>
    <slot />
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-3 w-full">
      <template
        v-for="(value, key) in schema"
        :key="key">
        <label
          v-if="key in form"
          :class="
            value.type === 'options' ? 'xl:col-span-2 col-span-1' : 'col-span-1'
          ">
          <Select
            v-if="value.type === 'options'"
            v-model="form[key]"
            :options="value.options"
            type="primary"
            :searchable="value.searchable"
            :placeholder="value.placeholder" />

          <Input
            v-else
            v-model="form[key]"
            :type="value.inputType"
            :native-type="value.type"
            :name="key"
            :placeholder="value.placeholder"
            :error="value.error ? true : false" />
        </label>
      </template>
    </div>
    <template #message>
      <Loader :loading="loading" class="w-10 h-10 p-0">
        {{ btnTitle }}
      </Loader>
    </template>
  </Form>
</template>

<style scoped></style>
