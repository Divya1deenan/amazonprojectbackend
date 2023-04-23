const express = require('express')
const app = express();
const port = 4000
const cors=require('cors')
const user=require("./route/user")
const products=require("./route/products")
app.use(cors())
app.use(express.json());
app.use("/user",user)
app.use("/products",products)
app.use((req,res,next)=>{

    console.log(req.url,req.method)
    next();
})

app.listen(port,()=>{

console.log("API ACTIVATED")

})