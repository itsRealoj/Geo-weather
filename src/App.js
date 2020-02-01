import React from 'react';
import './App.css';
import WeatherComponent from './components/weather'

function App() {
  return (
    <div className="App">
      <div>
        <p>My Location Weather</p>
        <WeatherComponent />
      </div>
    </div>
  );
}

export default App;
