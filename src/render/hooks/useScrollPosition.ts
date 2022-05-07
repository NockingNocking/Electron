import { ref } from 'vue'

export default function () {
  const scrollX = ref(0)
  const scrollY = ref(0)
  window.addEventListener('scroll', () => {
    scrollX.value = Number(window.screenX.toFixed(0))
    scrollY.value = Number(window.screenY.toFixed(0))
  })

  return {
    scrollX,
    scrollY
  }
}
