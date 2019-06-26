import React, { Component } from 'react'
import '../../../style/badges.css'


class HottestCountry extends Component {
    render() {
        return (
            <div className="badge">
                <div><i className="fas fa-globe-americas fa-5x"></i></div>
                <div>
                    <span className="text-count">{this.props.hottestCountry}</span>
                    <span className="text">Hottest Country</span>
                </div>
            </div>
        )
    }
}

export default HottestCountry
