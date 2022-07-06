import axios from 'axios';

export const apiWheather = axios.create({
  baseURL: 'https://api.weather.gov'
})