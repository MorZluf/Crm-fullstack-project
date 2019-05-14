import React, { Component } from 'react'
const moment = require('moment')


class AddClient extends Component {

    handleInput = e => { this.props.handleInput(e) }

    addClient = () => {
        let newClient = {
            name: this.props.firstName + " " + this.props.surName,
            country: this.props.country,
            owner: this.props.ownerAtAddClient,
            emailType: null,
            sold: false,
            firstContact: moment().format("YYYY-MM-DD")
        }
        return this.props.addClient(newClient)
    }
    

    render() {
        return (
            <div>
                <h3>Add Client</h3>
                <div>
                    <span>First Name : </span> <input type="text" name="firstName"
                        value={this.props.firstName} onChange={this.handleInput} />
                </div>

                <div>
                    <span>Surname : </span> <input type="text" name="surName"
                        value={this.props.surName} onChange={this.handleInput} />
                </div>

                <div>
                    <span>Country : </span> <input type="text" name="country"
                        value={this.props.country} onChange={this.handleInput} />
                </div>

                <div>
                    <span>Owner : </span> <input type="text" name="ownerAtAddClient"
                        value={this.props.ownerAtAddClient} onChange={this.handleInput} />
                </div>

                <button id="add-new-client-btn" onClick={this.addClient}>Add New Client</button>

            </div>
        )
    }
}

export default AddClient

