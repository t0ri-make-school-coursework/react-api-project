import React, { Component } from 'react'

export default class Temperature extends Component {
    render() {
        let temperature = (this.props.temperature * 9/5 - 459.67).toFixed(0)
        return <p className="weather-temperature">{temperature}°F</p>
    }
}