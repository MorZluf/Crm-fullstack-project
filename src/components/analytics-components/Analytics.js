import React, { Component } from 'react'
import axios from 'axios'
import Badges from './Badges/Badges';
import Charts from './Charts/Charts';


class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    getDataFromDB = async () => {
        let clients = await axios.get('http://localhost:7100/clients')
        return clients.data
    }

    componentDidMount = async () => {
        let data = await this.getDataFromDB()
        this.setState({ data })
    }


    render() {
        return (
            <div>
                <Badges data={this.state.data}/>
                <Charts data={this.state.data}/>
            </div>
        )
    }
}

export default Analytics