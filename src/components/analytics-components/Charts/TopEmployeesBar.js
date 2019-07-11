import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


class TopEmployeesBar extends Component {

    getTopEmployees = () => {
        const employeesData = {}
        let soldArray = this.props.data.filter(c => c.sold)
        for (let sold of soldArray) {
            employeesData[sold.owner] = employeesData[sold.owner] ? employeesData[sold.owner] + 1 : 1;
        }
        let topEmployees = Object.entries(employeesData).sort(function (a, b) {
            return a[1] - b[1];
        })
            .reverse().map(employee => ({ name: employee[0], count: employee[1] })).splice(0, 3)
        return topEmployees
    }

    render() {
        const data = this.getTopEmployees()
        return (
            <div id="top-employee-container">
                <span>Top Employees</span>
                <BarChart width={400} height={240} data={data} layout="vertical" margin={{
          top: 5, right: 10, left: 10, bottom: 5,
        }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis type="category" dataKey="name"/>
                    <XAxis  type="number"/>
                    <Tooltip />
                    <Bar dataKey="count" fill="#006494" />
                </BarChart>
            </div>

        )
    }
}

export default TopEmployeesBar