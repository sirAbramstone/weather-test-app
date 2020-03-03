<template>
  <main class="home">
    <div class="container">
      <section class="wrapper-controls">
        <city-widget :city="city" @get-location='getLocation' @search-city="searchCity"/>
        <temperature-control @update-units="updateUnits" class="mt-8"/>
      </section>
      <section class="wrapper-display">
        <p v-if="hasError" class="error">
          Произошла ошибка при получении данных. Повторите запрос.
        </p>
        <weather-display v-else :temp="temp" :descr="descr">
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
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
} from 'vuex';

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
    units: 'metric',
    coords: [],
    isLoading: false,
  }),
  computed: {
    ...mapState({ hasError: (state) => state.hasError }),

    ...mapGetters([
      'city',
      'temp',
      'pressure',
      'humidity',
      'descr',
      'windSpeed',
      'chanceOfRain',
    ]),
  },
  watch: {
    units() {
      this.loadData();
    },
    async coords() {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;
      await this.fetchWeatherDataByCoords({
        coords: this.coords,
        units: this.units,
      });
      this.isLoading = false;
    },
  },
  beforeMount() {
    this.loadData();
  },
  methods: {
    ...mapMutations(['setCity']),

    ...mapActions(['fetchWeatherDataByCity', 'fetchWeatherDataByCoords']),

    searchCity(city) {
      this.setCity(city);
      this.loadData();
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
    async loadData() {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;
      await this.fetchWeatherDataByCity({
        city: this.city,
        units: this.units,
      });
      this.isLoading = false;
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

  .error {
    padding: 56px 0;
    font-size: 2.5em;
    text-align: center;
  }
</style>
