import React, { Component } from 'react'

export default class Description extends Component {
    render() {
        // Change Description to capitalized first letter of each word
        let description = this.props.description
        description = description.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        return (
            <div className="weather-description">
                <p>{this.props.main}</p>
                <p class="weather-description-description">({description})</p>
            </div>
        )
    }
}