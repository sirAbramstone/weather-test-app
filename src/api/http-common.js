import axios from 'axios/index';

export default axios.create({
  baseURL: 'http://api.openweathermap.org/',
});
