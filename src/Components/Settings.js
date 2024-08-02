import React from 'react';

const Settings = ({ onModeChange, currentMode }) => {
  const handleModeChange = (event) => {
    onModeChange(event.target.checked ? 'dark' : 'light');
  };

  return (
    <div className="Settings">
      <h2>Settings</h2>
      <label>
        Dark Mode
        <input
          type="checkbox"
          checked={currentMode === 'dark'}
          onChange={handleModeChange}
        />
      </label>
      <br></br>
      <label>
      Light Mode
        <input
          type="checkbox"
          checked={currentMode === 'light'}
          onChange={handleModeChange}
        />
      </label>
      
    </div>
  );
};

export default Settings;