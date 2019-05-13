import React, { Component } from 'react'
import Client from './Client'
import ColumnHeaders from './ColumnHeaders'
import SearchInput from './SearchInput'
import '../../style/client.css'
import axios from 'axios'

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            searchInput: "",
            selectInput: "name"
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    getDataFromDB = async () => {
        let clients = await axios.get('http://localhost:7100/clients')
        return clients.data
    }

    componentDidMount = async () => {
      let data = await this.getDataFromDB()
        this.setState({data})
    }

    render() {
        return (

            <div>
                <SearchInput text={this.props.searchInput} handleInput={this.handleInput} />
                <ColumnHeaders />
                <div>
                    {this.state.data.filter(c => c[this.state.selectInput] ?
                        c[this.state.selectInput].toLowerCase().includes(this.state.searchInput.toLowerCase()) :
                        c[this.state.searchInput])
                        .map(c => <Client key={c._id} client={c} />)}
                </div>

            </div>
        )
    }
}

export default Clients