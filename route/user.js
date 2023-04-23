const express = require('express')
const router = express.Router();
const client = require('../connection/connection')

router.get('/', async (req, res) => {
    let data = await client.db("divya-project").collection('User').find({}).toArray();
    res.send(data)
}),

    router.post('/Registartion', async (req, res) => {
        let data = await client.db("divya-project").collection('User').find({
            name:req.body.name
        }).toArray();

            // let data = await client.db("divya-project").collection('user').find({
            //     email:req.body.email}).toArray();
console.log(data)
        if(data.length===0){

        let newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            mobileNumber: req.body.mobilenumber,
            profilePic: req.body.profilePic

        }
        await client.db("divya-project").collection('User').insertOne(newUser);
        res.send("data Inserted")
        }
           else{
            res.send("data already exixted")
           }


    }),

    router.post('/Login', async (req, res) => {
        let data = await client.db("divya-project").collection('User').find
        ({email:req.body.email,password:req.body.password}).toArray();
        if(data.length===1){
         res.json("existed")

        }
        else{
            res.json("not existed")
        }
        
    }),



module.exports = router