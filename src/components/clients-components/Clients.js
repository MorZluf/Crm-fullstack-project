import React, { Component } from 'react'
import Client from './Client'
import ColumnHeaders from './ColumnHeaders'
import SearchInput from './SearchInput'
import '../../style/client.css'
import axios from 'axios'
import PopUp from './PopUp';

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            searchInput: "",
            selectInput: "name",
            isShow: false,
            popUpName: "",
            popUpSurname: "",
            popUpCountry: ""
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    getDataFromDB = async () => {
        let clients = await axios.get('http://localhost:7100/')
        return clients.data
    }

    componentDidMount = async () => {
      let data = await this.getDataFromDB()
        this.setState({data})
    }

    showPopUpClient = () => {
        this.setState({isShow: true})
    }
    
    hidePopUpClient = () => {
        this.setState({isShow: false})
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
                        .map(c => <Client key={c._id} client={c} showPopUpClient={this.showPopUpClient} />)}
                </div>
                {/* {this.state.isShow  ? 
                <PopUp hidePopUpClient={this.hidePopUpClient} popUpName={this.state.popUpName}
                popUpSurname={this.state.popUpSurname} popUpCountry={this.state.popUpCountry} /> :
                null} */}
            </div>
        )
    }
}

export default Clients