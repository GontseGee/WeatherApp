import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Settings from './Components/Settings';
import './App.css';

const App = () => {
  const [units, setUnits] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [forecastType, setForecastType] = useState('daily'); // 'daily' or 'hourly'
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/settings">Settings</Link>
          </nav>
          <h1>Weather App</h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home 
                  units={units}
                  forecastType={forecastType}
                  onUnitChange={setUnits}
                  onForecastTypeChange={setForecastType}
                />
              }
            />
            <Route
              path="/settings"
              element={
                <Settings 
                  theme={theme}
                  onThemeChange={handleThemeChange}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
