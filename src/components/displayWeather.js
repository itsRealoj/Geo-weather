import React, { Component } from 'react';

class Weather extends Component {
  constructor(props){
    super(props);

    this.state = {
      time: null,
    }
  }

  componentDidMount() {
     //   Preventing CORS errors
     async function fetchData() {
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/ee3193faf8920bcf3d01cfdbdb9d14ad/42.3601,-71.0589,255657600?exclude=currently,flags`;
  
      const response = await fetch(api);
      const data = await response.json();
  
      if(data){
        // console.log(data.daily.data["0"]);
        const weatherData = data.daily.data["0"];
        const {time, summary, icon, pressure, windspeed, humidity} = weatherData;
      }else{
        alert("Error! Can not fetch data"); 
      }
    }
    
    return fetchData();

  }

   render(){
     return(
       <div>
        <div></div>
       </div>
     )
   }
}


   
export default Weather;