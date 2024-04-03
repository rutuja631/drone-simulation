
import React, { useState } from 'react';
import MapContainer from './MapContainer';
import DroneMarker from './DroneMarker';

const App = () => {
  const [dronePosition, setDronePosition] = useState({lat: 37.774929, lng: -122.419416});
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [time, setTime] = useState('');
  const handleSimulate = (lat, lng, duration) => {
    if (dronePosition) {
      const steps = 100; // Number of steps to divide the motion
      const interval = duration / steps; // Interval between each step
      const latStep = (lat - dronePosition.lat) / steps; // Latitude step increment
      const lngStep = (lng - dronePosition.lng) / steps; // Longitude step increment
      let stepCount = 0;
      const intervalId = setInterval(() => {
        // Update drone position
        setDronePosition(prevPosition => ({
          lat: prevPosition.lat + latStep,
          lng: prevPosition.lng + lngStep
        }));
        stepCount++;
        // Check if motion is completed
        if (stepCount === steps) {
          clearInterval(intervalId);
        }
      }, interval);
    }
  }
  return (
    <div>
      <h1>Drone Simulation</h1>
      <div>
      <label>Latitude:</label>
        <input type="number" value={lat} onChange={(e) => setLat(e.target.value)} />
      </div>
      <div>
        <label>Longitude:</label>
        <input type="number" value={lng} onChange={(e) => setLng(e.target.value)} />
      </div>
      <div>
        <label>Time (seconds):</label>
        <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <button onClick={handleSimulate(parseFloat(lat), parseFloat(lng), parseInt(time))}>Simulate</button>
      <MapContainer center={{ lat: 37.774929, lng: -122.419416 }} zoom={5}>
        {dronePosition && <DroneMarker lat={dronePosition.lat} lng={dronePosition.lng} />}
      </MapContainer>
    </div>
  );
};

export default App;
