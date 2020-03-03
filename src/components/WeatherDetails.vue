<template functional>
  <div class="weather-details">
  <div class="weather-details__param">
    <span class="weather-details__param-name">Ветер</span>
    <span class="weather-details__param-value">{{ props.windSpeed }} м/с, западный</span>
  </div
  ><div class="weather-details__param">
    <span class="weather-details__param-name">Давление</span>
    <span class="weather-details__param-value">{{ props.pressure }} мм рт. ст.</span>
  </div>
    <div class="weather-details__param">
    <span class="weather-details__param-name">Влажность</span>
    <span class="weather-details__param-value">{{ props.humidity }}%</span>
  </div>
    <div class="weather-details__param">
    <span class="weather-details__param-name">Вероятность дождя</span>
    <span class="weather-details__param-value">{{ props.chanceOfRain }}%</span>
  </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherDetails',
  props: {
    windSpeed: {
      type: Number,
      default: 0,
    },
    pressure: {
      type: Number,
      default: 0,
    },
    humidity: {
      type: Number,
      default: 0,
    },
    chanceOfRain: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss">
  .weather-details {
    display: flex;
    justify-content: space-between;

    &__param {
      min-height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      line-height: 1.2;
    }

    &__param-name {
      color: var(--b-color);
      opacity: 0.6;
    }

    &__param-value {
      font-size: 1.38888888889em;
    }
  }
</style>
