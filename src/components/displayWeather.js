import React, { Component } from 'react';

class WeatherInfo extends Component {
    constructor(props){
        super(props);
        this.state = [{
            latitude: 42.3601,
            longitude: -71.0589,
            currently: {
                time: 1509993277,
                summary: "Drizzle",
                icon: "rain"
            }
        }]
    }
    render(){
        return (
         <div>
            <p>{this.state.latitude}</p>
         </div>
        )
    }
}

export default WeatherInfo;