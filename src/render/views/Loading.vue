<template>
  <div id="container">
    <div class="loading"></div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
</script>
<style scoped lang="scss">
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: black;
  .loading {
    position: relative;
    width: 8em;
    height: 8em;
    background: black;
    border-radius: 50%;
    box-shadow: inset 0.5em -0.5em rgb(220, 20, 20);
    animation: spin 2s linear infinite;
  }
  .loading::before,
  .loading::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    box-shadow: inherit;
  }
  .loading::before {
    filter: blur(5px);
  }

  .loading::after {
    filter: blur(10px);
  }
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
