import React from 'react';

const WeatherAlerts = ({ alerts }) => (
  <div>
    {alerts.map((alert, index) => (
      <div key={index}>
        <h4>{alert.title}</h4>
        <p>{alert.description}</p>
      </div>
    ))}
  </div>
);

export default WeatherAlerts;
