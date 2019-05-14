import React, { Component } from 'react'
import '../../style/popup.css'

class PopUp extends Component {

    hidePopUpClient = () => this.props.hidePopUpClient()

    render() {

        return (
            <div id="popup">
                    <button id="popup-btn" onClick={this.hidePopUpClient}>X</button>
                <div id="popup-info-container">
                    <div class="popup-text">Name : </div>
                    <input class="popup-input" type="text" />

                    <div class="popup-text">Surname : </div>
                    <input class="popup-input" type="text" />

                    <div class="popup-text">Country : </div>
                    <input class="popup-input" type="text" />
                </div>
            <button id="update-client-btn">Update</button>
            </div>
        )
    }
}

export default PopUp