import React, { Component } from 'react'
import NewClientsBadge from './NewClientsBadge';

class Badges extends Component {

    getNewClients = () => {
        let currentMonth = new Date().getMonth() + 1
        let currentYear = new Date().getFullYear()
        let newClients = this.props.data.map(c => c.firstContact)
            .filter(c => c.split("-")[0] == currentYear && c.split("-")[1] == currentMonth)
        return newClients.length
    }

    render() {
        let currentMonthInWords = new Date().toLocaleDateString('en-us', {month: "long"})
        return (
            <div id="badges-container">
              <NewClientsBadge getNewClients={this.getNewClients()} currentMonthInWords={currentMonthInWords}/>
            </div>
        )
    }
}

export default Badges
