import React, { Component } from 'react';

class Weather extends Component {
  constructor(props){
    super(props);

    this.state = {
      time: "",
      summary: "", 
      icon: "", 
      pressure:"", 
      windspeed:"", 
      humidity:""

    }
  }

  componentDidMount() {

     //   Preventing CORS errors
    //  async function fetchData() {
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/ee3193faf8920bcf3d01cfdbdb9d14ad/42.3601,-71.0589,255657600?exclude=currently,flags`;

    fetch(api).then(res => res.json())
      .then(data => {
        const myData = data.daily.data["0"];
        const {time, summary, icon, pressure, windspeed, humidity} = myData;

        this.setState({time, summary, icon, pressure, windspeed, humidity});
        console.log(this.state.pressure);
        
      })

  }


   render(){
     return(
       <div>
        <div>Time: {this.state.time}</div>
        <div>Summary: {this.state.summary}</div>
        <div>Icon: {this.state.icon}</div>
        <div>Pressure: {this.state.pressure}</div>
        <div>Windspeed: {this.state.windspeed}</div>
        <div>Humidity: {this.state.humidity}</div>
       </div>
     )
   }
}


   
export default Weather;