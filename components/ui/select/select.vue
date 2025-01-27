<script setup>
import vOutside from '/directives/outside.js'
import { setBasicUiDataBindings } from '~/composables/ui/setBasicUiDataBindings'
import { setBasicUiProps } from '~/composables/ui/setBasicUiProps'

import Icon from '/components/ui/icon/icon.vue'

const props = defineProps({
  modelValue: {
    type: [String, Number, Array],
    default: '',
  },
  options: {
    type: Array,
    default() {
      return []
    },
  },
  type: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'normal',
  },
  placeholder: {
    type: String,
    default: 'Choose option',
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  hideSelected: {
    type: Boolean,
    default: false,
  },
  labelKey: {
    type: String,
    default: 'label',
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const { classes } = setBasicUiProps(props, 'select-component')
const emit = defineEmits(['update:modelValue', 'change'])
const { change } = setBasicUiDataBindings(emit)

const isValueAnArray = Array.isArray(props.modelValue)
if (isValueAnArray || [null, 'undefined'].includes(props.modelValue)) {
  change('')
}

const isOpen = ref(false)
const searchQuery = ref('')
const optionsStyles = ref({})
const input = ref(null)

const isOptionFlat = computed(() => typeof props.options[0] !== 'object')
const currentValue = computed(() => {
  const { modelValue, options, valueKey } = props
  if (isOptionFlat.value) {
    return options.find((a) => a === modelValue)
  }
  return options.find((a) => a[valueKey] === modelValue)
})
const isSomethingSelected = computed(() => {
  return (
    ![null, 'undefined'].includes(props.modelValue) &&
    !Array.isArray(props.modelValue) &&
    props.options.some((a) =>
      isOptionFlat.value
        ? a === props.modelValue
        : a[props.valueKey] === props.modelValue,
    )
  )
})

const filterOptions = computed(() => {
  let output = props.options

  const searchQueryValue = searchQuery.value
  if (searchQueryValue) {
    output = output.filter((e) =>
      e[props.labelKey].toUpperCase().includes(searchQueryValue.toUpperCase()),
    )
  }

  return output
})

const close = () => {
  isOpen.value = false
  searchQuery.value = ''
}
const toggle = (event) => {
  if (event.target.nodeName === 'INPUT') return

  isOpen.value = !isOpen.value
}
const choose = (index) => {
  let value = isOptionFlat.value
    ? filterOptions.value[index]
    : filterOptions.value[index][props.valueKey]

  change(value)
  close()
}
</script>

<template>
  <div
    v-outside="close"
    class="relative"
    :class="[{ 'z-10 opened': isOpen }, classes]">
    <div
      class="group flex items-center gap-2 cursor-pointer h-full w-full leading-4"
      tabindex="-1"
      @click="toggle">
      <template v-if="searchable && isOpen">
        <input
          v-model="searchQuery"
          type="text"
          ref="SearchElement"
          class="w-full bg-transparent outline-0 border-0" />
      </template>
      <template v-else-if="!isSomethingSelected">
        <div class="placeholder text-base">
          {{ placeholder }}
        </div>
      </template>
      <template v-else>
        <template v-if="!$slots.default">
          <span
            class="whitespace-nowrap text-ellipsis overflow-auto text-base font-semibold">
            {{ isOptionFlat ? currentValue : currentValue[labelKey] }}
          </span>
        </template>
        <slot
          v-else
          name="default"
          v-bind="currentValue" />
      </template>
      <Icon
        class="relative ml-auto transition group-hover:top-0.5"
        :class="{ 'rotate-180': isOpen }"
        name="chevron-down"
        size="normal" />
    </div>
    <div
      v-if="isOpen"
      class="select-component-options">
      <template v-if="filterOptions?.length">
        <div
          v-for="(item, index) in filterOptions"
          :key="isOptionFlat ? item : item[valueKey]"
          class="option"
          :class="{
            choose: item === currentValue,
            hidden: hideSelected && item[valueKey] === currentValue[valueKey],
          }"
          @click="choose(index)">
          <slot
            v-if="$slots.option"
            name="option"
            v-bind="isOptionFlat ? { label: item } : item" />
          <template v-else>
            {{ isOptionFlat ? item : item[labelKey] }}
          </template>
        </div>
      </template>
      <div
        v-else
        class="option">
        Не найдено.
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.select-component {
  .placeholder {
    @apply text-white/50;
  }
  &.type {
    &-primary {
      @apply text-white bg-primary  border-secondary rounded-lg;
      &.opened {
        @apply rounded-none rounded-t-lg text-[14px];
      }
      .select-component-options {
        @apply bg-primary rounded-b-lg;
        .option:hover,
        .option.choose {
          @apply bg-white/20;
        }
      }
    }
  }
  &.size {
    &-normal {
      @apply px-4 py-1.5;
      .option {
        @apply px-4 py-2;
      }
    }
  }
}
.select-component-options {
  @apply absolute top-full left-0 min-w-full max-h-[300px] overflow-auto;
  .option {
    @apply flex items-center gap-2 cursor-pointer;
    &.hidden {
      display: none;
    }
  }
}
</style>
