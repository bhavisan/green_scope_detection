import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";

function MapComponent({ setCoordinates }) {
  const MapClick = () => {
    useMapEvents({
      click(e) {
        setCoordinates({ lat: e.latlng.lat, lng: e.latlng.lng });
      },
    });
    return null;
  };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapClick />
    </MapContainer>
  );
}

export default MapComponent;