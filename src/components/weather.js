import React, { Component } from 'react';
import Weather from './displayWeather';

class WeatherComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            color: "#ffffff",
            width: "100vw",
            height: "100vh",
            padding: "20px",
            margin: "20px"
        }
    }

    render(){
        return(
            <div className="row" style={{backgroundColor:"grey"}}>
                <div className="col" style={{backgroundColor: this.state.color, width: this.state.width, height: this.state.height, padding: this.state.padding, margin: this.state.margin}}>
                    <p>Current weather</p>
                    <Weather />
                </div>
            </div>
        )
    }   
}

export default WeatherComponent;