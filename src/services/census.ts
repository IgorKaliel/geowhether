import axios from 'axios';

export const apiCensus = axios.create({
  baseURL: 'https://geocoding.geo.census.gov'
})