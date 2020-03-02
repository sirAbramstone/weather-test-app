import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weatherData: {},
  },
  getters: {
    temp: (state) => state.weatherData.main?.temp,
    pressure: (state) => state.weatherData.main?.pressure,
    humidity: (state) => state.weatherData.main?.humidity,
    descr: (state) => state.weatherData.weather[0]?.description,
    windSpeed: (state) => state.weatherData.wind?.speed,
    chanceOfRain: (state) => state.weatherData.clouds?.all,
  },
  mutations: {
    setWeather(state, weather) {
      state.weatherData = weather;
    },
  },
  actions: {
    async fetchWeatherData({ commit }, payload) {
      const { city, units } = payload;

      await api.getWeather(city, units)
        .then((data) => {
          commit('setWeather', data);
        })
        .catch((e) => {
          console.error(e.message);
        });
    },
  },
  modules: {},
});
