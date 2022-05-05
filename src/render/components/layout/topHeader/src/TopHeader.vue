<template>
  <div id="container">
    <div class="content">1233211234567</div>
  </div>
</template>
<script>
export default {
  name: 'TopHeader'
}
</script>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
</script>
<style scoped lang="scss">
#container {
  width: 100%;
  height: $gHeight;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: $topMenuWidth;
    height: $gHeight;
    background: red;
  }
}
</style>
