import axios from 'axios';

const API_KEY = 'your_api_key'; // Replace with your weather API key

export const getCurrentWeather = (location) => {
  return axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
};
