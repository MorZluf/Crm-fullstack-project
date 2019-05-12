import React, { Component } from 'react'

class SearchInput extends Component {

    handleInput = (e) => this.props.handleInput(e)



    render() {
        return (
            <div>
                <input type="text" placeholder=" Search"
                    value={this.props.text}
                    onChange={this.handleInput} />

            </div>
        )
    }
}

export default SearchInput