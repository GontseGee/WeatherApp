import React, { useState } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [units, setUnits] = useState('Celsius');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleUnitsChange = (e) => {
    setUnits(e.target.value);
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          Theme:
          <select value={theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Units:
          <select value={units} onChange={handleUnitsChange}>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Settings;
