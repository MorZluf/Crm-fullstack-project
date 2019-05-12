const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
    name: String,
    surName: String, 
    country: String,
    firstContact: Date,
    emailType: String,
    email: String,
    sold: Boolean,
    owner: String
})

const Client = mongoose.model("Client", clientSchema)

module.exports = Client 