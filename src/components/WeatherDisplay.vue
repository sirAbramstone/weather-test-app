<template functional>
  <div class="weather-display">
    <div class="weather-display__main">
      <slot name="icon"></slot>
      <h1 class="weather-display__temp">
        <span>{{ props.temp }}</span>
        <span class="degree">o</span>
      </h1>
    </div>
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
      default: '',
    },
  },
};
</script>

<style lang="scss">
  .weather-display {
    text-align: center;
    line-height: 1.2;

    &__main {
      display: flex;
      justify-content: center;
    }

    &__temp {
      font-size: 10em;
    }

    & .degree {
      position: relative;
      top: -32px;
      right: -12px;
      font-size: 0.55em;
      vertical-align: super;
    }

    &__desc {
      font-size: 1.38888889em;
    }
  }
</style>
