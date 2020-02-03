import React, { Component } from 'react';

class CurrentWeather extends Component{
    constructor(props){
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            userAdress: null,
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
    }

    getCoordinates(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    handleLocationError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert('user denied request for geolocation')
                break;
            case error.POSITION_UNAVAILABLE:
                alert('Location info not available.')
                break;
            case error.TIMEOUT:
                alert('The request to get geolocation timedout')
                break;
            case error.UNKOWN_ERROR:
                alert('unknown error occured.')
                break;
            default:
            alert('An unkown error occurred')
                
        }
    }

    render() {
        return(
            <div>
                <button onClick={this.getLocation}>Get Location</button>
                <div>Latitude:{this.state.latitude}</div>
            </div>
        )
    }
}

export default CurrentWeather;