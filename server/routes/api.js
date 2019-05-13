const express = require('express')
const router = express.Router()
const Client = require('../model/Client')


// this function will run only one time to populate the DB with the clients data
const populateDB = async function () {
    const data = require('../.././src/utils/data')
    console.log(data)
    for (let d of data) {
        let client1 = new Client({
            name: d.name,
            country: d.country,
            firstContact: d.firstContact,
            emailType: d.emailType,
            email: d.email,
            sold: d.sold,
            owner: d.owner
        })
        client1.save()
    }
}


router.get('/loadData', async function (req, res) {
    await populateDB()
    res.send("loading DB with clients data")
})

router.get('/clients', async function (req, res) {
    const clientsData = await Client.find({})
    res.send(clientsData)
})

router.post('/clients', async function (req, res) {
    let data = req.body
    let client1 = new Client(data)
    await client1.save()
    res.end()
})

router.put('/clients/:clientId', async function(req, res){
    let clientId = req.params.clientId
    Client.findOneAndUpdate({_id : clientId}, req.body, function(request, response){

        res.send("client's info was updated")
    })
})

router.delete('/clients/:clientId', function(req, res){
    let clientId = req.params.clientId 
    Client.findOneAndDelete({_id: clientId}).exec()  
    res.send("delete shoobert") 
    })
    


module.exports = router




