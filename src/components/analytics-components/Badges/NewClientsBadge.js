import React, { Component } from 'react'
import '../../../style/badges.css'

class NewClientsBadge extends Component {

    render(){
        return(
            <div id="new-Clients-badge">
                <div> <i className="fas fa-chart-line fa-5x"></i></div>
                <div>
                <span id="new-clients-count">{this.props.getNewClients}</span>
                <span id="new-clients-text">New {this.props.currentMonthInWords} Clients</span>
                </div>
            </div>
        )
    }
}

export default NewClientsBadge
