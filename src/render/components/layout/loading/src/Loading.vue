<!-- 全局loading -->
<template>
  <div class="spin-wrap">
    <a-spin :spinning="isTip" :tip="tip" />
  </div>
</template>
<script>
export default {
  name: 'Loading'
}
</script>

<script lang="ts" setup>
interface Props {
  isTip: boolean
  tip: string
}

const { isTip, tip } = withDefaults(defineProps<Props>(), {
  isTip: false,
  tip: '加载中...'
})
</script>
<style scoped lang="scss">
.spin-wrap {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
