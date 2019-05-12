import React, { Component } from 'react'
import '../../style/client.css'

class ColumnHeaders extends Component {
    render() {
        return(
            <div id="column-headers">
                <div>Name</div>
                <div>Surname</div>
                <div>Country</div>
                <div>First Contact</div>
                <div>Email</div>
                <div>Sold</div>
                <div>Owner</div>
            </div>
        )
    }
}

export default ColumnHeaders