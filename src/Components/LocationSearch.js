import React, { useState } from 'react';

const LocationSearch = ({ onSearch, onSave }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) {
      onSearch(location);
      onSave(location); 
    }
  };

  return (
    <div className="LocationSearch">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default LocationSearch;
