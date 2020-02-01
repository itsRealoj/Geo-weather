import React, { Component } from 'react';

class WeatherComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            color: "lightgrey",
            width: "100px",
            height: "100px",
            padding: "20px",
            margin: "20px"
        }
    }

    render(){
        return(
            <div style={{backgroundColor: this.state.color, width: this.state.width, height: this.state.height, padding: this.state.padding, margin: this.state.margin}}>
                <p>Current weather</p>
            </div>
        )
    }   
}

export default WeatherComponent;