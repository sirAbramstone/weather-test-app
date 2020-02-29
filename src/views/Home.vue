<template>
  <main class="home">
    <div class="container">
      <section class="wrapper-controls">
        <city-widget></city-widget>
        <temperature-control class="mt-8"></temperature-control>
      </section>
      <section class="wrapper-weather">
        <weather-display></weather-display>
      </section>
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import CityWidget from '@/components/CityWidget.vue';
import TemperatureControl from '@/components/TemperatureControl.vue';
import WeatherDisplay from '@/components/WeatherDisplay.vue';

export default defineComponent({
  name: 'Home',
  components: {
    CityWidget,
    TemperatureControl,
    WeatherDisplay,
  },
});
</script>

<style lang="scss">
  .home {
    padding: 76px 0 120px;
    height: 100%;
  }

  .wrapper-controls {
    padding-left: 28px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .wrapper-weather {
    padding: 188px 0 216px;
  }
</style>
