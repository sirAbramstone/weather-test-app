<template>
  <div class="city-widget">
    <h2 class="city-widget__city">Омск</h2>
    <div class="city-widget__controls">
      <base-button>Сменить город</base-button>
      <base-button>
        <div class="icon">
          <svg width="19" height="23" viewBox="0 0 19 23" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M18.489 2.83819L1.23895 13.6268L9.72799 15.2769L14.2146 22.7637L18.489 2.83819Z"
              fill="white"
              fill-opacity="0.4"/>
          </svg>
        </div>
        Мое местоположение
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'CityWidget',
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss">
  .city-widget {
    display: inline-block;

    &__city {
      margin-bottom: 8px;
      font-size: 2.777775em;
      text-align: left;
      line-height: 1.2000005;
    }

    &__controls {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & .button + .button {
        margin-left: 28px;
      }
    }
  }
</style>
