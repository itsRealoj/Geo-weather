import React, { useState, useEffect } from "react";
import CurrentWeather from "./currentPosition";

const Weather = () => {
  const [hasError, setErrors] = useState(false);
  const [weather, setWeather] = useState({});

//   Preventing CORS errors
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const api = `${proxy}https://api.darksky.net/forecast/d6e15489ae7bca051e4013c6c707907a/42.3601,-7`;

  async function fetchData() {
    const res = await fetch(api);
    res
      .json()
      .then(res => setWeather(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <CurrentWeather />
      <span>{JSON.stringify(weather)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Weather;