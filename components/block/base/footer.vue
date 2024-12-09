<script setup>
import FormSubscribe from '/components/parts/base/footer/form-subscribe.vue'
import Icon from '/components/ui/icon/icon.vue'
import Image from '/components/ui/image/image.vue'
import Link from '/components/ui/link/link.vue'
import Menu from '/components/parts/base/footer/menu.vue'

const { userSubscribe } = useUser()
const { agreements, navigation } = useFooter()
const { social } = useHeader()

const schema = {
  email: {
    email: true,
    required: true,
  },
}
const version = '1.0.0'

const el = ref(null)
const form = ref({
  email: '',
})

const { validate, validator, hasErrors } = setBasicUiValidation(form, schema)

const submit = () => {
  validate()
  if (hasErrors.value) return

  userSubscribe(form.value.email)
}

defineExpose({ el })
</script>

<template>
  <footer ref="el">
    <div class="container">
      <FormSubscribe
        v-model="form.email"
        class="w-full xl:w-[750px] mb-14"
        :hasError="hasErrors"
        @submit="submit" />
      <Menu
        class="mb-10 sm:mb-12"
        :data="navigation" />
      <div class="flex justify-center sm:justify-start gap-8 mb-14 sm:mb-20">
        <Link
          v-for="(item, index) of social"
          :key="`footer-${index}`"
          :href="item.href">
          <Icon
            class="w-8 h-8"
            :id="`footer-${index}`"
            :name="item.icon"
            size="custom" />
        </Link>
      </div>

      <nav>
        <Link
          v-for="(item, index) of agreements"
          :key="index"
          type="blue"
          class="text-xs"
          :href="item.href">
          {{ item.title }}
        </Link>
      </nav>

      <div class="text-sm md:w-9/12 mt-4">{{ $t('footer.disclaimer') }}</div>
      <div class="text-sm md:w-9/12 mt-4">
        &#169; {{ new Date().getFullYear() }} Toscale {{ version }}
        <i>beta</i>
      </div>
    </div>
    <div class="footer-plate">
      <Image
        src="/images/plate.svg"
        alt="Toscale-pate" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  @apply relative text-white bg-dark-800 pt-16 pb-10;
  &:after {
    content: '';
    @apply absolute bottom-0 right-0 z-[1] w-9/12 h-[515px]
      bg-green-gradient opacity-15 pointer-events-none blur-3xl;
  }
  nav {
    @apply flex justify-center sm:justify-start gap-2.5 sm:gap-6 mb-4;
    a {
      &::after {
        content: '|';
        @apply ms-2.5 sm:ms-6;
      }
      &:last-child::after {
        @apply hidden;
      }
    }
  }
}
.footer-plate {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 85px;
  pointer-events: none;
  overflow: hidden;
  img {
    max-width: 320px;
    width: 100%;
    position: absolute;
    bottom: -95px;
    right: 0;
  }
}
@media screen and (min-width: 500px) {
  .footer-plate {
    img {
      bottom: -85px;
    }
  }
}
@media screen and (min-width: 576px) {
  .footer-plate {
    height: auto;
    img {
      max-width: none;
      position: relative;
    }
  }
}
@media screen and (min-width: 992px) {
  .footer-plate {
    max-width: 57%;
    max-height: 800px;
    img {
      width: 100%;
      position: static;
    }
  }
}
</style>
