// src/Components/Home.js
import React, { useEffect, useState, useCallback } from 'react';
import { getUserLocation } from '../Services/LocationService';
import { getCurrentWeather, getDailyWeather, getHourlyWeather } from '../Services/WeatherService';
import WeatherDisplay from './WeatherDisplay';
import LocationSearch from './LocationSearch';
import WeatherAlerts from './WeatherAlerts';

const Home = ({ units, forecastType, onUnitChange, onForecastTypeChange }) => {
  const [weather, setWeather] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [savedLocations, setSavedLocations] = useState([]);
  const [userLocation, setUserLocation] = useState('');

  useEffect(() => {
    const locations = JSON.parse(localStorage.getItem('savedLocations')) || [];
    setSavedLocations(locations);

    getUserLocation()
      .then(position => {
        const { latitude, longitude } = position.coords;
        const loc = `${latitude},${longitude}`;
        setUserLocation(loc);
        return getCurrentWeather(loc, units);
      })
      .then(response => {
        setWeather(response.data);
        setAlerts(response.data.alerts || []);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, [units]);

  const handleSearch = (loc) => {
    getCurrentWeather(loc, units)
      .then(response => {
        setWeather(response.data);
        setAlerts(response.data.alerts || []);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  };

  const handleSaveLocation = (loc) => {
    if (!savedLocations.includes(loc)) {
      const newLocations = [...savedLocations, loc];
      setSavedLocations(newLocations);
      localStorage.setItem('savedLocations', JSON.stringify(newLocations));
    }
  };

  const fetchWeather = useCallback(() => {
    if (userLocation) {
      if (forecastType === 'daily') {
        getDailyWeather(userLocation, units)
          .then(response => {
            setWeather(response.data);
          })
          .catch(error => {
            console.error('Error fetching daily weather data:', error);
          });
      } else {
        getHourlyWeather(userLocation, units)
          .then(response => {
            setWeather(response.data);
          })
          .catch(error => {
            console.error('Error fetching hourly weather data:', error);
          });
      }
    }
  }, [forecastType, units, userLocation]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return (
    <div className="Home">
      <LocationSearch onSearch={handleSearch} onSave={handleSaveLocation} />
      {weather ? (
        <>
          <WeatherDisplay weather={weather} units={units} />
          <WeatherAlerts alerts={alerts} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
