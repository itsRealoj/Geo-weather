import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../.././public/skycons';

class Weather extends Component {
  constructor(props){
    super(props);

    this.state = {
      time: "",
      summary: "", 
      icon: "", 
      pressure:"", 
      windSpeed:"", 
      humidity:"",
      temperature:"",

    };
  };

  componentDidMount() {

     //   Preventing CORS errors
    //  async function fetchData() {
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/ee3193faf8920bcf3d01cfdbdb9d14ad/42.3601,-71.0589,255657600?exclude=currently,flags`;

      fetch(api).then(res => res.json())
      .then(data => {
        const myData = data.daily.data["0"];
        console.log(myData);
        const {time, summary, icon, pressure, windSpeed, humidity, temperature} = myData;

        this.setState({time, summary, icon, pressure, windSpeed, humidity, temperature});
        console.log(this.state.icon);

      //   function setIcons(icon, iconID) {
      //     const skycons = new Skycons({color: "white"});
      //     const currentIcon = icon.replace(/-/g, "_").toUpperCase();
      //     skycons.play();
      //     return skycons.set(iconID, Skycons[currentIcon]);
      // }
        
      })

  }


   render(){
     return(
      //  <div className="container">
      //    <div className="col">Icon: {setIcons(icon)}</div>
      //    <div className="col">Humidity: {this.state.humidity}</div>
      //    <div className="col">Summary: {this.state.summary}</div>
      //    <div className="row">
      //     <div className="col card">Time: {this.state.time}</div>
      //     <div className="col card">~</div>
      //     <div className="col card ">Pressure: {this.state.pressure}</div>
      //    </div>
      //  </div>

      <div className="container">
        <img src="https://www.accuweather.com/images/weathericons/6.svg" alt="weather"></img>
        <div className="rest">
          <p className="lead display-4">Humidity: {this.state.humidity}</p>
          <p className="lead display-4">Summary: {this.state.summary}</p>
        </div>
        
        <div className="card-deck">
          <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <h5 className="card-title h3">Time</h5>
              <p className="card-text">This is the time at the current location in utc</p>
              <p className="card-text"><strong>Time: {this.state.time}</strong></p>
            </div>
          </div>
          <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <h5 className="card-title h3">Windspeed</h5>
              <p className="card-text">This is the windspeed at the current location in question</p>
              <p className="card-text"><strong>Windspeed: {this.state.windSpeed}</strong></p>
            </div>
          </div>
          <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <h5 className="card-title h3">Pressure</h5>
              <p className="card-text">This is the pressure of the current location in atm</p>
              <p className="card-text"><strong>Pressure: {this.state.pressure}</strong></p>
            </div>
          </div>
        </div>
      </div>


     )
   }
}


   
export default Weather;