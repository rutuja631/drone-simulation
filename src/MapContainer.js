// MapContainer.js
import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapContainer = ({ children, center, zoom }) => {
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // Replace 'YOUR_API_KEY' with your Google Maps API key
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
