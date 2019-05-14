import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/navbar.css'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (

            <div>
                <div id="nav-container">
                    <div className="main-items">
                        <div className="nav-item"><span><Link to={'/clients'}>Clients</Link></span></div>
                        <div className="nav-item"><span><Link to={'/actions'}>Actions</Link></span></div>
                        <div className="nav-item"><span><Link to={'/analytics'}>Analytics</Link></span></div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Navbar