<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  components: {
    Home,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Lato', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--b-color);
  height: 100%;
}
</style>
