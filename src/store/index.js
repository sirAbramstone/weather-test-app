import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weatherData: {
      name: 'Москва',
    },
    hasError: false,
  },
  getters: {
    city: (state) => state.weatherData.name,
    temp: (state) => state.weatherData.main?.temp && Math.round(state.weatherData.main.temp),
    pressure: (state) => state.weatherData.main?.pressure,
    humidity: (state) => state.weatherData.main?.humidity,
    descr: (state) => state.weatherData.weather?.[0].description,
    windSpeed: (state) => state.weatherData.wind?.speed && Math.round(state.weatherData.wind.speed),
    chanceOfRain: (state) => state.weatherData.clouds?.all,
  },
  mutations: {
    setWeather(state, weather) {
      state.hasError = false;
      state.weatherData = weather;
    },
    setCity(state, city) {
      Vue.set(state.weatherData, 'name', city);
    },
    setError(state) {
      state.hasError = true;
      state.weatherData.name = 'Город не найден';
    },
  },
  actions: {
    async fetchWeatherDataByCity({ commit }, payload) {
      const { city, units } = payload;

      await api.getWeatherByCity(city, units)
        .then((data) => {
          if (data.cod === 200) {
            commit('setWeather', data);
          } else {
            commit('setError');
          }
        })
        .catch(() => {
          commit('setError');
        });
    },
    async fetchWeatherDataByCoords({ commit }, payload) {
      const { coords, units } = payload;

      await api.getWeatherByCoords(coords, units)
        .then((data) => {
          if (data.cod === 200) {
            commit('setWeather', data);
          } else {
            commit('setError');
          }
        })
        .catch(() => {
          commit('setError');
        });
    },
  },
  modules: {},
});
