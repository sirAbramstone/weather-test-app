<template>
  <div class="weather-display">
    <h1 class="weather-display__temp">
      <span>19</span>
      <span class="degree">°</span>
    </h1>
    <p class="weather-display__desc">Преимущественно солнечно</p>
  </div>
</template>

<script>
export default {
  name: 'WeatherDisplay',
};
</script>

<style lang="scss">
  .weather-display {
    text-align: center;
    line-height: 1.2;

    &__temp {
      font-size: 10em;
    }

    & .degree {
      font-size: 0.5em;
      vertical-align: super;
    }

    &__desc {
      font-size: 1.38888889em;
    }
  }
</style>
