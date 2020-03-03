import HTTP from './http-common';

const APIKEY = '750a02cd6a98a8155bbc92eee6d8c752';

export default {
  async getWeatherByCity(city, units) {
    try {
      const { data } = await HTTP.get(`data/2.5/weather?lang=ru&q=${city}&units=${units}&APPID=${APIKEY}`);
      return data;
    } catch (e) {
      return e;
    }
  },
  async getWeatherByCoords([lat, lon], units) {
    try {
      const { data } = await HTTP.get(`data/2.5/weather?lang=ru&lat=${lat}&lon=${lon}&units=${units}&APPID=${APIKEY}`);
      return data;
    } catch (e) {
      return e;
    }
  },
};
