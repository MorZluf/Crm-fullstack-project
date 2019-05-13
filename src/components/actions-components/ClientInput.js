import React, { Component } from 'react'

class ClientInput extends Component{

handleInput = e => {this.props.handleInput(e)}

    render(){
        return (
            <div>
                 <span>Clients: </span> <input list="clients-list" name="client" 
                 value={this.props.client} onChange={this.handleInput}/>
                    <datalist id="clients-list">
                    {this.props.data.map((c, i) => <option key={i} value={c.name}/>)}
                    </datalist>

            </div>
        )
    }
}

export default ClientInput