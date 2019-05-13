import React, { Component } from 'react'
import '../../style/client.css'

class Client extends Component {

    render() {
        let c = this.props.client
        let name = c.name.split(" ")[0]
        let surName = c.name.split(" ")[1]
        return (
            
            <div id="clients-container" onClick={this.showPopUpClient}>
                <div>{name}</div>
                <div>{surName}</div>
                <div>{c.country}</div>
                <div>{c.firstContact.split("T")[0]}</div>
                <div>{c.emailType}</div>
                <div>{c.sold ? <i className="fas fa-check"></i> : "-"}</div>
                <div>{c.owner}</div>
            </div>
        )
    }
}

export default Client