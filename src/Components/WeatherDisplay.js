
import React from 'react';
import './WeatherDisplay.css'; 

const WeatherDisplay = ({ weather, units }) => {
  const { main, weather: weatherData, wind } = weather || {};
  const temperature = main?.temp;
  const humidity = main?.humidity;
  const windSpeed = wind?.speed;
  const weatherCondition = weatherData?.[0]?.main || '';

  const tempUnit = units === 'metric' ? '°C' : '°F';
  const windSpeedUnit = units === 'metric' ? 'm/s' : 'mph';

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <h2>Current Weather</h2>
        <p>{weatherCondition}</p>
      </div>
      <div className="weather-card-body">
        <div className="weather-card-temp">
          <span>{temperature ? `${Math.round(temperature)}${tempUnit}` : 'N/A'}</span>
        </div>
        <div className="weather-card-details">
          <div className="weather-detail">
            <span className="weather-icon">🌡️</span>
            <span>{temperature ? `${Math.round(temperature)}${tempUnit}` : 'N/A'}</span>
          </div>
          <div className="weather-detail">
            <span className="weather-icon">💧</span>
            <span>{humidity ? `${humidity}%` : 'N/A'}</span>
          </div>
          <div className="weather-detail">
            <span className="weather-icon">🌬️</span>
            <span>{windSpeed ? `${windSpeed}${windSpeedUnit}` : 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
