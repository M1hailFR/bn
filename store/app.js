import { defineStore } from 'pinia'

export const useApp = defineStore('app', {
  state: () => ({
    windowS: 0,
    windowW: 0,
  }),
  actions: {
    initializeWindowState() {
      // Установить начальные значения
      this.windowS = window.scrollY
      this.windowW = window.innerWidth

      // Обработчики событий
      const updateScroll = () => {
        this.windowS = window.scrollY
      }

      const updateWidth = () => {
        this.windowW = window.innerWidth
      }

      window.addEventListener('scroll', updateScroll)
      window.addEventListener('resize', updateWidth)

      this._updateScroll = updateScroll
      this._updateWidth = updateWidth
    },
    destroyWindowStateListeners() {
      if (this._updateScroll) {
        window.removeEventListener('scroll', this._updateScroll)
        this._updateScroll = null
      }
      if (this._updateWidth) {
        window.removeEventListener('resize', this._updateWidth)
        this._updateWidth = null
      }
    },
  },
})
