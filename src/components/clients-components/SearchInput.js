import React, { Component } from 'react'

class SearchInput extends Component {

    handleInput = (e) => this.props.handleInput(e)



    render() {
        return (
            <div>
                <input id="searchInput" type="text" placeholder=" Search"
                    value={this.props.searchInput}
                    onChange={this.handleInput} />

                <select id="selectInput" value={this.props.selectInput}onChange={this.handleInput}>
                    <option value="name">Name</option>
                    <option value="country">Country</option>
                    <option value="emailType">Email Type</option>
                    <option value="owner">Owner</option>
                </select>

            </div>
        )
    }
}

export default SearchInput