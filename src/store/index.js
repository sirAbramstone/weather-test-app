import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {},
  },
  mutations: {
    setWeather(state, weather) {
      state.weather = weather;
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
