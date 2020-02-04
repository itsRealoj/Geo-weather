import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      temperatureHigh:"",
      temperatureLow:"",

    };
  };

  componentDidMount() {

     //   Preventing CORS errors
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/ee3193faf8920bcf3d01cfdbdb9d14ad/42.3601,-71.0589,255657600?exclude=currently,flags`;

      fetch(api).then(res => res.json())
      .then(data => {
        const myData = data.daily.data["0"];
        console.log(myData);
        const {time, summary, icon, pressure, windSpeed, humidity, temperatureHigh, temperatureLow} = myData;

        this.setState({time, summary, icon, pressure, windSpeed, humidity, temperatureHigh, temperatureLow});
        console.log(this.state.icon);
        
      })

  }


   render(){
     return(
      <div className="container">
        <img src="https://www.accuweather.com/images/weathericons/6.svg" alt="weather"></img>
        <canvas id={this.state.icon} width="128" height="128"></canvas>
        <div className="rest">
          <p className="lead display-4">Humidity: {this.state.humidity}</p>
          <p className="lead display-4">{this.state.summary}</p>
        </div>
        
        <div className="card-deck">
          <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <h5 className="card-title h3">TEMPERATURE</h5>
              <p className="card-text">This is the temperature at the current location</p>
              <p className="card-text"><strong>HIGH: {this.state.temperatureHigh}F LOW: {this.state.temperatureLow} F </strong></p>
            </div>
          </div>
          <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <h5 className="card-title h3">WINDSPEED</h5>
              <p className="card-text">This is the windspeed at the current location in question</p>
              <p className="card-text"><strong>Windspeed: {this.state.windSpeed}</strong></p>
            </div>
          </div>
          <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <h5 className="card-title h3">PRESSURE</h5>
              <p className="card-text">This is the pressure of the current location in atm</p>
              <p className="card-text"><strong>Pressure: {this.state.pressure} atm</strong></p>
            </div>
          </div>
        </div>
      </div>
     )
   }
}


   
export default Weather;