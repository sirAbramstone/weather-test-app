<template>
  <main class="home">
    <div class="container">
      <section class="wrapper-controls">
        <city-widget :city="city" @search-city="searchCity"></city-widget>
        <temperature-control @update-units="updateUnits" class="mt-8"/>
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
import { mapState, mapActions } from 'vuex';

import CityWidget from '@/components/CityWidget.vue';
import TemperatureControl from '@/components/TemperatureControl.vue';
import WeatherDisplay from '@/components/WeatherDisplay.vue';
import WeatherDetails from '@/components/WeatherDetails.vue';

export default {
  name: 'Home',
  components: {
    CityWidget,
    TemperatureControl,
    WeatherDisplay,
    WeatherDetails,
  },
  data: () => ({
    city: 'Омск',
    units: 'metric',
  }),
  computed: {
    ...mapState({ weather: (state) => state.weatherData }),
  },
  watch: {
    city() {
      this.loadData();
    },
    units() {
      this.loadData();
    },
  },
  beforeMount() {
    this.loadData();
  },
  methods: {
    ...mapActions(['fetchWeatherData']),

    searchCity(city) {
      this.city = city;
    },
    updateUnits(units) {
      this.units = units === 'C' ? 'metric' : 'imperial';
    },
    loadData() {
      this.fetchWeatherData({
        city: this.city,
        units: this.units,
      });
    },
  },
};
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
