import React, { Component } from 'react'
import ClientInput from './ClientInput'

class Update extends Component {

    getOwners = () => {
        let owners = new Set()
        this.props.data.map(o => owners.add(o.owner))
        let ownersArray = Array.from(owners)
        return ownersArray
    }

    handleInput = (e) => {this.props.handleInput(e)}
    
    updateOwner = () => {
        let filteredClient = this.props.data.find(d => d.name == this.props.client)
        console.log(filteredClient._id)
        return this.props.updateOwner(filteredClient._id)
    }

    sendEmail = () => {
        let filteredClient = this.props.data.find(d => d.name == this.props.client)
        return this.props.sendEmail(filteredClient._id)
    }

    updateSold = () => {
        let filteredClient = this.props.data.find(d => d.name == this.props.client)
        return this.props.updateSold(filteredClient._id)
    }


render() {
    return (
        <div id="update-container">
            <h3>Update</h3>
            <ClientInput data={this.props.data} client={this.props.client} handleInput={this.props.handleInput} />
            <div id="actions-container">
                <div id="transfer">
                    <span>Transfer ownership to</span>
                    <input list="owners-list" name="owner" value={this.props.owner} 
                    onChange={this.handleInput}/>
                    <datalist id="owners-list">
                        {this.getOwners().map((c, i) => <option key={i} value={c} />)}
                    </datalist>
                    <span className="btn" onClick={this.updateOwner}>Transfer</span>
                </div>
                <div id="send">
                    <span>Send email : </span>

                    <select name="emailType" value={this.props.emailType} onChange={this.handleInput}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>

                    <span className="btn" onClick={this.sendEmail}>Send</span>
                </div>
                <div id="sail">
                    <span>Declare sale ! </span>
                    <span className="btn" onClick={this.updateSold}>Declare</span>
                </div>

            </div>
        </div>
    )
}
}

export default Update