<template>
  <div>
    <MainLayout></MainLayout>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeMount } from 'vue'
// import mainlayout from '../components/layout/mainLayout'
// import { storeToRefs } from 'pinia'
// import { useUserStore } from '../store/index'

// const userStore = useUserStore()

// const { age, sex, name } = storeToRefs(userStore) // 响应式
// console.log(age, sex, name.value)

onBeforeMount(() => {
  console.log(25896)
})

onMounted(() => {
  // 向主进程发送创建完毕消息
  window.ipcRenderer.send('main-window-created', true)
})
</script>
