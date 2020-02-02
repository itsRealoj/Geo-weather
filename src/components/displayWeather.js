import React, { Component } from 'react';

class WeatherInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            hasErrors: false,
            weatherData: {},
            }
        }

    componentDidMount() {
        fetch("https://api.darksky.net/forecast/d6e15489ae7bca051e4013c6c707907a/42.3601,-7")
        .then(res => res.json())
        .then(res => this.setState({weatherData: res}))
        .catch(() => this.setState({hasErrors: true}))
    }

    render(){
        return (
         <div>
            <p>Weather Data</p>
            <div>{JSON.stringify(this.state.weatherData)}</div>
         </div>
        )
    }
}

export default WeatherInfo;