// import {useBattery} from 'react-use';
import useBattery from 'react-use/lib/useBattery';
import useNetwork from 'react-use/lib/useNetwork';
import useMediaDevices from 'react-use/lib/useMediaDevices';


import React from 'react';
import './App.css';

function App() {
  const battery = useBattery();
  const network = useNetwork();
  const state = useMediaDevices();
  const hasCam = state.devices && state.devices.some(device => device.kind === 'videoinput')
  return (
    <div>
      <header style={{background: '#ddd', padding: 50, textAlign: 'center', fontSize: 40}}>
      <strong>Charging:</strong> {battery.charging ? '✅' : '❌'}
      </header>
      <header style={{background: '#ddd', padding: 50, textAlign: 'center', fontSize: 40}}>
      <strong>WIFI:</strong> {network.online ? '✅' : '❌'}
      </header>
      <header style={{background: '#ddd', padding: 50, textAlign: 'center', fontSize: 40}}>
      <strong>CAM:</strong> {hasCam ? '✅' : '❌'}
      </header>
    </div>
  );
}

export default App;
