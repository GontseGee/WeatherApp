import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = ({ onToggleTheme }) => {
  return (
    <nav className="navigation-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><button onClick={onToggleTheme}>Toggle Theme</button></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
