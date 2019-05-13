import React, { Component } from 'react'
import Update from './Update'
import AddClient from './AddClient'
import '../../style/actions.css'
import axios from 'axios'


class Actions extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            owner: "",
            client: "",
            emailType: ""
        }
    }

    getDataFromDB = async () => {
        let clients = await axios.get('http://localhost:7100/actions')
        return clients.data
    }

    componentDidMount = async () => {
        let data = await this.getDataFromDB()
        this.setState({ data })
    }

    handleInput = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    updateOwner = async (id) => {
        await axios.put(`http://localhost:7100/actions/${id}`, {owner: this.state.owner})
            console.log(`moved to ${this.state.owner}`)
    }

    sendEmail = async (id) => {
        await axios.put(`http://localhost:7100/actions/${id}`, {emailType: this.state.emailType})
        console.log(`sent email type ${this.state.emailType}`)
    }

    updateSold = async (id) => {
        await axios.put(`http://localhost:7100/actions/${id}`, {sold: true})
        console.log("Sold! to the nice person. good job owner :)")
    }


    render() {
        return (
            <div>
                <Update data={this.state.data} owner={this.state.owner} client={this.state.client} 
                handleInput={this.handleInput} updateOwner={this.updateOwner} sendEmail={this.sendEmail} 
                updateSold={this.updateSold} />
                <hr />
                <AddClient />
            </div>
        )
    }
}

export default Actions