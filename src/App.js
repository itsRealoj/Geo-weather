import React from 'react';
import './App.css';
import WeatherComponent from './components/weather';
import 'bootstrap/dist/css/bootstrap.css';

// const SECRET_KEY = "d6e15489ae7bca051e4013c6c707907a";

function App() {
  return (
    <div className="App" style={{backgroundColor:"#ffffff"}}>
      <div>
        <WeatherComponent />
      </div>
    </div>
  );
}

export default App;
