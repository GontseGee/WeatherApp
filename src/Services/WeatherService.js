import axios from 'axios';

const API_KEY = '6052d1e967c5d8b532962dfb7b76bf8b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = (location, units) => {
  return axios.get(`${BASE_URL}/weather`, {
    params: {
      q: location,
      units: units,
      appid: API_KEY,
    }
  });
};

export const getDailyWeather = (location, units) => {
  return axios.get(`${BASE_URL}/forecast/daily`, {
    params: {
      q: location,
      units: units,
      cnt: 7,
      appid: API_KEY,
    }
  });
};

export const getHourlyWeather = (location, units) => {
  return axios.get(`${BASE_URL}/forecast/hourly`, {
    params: {
      q: location,
      units: units,
      cnt: 24,
      appid: API_KEY,
    }
  });
};
