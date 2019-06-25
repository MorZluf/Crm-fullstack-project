import React, { Component } from 'react'
import NewClientsBadge from './NewClientsBadge';
import EmailSentBadge from './EmailSentBadge';
import OutstandingClients from './OutstandingClients';

class Badges extends Component {

    getNewClients = () => {
        let currentMonth = new Date().getMonth() + 1
        let currentYear = new Date().getFullYear()
        let newClients = this.props.data.map(c => c.firstContact)
            .filter(c => c.split("-")[0] == currentYear && c.split("-")[1] == currentMonth)
        return newClients.length
    }

    getEmailSent = () =>{
        let emailSent = this.props.data.filter(e => e.emailType !== null)
        return emailSent.length
    }

    getOutstandingClients = () =>{
        let outstandingClients = this.props.data.filter(c=> c.sold === false)
        return outstandingClients.length
    }


    render() {
        let currentMonthInWords = new Date().toLocaleDateString('en-us', { month: "long" })
        return (
            <div id="badges-container">
                <NewClientsBadge getNewClients={this.getNewClients()} currentMonthInWords={currentMonthInWords} />
                <EmailSentBadge getEmailSent={this.getEmailSent()}/>
                <OutstandingClients OutstandingClients={this.getOutstandingClients()} />
            </div>
            )
        }
    }
    
    export default Badges
