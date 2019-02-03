import React, { Component } from 'react'

export default class Atmosphere extends Component {
    render() {
        return (
            <div className="weather-atmosphere">
                <p>Pressure: {this.props.pressure}</p>
                <p>Humidity: {this.props.humidity}</p>
            </div>
        )
    }
}