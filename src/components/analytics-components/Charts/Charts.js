import React, { Component } from 'react'
import Graph from './SalesSinceGraph';
import TopEmployeesBar from './TopEmployeesBar';

class Charts extends Component{

    render () {

        return(
            <div id="charts-container">
                <TopEmployeesBar data={this.props.data} />
                {/* <Graph /> */}
            </div>
        )
    }
}

export default Charts