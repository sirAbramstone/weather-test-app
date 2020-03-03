<template>
  <main class="home">
    <div class="container">
      <section class="wrapper-controls">
        <city-widget :city="city" @get-location='getLocation' @search-city="searchCity"/>
        <temperature-control @update-units="updateUnits" class="mt-8"/>
      </section>
      <section class="wrapper-display">
        <weather-display :temp="temp" :descr="descr">
          <template v-slot:icon>
            <SunnyIcon></SunnyIcon>
          </template>
        </weather-display>
      </section>
      <section class="wrapper-details">
        <weather-details
          :windSpeed="windSpeed"
          :pressure="pressure"
          :humidity="humidity"
          :chanceOfRain="chanceOfRain"
        />
      </section>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import CityWidget from '@/components/CityWidget.vue';
import TemperatureControl from '@/components/TemperatureControl.vue';
import WeatherDisplay from '@/components/WeatherDisplay.vue';
import WeatherDetails from '@/components/WeatherDetails.vue';

import SunnyIcon from '@/assets/images/sunny.svg';

export default {
  name: 'Home',
  components: {
    CityWidget,
    TemperatureControl,
    WeatherDisplay,
    WeatherDetails,
    SunnyIcon,
  },
  data: () => ({
    city: 'Омск',
    units: 'metric',
    coords: [],
  }),
  computed: {
    ...mapGetters([
      'temp',
      'pressure',
      'humidity',
      'descr',
      'windSpeed',
      'chanceOfRain',
    ]),
  },
  watch: {
    city() {
      this.loadData();
    },
    units() {
      this.loadData();
    },
    coords() {
      this.fetchWeatherDataByCoords({
        coords: this.coords,
        units: this.units,
      });
    },
  },
  beforeMount() {
    this.loadData();
  },
  methods: {
    ...mapActions(['fetchWeatherDataByCity', 'fetchWeatherDataByCoords']),

    searchCity(city) {
      this.city = city;
    },
    updateUnits(units) {
      this.units = units === 'C' ? 'metric' : 'imperial';
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.setPosition);
      }
    },
    setPosition(position) {
      const { latitude, longitude } = position.coords;
      this.coords = [latitude, longitude];
    },
    loadData() {
      this.fetchWeatherDataByCity({
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
