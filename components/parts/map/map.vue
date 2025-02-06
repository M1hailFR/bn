<template>
  <div class="relative w-full h-[332px] rounded-xl overflow-hidden">
    <div
      id="map"
      class="w-full h-full rounded-xl shadow-lg"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const initMap = () => {
  // Координаты локации: Проспект Мира 105с1
  const coordinates = [55.795154, 37.635324]

  const map = new ymaps.Map('map', {
    center: coordinates,
    zoom: 16,
    controls: ['zoomControl', 'fullscreenControl'],
  })

  // Создаем метку
  const placemark = new ymaps.Placemark(
    coordinates,
    {
      balloonContent: 'Проспект Мира 105с1',
      hintContent: 'Наш офис',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
      iconImageSize: [32, 32],
      iconImageOffset: [-16, -32],
    },
  )

  // Добавляем метку на карту
  map.geoObjects.add(placemark)

  // Отключаем скролл карты при скролле страницы
  map.behaviors.disable('scrollZoom')
}

onMounted(() => {
  // Проверяем, загружено ли API
  if (window.ymaps) {
    ymaps.ready(initMap)
  }
})
</script>

<style scoped>
/* Добавляем стили для мобильной версии */
@media (max-width: 640px) {
  #map {
    height: 300px;
  }
}
</style>
