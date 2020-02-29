<template>
  <div class="weather-details">
  <div class="weather-details__param">
    <span class="weather-details__param-name">Ветер</span>
    <span class="weather-details__param-value">5 м/с, западный</span>
  </div
  ><div class="weather-details__param">
    <span class="weather-details__param-name">Давление</span>
    <span class="weather-details__param-value">752 мм рт. ст.</span>
  </div>
    <div class="weather-details__param">
    <span class="weather-details__param-name">Влажность</span>
    <span class="weather-details__param-value">60%</span>
  </div>
    <div class="weather-details__param">
    <span class="weather-details__param-name">Вероятность дождя</span>
    <span class="weather-details__param-value">10%</span>
  </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'WeatherDetails',
});
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
