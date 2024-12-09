<script setup>
import { computed, onMounted, ref, watch } from '#imports'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  visible: {
    type: Boolean,
    default: true,
  }
})

const rangeSlider = ref(null)
const emit = defineEmits(['update:modelValue', 'change'])
const { change } = setBasicUiDataBindings(emit)

onMounted(() => {
  rangeSlider.value.addEventListener('input', update.bind(rangeSlider.value))
  update()
})

const update = (e) => {
  let value = rangeSlider.value.value

  if (e) {
    value = e.target?.value
  } else {
    rangeSlider.value.value = value
  }

  const min = rangeSlider.value.min || 0
  const max = rangeSlider.value.max || 100
  const percentRaw = ((value - min) / (max - min)) * 100
  const percent = +percentRaw.toFixed(2)

  rangeSlider.value.style.setProperty('background-size', `${percent}%`)
}

watch(
  () => props.modelValue,
  () => {
    requestAnimationFrame(() => {
      update()
    })
  }
)
</script>

<template>
  <label class="range-component">
    <input
      ref="rangeSlider"
      class="w-full bg-green-rose leading-none"
      type="range"
      :value="modelValue"
      :min="props.min"
      :max="props.max"
      :step="props.step"
      :disabled="disabled"
      @input="change" />
    <slot />
  </label>
</template>

<style scoped lang="scss">
.input-range-slider-thumb {
  @apply h-full w-6 cursor-ew-resize border-none bg-black-base;
  transition: background-color 0.15s linear;
}

.range-component {
  @apply relative flex w-full items-center;
  input {
    @apply h-10 cursor-pointer rounded bg-white-soft/20 bg-no-repeat;
    background-size: 0 100%;
    width: inherit;
    -webkit-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    &::-webkit-slider-thumb {
      @apply input-range-slider-thumb;
      -webkit-appearance: none;
      appearance: none;
    }
    &::-moz-range-thumb {
      @apply input-range-slider-thumb;
    }
    &:focus {
      outline: transparent;
    }
    &:focus::-webkit-slider-thumb,
    &::-webkit-slider-thumb:hover,
    &:focus::-moz-range-thumb,
    &::-moz-range-thumb:hover {
      @apply bg-green-base;
    }
  }
}

@supports selector(:focus-visible) {
  .range-component {
    input[type='range'] {
      &:focus::-webkit-slider-thumb {
        @apply bg-green-base;
      }

      &:focus-visible::-webkit-slider-thumb,
      &::-webkit-slider-thumb:hover {
        @apply bg-green-base;
      }

      &:focus::-moz-range-thumb {
        @apply bg-green-base;
      }

      &:focus-visible::-moz-range-thumb,
      &::-moz-range-thumb:hover {
        @apply bg-green-base;
      }
    }
  }
}
</style>
