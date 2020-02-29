<template>
  <main class="home">
    <div class="container">
      <city-widget></city-widget>
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import CityWidget from '@/components/CityWidget.vue';

export default defineComponent({
  name: 'Home',
  components: {
    CityWidget,
  },
});
</script>

<style lang="scss">
  .home {
    padding: 76px 0 120px;
    height: 100%;
  }
</style>
