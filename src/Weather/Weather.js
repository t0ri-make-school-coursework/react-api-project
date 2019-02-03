import React, { Component } from 'react'
import Temperature from './Temperature/Temperature'
import Description from './Description/Description'
import Atmosphere from './Atmosphere/Atmosphere'
import './weather.css'

export default class Weather extends Component {
    render() {
        const { main, description, icon } = this.props.weatherData.weather[0]
        const { temp, pressure, humidity, temp_min, temp_max } = this.props.weatherData.main

        return (
          <div id="weather-div">
            <Temperature id="temperature" temperature={temp} />
            <Description id="description" description={description} main={main} />
            <Atmosphere id="atmosphere" pressure={pressure} humidity={humidity} />
          </div>
        )
    }
}
