import axios from 'axios/index';

export default axios.create({
  baseURL: 'https://api.openweathermap.org/',
});
