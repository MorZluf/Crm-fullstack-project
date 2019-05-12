const express = require('express')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api)

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/crmDB', {useNewUrlParser: true})

const port = 7100
app.listen(port, function () {
    console.log(`Server running on port ${port}`)
})