<template>
  <div class="city-widget">
    <div v-if="showCity" class="city-widget-display">
      <h2 class="city-widget__city">{{ city }}</h2>
      <div class="city-widget__controls">
        <base-button @click="toggleCityVisible">Сменить город</base-button>
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
    <div v-else class="city-widget__search">
      <input
        @keyup.enter="search"
        v-model="searchingCity"
        ref="search"
        type="text"
        class="city-widget__search-field"
      >
      <base-button @click="search" cssClass="primary" class="city-widget__search-button">
        Ок
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
  props: {
    city: {
      type: String,
      required: true,
      validator: (val) => val.trim() !== '',
    },
  },
  data: () => ({
    showCity: true,
    searchingCity: '',
  }),
  watch: {
    showCity(val) {
      if (!val) {
        this.$nextTick(function () {
          this.$refs.search.focus();
        });
      }
    },
  },
  methods: {
    toggleCityVisible() {
      this.showCity = !this.showCity;
    },
    search() {
      if (this.searchingCity.trim()) {
        this.$emit('search-city', this.searchingCity);
        this.searchingCity = '';
        this.toggleCityVisible();
      }
    },
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

      & .base-button + .base-button {
        margin-left: 28px;
      }
    }

    &__search {
      position: relative;
      min-width: 580px;
    }

    &__search-field {
      padding: 32px;
      width: 100%;
      height: 96px;
      border: none;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
      font-size: 1.66666666667em;
      line-height: 1.2;
    }

    &__search-button {
      position: absolute;
      top: 50%;
      right: 32px;
      transform: translateY(-50%);
    }
  }
</style>
