const express = require('express')
const router = express.Router();
const client = require('../connection/connection')

router.get('/', async (req, res) => {
    let data = await client.db("divya-project").collection('products').find({}).toArray();
    res.send(data)  
}),




module.exports = router