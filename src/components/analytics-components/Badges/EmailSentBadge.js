import React, { Component } from 'react'
import '../../../style/badges.css'


class EmailSentBadge extends Component {
    render() {
        return (
            <div className="badge">
                <div><i className="fas fa-envelope fa-5x"></i></div>
                <div>
                    <span className="text-count">{this.props.getEmailSent}</span>
                    <span className="text">Emails Sent</span>
                </div>
            </div>
        )
    }
}

export default EmailSentBadge
