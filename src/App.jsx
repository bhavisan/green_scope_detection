import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';  // Import the CSS file for styles

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        feature1: searchInput,
        feature2: 100,  // Example static value
      });
      setLocationData(response.data);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  const handleMapClick = async (event) => {
    const { lat, lng } = event.latlng;
    setSelectedPosition({ lat, lng });

    try {
      const response = await axios.post('http://127.0.0.1:5000/analyze', { lat, lng });
      setLocationData(response.data);
    } catch (error) {
      console.error('Error fetching analysis:', error);
    }
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: handleMapClick,
    });
    return selectedPosition ? (
      <Marker position={[selectedPosition.lat, selectedPosition.lng]}>
        <Popup>You selected this location</Popup>
      </Marker>
    ) : null;
  };

  return (
    <div id="main-container">
      <div id="search-panel">
        <h2>Land Score Analysis</h2>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Enter data for prediction..."
        />
        <button onClick={handleSearch}>Predict Score</button>

        {locationData && (
          <div id="results">
            <h3>Results</h3>
            {locationData.predicted_final_score && (
              <p><strong>Predicted Final Score:</strong> {locationData.predicted_final_score}</p>
            )}
            {locationData.green_score && (
              <p><strong>Green Score:</strong> {locationData.green_score}</p>
            )}
            {locationData.water_table_level && (
              <p><strong>Water Table Level:</strong> {locationData.water_table_level}</p>
            )}
            {locationData.market_value_trend && (
              <>
                <strong>Market Value Trend:</strong>
                <ul>
                  {locationData.market_value_trend.map((value, index) => (
                    <li key={index}>Year {2020 + index}: ${value}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>

      <div id="map-container">
        <MapContainer center={[51.505, -0.09]} zoom={13} className="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapClickHandler />
        </MapContainer>
      </div>
    </div>
  );
};

export default App;