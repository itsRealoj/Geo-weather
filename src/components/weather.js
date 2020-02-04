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
            <div>
                <div>
                    <p className="display-3 my-5 text-center">Current weather</p>
                    <Weather />
                </div>
            </div>
        )
    }   
}

export default WeatherComponent;