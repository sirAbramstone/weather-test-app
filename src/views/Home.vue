<template>
  <main class="home">
    <div class="container">
      <section class="wrapper-controls">
        <city-widget></city-widget>
        <temperature-control class="mt-8"></temperature-control>
      </section>
      <section class="wrapper-display">
        <weather-display></weather-display>
      </section>
      <section class="wrapper-details">
        <weather-details></weather-details>
      </section>
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import CityWidget from '@/components/CityWidget.vue';
import TemperatureControl from '@/components/TemperatureControl.vue';
import WeatherDisplay from '@/components/WeatherDisplay.vue';
import WeatherDetails from '@/components/WeatherDetails.vue';

export default defineComponent({
  name: 'Home',
  components: {
    CityWidget,
    TemperatureControl,
    WeatherDisplay,
    WeatherDetails,
  },
});
</script>

<style lang="scss">
  .home {
    height: 100%;
  }

  .wrapper-controls {
    padding: 76px 28px 0 28px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .wrapper-display {
    padding: 188px 0 216px;
  }

  .wrapper-details {
    padding: 0 28px 120px 28px;
  }
</style>
