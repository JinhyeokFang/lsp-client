<template>
  <div id="app">
    <Header id="app-header"/>
    <Content id="app-content"/>
    <Footer id="app-footer"/>
  </div>
</template>

<script lang="ts" setup>
import Header from './components/app-shell/Header.vue'
import Content from './components/app-shell/Content.vue'
import Footer from './components/app-shell/Footer.vue'
</script>

<style lang="scss">
  body {
    background-color: $app-background-color;
    margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
  }
</style>
