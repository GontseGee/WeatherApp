import React from 'react';

const WeatherAlerts = ({ alerts }) => {
  return (
    <div className="WeatherAlerts">
      <h2>Weather Alerts</h2>
      {alerts.length > 0 ? (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>{alert.description}</li>
          ))}
        </ul>
      ) : (
        <p>No weather alerts at the moment.</p>
      )}
    </div>
  );
};

export default WeatherAlerts;
