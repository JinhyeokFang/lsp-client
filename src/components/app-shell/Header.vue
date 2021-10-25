<template>
  <header>
    {{ isLogined }}
    <router-link to="/">Home</router-link> |
    <router-link to="/dashboard">About</router-link>
  </header>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    header {
        @include shadow;

        width: 100%;
        height: 5rem;

        background-color: white;
    }
</style>
