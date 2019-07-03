import React, { Component } from 'react'
// import Graph from './SalesSinceGraph';
import TopEmployeesBar from './TopEmployeesBar';
import '../../../style/charts.css'
import SalesBy from './SalesBy';
import SalesByEmail from './SalesByEmail';

class Charts extends Component{

    render () {

        return(
            <div id="charts-container">
                <TopEmployeesBar data={this.props.data} />
                <SalesByEmail data={this.props.data} />
                <SalesBy data={this.props.data} />
                {/* <Graph /> */}
            </div>
        )
    }
}

export default Charts