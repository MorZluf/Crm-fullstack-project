import React, { Component } from 'react'
import Client from './client';
import ColumnHeaders from './ColumnHeaders'
import SearchInput from './SearchInput'
import '../../style/client.css'

class Clients extends Component{
    constructor(){
        super()
        this.state = {
        }
    }

    render(){
        return(
             
            <div>
                <SearchInput text={this.state.text} handleInput={this.props.handleInput}/>
                <ColumnHeaders />
        <div>
            {this.props.data.map(c => <Client key={c._id} client={c}/>)}
        </div>

            </div>
        )
    }
}

export default Clients