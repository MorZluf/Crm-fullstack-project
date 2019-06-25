import React, { Component } from 'react'
import '../../../style/badges.css'

class NewClientsBadge extends Component {

    render(){
        return(
            <div className="badge">
                <div> <i className="fas fa-chart-line fa-5x"></i></div>
                <div>
                <span className="text-count">{this.props.getNewClients}</span>
                <span className="text">New {this.props.currentMonthInWords} Clients</span>
                </div>
            </div>
        )
    }
}

export default NewClientsBadge
