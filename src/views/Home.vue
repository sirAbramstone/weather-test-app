<template>
  <main class="home">
    <div class="container">
      <div class="wrapper-controls">
        <city-widget></city-widget>
        <temperature-control class="mt-8"></temperature-control>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import CityWidget from '@/components/CityWidget.vue';
import TemperatureControl from '@/components/TemperatureControl.vue';

export default defineComponent({
  name: 'Home',
  components: {
    CityWidget,
    TemperatureControl,
  },
});
</script>

<style lang="scss">
  .home {
    padding: 76px 0 120px;
    height: 100%;
  }

  .wrapper-controls {
    margin-left: 28px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
</style>
