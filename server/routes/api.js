const express = require('express')
const router = express.Router()


router.get('/test', async function(req, res){
    res.send("its good")
})


module.exports = router
