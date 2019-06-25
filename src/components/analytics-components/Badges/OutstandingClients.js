



import React, { Component } from 'react'
import '../../../style/badges.css'


class OutstandingClients extends Component {
    render() {
        return (
            <div className="badge">
                <div><i className="fas fa-user-circle fa-5x"></i></div>
                <div>
                    <span className="text-count">{this.props.OutstandingClients}</span>
                    <span className="text">Outstanding Clients</span>
                </div>
            </div>
        )
    }
}

export default OutstandingClients