const express = require('express')
const router = express.Router()
const client = require('../model/Client')


// this function will run only one time to populate the DB with the clients data
const populateDB = async function () {
    const data = require('../.././src/utils/data')
    console.log(data)
    for (let d of data) {
        let client1 = new client({
            name: d.name.split(" ")[0],
            surName: d.name.split(" ")[1],
            country: d.country,
            firstContact: d.firstContact,
            emailType: d.emailType,
            email: d.email,
            sold: d.sold,
            owner: d.owner
        })
        // client1.save()
        // console.log(client1)
    }
}


router.get('/loadData', async function (req, res) {
    await populateDB()
    res.send("loading DB with clients data")
})


module.exports = router




