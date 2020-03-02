import HTTP from './http-common';

const APIKEY = '750a02cd6a98a8155bbc92eee6d8c752';

export default {
  async getWeather(city, units) {
    try {
      const response = await HTTP.get(`data/2.5/weather?q=${city}&units=${units}&APPID=${APIKEY}`);
      return response;
    } catch (e) {
      console.error(e);
      return e;
    }
  },
};
