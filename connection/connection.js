const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017/";
let client = {};
try {
    client = new MongoClient(uri, { useNewUrlParser: true,
         useUnifiedTopology: true, keepAlive: true });
    console.log("db connected")
} catch (err) {
    console.log("error while connecting with DB")
}
module.exports = client;