import React, { Component } from 'react'
import { PieChart, Pie, Tooltip } from 'recharts'



class SalesByEmail extends Component {
    
    getSalesByEmail = () => {
        
        const emailData = {}
        let soldArray = this.props.data.filter(c => c.sold)
        for (let sold of soldArray) {
            emailData[sold.emailType] = emailData[sold.emailType] ? emailData[sold.emailType] + 1 :  1
        }
        let salesByEmail = Object.entries(emailData)
        .map(email => ({ name: email[0], count: email[1]}))
        console.log(salesByEmail)
        return salesByEmail
    }
    
    render() {
        const data = this.getSalesByEmail()
        
        return (
            <div id="sales-by-email-container">
                <span className="text">Sales By Email</span>
                <PieChart width={300} height={240}>
                    <Pie dataKey="count" isAnimationActive={true} 
                    data={data} cx={150} cy={120} 
                    outerRadius={100} fill="#006494" label />
                    <Tooltip />
                </PieChart>
            </div>
        )
    }
}

export default SalesByEmail