import React, { Component } from 'react'

class AddClient extends Component{

    render(){
        return (
            <div>
                <h3>Add Client</h3>
                <div><span>First Name : </span> <input type="text"/></div>
                <div><span>Surname : </span> <input type="text"/></div>
                <div><span>Country : </span> <input type="text"/></div>
                <div><span>Owner : </span> <input type="text"/></div>
                <button id="add-new-client-btn">Add New Client</button>
            </div>
        )
    }
}

export default AddClient

