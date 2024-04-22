const express = require("express");
const app = express()
const rateLimitMiddleware = require("./rateLimitMiddleware.js")
const cors = require("cors")
let userNpssoCode = false;

// i think it works now

// middleware
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(rateLimitMiddleware)
app.use(express.json())

app.get('/', (req,res) =>{
    res.send("welcome to the main page")

})
app.get('/psn', getPlaystationData, (req,res) =>{

})

app.post('/', (req, res, next) =>{
     userNpssoCode = req.body.userNpsso
    res.send("recieved request")
    console.log(userNpssoCode)

    if(!userNpssoCode){
        res.status(400).send("no data recived")
    }
    else{
        getPlaystationData(req, res, next)

    }

  })




const PSNJson = require("../playstation.js")

//maybe async await here and then once everything is done have it redirect me to the /ps 
async function getPlaystationData (req, res, next) {
    //we have to clear all the data from the first run because on refresh it just adds the existing array to the new one
    res.json( await PSNJson(userNpssoCode)) 
    userNpssoCode= false
    
    next()
}









console.log(" 🌐 ")


// means server was closed

app.listen(3000)