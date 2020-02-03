import React, { useState, useEffect } from "react";
import CurrentWeather from "./currentPosition";

const Weather = () => {
  const [hasError, setErrors] = useState(false);
  const [weather, setWeather] = useState({});

  // get weather data as a string
  // async function myData() {
    const data =  JSON.stringify(weather);
    console.log(data);
  // }
  

  async function fetchData() {
    //   Preventing CORS errors
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/ee3193faf8920bcf3d01cfdbdb9d14ad/42.3601,-71.0589,255657600?exclude=currently,flags`;

    const response = await fetch(api);
    const data = await response.json();

    if(data){
      setWeather(data);
      // console.log(data)
      // const data = await JSON.stringify(weather);
      return (
        <div>
          <CurrentWeather />
          {console.log(data)}
          <hr />
          <span>Has error: {JSON.stringify(hasError)}</span>
          
        </div>
      );
    }else{
      setErrors(console.log("Error! Can not fetch data")) 
    }
  }

  useEffect(() => {
    fetchData();
    // myData();
  });

  // return (
  //   <div>
  //     <CurrentWeather />
  //     <div>{myData}</div>
  //     <hr />
  //     <span>Has error: {JSON.stringify(hasError)}</span>
  //   </div>
  // );
};
export default Weather;