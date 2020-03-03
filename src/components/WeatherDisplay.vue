<template functional>
  <div class="weather-display">
    <h1 class="weather-display__temp">
      <span>{{ props.temp }}</span>
      <span class="degree">°</span>
    </h1>
    <p class="weather-display__desc">{{ props.descr }}</p>
  </div>
</template>

<script>
export default {
  name: 'WeatherDisplay',
  props: {
    temp: {
      type: Number,
      required: true,
      default: 0,
    },
    descr: {
      type: String,
      required: true,
    },
  },
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
