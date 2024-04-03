// DroneMarker.js
import React from 'react';

const DroneMarker = ({ lat, lng }) => {
  return (
    <div style={{
      position: 'absolute',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: 'red',
      border: '2px solid white',
      textAlign: 'center',
      color: 'white',
      fontSize: '16px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      🛸
    </div>
  );
};

export default DroneMarker;
