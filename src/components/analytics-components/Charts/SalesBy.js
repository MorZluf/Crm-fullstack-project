import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'


class SalesBy extends Component {
    
    getSalesByCountry = () => {
        
        const countryData = {}
        let soldArray = this.props.data.filter(c => c.sold)
        for (let sold of soldArray) {
            countryData[sold.country] = countryData[sold.country] ? countryData[sold.country] + 1 :  1
           }
           let salesByCountry = Object.entries(countryData)
           .map(country => ({ name: country[0], count: country[1]}))
           return salesByCountry
        }

    render() {
        const data = this.getSalesByCountry()

        return (
            <div id="sales-by-container">
                <span className="text">Sales By Country</span>
                <BarChart
                    width={700}
                    height={240}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#006494" background={{ fill: '#eee' }} />
                </BarChart>
            </div>
        )
    }
}

export default SalesBy