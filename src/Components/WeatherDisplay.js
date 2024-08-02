import React from 'react';

const WeatherDisplay = ({ weather }) => (
  <div>
    <h2>{weather.location.name}</h2>
    <p>Temperature: {weather.current.temp_c}°C</p>
    <p>Humidity: {weather.current.humidity}%</p>
    <p>Wind Speed: {weather.current.wind_kph} kph</p>
  </div>
);

export default WeatherDisplay;
