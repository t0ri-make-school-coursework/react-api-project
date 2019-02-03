import React, { Component } from 'react';
import './App.css';
import Weather from './Weather/Weather'

/**
 * This example illustrates a simple react project
 * that works with an external API.
 *
 * Take note of the comments they point common
 * problems you will need to solve with React.
 *
 * There are two ideas here
 * - Input/Controlled Component Pattern
 * - Conditionally Rendering components
 *
 * The project has an input field where a user will
 * input a zip code. It finds weather data for that
 * zip and displays it in a component.
 *
 * */

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',     // Used to hold value entered in the input field
      weatherData: null,  // Used to hold data loaded from the weather API
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY

    // Get the zip from the input
    const zip = this.state.inputValue

    // Form an API request URL with the apikey and zip
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`
    
    // Get data from the API with fetch
    fetch(url).then(res => {
      // Handle the response stream as JSON
      return res.json()
    }).then((json) => {
      // If the request was successful assign the data to component state
      if (json.cod === 200) {
        console.log(json)
        this.setState({ weatherData: json })
      } else {
        console.log('na')
      }
    }).catch((err) => {
      this.setState({ weatherData: null }) // Clear the weather data we don't have any to display
      console.log(err.message)
    })
  }

 renderWeather() {
      if (!this.state.weatherData) {
        return null
      }

      return <Weather weatherData={this.state.weatherData} />
  }

  addClassName(element, name) {
    element.classList.add(name);
  }

  render() {
    return (
      <div className="App">

        {/** This input uses the controlled component pattern */}
        <form onSubmit={e => this.handleSubmit(e)}>

          {/**
          This pattern is used for input and other form elements
          Set the value of the input to a value held in component state
          Set the value held in component state when a change occurs at the input
          */}
          <input
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
            type="text"
            pattern="(\d{5}([\-]\d{4})?)"
            placeholder="enter zip"
            className="form-elements"
          />

          <button 
            type="submit"
            className="form-elements">submit</button>

        </form>

        {/** Conditionally render this component */}
        {this.renderWeather()}

      </div>
    );
  }
}

export default App;
