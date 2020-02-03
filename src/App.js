import React from 'react';
import './App.css';
import WeatherComponent from './components/weather';

// const SECRET_KEY = "d6e15489ae7bca051e4013c6c707907a";

function App() {
  return (
    <div className="App" style={{backgroundColor:"grey"}}>
      <div>
        <p>My Location Weather</p>
        <WeatherComponent />
      </div>
    </div>
  );
}

export default App;
