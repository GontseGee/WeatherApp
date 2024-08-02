import React, { useEffect, useState } from 'react';
import { getUserLocation } from './Services/LocationService';
import { getCurrentWeather } from './Services/WeatherService';
import WeatherDisplay from './Components/WeatherDisplay';
import LocationSearch from './Components/LocationSearch';
import WeatherAlerts from './Components/WeatherAlerts';
import Settings from './Components/Settings';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [location, setLocation] = useState('');

  useEffect(() => {
    getUserLocation()
      .then(position => {
        const { latitude, longitude } = position.coords;
        return getCurrentWeather(`${latitude},${longitude}`);
      })
      .then(response => {
        setWeather(response.data);
        setAlerts(response.data.alerts || []);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  const handleSearch = (loc) => {
    getCurrentWeather(loc)
      .then(response => {
        setWeather(response.data);
        setAlerts(response.data.alerts || []);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <LocationSearch onSearch={handleSearch} />
        {weather ? (
          <>
            <WeatherDisplay weather={weather} />
            <WeatherAlerts alerts={alerts} />
          </>
        ) : (
          <p>Loading...</p>
        )}
        <Settings />
      </main>
    </div>
  );
};

export default App;