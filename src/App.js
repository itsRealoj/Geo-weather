import React from 'react';
import './App.css';
import Weather from './components/weather'

function App() {
  return (
    <div className="App">
      <div>
        <p>My Location Weather</p>
        <Weather />
      </div>
    </div>
  );
}

export default App;
