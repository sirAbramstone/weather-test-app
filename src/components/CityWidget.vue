<template>
  <div class="city-widget">
    <h2 class="city-widget__city">Омск</h2>
    <div class="city-widget__controls">
      <base-button>Сменить город</base-button>
      <base-button>Мое местоположение</base-button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import BaseButton from '@/components/BaseButton.vue';

export default defineComponent({
  name: 'CityWidget',
  components: {
    BaseButton,
  },
});
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
